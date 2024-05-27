"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";

interface ComponentProps {
  pageTitle?: string;
  detailFactoid?: string;
  detailInfo?: string;
}

const Details: React.FC<ComponentProps> = ({
  pageTitle,
  detailFactoid: factoid,
  detailInfo: info,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);

  const renderTitle = (title: string) => {
    const words = title.split(" ");
    // Map over words to apply conditional styling
    const formattedWords = words.map((word, index) => {
      // Check if the word is 'dentistry' or it is the second word (index 1)
      if (word.toLowerCase() === "dentistry" || index === 1) {
        return <span className="text-[#1493A4]">{word}</span>;
      }
      return word;
    });

    // Join the words with spaces to form the complete title
    return (
      <>
        {formattedWords.reduce(
          (prev, curr, index) => (
            <>
              {prev}
              {index > 0 ? " " : ""}
              {curr}
            </>
          ),
          ""
        )}
      </>
    );
  };

  return (
    <div
      id="details"
      className="relative flex flex-col items-center w-full bg-[#E5F6F9] overflow-clip py-24"
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden py-24 sm:py-32 w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12">
            {/* Factoid */}
            <motion.div
              className="lg:max-w-[50%] w-full"
              ref={ref1}
              animate={isInView1 ? "animate" : "initial"}
              variants={staggeredAnimationFast}
            >
              {factoid ? (
                <motion.h2
                  className="text-5xl tracking-[2.5%] text-[#4D4D4D] sm:text-[58px] font-thin text-center lg:text-right leading-relaxed"
                  variants={bounceAnimation}
                >
                  <CharByCharOnScroll
                    className="justify-end"
                    shadow={true}
                    lineStyles={{
                      marginTop: "1ch", // Custom line height
                      marginBottom: "1ch", // Custom line height
                      marginRight: "0.4ch", // Custom character spacing
                      height:"1ch",
                    }}
                    start={90}
                    end={10}
                  >
                    {factoid}
                  </CharByCharOnScroll>
                </motion.h2>
              ) : (
                <motion.h2
                  className="text-5xl tracking-[2.5%] text-[#4D4D4D] sm:text-[58px] font-thin text-center lg:text-right leading-relaxed"
                  variants={bounceAnimation}
                >
                  <CharByCharOnScroll
                    className="justify-end"
                    shadow={true}
                    lineStyles={{
                      marginTop: "1ch", // Custom line height
                      marginBottom: "0.8ch", // Custom line height
                      marginRight: "0.4ch", // Custom character spacing
                      height:"1ch",
                    }}
                    start={90}
                    end={10}
                  >
                    Children typically start teething within their first six
                    months. It is highly beneficial to have us examine their
                    teeth and monitor their dental development.
                  </CharByCharOnScroll>
                </motion.h2>
              )}
            </motion.div>
            {/* Separator */}
            <Separator
              orientation="vertical"
              className="bg-[#1493A4] h-auto hidden lg:block"
            />
            <Separator
              orientation="horizontal"
              className="bg-[#1493A4] my-24 h-[1px] block lg:hidden"
            />
            {/* Info */}
            <motion.div
              className="lg:max-w-[50%] w-full"
              ref={ref2}
              animate={isInView2 ? "animate" : "initial"}
              variants={staggeredAnimationFast}
            >
              <motion.div
                className="mt-4 text-5xl tracking-[2.5%] text-black sm:text-[58px] font-semibold capitalize"
                ref={ref3}
                animate={isInView3 ? "animate" : "initial"}
                variants={staggeredAnimationFast}
              >
                {pageTitle ? (
                  <motion.h2 variants={bounceAnimation}>
                    {renderTitle(pageTitle)}
                  </motion.h2>
                ) : (
                  <motion.h2 variants={bounceAnimation}>
                    Pediatric <span className="text-[#1493A4]">dentistry</span>
                  </motion.h2>
                )}
              </motion.div>
              <motion.div
                className="mt-12 text-[16px] leading-8 text-black lg:max-w-[52ch]"
                ref={ref4}
                animate={isInView4 ? "animate" : "initial"}
                variants={staggeredAnimationFast}
              >
                {info ? (
                  <motion.p variants={bounceAnimation}>
                    {info.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </motion.p>
                ) : (
                  <motion.p variants={bounceAnimation}>
                    Children's dentistry, also known as pediatric dentistry, is
                    a specialized field in dental science dedicated to the oral
                    health of children, spanning from infancy through the
                    teenage years. While it may appear early, it is crucial to
                    schedule your child's first visit to Haimanot Trischuk
                    Dental Clinic around their first birthday. Children
                    typically start developing their teeth during their first
                    six months of life. Having us examine their teeth and
                    monitoring their dental development can be highly
                    advantageous."
                    <br />
                    <br />
                    The entire compassionate team at Haimanot Trischuk Dental
                    Clinic is committed to providing a patient experience unlike
                    any other. The foundation of this philosophy is our
                    personable and professional staff. We collectively strive to
                    blend technology, art, and healthcare for each patient. Our
                    goal is to provide you and your child with an individualized
                    patient experience unlike any other you have had at a dental
                    office. We aim to create a positive and comfortable
                    atmosphere for patients of all ages while still meeting
                    their dental needs, fulfilling their wishes, and exceeding
                    expectations. Call us today at 306-782-1224 to schedule an
                    appointment.
                    <br />
                    <br />
                    Your child's health is an incredibly important aspect of
                    parenthood. You'll naturally want to ensure their healthy
                    growth and strength. Additionally, you'll want them to enjoy
                    the advantages of a bright smile and minimize any potential
                    discomfort. Considering a dental practice that specializes
                    in pediatric care is essential for these reasons. Haimanot
                    Trischuk Dental Clinic offers the necessary qualifications
                    and expertise in working with children, ensuring top-quality
                    dental care for both you and your child
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SVG Decorations */}
      <div className="relative overflow-x-clip w-full h-full">
        {/* Circle */}
        <div className="absolute w-[1200px] mt-[550px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="text-[#1493A4] w-full h-full"
          >
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Details;
