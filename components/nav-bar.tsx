"use client";
import Image from "next/image";
import logo from "../public/logo-tag.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/common/assets/dummy";
import IconList from "@/common/icon/IconList";
import IconCross from "@/common/icon/IconCross";
import { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        ".nav",
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(".nav", { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [open]);

  return (
      <div className=" bg-white py-2 flex items-center justify-between max-w-full container">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-[#8048ECAA] to-[#695FF0DD] text-transparent bg-clip-text">
              JourneyJewel
          </h1>

          <div className=" hidden lg:flex items-center gap-5">
              <nav className=" flex items-center gap-8">
                  {navLinks.map((item) => (
                      <Link
                          className={`${
                              item.link == path &&
                              " text-primary relative before:absolute before:w-full font-bold before:h-[2px] before:bg-primary before:bottom-0"
                          }`}
                          key={item.id}
                          href={item.link}
                      >
                          {item.name}
                      </Link>
                  ))}
              </nav>
          </div>
          <button
              aria-label="list"
              className=" lg:hidden"
              onClick={() => setOpen(!open)}
          >
              <IconList/>
          </button>

          <div
              onClick={() => setOpen(false)}
              className={`nav ${
                  !open ? "translate-x-[1000px]" : ""
              }  fixed lg:hidden bg-black/10 flex justify-end top-0 right-0 z-20 w-full h-full shadow-lg`}
          >
              <div className=" lg:hidden w-2/3 h-full bg-white">
                  <button
                      aria-label="icon-cross"
                      className=" m-2 border p-2 rounded-md"
                      onClick={() => setOpen(false)}
                  >
                      <IconCross/>
                  </button>

                  <div className=" items-center mt-5 flex flex-col gap-5">
                      <>
                          {navLinks.map((nav) => (
                              <Link
                                  className={`${
                                      nav.link == path &&
                                      " text-primary relative before:absolute before:w-full font-bold before:h-[2px] before:bg-primary before:bottom-0"
                                  }`}
                                  key={nav.id}
                                  href={nav.link}
                                  onClick={() => setOpen(false)}
                              >
                                  {nav.name}
                              </Link>
                          ))}
                      </>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Navbar;
