import ContactComponents from "@/page/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

const Contact = () => {
  return (
    <div>
      <ContactComponents />
    </div>
  );
};

export default Contact;
