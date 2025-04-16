import React from "react";
import HeroSection from "./home";
import PopularDestinations from "./popularDestinations";
import HowWorks from "./app-features";
import Feedback from "./how-work";
import ContactUs from "./faq";
import DownloadNow from "./download-now";

const HomeComponents = () => {
  return (
    <div className=" overflow-x-hidden">
      <HeroSection />
      <PopularDestinations />
        <Feedback />
      <HowWorks />
      <ContactUs />
    </div>
  );
};

export default HomeComponents;
