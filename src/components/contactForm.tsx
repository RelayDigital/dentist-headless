"use client";
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

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Please enter your telephone number"),
  message: z.string().min(1, "Please enter a message"),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      message: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 my-4">
        <div className="flex flex-col gap-4 justify-between w-full">
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="w-full">
              <input
                {...form.register("firstName")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("firstName")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("email")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="w-full">
              <input
                {...form.register("telephone")}
                className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                placeholder="Telephone number"
                name="telephone"
              />
            </div>
          </div>
          <div className="w-full">
            <textarea
              {...form.register("message")}
              placeholder="Message To Haimanot Trischuk Dental Team"
              className="w-full h-32 p-3 border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
            />
          </div>
        </div>
        <Button
          className="rounded-none uppercase text-[14px] font-bold px-4 py-3 leading-none h-auto w-full bg-[#1493A4]"
          type="submit"
        >
          Submit
        </Button>
        <FormMessage />
      </form>
    </Form>
  );
}

export function ContactForm2() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 my-4">
        <div className="flex flex-col gap-4 justify-between w-full">
          <div className="grid grid-cols-2 w-full gap-4">
            <FormField
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <input
                    {...field}
                    className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                    placeholder="First Name"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <input
                    {...field}
                    className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                    placeholder="Last Name"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <input
                    {...field}
                    className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                    placeholder="Email"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone</FormLabel>
                  <input
                    {...field}
                    className="flex h-10 w-full border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                    placeholder="Telephone number"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <textarea
                  {...field}
                  placeholder="Message To Haimanot Trischuk Dental Team"
                  className="w-full h-64 p-3 border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 rounded-none text-[12px] text-[#3E3E3E] border-[#1493A4]"
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="rounded-none uppercase text-[14px] font-bold px-4 py-3 leading-none h-auto w-full bg-[#1493A4]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
