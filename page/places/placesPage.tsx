"use client";
import React, {useEffect, useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRouter} from "next/navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PlacesPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".our-fe", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".our-fe",
                start: "top 80%",
            }
        });
    }, []);

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const response = await fetch("http://localhost:8090/api/places?page=0&size=6");  // Replace with your real API URL
                const data = await response.json();
                setPlaces(data.content);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBenefits().then(r => console.log(r));
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    const routeToageDetails = (id) => {
        localStorage.setItem("place", id)
        window.location.href = "/place-details"
    }

    return (
        <div ref={containerRef}>
            <div className="our-fe pb-10 max-w-full container">
                <form className="max-w-md ml-auto mt-10 sm:mt-20 px-4 sm:px-0">
                    {/* Search input */}
                </form>

                <div className="flex justify-between flex-wrap mt-10">
                    {places.map((item, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[23%] my-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                        >
                            <a href="#">
                                <img
                                    className="rounded-t-lg w-[100%] h-[200px]"
                                    src={item.imageUrl}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                        {item.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <a
                                        onClick={() => routeToageDetails(item.id)}
                                        className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    >
                                        See Details
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlacesPage;
