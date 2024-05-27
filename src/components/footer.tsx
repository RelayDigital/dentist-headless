"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footer = [
  {
    title: "Useful Links",
    links: [
      { name: "Covid-19 Pre-Screening Form", href: "/covid-19-pre-screening-form" },
      { name: "Services", href: "/services" },
      { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
      { name: "Dental Implants", href: "/services/implants" },
      { name: "Dentures", href: "/services/dentures" },
      { name: "Sedation Dentistry", href: "/services/sedation" },
    ],
  },
  {
    title: "Company & Appointments",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Appointment", href: "/" },
    ],
  },

  // More posts...
];

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Please enter a valid email address",
  }),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="rounded-none text-[12px] text-[#3E3E3E]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="rounded-none uppercase text-[14px] font-bold px-4 py-2 leading-none h-auto"
          type="submit"
        >
          Submit
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
}

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center w-full bg-[#1493A4] ">
      <div className="isolate px-5 w-full max-w-screen-2xl mx-auto flex flex-col items-center xl:px-32 mb-12">
        <div className="mx-auto w-full">
          <div className="mx-auto mt-10 flex flex-col md:flex-row justify-between gap-y-10">
            {footer.map((item, index) => (
              <div key={index} className="flex max-w-xl flex-col items-start">
                <h2 className="text-[18px] text-white">{item.title}</h2>
                <div className="w-[41px] border-2 border-white mt-2"></div>
                <ul className="flex flex-col gap-4 mt-6">
                  {item.links.map((links, index) => (
                    <li key={index} className="text-white text-[14px]">
                      <a href={links.href}>{links.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex max-w-xl flex-col items-start">
              <h2 className="text-[18px] text-white">Newsletter</h2>
              <div className="w-[41px] border-2 border-white mt-2"></div>
              <ul className="flex flex-col gap-2 mt-6">
                <li className="text-white text-[14px]">
                  Join our newsletter to get in touch
                </li>
                <li className="mt-6">
                  <ProfileForm />
                </li>
              </ul>
            </div>
          </div>
          <Separator className="absolute mt-10 left-0 bg-white/50" />
          <div className="relative flex flex-col md:flex-row mt-24 justify-between gap-4">
            <div className="flex flex-row gap-8">
              <svg
                width="29"
                height="34"
                viewBox="0 0 29 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#242424]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 33.9706C14.5 33.9706 28.375 24.7206 28.375 13.929C28.375 10.2491 26.9132 6.71992 24.3111 4.11785C21.709 1.51578 18.1799 0.0539551 14.5 0.0539551C10.8201 0.0539551 7.29096 1.51578 4.68889 4.11785C2.08683 6.71992 0.625 10.2491 0.625 13.929C0.625 24.7206 14.5 33.9706 14.5 33.9706ZM19.125 13.929C19.125 16.4833 17.0543 18.554 14.5 18.554C11.9457 18.554 9.875 16.4833 9.875 13.929C9.875 11.3746 11.9457 9.30396 14.5 9.30396C17.0543 9.30396 19.125 11.3746 19.125 13.929Z"
                  fill="currentColor"
                />
              </svg>
              <div className="flex flex-col">
                <h2 className="text-[12px] font-bold uppercase tracking-wider text-white">
                  Yorkton
                </h2>
                <ul className="flex flex-col gap-2 mt-1 text-white text-[12px]">
                  <li className="">
                    Monday to Thursday: 8 AM to 3:30 PM <br />
                    Friday: 8 AM to 2 PM
                    <br />
                    Closed for lunch 12 PM - 1 PM
                  </li>
                  <li className="flex flex-row gap-2">
                    <a href="/contact/#map">Map it</a>
                    <Separator orientation="vertical" />
                    <a href="/contact/#map"> Get Directions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <Separator
                orientation="vertical"
                className="hidden md:block mt-2 bg-white/50 h-auto"
              />
              <div className="flex flex-col mt-4 md:mt-0">
                <h2 className="text-[18px] sm:text-[26px] font-semibold italic tracking-wider text-white">
                  Love...Kindness...and Excellence.
                </h2>
                <p className="text-[11px] text-white italic mt-8">
                  © 2023 Copyright{" "}
                  <span className="underline">
                    <a href="">Trischuk Dental Clinic</a>
                  </span>
                  {" "}- Legal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
