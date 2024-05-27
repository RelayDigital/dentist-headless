"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { renderTitle } from "@/components/renderTitle";

interface ComponentProps {
  pageTitle?: string;
  heroImageSrc?: string;
}

const Hero: React.FC<ComponentProps> = ({ pageTitle, heroImageSrc }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="relative flex flex-col items-center w-full bg-transparent overflow-x-clip z-10">
      {/* Main Content */}
      <div
        className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col-reverse xl:flex-row items-center justify-between xl:px-16 mb-0 gap-x-12"
        ref={ref}
      >
        {/* Headers and CTA */}
        <div className="w-full xl:w-auto py-12 xl:py-32 z-10">
          {/* Page Title */}
          <h1 className="text-5xl tracking-[2.5%] text-black sm:text-[64px] sm:max-w-[15ch] capitalize">
            {pageTitle ? (
              renderTitle(pageTitle)
            ) : (
              <>
                Pediatric
                <br />
                <span className="text-[#1493A4]">dentistry</span>
              </>
            )}
          </h1>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-start justify-center gap-y-4 sm:w-[419px]">
            <a
              href="#contact"
              className="flex flex-row items-center px-6 gap-x-6 bg-white border-[1px] border-[#CFCFCF] rounded-xl w-full h-[52px] text-start text-ali text-[15px] text-[#202020] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                <span className="font-bold">Shedule</span> an Appointment
              </p>
            </a>

            <a
              href="/about/#reviews"
              className="flex flex-row items-center px-6 gap-x-6 bg-white border-[1px] border-[#CFCFCF] rounded-xl w-full h-[52px] text-start text-ali text-[15px] text-[#202020] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                Read our <span className="font-bold">reviews</span>
              </p>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full -mt-12 xl:mt-0 xl:w-[749px] h-[300px] xl:h-[423px] rounded-3xl overflow-hidden"
          style={{ y: backgroundY }}
        >
          {(heroImageSrc && pageTitle) ? (
            <Image
              src={"/"+heroImageSrc}
              alt={pageTitle}
              layout="fill"
              loading="lazy"
              objectFit="cover"
              className="opacity-70 xl:opacity-100"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
            />
          ) : (
            <Image
              src="/img/IMG_0075 1.jpg"
              alt=""
              layout="fill"
              loading="lazy"
              objectFit="cover"
              className="opacity-70 xl:opacity-100"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
