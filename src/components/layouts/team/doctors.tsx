"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";

interface ComponentProps {
  doctors?: Person[];
}

interface Person {
  name: string;
  jobTitle: string;
  intro?: string;
  imageSrc: string;
}

const Doctors: React.FC<ComponentProps> = ({ doctors: people }) => {
  const refs = people ? people.map(() => useRef(null)) : [];

  return (
    <div className="relative flex flex-col items-center w-full bg-[#E5F6F9] pt-24 -mb-12">
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
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-16 z-10">
        <div className="w-full">
          <div className="mx-auto flex flex-col lg:flex-row gap-x-12">
            {/* People */}
            <motion.div className="flex flex-col sm:flex-col justify-between w-full z-10 text-black gap-x-8 gap-y-12">
              {people &&
                people.map((person, index) => {
                  const isInView = useInView(refs[index]);
                  return (
                    <motion.div
                      className={`flex ${
                        index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                      } items-center justify-center gap-12 sm:gap-24 w-full`}
                      ref={refs[index]}
                      animate={isInView ? "animate" : "initial"}
                      variants={staggeredAnimationFast}
                    >
                      {/* Headshot */}
                      <motion.div
                        className="relative w-full max-w-[419px] h-[494px] xl:h-[494px] rounded-[60px] overflow-hidden shadow-2xl"
                        variants={bounceAnimation}
                      >
                        <Image
                          src={"/" + person.imageSrc}
                          alt={person.name}
                          layout="fill"
                          loading="lazy"
                          objectFit="cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 419px"
                        />
                      </motion.div>
                      {/* Name Card */}
                      <motion.div
                        className="flex flex-col items-start justify-start max-w-[50%]"
                        variants={bounceAnimation}
                      >
                        <motion.h2 className="text-2xl font-semibold leading-snug sm:text-[40px] text-[#1493A4] mb-5">
                          <CharByCharOnScroll
                            shadow={true}
                            lineStyles={{
                              marginTop: "0.6ch", // Custom line height
                              marginRight: "0.4ch", // Custom character spacing
                            }}
                            start={100}
                            end={60}
                          >
                            {person.name}
                          </CharByCharOnScroll>
                        </motion.h2>
                        <motion.h3 className="text-[16px] pt-1 leading-snug sm:text-[20px] text-start">
                          <OpacityOnScroll start={100} end={60}>
                            {person.jobTitle}
                          </OpacityOnScroll>
                        </motion.h3>
                        <motion.div className="text-[12px] pt-4 leading-snug sm:text-[16px] text-start text-[#484848] max-w-[57ch]">
                          <OpacityOnScroll start={100} end={60}>
                            {person.intro}
                          </OpacityOnScroll>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
