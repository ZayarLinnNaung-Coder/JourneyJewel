import { bestChoiceData } from "@/common/assets/dummy";
import IconStart from "@/common/icon/IconStart";
import Image from "next/image";
import React from "react";
import dotImg from "@/public/dot.png";
import ToogleComponent from "@/components/toogle";

const BestChoice = () => {
  return (
    <div className=" mt-14 max-w-full container">
      <div className=" space-y-1 md:space-y-2">
        <div className="  flex items-center justify-center">
          <p className=" bg-webGray text-[12px] md:text-[15px] font-semibold flex items-center gap-1 rounded-full py-[4px] md:py-[8px] border border-[#DDE5ED] px-2 md:px-3 ">
            <IconStart className="  h-4 w-4 md:h-5 md:w-5" />
            Best Choice
          </p>
        </div>
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className=" text-[16px] md:text-[20px] lg:text-[40px] xl:text-[48px] tracking-normal text-center font-[500] md:w-[900px] ">
            What Makes NexLynk the Best Choice?
          </h3>
        </div>
        <p className=" text-[11px] px-10 md:leading-[30px] md:text-[18px] text-sm text-webPara text-center font-[500] mt-2">
          Smart, Transparent, and Profitable Partnerships
        </p>

        <div className=" md:pt-4 pt-2 flex items-center justify-center">
          <ToogleComponent name="Start partnership Today" />
        </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-8 gap-5">
        {bestChoiceData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl md:py-3 bg-webGray border border-[#DDE5ED] overflow-hidden"
          >
            <div className="absolute top-0 left-0 z-0">
              <Image
                src={dotImg}
                alt="dot"
                className="w-full h-full"
                width={380}
                height={300}
              />
            </div>
            <div className="relative z-10 h-[90px] flex justify-center mx-auto">
              {item.icon}
            </div>
            <div className="relative z-10 space-y-3 p-4">
              <h4 className="text-center font-semibold text-xl md:text-2xl">
                {item.name}
              </h4>
              <p className="text-center md:px-[15px]  md:text-lg text-webPara font-medium">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestChoice;
