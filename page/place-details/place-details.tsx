"use client";
import React from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const HeroFeatureSection = () => {

    return (
        <div className="mt-10">
            <div className="our-fe pb-10 max-w-full container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 p-4">

                        <div className="grid md:grid-cols-1">
                            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/4/2023/05/08123618/lake-como.jpeg" alt="" className="rounded-lg w-full h-[200px] md:h-[400px]"/>
                            <div className="m-0 mt-5">
                                <p className="text-[32px] font-bold">Yangon, Myanmar</p>
                                <p className="mt-5 text-justify">
                                    Chaung Thar is one of Myanmar’s most popular beach destinations — a laid-back coastal town located on the Bay of Bengal, in Ayeyarwady Region, about 6 hours’ drive west of Yangon. It’s known for its accessible location, local vibes, and relatively affordable accommodations compared to more upscale beaches like Ngapali.
                                </p>

                                <p className="mt-10">
                                    <div className="flex">
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="#333" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M10.0001 13c0-.8883.4022-2.3826 1-3.27163M18.05 14c0 3.3137-2.6862 6-6 6-3.31366 0-5.99995-2.6863-5.99995-6S8.73634 4 12.05 4c3.3138 0 6 6.6863 6 10Z"/>
                                        </svg>
                                        <span>Yangon, Myanmar</span>

                                    </div>
                                    <span className="flex mt-2">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                          <path stroke="#555" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                                        </svg>
                                        <span className="text-blue-900 mr-2 font-bold">500000</span> MMK
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="md:col-span-1 p-4">
                        <p className="font-bold">Customize your trip</p>


                        <div className="mt-10">
                            <div className="flex">
                                <div className="mr-5">
                                    <label htmlFor="quantity-input"
                                           className="block mb-2 text-sm font-medium text-gray-900">Total People</label>
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button type="button" id="decrement-button"
                                                data-input-counter-decrement="quantity-input"
                                                className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter
                                               aria-describedby="helper-text-explanation"
                                               className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                               placeholder="999" required/>
                                        <button type="button" id="increment-button"
                                                data-input-counter-increment="quantity-input"
                                                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p id="helper-text-explanation"
                                       className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select total
                                        people</p>
                                </div>

                                <div>
                                    <label htmlFor="quantity-input"
                                           className="block mb-2 text-sm font-medium text-gray-900">Duration</label>
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button type="button" id="decrement-button"
                                                data-input-counter-decrement="quantity-input"
                                                className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter
                                               aria-describedby="helper-text-explanation"
                                               className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                               placeholder="999" required/>
                                        <button type="button" id="increment-button"
                                                data-input-counter-increment="quantity-input"
                                                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p id="helper-text-explanation"
                                       className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select total
                                        nights</p>
                                </div>
                            </div>

                            <div className="relative inline-block text-left w-full mt-5">
                                <p className="mb-2">Transportation</p>
                                <div>
                                    <button type="button"
                                            className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Select Bus
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor"
                                             aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                           tabIndex="-1" id="menu-item-0">Account settings</a>
                                    </div>
                                </div>
                            </div>

                            <div className="relative inline-block text-left w-full mt-5">
                                <p className="mb-2">Hotel</p>
                                <div>
                                    <button type="button"
                                            className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Select Hotel
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor"
                                             aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                           tabIndex="-1" id="menu-item-0">Account settings</a>
                                    </div>
                                </div>

                                <div className="flex justify-between flex-wrap">
                                    <div className="relative inline-block text-left w-full md:w-[48%] mt-5">
                                        <p className="mb-2">Room Type</p>
                                        <div>
                                            <button type="button"
                                                    className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Select Room Type
                                                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                            tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                   role="menuitem"
                                                   tabIndex="-1" id="menu-item-0">Account settings</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative inline-block text-left w-full md:w-[48%] mt-5">
                                        <p className="mb-2">Meal Plan</p>
                                        <div>
                                            <button type="button"
                                                    className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                Select Meal Plan
                                                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true" data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
                                            tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700"
                                                   role="menuitem"
                                                   tabIndex="-1" id="menu-item-0">Account settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mb-20"></p>
                            <hr/>

                            <div className="prices my-5">
                                <div className="flex justify-between mb-1">
                                    <p>Base Price</p>
                                    <p>500,000 MMK</p>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <p>Transportation</p>
                                    <p>500,000 MMK</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-bold">Total</p>
                                    <p className="font-bold">1,000,000 MMK</p>
                                </div>
                            </div>

                            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroFeatureSection;