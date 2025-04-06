import IconStart from "@/common/icon/IconStart";
import dotImg from "@/public/dot.png";
import Image from "next/image";

import React from "react";
import IconCertificate from "../../common/icon/IconCertificate";
import IconPath from "../../common/icon/IconPath";
import IconPhone from "../../common/icon/IconPhone";
import IconShield from "../../common/icon/IconShield";
import IconTeacher from "../../common/icon/IconTeacher";
import IconVideo from "../../common/icon/IconVideo";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("BenefiData");

  const specialOffers = [
    {
      id: 1,
      name: t("interactive_video"),
      para: t("interactive_video_desc"),
      icon: <IconVideo />,
    },
    {
      id: 2,
      name: t("real_time_tracking"),
      para: t("real_time_tracking_desc"),
      icon: <IconPhone />,
    }
  ];

  return (
      <div className="py-[10vh] container max-w-full bg-[#fafafa]">
        <div className="">
          <div className="flex items-center justify-center ">
            <p className=" text-[20px] lg:text-[40px] tracking-normal text-center font-[500] md:w-[700px] mb-5">
              How It Works
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mb-5">
          <div className="w-full md:w-[30%] rounded-lg5 ml-3 mr-3 flex flex-col items-center mt-10">
            <div className="icon-wrapper bg-blue-400 flex justify-center items-center w-[48px] h-[48px] rounded-full">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <p className="font-bold mt-5">Search</p>
            <p className="text-center">Find your perfect destination from our curated collection</p>
          </div>
          <div className="w-full md:w-[30%] rounded-lg ml-3 mr-3 flex flex-col items-center mt-10">
            <div className="icon-wrapper bg-blue-400 flex justify-center items-center w-[48px] h-[48px] rounded-full">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
              </svg>
            </div>
            <p className="font-bold mt-5">Booking</p>
            <p className="text-center">Find your perfect destination from our curated collection</p>
          </div>
          <div className="w-full md:w-[30%] rounded-lg ml-3 mr-3 flex flex-col items-center mt-10">
            <div className="icon-wrapper bg-blue-400 flex justify-center items-center w-[48px] h-[48px] rounded-full">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M2.535 11A3.981 3.981 0 0 0 2 13v4a1 1 0 0 0 1 1h2v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1h2a1 1 0 0 0 1-1v-4c0-.729-.195-1.412-.535-2H2.535ZM20 9V8a4 4 0 0 0-4-4h-3v5h7Zm-9-5H8a4 4 0 0 0-4 4v1h7V4Z"/>
              </svg>

            </div>
            <p className="font-bold mt-5">Travel</p>
            <p className="text-center">Find your perfect destination from our curated collection</p>
          </div>
        </div>

      </div>
  );
};

export default Benefits;
