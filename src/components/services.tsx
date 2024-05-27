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

interface Service {
  icon?: string | SVGAElement;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: "/img/image 73.png",
    title: "Cosmetic dentistry",
    href: "/services/cosmetic",
    description:
      "At Trischuk Dental Clinic, we provide a variety of cosmetic dentistry options for people looking to enhance their smile or for people that need restorative measures taken to improve their oral health.",
  },
  {
    icon: "/img/image 73 (2).png",
    title: "Dental Implants",
    href: "/services/implants",
    description:
      "Dental implants can be an ideal way for you to restore you smile and missing teeth in Yorkton. As an alternative to bridges and dentures,",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Dentures",
    href: "/services/dentures",
    description:
      "If you are missing some or most of your teeth, dentures can replace these gaps and will also help prevent your jaw from shrinking.",
  },
  {
    icon: "/img/download.png",
    title: "General & Family Dentistry",
    href: "/services/orthodontics",
    description:
      "If you are missing some or most of your teeth, dentures can replace these gaps and will also help prevent your jaw from shrinking.",
  },
  {
    icon: "/img/Rectangle 100 (4).png",
    title: "Kid-Friendly Dental Excellence",
    href: "/services/pediatric",
    description:
      "Introduce your child to a world of positive dental experiences. Our pediatric expertise ensures a fun, stress-free environment where your little ones learn to love taking care of their teeth.",
  },
  {
    icon: "/img/download.png",
    title: "Ongoing Offers for Affordability",
    href: "/services/cosmetic",
    description:
      "Quality dental care is within reach. Explore our ongoing offers designed to make dental treatments more accessible and affordable, so you can invest in your oral health without breaking the bank.",
  },

  {
    icon: "/img/Rectangle 100 (3).png",
    title: "Holistic Dental Solutions",
    href: "#",
    description:
      "Experience a new level of oral health care. Our holistic approach considers your dental needs in connection with your overall health, ensuring a revitalized smile and improved well-being.",
  },

  {
    icon: "/img/download.png",
    title: "Pain-Free Dentistry Experience",
    href: "/services/orthodontics",
    description:
      "Say goodbye to dental anxiety. Our gentle techniques and focus on patient comfort guarantee a pain-free and relaxed dental experience, allowing you to maintain your oral health with confidence.",
  },
  // More posts...
];

interface ServicesProps {
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ className }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  return (
    <div
      id="services"
      className={`relative flex flex-col items-center w-full bg-[#E5F6F9] overflow-x-clip py-24`}
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-16 z-10">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col items-center"
          ref={ref1}
          animate={isInView1 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <motion.h1
            className="text-[16px] leading-6 text-white uppercase font-extralight bg-[#1493A4] px-2 pointer-events-none"
            variants={bounceAnimation}
          >
            <span className="tracking-[0.4em]">Service</span>s
          </motion.h1>
          {/* <motion.h2
            className="font-medium text-gray-900 text-[38px] mt-2 tracking-tight text-center"
            variants={bounceAnimation}
          >
            Feel Like Home in Our Spa-like Atmosphere
          </motion.h2> */}
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="flex flex-col items-center w-full overflow-hidden my-8"
          ref={ref2}
          animate={isInView2 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full xl:w-[85%] mt-10 flex flex-row justify-between xl:gap-5"
          >
            <CarouselContent className="flex flex-row ml-1">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="sm:max-w-[50%] md:max-w-[33.33%] lg:max-w-[25%] pl-0 pr-3 flex flex-row justify-center"
                >
                  <motion.div className="p-1" variants={bounceAnimation}>
                    <Card
                      className={`shadow-none ${
                        index % 2 === 0 ? "bg-[#1493A4]" : "bg-white"
                      } rounded-[45px] sm:max-w-[285px] h-full min-h-[320px] border-none`}
                    >
                      <CardContent className="flex flex-col items-start justify-start h-full w-full py-10 gap-y-3">
                        <div
                          className={`${
                            index % 2 == 0 ? "bg-[#0C8393]" : "bg-[#F8F8F8]"
                          } relative flex justify-center items-center w-[88px] h-[88px] overflow-hidden rounded-full`}
                        >
                          <div
                            className={`${
                              index % 2 == 0 ? "text-white" : "text-[#1493A4]"
                            } relative w-[50px] h-[50px]`}
                          >
                            {/* <Image
                              src={service.icon}
                              alt={service.title}
                              loading="lazy"
                              layout="fill"
                              objectFit="contain"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 50px"
                            /> */}
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                mask: `url(${service.icon}) no-repeat center / contain`,
                                WebkitMask: `url(${service.icon}) no-repeat center / contain`,
                                backgroundColor: "currentColor",
                              }}
                            />
                          </div>
                        </div>
                        <h2
                          className={`${
                            index % 2 == 0 ? "text-white" : "text-[#1493A4]"
                          } text-[18px] font-semibold`}
                        >
                          {service.title}
                        </h2>
                        <p
                          className={`${
                            index % 2 == 0 ? "text-white" : "text-black"
                          } text-[16px] font-regular`}
                        >
                          {service.description}
                        </p>
                        <a
                          href={service.href}
                          className="flex flex-row items-center gap-2 text-[16px] group mt-auto"
                        >
                          <p
                            className={`${
                              index % 2 == 0 ? "text-white" : "text-[#1493A4]"
                            } font-bold`}
                          >
                            Learn More
                          </p>
                          {/* <span className="flex rounded-full bg-[#C9C9C9] group-hover:bg-[#1493A4] w-4 h-4 items-center justify-center">
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.62757 8.40447V0.722656H5.15598V8.40447H3.62757ZM0.553711 5.32493V3.79652H8.23553V5.32493H0.553711Z"
                                fill="white"
                              />
                            </svg>
                          </span> */}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-transparent rounded-none text-[#1493A4] hover:text-[#1493A4]/60 border-none" />
            <CarouselNext className="hidden xl:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input absolute h-10 w-10 -right-12 top-1/2 -translate-y-1/2 bg-transparent rounded-none text-[#1493A4] hover:text-[#1493A4]/60 border-none" />
          </Carousel>
        </motion.div>

        {/* More Button */}
        {/* <motion.div
          className="flex items-center justify-center gap-x-6"
          ref={ref3}
          animate={isInView3 ? "animate" : "initial"}
          variants={staggeredAnimationFast}
        >
          <motion.a
            href="#"
            className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            variants={bounceAnimation}
          >
            View Details
          </motion.a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Services;
