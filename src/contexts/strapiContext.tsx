import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchAPI } from "@/lib/strapi/strapi-client";

interface StrapiContextType<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const StrapiContext = createContext<StrapiContextType<any> | undefined>(
  undefined
);

interface PopulateRule {
  populate: '*' | { [key: string]: PopulateRule };
}

interface StrapiProviderProps<T> {
  children: React.ReactNode;
  collection: string;
  populateStructure?: { [key: string]: PopulateRule }; // Detailed control over nested population
}

// Function to determine which fields to populate dynamically
function buildPopulateQuery(populateStructure: { [key: string]: PopulateRule } = {}): string {
  const buildNestedQuery = (obj: PopulateRule, prefix: string = ''): string[] => {
      if (obj.populate === '*') {
          return [`${prefix}[populate]=*`];  // Corrected the format here
      } else {
          return Object.entries(obj.populate).flatMap(([key, rule]) => {
              return buildNestedQuery(rule, `${prefix}[${key}]`);  // Recursive call with updated prefix
          });
      }
  };

  const queries = Object.entries(populateStructure).flatMap(([key, rule]) => {
      return buildNestedQuery(rule, `populate[${key}]`);  // Start with the outermost key
  });

  return queries.length > 0 ? `?${queries.join('&')}` : '';
}

export function StrapiProvider<T>({
  children,
  collection,
  populateStructure = {},
}: StrapiProviderProps<T>): JSX.Element {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = buildPopulateQuery(populateStructure);
        const result = await fetchAPI(`/${collection}${query}`);
        setData(result.data);
      } catch (error) {
        setError(error as Error);
        console.error("Fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collection, populateStructure]);

  return (
    <StrapiContext.Provider value={{ data, error, isLoading }}>
      {children}
    </StrapiContext.Provider>
  );
}

export function useStrapi<T>() {
  const context = useContext(StrapiContext) as StrapiContextType<T>;
  if (!context) {
    throw new Error("useStrapi must be used within a StrapiProvider");
  }
  return context;
}
