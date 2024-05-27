"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Hero from "@/components/layouts/about/hero";
import Video from "@/components/layouts/about/video";
import Reviews from "@/components/reviews";
import FAQ from "@/components/layouts/about/faq";
import CTA from "@/components/layouts/about/cta";

interface ComponentProps {
  pageTitle?: string;
  pageDetails?: object;
}

const Body: React.FC<ComponentProps> = ({ pageTitle, pageDetails }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div className="bg-white relative">
      {/* SVG Decorations */}
      <div className="relative top-0 overflow-x-clip">
        {/* Line */}
        {/* <svg
          width="543"
          height="608"
          viewBox="0 0 543 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:inline absolute ml-[150px] mt-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#E5F6F9] z-[2] pointer-events-none"
        >
          <path
            opacity="0.48"
            d="M393.338 9.06055C381.544 24.9374 382.996 71.1164 483.156 128.817C608.356 200.944 445.726 338.666 260.325 277.581C47.9801 185.858 -74.1073 430.037 93.832 596.794"
            stroke="currentColor"
            stroke-width="30"
          />
        </svg> */}
        {/* Circle */}
        {/* <div className="absolute w-[1200px] mt-[75px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="text-white w-full h-full"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
        </div> */}
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Video Section */}
      <Video />

      {/* CTA Section */}
      <CTA className="hidden sm:flex"/>

      {/* FAQ Section */}
      <FAQ />

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
};

export default Body;
