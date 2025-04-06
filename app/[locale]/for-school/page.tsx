import ForSchoolComponents from "@/page/for-school";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "For Schools",
};

const ForSchool = () => {
  return (
    <>
      <ForSchoolComponents />
    </>
  );
};

export default ForSchool;
