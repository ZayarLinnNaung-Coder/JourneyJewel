import IconStart from "@/common/icon/IconStart";
import React from "react";
import Image from "next/image";
import { forSchoolOurSupport } from "@/common/assets/dummy";
import finace from "@/public/finace.png";
import marketing from "@/public/marketing.png";
import IconMail from "@/common/icon/IconMail";
import Link from "next/link";

const OurSupport = () => {
  return (
    <div className=" max-w-full mt-14 container">
      <div className=" space-y-3 md:space-y-2">
        <div className="  flex items-center justify-center">
          <p className=" bg-webGray text-[12px] md:text-[15px] font-semibold flex items-center gap-1 rounded-full py-[4px] md:py-[8px] border border-[#DDE5ED] px-2 md:px-3 ">
            <IconStart className="  h-4 w-4 md:h-5 md:w-5" />
            Our Support
          </p>
        </div>
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className=" text-[20px] lg:text-[40px]  xl:text-[48px] tracking-normal text-center font-[500] md:w-[900px] ">
            How NexLynk Supports Schools
          </h3>
        </div>
        <p className=" px-10 leading-[30px] md:text-[18px] text-sm text-webPara text-center font-[500] mt-2">
          Technology Meets Education – Your Success is Our Success
        </p>
      </div>
      <div className=" mt-8 grid md:grid-cols-3 gap-7">
        {forSchoolOurSupport.map((sup) => (
          <div
            key={sup.id}
            className=" bg-webBgSchool md:px-3 lg:px-4 px-8 xl:px-8  rounded-2xl"
          >
            <p className=" py-8 text-center text-primary text-xl font-[700]">
              {sup.name}
            </p>
            <Image
              src={sup.img}
              alt="onBoard"
              width={400}
              height={400}
              className=" w-auto h-auto"
            />
            <p className=" pt-3 pb-8 text-center text-[#0A0915]">{sup.para}</p>
          </div>
        ))}
      </div>
      <div className=" mt-7 gap-7 grid md:grid-cols-2">
        <div className="  flex flex-col items-center bg-webBgSchool  px-8  rounded-2xl">
          <p className=" py-8 text-center text-primary text-xl font-[700]">
            Finance Team Support
          </p>
          <Image
            src={finace}
            alt="onBoard"
            width={400}
            height={400}
            className=" w-auto h-auto"
          />
          <p className=" pt-3 pb-8 text-center text-[#0A0915]">
            We provide clear financial reports, monthly payouts, and insights into student enrollments, helping you track growth and maximize your revenue.
          </p>
        </div>
        <div className="  flex flex-col items-center bg-webBgSchool  px-8  rounded-2xl">
          <p className=" py-8 text-center text-primary text-xl font-[700]">
            Marketing & Promotion Support {" "}
          </p>
          <Image
            src={marketing}
            alt="onBoard"
            width={400}
            height={400}
            className=" w-auto h-auto"
          />
          <p className=" pt-3 pb-8 text-center text-[#0A0915]">
            Get access to strategic marketing campaigns, social media promotions, and student engagement programs to boost enrollments and grow your impact.
          </p>
        </div>
      </div>
      <div className=" flex flex-col px-10 py-4 md:px-0 items-center gap-2 md:gap-5 bg-gradient-to-b mt-10  md:mt-20 md:py-10 rounded-2xl from-[#0891B2] to-[#88CDD4] ">
        <p className=" text-2xl lg:text-4xl md:text-3xl xl:text-5xl text-center text-white font-[700]">
          Invest in Education, Invest in the Future
        </p>
        <p className=" text-white text-[12px] md:text-base font-[500] ">
          Let’s Build the Future Together
        </p>
        <div className="">
          <Link
            href={"mailto:nexlynk.info@gmail.com"}
            target="_blank"
            className=" text-[12px] md:text-base hover:bg-primary group hover:text-white flex items-center md:gap-2 gap-1 rounded-full bg-webBgSchool py-1 md:py-2 px-2 md:px-4"
          >
            <IconMail className=" text-primary md:w-full md:h-full w-4 h-4 group-hover:text-white hover:text-white " />
            nexlynk.info@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
