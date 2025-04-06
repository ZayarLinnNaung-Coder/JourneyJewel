import { faqs } from "@/common/assets/dummy";
import IconStart from "@/common/icon/IconStart";
import React from "react";
import FaqBody from "./faq-body";

const FAQS = () => {
    return (
        <div className="bg-blue-600 text-white text-center py-20 sm:py-[100px]">
            <h2 className=" text-[24px] lg:text-[40px] font-bold mb-4">Get Exclusive Travel Deals</h2>
            <p className="mb-6">Subscribe to our newsletter and receive special offers in your inbox</p>

            <form className="max-w-md mx-auto mt-10 sm:mt-20 px-4 sm:px-0">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                           placeholder="Enter your email" required/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Contact Us
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FAQS;
