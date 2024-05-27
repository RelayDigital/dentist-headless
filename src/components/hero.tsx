"use client";
import React from "react";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={`relative flex flex-col items-center w-full bg-transparent overflow-x-clip`}
    >
      <div className="relative isolate px-6 lg:px-8 max-w-screen-2xl mx-auto overflow-x-clip z-10">
        {/* Headers and CTA */}
        <div className="mx-auto max-w-2xl py-32 z-10">
          <div className="text-center font-poppins">
            <h1 className=" text-5xl tracking-[2.5%] text-black sm:text-[64px]">
              Smiles that <span className="text-[#1493A4]">Inspire</span>
            </h1>
            <p className="mt-1 text-[21px] text-black font-medium">
              Yorkton's Most Gentle Dental Clinic
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="bg-[#1493A4] px-10 py-2.5 text-[16px] font-bold text-white shadow-sm hover:bg-[#1493A4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
