import IconInovation from "@/common/icon/IconInovation";
import IconRecycle from "@/common/icon/IconRecycle";
import IconTrans from "@/common/icon/IconTrans";
import ToogleComponent from "@/components/toogle";

const OurStandard = () => {
  return (
    <div className=" xl:pt-16 md:pb-10 container max-w-full">
      <div className=" md:space-y-4  space-y-2">
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className=" text-[20px] md:text-[35px] xl:text-[40px] tracking-normal text-center font-[500]  ">
            Our Standards
          </h3>
        </div>
        <p className=" md:text-[18px] md:leading-7 text-[12px] text-webPara text-center font-[500] mt-2">
          NexLynk is an engaging, supportive learning environment designed to
          help students reach their full potential.
        </p>

        <div className=" pt-2 md:pt-4 flex items-center justify-center">
          <ToogleComponent name="Learn More About Us" />
        </div>
      </div>

      <div className=" mt-5 grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-6">
        <div className=" space-y-2 md:space-y-4 rounded-2xl border p-3 md:p-7">
          <IconTrans className=" w-10 h-10 md:w-16 md:h-16" />
          <p className=" md:text-xl text-sm font-[600]">Transparency</p>
          <p className=" font-[500] md:text-base text-[12px] text-webPara">
            Open communication and clear processes foster trust and
            collaboration.
          </p>
        </div>
        <div className=" space-y-2 md:space-y-4 rounded-2xl border p-3 md:p-7">
          <IconRecycle className=" w-10 h-10 md:w-16 md:h-16" />
          <p className=" md:text-xl text-sm font-[600]">Accessibility</p>
          <p className=" font-[500] md:text-base text-[12px] text-webPara">
            We provide equal opportunities & resources for everyone to succeed.
          </p>
        </div>
        <div className=" space-y-2 md:space-y-4 rounded-2xl border p-3 md:p-7">
          <IconInovation className=" w-10 h-10 md:w-16 md:h-16" />
          <p className=" md:text-xl text-sm font-[600]">Innovation</p>
          <p className=" font-[500] md:text-base text-[12px] text-webPara">
            We embrace new ideas and technologies to drive continuous
            improvement.
          </p>
        </div>
        <div className=" space-y-2 md:space-y-4 rounded-2xl border p-3 md:p-7">
          <IconTrans className=" w-10 h-10 md:w-16 md:h-16" />
          <p className=" md:text-xl text-sm font-[600]">Long-term growth</p>
          <p className=" font-[500] md:text-base text-[12px] text-webPara">
            We invest in our people and resources to ensure sustainable success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStandard;
