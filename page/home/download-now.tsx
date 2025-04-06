"use client";
import playStore from "@/public/playstore.png";
import appStore from "@/public/appStore.png";
import Image from "next/image";
import signUp from "@/public/signup.png";
import course from "@/public/course.png";
import learner from "@/public/learner.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import japan from "@/public/japan.png";
import courseProgress from "@/public/course progress.png";
import conv from "@/public/conversation.png";
import video from "@/public/about/video.png";
import AppStore from "@/public/appStore.png";
import mid from "@/public/download/middle.png";
import left from "@/public/download/left.png";
import test from "@/public/download/test.png";
import { handleClick } from "@/common/assets/dummy";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const DownloadNow = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gsap.utils.toArray(".container").forEach((set: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: set,
            // scrub: 1,
            // markers: true,
            start: "top 70%",
            end: "bottom 50%",
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          set.querySelector(".left-img"),
          {
            y: 800,
          },
          { y: 200, duration: 0.5 }
        )
          .fromTo(
            set.querySelector(".middle-img"),
            {
              y: 600,
            },
            { y: 100, duration: 0.6 },
            "<"
          )
          .fromTo(
            set.querySelector(".right-img"),
            {
              y: 800,
            },
            { y: 200, duration: 0.5 },
            "<"
          )
          .fromTo(".japan", { scale: 0 }, { scale: 1, y: 60 }, "<")
          .fromTo(".course", { scale: 0 }, { scale: 1 }, "<")
          .fromTo(".conv", { scale: 0 }, { scale: 1 }, "<")
          .fromTo(".video", { scale: 0 }, { scale: 1 }, "<");
      });
    },
    { scope: container }
  );
  return (
    <>
      {/* desktop view */}
      <div ref={container} className="  hidden md:block  container max-w-full ">
        <div className="bg-primary relative p-5 overflow-hidden rounded-2xl h-[650px]">
          <div className=" mt-2 flex items-center justify-center ">
            <p className=" text-white text-[20px] md:font-[700] lg:text-[48px] tracking-normal text-center font-[500] md:w-[700px] ">
              Download now and learn today
            </p>
          </div>
          <p className=" my-3 text-center text-white md:text-xl">
            Download the application and start learning the language lessons
          </p>
          <div className=" pt-4 gap-3 flex items-center justify-center">
            <Image
              onClick={handleClick}
              src={playStore}
              alt="playstore"
              width={200}
              height={200}
              className=" cursor-pointer w-44"
            />
            <Image
              onClick={handleClick}
              src={appStore}
              width={200}
              height={200}
              alt="playstore"
              className=" cursor-pointer w-44"
            />
          </div>

          <div className="container">
            <div className=" left-img absolute bottom-0 translate-y-[200px] left-[-20px]  rotate-[-20deg] ">
              <Image
                src={learner}
                alt="learner"
                width={400}
                height={400}
                className=" w-[450px] h-[450px] object-contain "
              />
            </div>
            <div className=" md:hidden xl:block top-[40%] lg:left-[25%] xl:left-[28%] absolute">
              <Image
                className=" w-auto h-auto japan"
                src={japan}
                alt="japan"
                width={120}
                height={120}
              />
            </div>
            <div className="  md:hidden xl:block absolute left-[18%] top-[68%]">
              <Image
                className=" h-auto w-[200px] object-contain course"
                alt="course"
                src={courseProgress}
                width={250}
                height={200}
              />
            </div>

            <div className=" md:hidden xl:block absolute z-50 lg:right-[29%]  xl:right-[26%] top-[77%]">
              <Image
                className=" xl:h-[200px] lg:h-[100px] lg:w-[120px] xl:w-[200px] object-contain video"
                alt="video"
                src={video}
                width={200}
                height={200}
              />
            </div>

            <div className=" md:hidden xl:block z-40 absolute conv lg:top-[47%] xl:top-[40%] right-[14%]  ">
              <Image
                src={conv}
                alt="conver"
                className=" xl:w-[300px] lg:w-[220px] lg:h-[220px] object-contain xl:h-[300px]"
                width={300}
                height={300}
              />
            </div>
            <div className=" middle-img absolute left-1/2 -translate-x-1/2 translate-y-[100px] ">
              <Image
                src={signUp}
                alt="singup"
                width={500}
                height={500}
                className=" w-[600px] h-[600px] object-contain "
              />
            </div>
            <div className=" right-img absolute bottom-0 translate-y-[200px] right-[-20px]  rotate-[20deg] ">
              <Image
                src={course}
                alt="learner"
                width={400}
                height={400}
                className=" w-[450px] h-[450px] object-contain "
              />
            </div>
          </div>
        </div>
      </div>

      {/* laptop view */}
      <div className=" md:hidden overflow-hidden container max-w-full ">
        <div className=" px-2 py-8 relative bg-primary h-[380px] rounded-xl ">
          <p className=" text-center px-8 text-white font-[700] lg:text-4xl text-3xl">
            Download Now And Learn Today
          </p>
          <p className=" text-center mt-3 lg:text-base text-sm text-white">
            Download the application and start learning the language lessons
          </p>
          <div className=" mt-5 md:mt-8 flex w-full xl:justify-start justify-center items-center gap-2 md:gap-5">
            <Image
              onClick={handleClick}
              src={playStore}
              className=" h-[40px] cursor-pointer  w-auto xl:h-auto "
              alt="Play Store"
              width={150}
              height={100}
            />
            <Image
              onClick={handleClick}
              src={AppStore}
              className="h-[40px] cursor-pointer  w-auto  xl:h-auto"
              alt="App Store"
              width={150}
              height={100}
            />
          </div>

          <div className=" left-0 absolute bottom-0">
            <Image
              className="mid w-[160px]  h-[100px] object-contain "
              width={500}
              height={500}
              src={left}
              alt="left"
            />
          </div>

          <div className=" cur left-1/2 z-20 -translate-x-1/2 absolute bottom-0">
            <Image
              className="mid w-[140px] h-[100px] object-contain  "
              width={140}
              height={100}
              src={mid}
              alt="mid"
            />
          </div>
          <div className=" right-0 absolute bottom-0">
            <Image
              className="left w-[160px] h-[100px] object-contain "
              width={160}
              height={100}
              src={test}
              alt="left"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadNow;
