"use client";
import Image from "next/image";
import travel1 from "@/public/travel1.jpg";

const HeroSection = () => {
    return (
        <div className="container max-w-full relative pb-5 md:min-h-[70vh] overflow-hidden lg:min-h-[30vh] xl:min-h-[80vh] lg:grid lg:grid-cols-4">
            <div className="col-span-2 h-[90vh] flex flex-col justify-center">
                <h1 className="text-[#333333] font-bold text-[22px] md:text-[30px] lg:text-[32px] xl:text-[45px]">
                    Discover Your Next Adventure
                </h1>

                <p className="mt-5 md:block text-[#333333] leading-7">
                    Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
                </p>

                <div className="mt-10 md:mt-8 flex w-full md:justify-start justify-center items-center gap-2">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 transition-transform transform hover:scale-105"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                            />
                        </svg>
                        Start Exploring
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 transition-transform transform hover:scale-105"
                    >
                        <svg
                            className="w-6 h-6 me-2 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="gray"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        How it works!
                    </button>
                </div>

                <div className="translate-y-[100px]">
                    <div className="flex w-full md:justify-start justify-center items-center gap-2 md:gap-5">
                        <div className="text-center px-4 py-2">
                            <span className="block text-2xl font-bold text-blue-600">500+</span>
                            <span className="block text-gray-600">Destinations</span>
                        </div>
                        <div className="text-center px-4 py-2">
                            <span className="block text-2xl font-bold text-blue-600">3K+</span>
                            <span className="block text-gray-600">Happy Travellers</span>
                        </div>
                        <div className="text-center px-4 py-2">
                            <span className="block text-2xl font-bold text-blue-600">4.9</span>
                            <span className="block text-gray-600">User Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-20">
                <Image
                    src={travel1}
                    className="rounded-xl lg:w-full lg:h-auto lg:object-contain xl:w-full xl:h-full"
                    alt="mobile"
                    width={480}
                    height={480}
                    priority
                />

                <div className="absolute bottom-[-20px] left-[20px] card bg-white flex items-center p-3 rounded w-fit shadow-lg">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="#333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
                        />
                    </svg>
                    <div className="info flex flex-col mr-14 ml-5">
                        <span>Next Trip</span>
                        <span>Chaung Thar, Myanmar</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
                </div>
            </div>

            <div className="mt-8 w-full px-5 flex items-center justify-center lg:hidden relative">

                <div className="fixed bottom-[30px] card bg-white flex items-center p-3 rounded w-fit shadow-lg z-20">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="#333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
                        />
                    </svg>
                    <div className="info flex flex-col mr-10 ml-5">
                        <span>Next Trip</span>
                        <span>Chaung Thar, Myanmar</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Book Now</button>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;