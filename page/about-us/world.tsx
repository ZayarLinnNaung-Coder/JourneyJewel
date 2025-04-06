"use client";
import Global from "@/public/about/Global.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import korea from "@/public/korea.png";
import tayout from "@/public/tayout.png";
import japn from "@/public/japan.png";
import uk from "@/public/uk.png";

gsap.registerPlugin(useGSAP);

const World = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });

    mm.add("(min-width: 767px)", () => {
      // For devices narrower than 768px
      tl.to(".world", {
        rotation: 20,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.fromTo(
        ".img",
        { scale: 1.2, duration: 3 },
        { scale: 1, duration: 3 },
        "<"
      );
    });
  }, []);

  return (
    <div className="container mt-10 max-w-full">
      <div className="gap-5 flex  relative flex-col items-center overflow-hidden p-4 md:p-8 rounded-2xl h-[350px] md:h-[500px] bg-gradient-to-b from-[#0891B2] to-[#88CDD4]">
        <h6 className="text-white text-2xl md:text-5xl font-bold text-center">
          &quot;Expanding Our Horizons&quot;
        </h6>
        <p className="md:w-[900px] text-center text-white text-[12px] md:text-lg font-[500]">
          Starting with Japanese, we aim to offer language courses worldwide,
          connecting learners with diverse linguistic and cultural
          opportunities.
        </p>
        <button
          className="md:w-[175px] md:py-3 md:px-0 px-7  py-2 md:text-base text-[12px] text-primary rounded-full font-[600] bg-[#C8E8EB]"
          aria-label="join"
        >
          Join Now
        </button>

        <Image
          src={korea}
          alt="korea"
          className=" z-20 img md:w-auto w-[90px] h-auto absolute left-[12%] md:left-[20%] top-1/2 "
          width={100}
          height={100}
        />

        <Image
          src={japn}
          alt="japan"
          className=" md:w-auto md:h-auto w-[90px] z-20 img absolute left-[10px] md:left-[12%] top-[73%] md:top-[75%] "
          width={100}
          height={100}
        />
        <Image
          src={tayout}
          alt="tayout"
          className=" z-20 img md:w-auto w-[90px] h-auto absolute right-[12%] md:right-[20%] top-1/2 "
          width={100}
          height={100}
        />

        <Image
          src={uk}
          alt="uk"
          className=" md:w-auto md:h-auto w-[90px] z-20 img absolute right-[10px] md:right-[12%] top-[73%] md:top-[75%] "
          width={100}
          height={100}
        />

        <div className="  hidden md:block md:translate-y-[-120px] xl:translate-y-[-240px]">
          <Image
            src={Global}
            alt="global"
            className="w-screen world object-contain h-full"
            width={900}
            height={900}
          />
        </div>

        <Image
          src={Global}
          className=" md:hidden object-cover absolute left-0  translate-y-[40px] h-[700px]"
          width={1000}
          height={1000}
          alt="global"
        />
      </div>
    </div>
  );
};

export default World;
