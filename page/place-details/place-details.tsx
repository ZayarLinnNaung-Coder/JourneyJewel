/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const HeroFeatureSection = () => {


    return (
        <div className="">
            <div className="our-fe pb-10 max-w-full container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-blue-100 p-4">

                        <div className="grid md:grid-cols-2">
                            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123618/lake-como.jpeg" alt=""/>
                            <div>
                                <p className="text-24px">Yangon, Myanmar</p>
                            </div>
                        </div>

                    </div>

                    <div className="md:col-span-1 bg-green-100 p-4">
                        Sidebar / Secondary
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroFeatureSection;

function t(arg0: string) {
    throw new Error("Function not implemented.");
}