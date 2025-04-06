"use client";
import { navLinks } from "@/common/assets/dummy";
import IconChar from "@/common/icon/IconChar";
import IconInstragram from "@/common/icon/IconInstragram";
import IconLinkedin from "@/common/icon/IconLinkedin";
import IconX from "@/common/icon/IconX";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <div className="   md:my-8 container max-w-full">
      <div className=" border-t pt-5 md:pt-3 md:flex items-center justify-between">
        <nav className=" flex items-center md:gap-5 justify-between">
          {navLinks.map((link) => (
            <Link
              className={`${
                path == link.link ? "bg-[#C8E8EB]" : "bg-[#F4F7F9] "
              } border-[#DDE5ED] border px-3 py-1 text-sm  md:py-2 md:px-5 rounded-full`}
              href={link.link}
              key={link.id}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="  py-4 justify-center flex items-center gap-5">
          <IconX className=" md:w-auto md:h-auto h-5 w-5" />
          <IconInstragram className=" md:w-auto md:h-auto h-5 w-5" />
          <IconLinkedin className=" md:w-auto md:h-auto h-5 w-5" />
          <IconChar className=" md:w-auto md:h-auto h-5 w-5" />
        </div>
      </div>

      <div className=" mt-4 justify-between flex items-center gap-2">
        <p className=" text-[8px] md:text-sm  text-webPara">
          copyright © 2024 - Made With Love By Hsu Myat Yadanar Aung
        </p>
        <div className=" md:w-[700px]  border"></div>
        <p className=" text-[8px] md:text-sm  text-webPara">
          All Right Reserved to JourneyJewel
        </p>
      </div>
    </div>
  );
};

export default Footer;
