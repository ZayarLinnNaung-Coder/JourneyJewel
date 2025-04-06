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

  const benefitData = [
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
    },
    {
      id: 3,
      name: t("expert_teacher"),
      para: t("expert_teacher_desc"),
      icon: <IconTeacher />,
    },
    {
      id: 4,
      name: t("adaptive_learning"),
      para: t("adaptive_learning_desc"),
      icon: <IconPath />,
    },
    {
      id: 5,
      name: t("secure_platform"),
      para: t("secure_platform_desc"),
      icon: <IconShield />,
    },
    {
      id: 6,
      name: t("recognized_certificate"),
      para: t("recognized_certificate_desc"),
      icon: <IconCertificate />,
    },
  ];

  return (
      <div className=" py-10 container max-w-full bg-[#fafafa]">
        <div className="">
          <div className="mb-10 flex items-center justify-center ">
            <p className=" text-[20px] lg:text-[40px] tracking-normal text-center font-[500] md:w-[700px] ">
              Popular Destinations
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          {benefitData.map((item) => (
              <div className="bg-white w-full md:w-[30%] rounded-lg p-5 ml-3 mr-3 mb-6 shadow-sm">
                <img
                    src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"/>
                <div className="p-3">
                  <p className="font-bold mb-3">Yangon, Myanmar</p>
                  <span>
            Experience the magic of white-washed buildings and stunning sunsets
          </span>
                  <div className="flex mt-5">
                    <span className="me-1 text-blue-900">Learn More</span>
                    <svg className="w-6 h-6 text-blue-900 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="#0000FF99" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>

                  </div>
                </div>
              </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View All Destinations</button>
        </div>
      </div>
  );
};

export default Benefits;
