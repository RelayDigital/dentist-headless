"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  className?: string;
}

const CTA: React.FC<HeroProps> = ({ className }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div
      id="cta"
      className={`${className} relative flex flex-col items-center w-full overflow-x-clip`}
    >
      <motion.div
        className="sm:absolute isolate px-5 w-full sm:max-w-screen-2xl sm:mx-auto flex flex-col items-center xl:px-32 my-12 sm:-mt-48 z-10"
        ref={ref3}
        animate={isInView3 ? "animate" : "initial"}
        variants={staggeredAnimationFast}
      >
        <motion.div
          className="relative isolate overflow-hidden bg-[#1493A4] shadow-2xl rounded-3xl w-full"
          variants={bounceAnimation}
        >
          {/* Decorations */}
          <svg
            width="354"
            height="274"
            viewBox="0 0 354 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute text-[#1493A4] bottom-0 -z-10"
          >
            <path
              opacity="0.31"
              d="M251.88 86.6914V29.175L202.057 0.650635L152.469 29.175V86.6914L202.057 115.216L251.88 86.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.118 86.0407V28.5244L100.296 0L50.707 28.5244V86.0407L100.296 114.565L150.118 86.0407Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.63 86.6914V29.175L303.807 0.650635L254.219 29.175V86.6914L303.807 115.216L353.63 86.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M99.1375 174.836V117.32L49.3151 88.5618L-0.273438 117.32V174.836L49.3151 203.361L99.1375 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M200.887 174.836V117.32L151.299 88.5618L101.477 117.32V174.836L151.299 203.361L200.887 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M302.637 174.836V117.32L253.049 88.5618L203.227 117.32V174.836L253.049 203.361L302.637 174.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.13 262.747V205.465L100.307 176.707L50.7188 205.465V262.747L100.307 291.506L150.13 262.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M251.88 262.747V205.465L202.057 176.707L152.469 205.465V262.747L202.057 291.506L251.88 262.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M48.4109 86.9506V29.668L-1.4115 0.909851L-51 29.668V86.9506L-1.4115 115.709L48.4109 86.9506Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.63 262.747V205.465L303.807 176.707L254.219 205.465V262.747L303.807 291.506L353.63 262.747Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width="405"
            height="266"
            viewBox="0 0 405 266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:inline absolute text-[#1493A4] top-0 right-0 -z-10"
          >
            <path
              opacity="0.31"
              d="M302.88 60.6914V3.175L253.057 -25.3494L203.469 3.175V60.6914L253.057 89.2157L302.88 60.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M201.118 60.0407V2.52436L151.296 -26L101.707 2.52436V60.0407L151.296 88.5651L201.118 60.0407Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M404.63 60.6914V3.175L354.807 -25.3494L305.219 3.175V60.6914L354.807 89.2157L404.63 60.6914Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M150.137 148.836V91.32L100.315 62.5618L50.7266 91.32V148.836L100.315 177.361L150.137 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.56"
              d="M251.887 148.836V91.32L202.299 62.5618L152.477 91.32V148.836L202.299 177.361L251.887 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M353.637 148.836V91.32L304.049 62.5618L254.227 91.32V148.836L304.049 177.361L353.637 148.836Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M201.13 236.747V179.465L151.307 150.707L101.719 179.465V236.747L151.307 265.506L201.13 236.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M302.88 236.747V179.465L253.057 150.707L203.469 179.465V236.747L253.057 265.506L302.88 236.747Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M99.4109 60.9506V3.66802L49.5885 -25.0901L0 3.66802V60.9506L49.5885 89.7087L99.4109 60.9506Z"
              fill="currentColor"
            />
            <path
              opacity="0.31"
              d="M404.63 236.747V179.465L354.807 150.707L305.219 179.465V236.747L354.807 265.506L404.63 236.747Z"
              fill="currentColor"
            />
          </svg>

          {/* Background Image */}
          <div className="absolute w-full h-full shadow-xl -z-20 opacity-70 brightness-[25%] rounded-2xl overflow-hidden">
            <Image
              src="/img/Frame 216.png"
              alt=""
              loading="lazy"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 1024px"
            />
          </div>
          {/* CTA Text */}
          <div className="text-center lg:mx-0 lg:flex-auto py-10 sm:py-20 px-5">
            <h2 className="text-[30px] font-semibold leading-tight text-white">
              Schedule an in-person or virtual
              <br /> appointment today
            </h2>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;
