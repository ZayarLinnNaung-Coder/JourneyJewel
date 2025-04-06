// import Elearn from "@/public/about/E-learning.png";
import Image from "next/image";
import vision from "@/public/about/vision.png";
import mission from "@/public/about/mission.png";
import obj from "@/public/about/objective.png";
// import mobileElearn from "@/public/about/mobileElearn.png";
import VideoPlayer from "./video-player";

const HeroSection = () => {
  return (
    <div className="container max-w-full mb-5 mt-3 md:my-10">
      {/* <Image
        src={Elearn}
        alt="E Learn"
        className="  hidden md:block md:w-full md:h-full"
        width={500}
        height={600}
      />
      <Image
        src={mobileElearn}
        alt="E Learn"
        className="  md:hidden md:w-full md:h-full"
        width={500}
        height={600}
      /> */}

      <VideoPlayer />
      <div className=" md:space-y-4 mt-4 space-y-2">
        <div className="  flex items-center justify-center"></div>
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className=" text-[20px] md:text-[30px] lg:text-[40px] text-primary tracking-normal text-center font-[500]  ">
            Our Journey Towards Smarter Learning
          </h3>
        </div>
        <p className=" md:text-[18px] md:leading-7 text-[12px] text-webPara text-center font-[500] mt-2">
          NexLynk aims to revolutionize language learning in Myanmar by
          providing a structured, high-quality platform that connects young
          learners with top local language schools. Our goal is to empower
          students to achieve their language goals and unlock global
          opportunities.
        </p>
      </div>

      <div className=" mt-10 md:mt-20">
        <h4 className=" text-[20px] lg:text-[50px] text-black tracking-normal text-center font-[500]  ">
          Vision, Mission & Objectives
        </h4>
        <div className=" mt-4 grid grid-cols-6 md:grid-cols-3 gap-3 md:gap-5">
          <div className=" md:col-span-1 col-span-3 space-y-2 md:space-y-5 md:px-5 md:py-8 px-3 py-4 rounded-2xl bg-webBgSchool">
            <Image
              src={vision}
              alt={"vision"}
              className=" mx-auto w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28"
            />
            <p className=" text-sm text-center md:text-xl lg:text-2xl font-[600]">
              Vision
            </p>
            <p className=" font-[500] text-[12px] md:text-[16px] xl:text-lg text-webPara text-center">
              To be the leading language learning platform that connects young
              learners to the world through innovative and smart learning
              solutions.
            </p>
          </div>
          <div className=" md:col-span-1 col-span-3 space-y-2 md:space-y-5 px-3 md:px-5 py-4 md:py-8 rounded-2xl bg-webBgSchool">
            <Image
              src={mission}
              alt={"vision"}
              className=" mx-auto w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28"
            />
            <p className=" text-sm text-center md:text-xl xl:text-2xl font-[600]">
              Mission
            </p>
            <p className=" font-[500] text-[12px] md:text-[16px] xl:text-lg text-webPara text-center">
              <span className=" font-[700]">
                &quot;Connecting Tomorrow, Learning Today.&quot;
              </span>{" "}
              To support young learners by connecting them with local language
              schools, offering structured, engaging online language education.
            </p>
          </div>
          <div className=" md:col-span-1 col-span-6 md:space-y-5 md:px-5 md:py-8 space-y-2 px-3 py-5 rounded-2xl bg-webBgSchool">
            <Image
              src={obj}
              alt={"vision"}
              className=" mx-auto w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28"
            />
            <p className=" text-center text-sm  md:text-2xl font-[600]">
              Objectives
            </p>
            <ul className="  hidden md:block list-disc list-inside font-[500] md:text-[16px] xl:text-lg text-webPara text-center">
              <li className="">
                Offer structured, interactive language courses from beginner to
                advanced, expanding language options to connect learners with
                diverse cultures.
              </li>
            </ul>
            <ul className=" md:hidden  text-center  block list-disc list-inside text-[12px] text-webPara font-[500] ">
              <li>
                Provide structured language courses tailored to various
                proficiency levels, from beginner to advanced.
              </li>
              <li className="">
                Incorporate interactive features to enhance the educational
                experience.
              </li>
              <li className="">
                Expand the range of languages offered, connecting learners with
                diverse linguistic and cultural opportunities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
