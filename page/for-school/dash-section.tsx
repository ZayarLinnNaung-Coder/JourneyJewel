"use client";
import Image from "next/image";
import React from "react";
import dash from "@/public/dashboard.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const DashSection = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // For devices wider than 768px
      gsap.fromTo(
        ".dash",
        { y: 300, opacity: 0 },
        {
          y: 50,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // For devices narrower than 768px
      gsap.fromTo(
        ".dash",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className=" max-w-full container xl:h-[125vh] lg:min-h-[55vh] md:min-h-[52vh] mb-7  ">
      <div className=" relative md:h-[600px] h-[300px] md:p-10 p-5 bg-primary rounded-2xl mt-5 ">
        <h2 className=" text-white px-9 md:px-20 font-[500] text-xl  md:leading-[60px] md:text-5xl text-center">
          Parter With NexLynk - Grow Your Reach, Empower More Students.&quot;
        </h2>

        <div className=" md:px-20">
          <Image
            src={dash}
            alt="dashboard"
            className=" dash rounded-2xl translate-y-0 md:translate-y-[50px] object-contain w-[400px]  h-[300px] md:w-full md:h-full "
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DashSection;
