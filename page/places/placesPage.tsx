 /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const PlacesPage = () => {


    const places = [
        {
            id: 1,
            name: ''
        },
        {
            id: 1,
            name: ''
        },
        {
            id: 1,
            name: ''
        },
        {
            id: 1,
            name: ''
        }
    ];


    return (
      <div className="">
          <div className="our-fe pb-10 max-w-full container">
              <form className="max-w-md ml-auto mt-10 sm:mt-20 px-4 sm:px-0">
                  <label htmlFor="default-search"
                         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search"
                             className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                             placeholder="Enter your wish" required/>
                      <button type="submit"
                              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Search
                      </button>
                  </div>
              </form>

              <div className="flex justify-between flex-wrap mt-10">
                  {places.map((item) => (
                      <div
                          className="w-[32%] my-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                          <a href="#">
                              <img className="rounded-t-lg"
                                   src="https://publish.purewow.net/wp-content/uploads/sites/2/2024/02/most-beautiful-places-in-the-world_Seljalandsfoss-Iceland.jpg?fit=1360%2C800"
                                   alt=""/>
                          </a>
                          <div className="p-5">
                              <a href="#">
                                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy
                                      technology acquisitions 2021</h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise
                                  technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              <div className="flex items-center justify-between">
                                  <a href="#"
                                     className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                      See Details
                                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                      </svg>
                                  </a>
                                  <svg className="w-6 h-6 text-gray-800" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                       viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-10 flex justify-center">
                  <a href="#"
                     className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                      Previous
                  </a>
                  <a href="#"
                     className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                      Next
                  </a>
              </div>

          </div>
      </div>

    );
};

 export default PlacesPage;

