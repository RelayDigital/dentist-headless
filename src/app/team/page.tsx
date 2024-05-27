"use client";
import { SizeProvider } from "@/contexts/sizeContext";
import Body, { PageDetails } from "@/components/layouts/team/body";

const pageDetails: PageDetails = {
  doctors: [
    {
      name: "Simon Haimanot",
      jobTitle: "Dental Assistant",
      intro:
        "Hello, my name is Megan and i am the hygiene coordinator at missouri river dental. i received my bachelor’s in science and major in radiologic technology at minot state university and have been at mrd for 6 years. my favorite part of my job is having the opportunity to get to meet and get to know so many amazing people. outside of the office i love hanging out with my kids, kwin and jax, playing and watching sports and hanging out with friends, family and husband.",
      imageSrc: "img/Rectangle 110 (1).jpg",
    },
    {
      name: "Greg Trischuk",
      jobTitle: "Registered Dental Hygienist",
      intro:
        "hello, my name is Megan and i am the hygiene coordinator at missouri river dental. i received my bachelor’s in science and major in radiologic technology at minot state university and have been at mrd for 6 years. my favorite part of my job is having the opportunity to get to meet and get to know so many amazing people. outside of the office i love hanging out with my kids, kwin and jax, playing and watching sports and hanging out with friends, family and husband.",
      imageSrc: "img/Image 67 (10).png",
    },
  ],
  team: [
    {
      name: "Hy J",
      jobTitle: "RDA",
      imageSrc: "img/Rectangle 115.jpg",
    },
    {
      name: "Aunnika M",
      jobTitle: "DA",
      imageSrc: "img/Rectangle 115 (1).jpg",
    },
    {
      name: "Caltlin I",
      jobTitle: "Admin",
      imageSrc: "img/Rectangle 115 (2).jpg",
    },
    {
      name: "Heather R",
      jobTitle: "Admin",
      imageSrc: "img/Rectangle 115 (2).png",
    },
    {
      name: "Terrie L",
      jobTitle: "Admin",
      imageSrc: "img/Rectangle 115 (3).png",
    },
    {
      name: "Susan M",
      jobTitle: "RDA",
      imageSrc: "img/Rectangle 115 (3).jpg",
    },
    {
      name: "Tori S",
      jobTitle: "RDA",
      imageSrc: "img/Rectangle 115 (4).jpg",
    },
    {
      name: "Kierra N",
      jobTitle: "DA",
      imageSrc: "img/Rectangle 115 (5).jpg",
    },
    {
      name: "Riley T",
      jobTitle: "DA",
      imageSrc: "img/Rectangle 115 (6).jpg",
    },
    {
      name: "Megan N",
      jobTitle: "DA",
      imageSrc: "img/Rectangle 115 (7).jpg",
    },
    {
      name: "Londa D",
      jobTitle: "Dental Therapist",
      imageSrc: "img/Rectangle 115 (8).jpg",
    },
    {
      name: "Zeel P",
      jobTitle: "RDA",
      imageSrc: "img/Rectangle 115 (9).jpg",
    },
    {
      name: "Megan B",
      jobTitle: "RDH",
      imageSrc: "img/Rectangle 115 (10).jpg",
    },
    {
      name: "Jenna Lee L",
      jobTitle: "RDH",
      imageSrc: "img/Rectangle 115 (11).jpg",
    },
    {
      name: "Larissa P",
      jobTitle: "RDH",
      imageSrc: "img/Rectangle 115 (12).jpg",
    },
    {
      name: "Jensen T",
      jobTitle: "DA",
      imageSrc: "img/Rectangle 115 (13).jpg",
    },
    
  ],
};

export default function Page() {
  return (
    <main className="flex flex-col min-w-screen">
      <SizeProvider>
        <Body pageDetails={pageDetails} />
      </SizeProvider>
    </main>
  );
}
