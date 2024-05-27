"use client";
import React, { createRef, useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface ComponentProps {
  team?: Person[];
}

interface Person {
  name: string;
  jobTitle: string;
  intro?: string;
  imageSrc: string;
}

const Team: React.FC<ComponentProps> = ({ team: people }) => {
  const refs = people ? people.map(() => useRef(null)) : [];

  return (
    <div className="relative flex flex-col items-center w-full bg-white overflow-clip">
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="pt-24 sm:py-32 w-full">
          <h2 className="text-[29px] text-black font-semibold">
            All Team Members
          </h2>
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12">
            {/* People */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full pt-8 xl:pt-12 z-10 text-black">
              {people &&
                people.map((person, index) => {
                  const isInView = useInView(refs[index]);
                  return (
                    <motion.div
                      className="flex flex-col items-center gap-2"
                      ref={refs[index]}
                      animate={isInView ? "animate" : "initial"}
                      variants={staggeredAnimationFast}
                    >
                      {/* Headshot */}
                      <motion.div
                        className="relative w-full max-w-[323px] h-[292px] rounded-3xl shadow-2xl overflow-hidden"
                        variants={bounceAnimation}
                      >
                        <Image
                          src={"/" + person.imageSrc}
                          alt={person.name}
                          layout="fill"
                          loading="lazy"
                          objectFit="cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 323px"
                        />
                      </motion.div>
                      {/* Name Card */}
                      <motion.div className="flex flex-col items-center justify-center">
                        <motion.h2 className="text-xl font-semibold leading-snug sm:text-[26px] text-[#1493A4]">
                          {person.name}
                        </motion.h2>
                        <motion.h3 className="text-[12px] pt-2 leading-snug sm:text-[16px] text-center text-black">
                          {person.jobTitle}
                        </motion.h3>
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

export default Team;
