import AboutUS from "@/page/about-us";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <AboutUS />
    </div>
  );
};

export default page;
