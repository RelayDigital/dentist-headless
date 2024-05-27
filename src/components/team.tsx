"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CharByCharOnScroll from "./animations/CharByCharOnScroll";
import OpacityOnScroll from "./animations/OpacityOnScroll";
import CTA from "./cta";

const people = [
  {
    name: "Dr Simon Haimanot",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Greg Trischuk",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Simon Haimanot",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Greg Trischuk",
    recommendation: "Highly recommended",
    role: "Primary Care Doctor",
    location: "Yorkton, SK",
    rating: { stars: 4.54, reviews: 37 },
    description:
      "Very personable and good listener. Makes you feel comfortable and open immediately. Felt well taken care...",
    headshot:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function Team() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div
      id="team"
      className="relative flex flex-col items-center w-full bg-[#1493A4] overflow-x-clip"
    >
      {/* SVG Decorations */}
      <svg
        width="544"
        height="947"
        viewBox="0 0 544 947"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute text-[#E5F6F9]"
      >
        <path
          opacity="0.12"
          d="M394.148 -18.7671C382.354 -2.89022 383.805 43.2888 483.966 100.99C609.166 173.116 446.536 310.839 261.134 249.753C48.7897 158.03 -73.2978 402.21 94.6416 568.966C237.367 594.089 522.818 675.371 522.818 799.518C522.818 923.665 237.367 978.016 94.6416 989.673"
          stroke="currentColor"
          stroke-width="30"
        />
      </svg>

      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 mb-12 sm:mb-56 ">
        <motion.div
          className="relative flex flex-col-reverse xl:flex-row w-full gap-y-10 xl:mb-40 mt-14"
          ref={ref1}
          animate={isInView1 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <div className="flex flex-row gap-3 -mt-24 xl:m-0">
            <motion.div
              className="relative w-[55.66px] h-[54.8px] rounded-xl overflow-hidden z-20"
              variants={bounceAnimation}
            >
              <Image
                src="/img/download (1).png"
                alt=""
                layout="fill"
                loading="lazy"
                objectFit="cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 55.66px"
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full text-white z-20"
              variants={bounceAnimation}
            >
              <h1 className="text-3xl font-regular tracking-tight sm:text-[38px]">
                <CharByCharOnScroll
                  shadow={true}
                  lineStyles={{
                    marginTop: "0.6ch", // Custom line height
                    marginRight: "0.4ch", // Custom character spacing
                  }}
                  start={90}
                  end={60}
                >
                  Top-rated primary care doctors
                </CharByCharOnScroll>
              </h1>
              <div className="mt-6 text-[16px] leading-8 ">
                <OpacityOnScroll start={90} end={60}>
                  90% of patients gave these primary care doctors 5 stars
                </OpacityOnScroll>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="inline  xl:absolute relative h-[300px] w-full xl:w-[524px] xl:h-[416px] shadow-xl xl:-mt-[150px] xl:-right-[100px] rounded-2xl overflow-hidden"
            variants={bounceAnimation}
          >
            <Image
              src="/img/cachedImage 1.jpg"
              alt=""
              loading="lazy"
              layout="fill"
              objectFit="cover"
              className="opacity-70 xl:opacity-100 z-10"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 1024px"
            />
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="flex flex-col justify-center items-start w-full"
          ref={ref2}
          animate={isInView2 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full xl:w-[110%] mt-10 flex flex-row justify-between xl:gap-5"
          >
            <CarouselContent className="flex flex-row ml-1">
              {people.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="md:max-w-[50%] lg:max-w-[33.33%] h-[379px] pl-0 pr-4 xl:pr-8 flex flex-row justify-center items-end"
                >
                  <motion.div className="p-1 flex-grow" variants={bounceAnimation}>
                    <Card className="flex flex-col items-center text-center rounded-3xl h-[333px]">
                      <CardHeader className="items-center">
                        <Avatar className="w-[70px] h-[70px] -mt-16 border-2 border-white">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt=""
                          />
                          <AvatarFallback>?</AvatarFallback>
                        </Avatar>

                        <CardTitle className="text-[#1493A4] text-[16px] pt-3">
                          {person.name}
                        </CardTitle>
                        <div className="text-[#4DA430] bg-[#EEF7EB] text-[14px] rounded-md px-2 py-1">
                          {person.recommendation}
                        </div>
                      </CardHeader>
                      <CardContent className="text-black/40 ">
                        <p>{person.role}</p>
                        <p>{person.location}</p>
                        <div className="flex flex-row gap-3 ">
                          <div className="text-[#FFB800] flex flex-row items-center gap-1">
                            <svg
                              width="15"
                              height="14"
                              viewBox="0 0 15 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p>{person.rating.stars}</p>
                          </div>
                          <p>{person.rating.reviews} reviews</p>
                        </div>
                      </CardContent>
                      <CardFooter className="px-4">
                        <CardDescription className="text-black text-[16px] leading-tight max-w-[30ch]">
                          {person.description}
                        </CardDescription>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex flex-row gap-5 items-center mt-24">
              <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input static h-14 w-14 -right-0 left-[66vw] top-1/2 -translate-y-1/2 bg-[#6DA235] rounded-sm text-white hover:bg-[#6DA235]/80 hover:text-white border-none" />
              <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input static h-14 w-14 -right-40 top-1/2 -translate-y-1/2 bg-[#6DA235] rounded-sm text-white hover:bg-[#6DA235]/80 hover:text-white border-none" />
            </div>
          </Carousel>
        </motion.div>

        
      </div>
    </div>
  );
}
