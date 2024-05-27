import axios, { AxiosInstance } from "axios";

// Initialize axios with Strapi base URL
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const strapiClient: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`, // Note: Adjust the base URL to include '/api'
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally, handle auth tokens for requests if needed
strapiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("strapi_token"); // Or however you manage tokens
    if (!token) {
      config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
    }
    // console.log(config.headers.Authorization);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to fetch data from a specific endpoint with query parameters
export async function fetchAPI(
  endpoint: string,
  params: any = {}
): Promise<any> {
  try {
    const response = await strapiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch API:", error);
    throw error;
  }
}

// Additional functions to handle other types of requests (POST, PUT, DELETE, etc.)
export async function postAPI(endpoint: string, data: any): Promise<any> {
  try {
    const response = await strapiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Failed to post data:", error);
    throw error;
  }
}

// Extend with more functions as needed
