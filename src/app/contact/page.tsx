"use client";
import React, { useRef } from "react";
import { bounceAnimation, staggeredAnimationFast } from "@/utils/animations";
import { motion, useInView } from "framer-motion";

import { ContactForm } from "@/components/contactForm";



export default function Page() {
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

  return (
    <div className="relative flex flex-col items-center w-full bg-white overflow-clip">
      <div className="relative isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 z-10">
        <div className="overflow-hidden py-12 lg:py-24 w-full">
          <div className="mx-auto flex flex-col lg:flex-row justify-between gap-x-12 gap-y-12">
            <motion.div
              className="flex flex-col justify-start lg:max-w-[50%] w-full"
              ref={ref1}
              animate={isInView1 ? "animate" : "initial"}
              variants={staggeredAnimationFast}
            >
              <motion.h2
                className="mt-4 sm:mb-8 text-4xl tracking-[2.5%] text-black sm:text-[45px] font-light lg:max-w-[12ch]"
                variants={bounceAnimation}
              >
                Contact <span className="text-[#1493A4]">us</span>
              </motion.h2>
              <ContactForm />
            </motion.div>
            <motion.div className="flex flex-col lg:max-w-[50%] w-full justify-start lg:items-start lg:text-left">
              <motion.h2
                className="text-4xl tracking-[2.5%] leading-tight text-black sm:text-[56px] font-light"
                variants={bounceAnimation}
              >
                Location <span className="text-[#1493A4]">information</span>
              </motion.h2>
              <div className="mt-6 text-black">
                <h3 className="font-semibold text-[25px]">
                  Haimanot Trischuk Dental Clinic
                </h3>
                <p className="text-[19px]">Dentist in Bismarck, North Dakota</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Address</h3>
                  <p className="text-[19px]">524 Broadway Street West</p>
                  <p className="text-[19px]">Yorkton, SK Canada</p>
                  <p className="text-[19px]">S3N 0P3</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Phone</h3>
                  <p className="text-[19px]">306-782-1224</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Fax</h3>
                  <p className="text-[19px]">306-783-8878</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-[25px]">Email</h3>
                  <p className="text-[19px]">trischukdental@sasktel.net</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div id="map" className="flex w-full min-h-[500px] mt-12 lg:mt-24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.560284494091!2d-102.49638452238771!3d51.208753571746904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e3ad09555177bd%3A0x9257a84d2aae6d4e!2sTrischuk%20Dental!5e0!3m2!1sen!2sca!4v1715181248769!5m2!1sen!2sca"
              className="w-full h-[500px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
