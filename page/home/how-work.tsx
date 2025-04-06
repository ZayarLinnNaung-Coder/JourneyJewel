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
      <div className="py-[10vh] container max-w-full bg-whte">
        <div className="">
          <div className="mb-10 flex items-center justify-center ">
            <p className=" text-[20px] lg:text-[40px] tracking-normal text-center font-[500] md:w-[700px] ">
              What Our Travelers Say
            </p>
          </div>
        </div>


        <div
            className="grid mb-8 border border-gray-200 rounded-lg shadow-xs md:mb-12 md:grid-cols-2 bg-white">
          <figure
              className="flex flex-col items-center justify-center p-8 text-center bg-[#fafafa] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 bg-[#fafafa]">
              <h3 className="text-lg font-semibold text-gray-900">Very easy this was to integrate</h3>
              <p className="my-4">If you care for your time, I hands down would go with this."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img className="rounded-full w-9 h-9"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                   alt="profile picture"/>
              <div className="space-y-0.5 font-mediumbg-[#fafafa]text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500">Developer at Open AI</div>
              </div>
            </figcaption>
          </figure>
          <figure
              className="flex flex-col items-center justify-center p-8 text-center bg-[#fafafa] border-b border-gray-200 md:rounded-se-lg 48px">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 bg-[#fafafa]">
              <h3 className="text-lg font-semibold text-gray-900 bg-[#fafafa]">Solid foundation for any project</h3>
              <p className="my-4">Designing with Figma components that can be easily translated to the utility classes
                of Tailwind CSS is a huge timesaver!"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-9 h-9"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                   alt="profile picture"/>
              <div className="space-y-0.5 font-mediumbg-[#fafafa]text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 bg-[#fafafa]">Lead designer at Dropbox</div>
              </div>
            </figcaption>
          </figure>
          <figure
              className="flex flex-col items-center justify-center p-8 text-center bg-[#fafafa] border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e 48px">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 bg-[#fafafa]">
              <h3 className="text-lg font-semibold text-gray-900 bg-[#fafafa]">Mindblowing workflow</h3>
              <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level
                up your next application."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-9 h-9"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                   alt="profile picture"/>
              <div className="space-y-0.5 font-mediumbg-[#fafafa]text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 bg-[#fafafa]">Software Engineer at Facebook</div>
              </div>
            </figcaption>
          </figure>
          <figure
              className="flex flex-col items-center justify-center p-8 text-center bg-[#fafafa] border-gray-200 rounded-b-lg md:rounded-se-lg 48px">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 bg-[#fafafa]">
              <h3 className="text-lg font-semibold text-gray-900 bg-[#fafafa]">Efficient Collaborating</h3>
              <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-9 h-9"
                   src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                   alt="profile picture"/>
              <div className="space-y-0.5 font-mediumbg-[#fafafa]text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 bg-[#fafafa]">CTO at Google</div>
              </div>
            </figcaption>
          </figure>
        </div>


      </div>
  );
};

export default Benefits;
