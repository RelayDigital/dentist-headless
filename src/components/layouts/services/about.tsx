"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ComponentProps {
  aboutInfo?: Info[];
  aboutPeople?: Person[];
}

interface Info {
  title: string;
  content: string;
}

interface Person {
  name: string;
  jobTitle: string;
  imageSrc: string;
}

const About: React.FC<ComponentProps> = ({
  aboutInfo: details,
  aboutPeople: people,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  const isInView6 = useInView(ref6);

  const renderContentAsList = (content: string) => {
    // Split the content by newline
    const lines = content.split("\n");
    // Remove and store the first line separately if it exists
    const header = lines.shift(); // This removes the first element and returns it

    return (
      <motion.div
        className="text-[16px] leading-8"
        ref={ref2}
        animate={isInView2 ? "animate" : "initial"}
        variants={staggeredAnimationFast}
      >
        <motion.p
          variants={bounceAnimation}
          className="text-white text-[16px] leading-8"
        >
          {header}
        </motion.p>
        <motion.ol className="list-decimal pl-8" variants={bounceAnimation}>
          {lines.map(
            (line, index) =>
              line.trim() !== "" && (
                <li key={index} className="text-white text-[16px] leading-8">
                  {line}
                </li>
              )
          )}
        </motion.ol>
      </motion.div>
    );
  };

  return (
    <div
      id="about"
      className="relative flex flex-col items-center w-full bg-[#1493A4] overflow-x-clip"
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-16 mb-56 ">
        {/* Info */}
        <div className="flex flex-col lg:flex-row w-full xl:w-auto gap-y-16 pt-12 xl:pt-32 z-10 text-white gap-x-8">
          {details ? (
            details.map((detail) => (
              <motion.div className="flex flex-col gap-12 lg:max-w-[50%]">
                <motion.div
                  className="text-3xl font-regular tracking-tight leading-snug sm:text-[37px]"
                  ref={ref1}
                  animate={isInView1 ? "animate" : "initial"}
                  variants={staggeredAnimationFast}
                >
                  <motion.h2 variants={bounceAnimation}>
                    {detail.title}
                  </motion.h2>
                </motion.div>

                {renderContentAsList(detail.content)}
              </motion.div>
            ))
          ) : (
            <>
              <motion.div className="flex flex-col gap-12 lg:max-w-[50%]">
                <motion.div
                  className="text-3xl font-regular tracking-tight leading-snug sm:text-[37px]"
                  ref={ref1}
                  animate={isInView1 ? "animate" : "initial"}
                  variants={staggeredAnimationFast}
                >
                  {/* Info Heading */}
                  <motion.h2 variants={bounceAnimation}>
                    regular examinations are critical in preventative
                    children&apos;s dentistry
                  </motion.h2>
                </motion.div>
                <motion.div
                  className="text-[16px] leading-8"
                  ref={ref2}
                  animate={isInView2 ? "animate" : "initial"}
                  variants={staggeredAnimationFast}
                >
                  <motion.p variants={bounceAnimation}>
                    Similar to adults, your child should visit us for routine
                    children's dentistry services, which include checkups and
                    cleanings. These cleanings are most beneficial every six
                    months. Regular children's dentistry exams help your child,
                    you, and us prevent unnecessary cavities, tooth decay, and
                    gum disease. Just like a dental cleaning for you, at
                    Haimanot Trischuk Dental Clinic, we will remove damaging
                    plaque and debris from your child's teeth. We always include
                    an oral exam for your child to ensure their teeth are
                    erupting properly. As your child grows older, we will also
                    monitor their adult teeth to ensure they are coming in
                    correctly.
                  </motion.p>
                </motion.div>
              </motion.div>
              <div className="flex flex-col gap-12 lg:max-w-[50%]">
                {/* Info Heading */}
                <motion.div
                  className="text-3xl font-regular tracking-tight leading-snug sm:text-[37px]"
                  ref={ref3}
                  animate={isInView3 ? "animate" : "initial"}
                  variants={staggeredAnimationFast}
                >
                  <motion.h2 variants={bounceAnimation}>
                    simple tips to help avoid tooth decay
                  </motion.h2>
                </motion.div>
                <motion.div
                  className="text-[16px] leading-8"
                  ref={ref4}
                  animate={isInView4 ? "animate" : "initial"}
                  variants={staggeredAnimationFast}
                >
                  <motion.p variants={bounceAnimation}>
                    As a parent, you can take early preventative measures to
                    protect your child against tooth decay, even before their
                    first dental visit:
                  </motion.p>
                  <motion.ol
                    className="list-decimal pl-8"
                    variants={bounceAnimation}
                  >
                    <li>
                      <span>
                        Make an effort to rinse your baby's teeth with water or
                        gently wipe them down with a damp cloth after feeding,
                        especially before they fall asleep. Any residue from
                        milk or formula can promote decay. Untreated cavities
                        can cause discomfort and potentially lead to a harmful
                        infection.
                      </span>
                    </li>
                    <li>
                      Aim to wean your child off breastfeeding or bottle-feeding
                      by their first birthday. This effort helps prevent decay
                      and reduces the risk of jaw growth problems resulting from
                      excessive sucking.
                    </li>
                    <li>
                      Establish good habits from the start. Begin brushing their
                      teeth as soon as the first tooth appears. Even the tiniest
                      tooth can develop a cavity. Use a soft-bristled brush and
                      water, and consult us about when to introduce a small
                      amount of toothpaste.
                    </li>
                    <li>
                      When your child is old enough to start brushing on their
                      own, continue to supervise their brushing and assist them
                      in cleaning any areas they might have missed.
                    </li>
                    <li>
                      Avoid giving sugary drinks or milk before bedtime as part
                      of proper dental care.
                    </li>
                    <li>
                      Limit the consumption of sugary foods and drinks in your
                      child's diet.
                    </li>
                  </motion.ol>
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* People */}
        <motion.div className="flex flex-col sm:flex-row justify-between w-full pt-12 xl:pt-32 z-10 text-white gap-x-8 gap-y-12">
          {people ? (
            people.map((person) => (
              <motion.div
                className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]"
                ref={ref3}
                animate={isInView3 ? "animate" : "initial"}
                variants={staggeredAnimationFast}
              >
                {/* Headshot */}
                <motion.div
                  className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden"
                  variants={bounceAnimation}
                >
                  <Image
                    src={"/" + person.imageSrc}
                    alt={person.name}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    className="opacity-70 xl:opacity-100"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </motion.div>
                {/* Name Card */}
                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={bounceAnimation}
                >
                  <motion.h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    {person.name}
                  </motion.h2>
                  <motion.h3 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    {person.jobTitle}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <>
              <motion.div
                className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]"
                ref={ref5}
                animate={isInView5 ? "animate" : "initial"}
                variants={staggeredAnimationFast}
              >
                {/* Headshot */}
                <motion.div
                  className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden"
                  variants={bounceAnimation}
                >
                  <Image
                    src="/img/Rectangle 113 (1).png"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </motion.div>
                {/* Name Card */}
                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={bounceAnimation}
                >
                  <motion.h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    Megan N
                  </motion.h2>
                  <motion.h3 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    Dental Assistant
                  </motion.h3>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-2 sm:gap-12 w-full lg:max-w-[50%]"
                ref={ref6}
                animate={isInView6 ? "animate" : "initial"}
                variants={staggeredAnimationFast}
              >
                {/* Headshot */}
                <motion.div
                  className="relative w-full max-w-[631px] h-[300px] xl:h-[494px] rounded-3xl overflow-hidden"
                  variants={bounceAnimation}
                >
                  <Image
                    src="/img/Rectangle 108.png"
                    alt=""
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 749px"
                  />
                </motion.div>
                {/* Name Card */}
                <motion.div
                  className="flex flex-col items-center justify-center"
                  variants={bounceAnimation}
                >
                  <motion.h2 className="text-3xl font-semibold leading-snug sm:text-[64px]">
                    Tori S
                  </motion.h2>
                  <motion.h3 className="text-2xl pt-6 leading-snug sm:text-[32px] text-center">
                    Registered Dental Hygienist
                  </motion.h3>
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
