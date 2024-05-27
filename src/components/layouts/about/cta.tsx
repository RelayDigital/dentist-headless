"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  className?: string;
}

interface CTA {
  title: string | React.ReactElement;
  image: string;
  href: string;
}

const CTAs: CTA[] = [
  {
    title: (
      <>
        Meet <span className="text-[#1493A4]">our team</span>
      </>
    ),
    image: "/img/Rectangle 92.png",
    href: "/team",
  },
  {
    title: (
      <>
        Join <span className="text-[#1493A4]">our team</span>
      </>
    ),
    image: "/img/Rectangle 108.jpg",
    href: "/team/#join",
  },
  {
    title: (
      <>
        Patient <span className="text-[#1493A4]">forms</span>
      </>
    ),
    image: "/img/Rectangle 108 (1).jpg",
    href: "/team",
  },
];

const CTA: React.FC<HeroProps> = ({ className }) => {
  const refs = CTAs ? CTAs.map(() => useRef(null)) : [];
  return (
    <div
      id="cta"
      className={`${className} relative flex flex-col items-center w-full overflow-x-clip`}
    >
      <div className="sm:absolute isolate px-5 w-full sm:max-w-screen-2xl sm:mx-auto flex flex-col items-center xl:px-32 my-12 sm:-mt-32 z-[99]">
        <div className="relative isolate w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full gap-y-4 sm:gap-x-4 lg:gap-x-8">
            {CTAs &&
              CTAs.map((cta, index) => {
                const isInView = useInView(refs[index]);
                return (
                  <motion.div
                    className="flex w-full"
                    ref={refs[index]}
                    animate={isInView ? "animate" : "initial"}
                    variants={staggeredAnimationFast}
                  >
                    <div className="flex w-full  h-[290px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl shadow-xl overflow-hidden">
                      <motion.a
                        className="flex flex-col justify-start items-center gap-y-3 bg-[#F3F3F3] w-full h-full"
                        href={cta.href}
                        variants={bounceAnimation}
                      >
                        <div className="relative w-full xl:mt-0 h-[219px] rounded-3xl overflow-hidden">
                          <Image
                            src={cta.image}
                            alt=""
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 340px"
                          />
                        </div>
                        <h2 className="text-[28px]">{cta.title}</h2>
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
