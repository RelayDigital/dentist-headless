"use client";
import { SizeProvider } from "@/contexts/sizeContext";
import Body, { PageDetails } from "@/components/layouts/services/body";

const pageDetails: PageDetails = {
  pageTitle: "General & family dentistry",
  heroImageSrc: undefined,
  detailFactoid: undefined,
  detailInfo: undefined,
  aboutInfo: undefined,
  aboutPeople: undefined,
  whyHeading: undefined,
  whyInfo: undefined,
};

export default function Page() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <Body pageDetails={pageDetails} />
      </SizeProvider>
    </main>
  );
}
