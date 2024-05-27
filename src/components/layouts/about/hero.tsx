"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ComponentProps {}

const Hero: React.FC<ComponentProps> = ({}) => {
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
        <div className="flex flex-col items-center xl:items-start justify-center xl:justify-start xl:w-auto py-12 xl:py-32 z-10">
          {/* Page Title */}
          <h1 className="text-5xl tracking-[2.5%] text-black sm:text-[70px]">
            About <span className="text-[#1493A4]">us</span>
          </h1>
          <p className="mt-6 text-[21px] text-black font-medium text-center xl:text-start">
            Yorkton's Most Gentle Dental Clinic
          </p>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-center xl:justify-start gap-x-6">
            <a
              href="/contact"
              className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full -mt-12 xl:mt-0 xl:w-[749px] h-[300px] xl:h-[423px] rounded-3xl overflow-hidden"
          style={{ y: backgroundY }}
        >
          <Image
            src="/img/Rectangle 92.png"
            alt=""
            layout="fill"
            loading="lazy"
            objectFit="cover"
            className="opacity-70 xl:opacity-100"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
