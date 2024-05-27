"use client";
import { SizeProvider } from "@/contexts/sizeContext";
import Body from "@/components/layouts/about/body";

export default function Page() {
  return <main className="flex flex-col min-w-screen">
  <SizeProvider>
    <Body />
  </SizeProvider>
</main>;
}
