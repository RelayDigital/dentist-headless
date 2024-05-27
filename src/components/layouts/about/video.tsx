"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import CTA from "@/components/layouts/about/cta";

interface ComponentProps {
  className?: string;
}

const Video: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#1493A4] pt-24 sm:py-24">
      {/* SVG Decorations */}
      <div className="relative overflow-x-clip w-full h-full">
        {/* Circle */}
        <div className="absolute w-[1200px] -mt-[500px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="text-white w-full h-full"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden pt-24 sm:py-32 w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12">
            {/* Info */}
            <div className="w-full">
              <div className="flex flex-col lg:flex-row gap-x-12">
                <div className="flex justify-center min-w-[50%] -mt-24">
                  <iframe
                    className="w-[527px] h-[395px] aspect-video shadow-2xl rounded-lg"
                    src="https://www.youtube.com/..."
                  ></iframe>
                </div>
                <p className="text-white text-[16px] font-regular leading-relaxed lg:max-w-[43ch] pt-12 lg:pt-0">
                  Our{" "}
                  <span className="text-[26px] font-medium">
                    patient-centered
                  </span>{" "}
                  practice offers comprehensive dental care with an equal
                  commitment to preventative, restorative, and cosmetic
                  dentistry. Our patients are our top priority.
                  <br />
                  <br />
                  We value personalized attention and long-term relationships
                  with our clients. For those that have anxiety about their
                  dental visits we also offer sedation dentistry and are one of
                  the first in the area to provide IV sedation.
                  <br />
                  <br />
                  Haimanot Trischuk Dental clinic, performs a full range of
                  dental services, from simple fillings and teeth whitening to
                  full smile makeovers – all performed in a warm and caring
                  environment.
                </p>
              </div>
            </div>

            <CTA className="flex sm:hidden"/>
          </div>
        </div>
      </div>

      {/* SVG Decorations */}
      <div className="relative overflow-x-clip w-full h-full">
        {/* Circle */}
        {/* <div className="absolute w-[1200px] mt-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
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
    </div>
  );
};

export default Video;
