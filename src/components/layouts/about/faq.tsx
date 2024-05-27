"use client";
import React, { useRef } from "react";

import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CharByCharOnScroll from "@/components/animations/CharByCharOnScroll";

interface ComponentProps {
  className?: string;
}

interface Question {
  question: string | React.ReactElement;
  answer: string | React.ReactElement;
}

const questions: Question[] = [
  {
    question: "General dentistry for all ages",
    answer:
      "Here at Haimanot Trischuk Dental clinic, our goal is to help you minimize the fear and tension associated with your dental care needs. Sedation dentistry can even be used for routine procedures such as teeth cleaning and check-ups.",
  },
  {
    question: "Sedation dentistry",
    answer:
      "Here at Haimanot Trischuk Dental clinic, our goal is to help you minimize the fear and tension associated with your dental care needs. Sedation dentistry can even be used for routine procedures such as teeth cleaning and check-ups.",
  },
  {
    question: "Cosmetic dentistry",
    answer:
      "Here at Haimanot Trischuk Dental clinic, our goal is to help you minimize the fear and tension associated with your dental care needs. Sedation dentistry can even be used for routine procedures such as teeth cleaning and check-ups.",
  },
  {
    question: "Dental Implants",
    answer:
      "Here at Haimanot Trischuk Dental clinic, our goal is to help you minimize the fear and tension associated with your dental care needs. Sedation dentistry can even be used for routine procedures such as teeth cleaning and check-ups.",
  },
];

const FAQ: React.FC<ComponentProps> = ({ className }) => {
  const refs = questions ? questions.map(() => useRef(null)) : [];

  return (
    <div
      id="faq"
      className={`${className} relative flex flex-col items-center w-full bg-white overflow-clip`}
    >
      {/* Main Content */}
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden pb-32 sm:pt-64 w-full">
          <div className="mx-auto flex flex-col items-center justify-center gap-x-12">
            <motion.h2
              className="mt-4 mb-20 text-3xl tracking-[2.5%] text-black sm:text-[45px] font-light"
              variants={bounceAnimation}
            >
              <CharByCharOnScroll
                shadow={true}
                lineStyles={{
                  marginTop: "0.6ch", // Custom line height
                  marginRight: "0.4ch", // Custom character spacing
                }}
                start={90}
                end={60}
              >
                General and Cosmetic{" "}
                <span className="text-[#1493A4]">Dentistry services</span>
              </CharByCharOnScroll>
            </motion.h2>

            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-y-4 w-full"
            >
              {questions &&
                questions.map((question, index) => {
                  const isInView = useInView(refs[index]);
                  return (
                    <motion.div
                      ref={refs[index]}
                      animate={isInView ? "animate" : "initial"}
                      variants={staggeredAnimationFast}
                    >
                      <motion.div variants={bounceAnimation}>
                        <AccordionItem
                          value={`item-${index}`}
                          className="rounded-xl"
                        >
                          <AccordionTrigger className="text-[18px] sm:text-[25px] text-start text-nowrap px-4 sm:px-12">
                            {question.question}
                          </AccordionTrigger>
                          <AccordionContent>{question.answer}</AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    </motion.div>
                  );
                })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
