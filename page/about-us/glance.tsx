import IconDot from "@/common/icon/IconDot";
import React from "react";
import welcome from "@/public/about/welcome.png";
import Image from "next/image";
import discover from "@/public/about/discover.png";
import certificate from "@/public/about/certificate.png";

const Glance = () => {
  return (
    <div className=" my-5 md:my-20 container max-w-full">
      <h3 className="  text-center text-2xl md:text-4xl xl:text-5xl font-[500]">
        NexLynk at a Glance
      </h3>
      <div className=" md:mt-10 mt-5 md:grid gap-10 grid-cols-2">
        <div className=" md:hidden flex items-center justify-end">
          <Image src={welcome} alt="welcome" width={600} height={600} />
        </div>
        <div className=" mt-5 md:mt-0 space-y-3 md:space-y-5">
          <p className=" relative before:absolute md:ml-0 ml-4 before:left-[-15px] md:before:left-[-20px] before:w-[4px] md:before:w-[8px] before:h-[20px] md:before:h-[40px] before:top-[2px] md:before:top-[-5px] before:bg-primary font-[500] md:text-xl">
            Welcome to NexLynk!
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            NexLynk is your gateway to mastering languages with ease. We connect
            learners with high-quality courses from trusted local schools,
            tailored to suit various proficiency levels. Our platform offers
            engaging and interactive lessons that enable you to achieve your
            learning goals.
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            At NexLynk, our name embodies our mission:
          </p>
          <div className=" md:text-base text-[12px] text-webPara space-y-2">
            <div className=" flex gap-2">
              <span>
                <IconDot className="text-primary mt-1 w-4 h-4" />
              </span>
              <p>
                <span className=" font-[700] text-primary">‘Nex’:</span>{" "}
                Represents the{" "}
                <span className=" font-[700] text-primary">
                  ‘Next Generation’
                </span>
                , symbolizing our focus on empowering future learners.
              </p>
            </div>
            <div className=" flex gap-2">
              <span>
                <IconDot className="text-primary mt-1 w-4 h-4" />
              </span>
              <p>
                <span className=" font-bold text-primary"> ‘Lynk’: </span>{" "}
                Reflects the{" "}
                <span className=" font-bold text-primary">‘Link’ </span> that
                connects young learners to the world through innovative and
                smart learning solutions.
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden  md:flex items-center justify-end">
          <Image
            src={welcome}
            alt="welcome"
            className=" w-[550px] h-full object-contain"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className=" mt-10 md:grid gap-10 grid-cols-2">
        <div className=" flex items-center justify-start">
          <Image src={discover} alt="welcome" width={590} height={600} />
        </div>
        <div className=" mt-5 md:mt-0 space-y-3 md:space-y-5">
          <p className=" relative before:absolute md:ml-0 ml-4 before:left-[-15px] md:before:left-[-20px] before:w-[4px] md:before:w-[8px] before:h-[20px] md:before:h-[40px] before:top-[2px] md:before:top-[-5px] before:bg-primary font-[500] md:text-xl">
            Discover Our Courses
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            Explore a diverse range of courses designed to meet your unique
            needs. Learn from top educators through multimedia lessons and
            interactive tools that make learning effective and enjoyable.
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            Embark on a transformative journey with NexLynk. Whether you’re
            exploring a new language for personal growth or professional
            advancement, our platform equips you with the tools you need to
            succeed.
          </p>
        </div>
      </div>
      <div className=" mt-10 md:grid gap-10 grid-cols-2">
        <div className=" md:hidden flex items-center justify-start">
          <Image
            src={certificate}
            alt="welcome"
            className=" md:hidden "
            width={590}
            height={600}
          />
        </div>
        <div className=" mt-5 md:mt-0 space-y-3 md:space-y-5">
          <p className=" relative before:absolute md:ml-0 ml-4 before:left-[-15px] md:before:left-[-20px] before:w-[4px] md:before:w-[8px] before:h-[20px] md:before:h-[40px] before:top-[2px] md:before:top-[-5px] before:bg-primary font-[500] md:text-xl">
            Guidance and Certification
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            Learn at your convenience—whether at home or on the go. NexLynk’s
            platform allows you to access high-quality courses anytime,
            empowering you to learn at your own pace.
          </p>
          <p className=" text-[12px] md:text-base text-webPara">
            Our courses align with recognized educational standards, ensuring
            you receive robust guidance throughout your journey. Earn
            certifications that validate your skills and open new career
            opportunities.
          </p>
        </div>
        <div className=" hidden md:flex items-center justify-start">
          <Image
            src={certificate}
            alt="welcome"
            className=" "
            width={590}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Glance;
