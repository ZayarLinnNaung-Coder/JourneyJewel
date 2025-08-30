"use client";
import React, {useEffect, useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WishlistManager from "../../common/utils/WishlistManager"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PlacesPage = () => {
    const containerRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const searchTimeout = useRef(null);

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
    const [wishlistItems, setWishlistItems] = useState(new Set());

    useEffect(() => {
        // Combine both initial data fetching operations
        const initializePage = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8090/api/places?page=0&size=99999");
                const data = await response.json();
                setPlaces(data.content);
                setWishlistItems(WishlistManager.getWishlistSet());
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    const fetchSuggestions = async (query) => {
        if (!query) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await fetch(`http://localhost:8090/api/places/suggest?query=${query}`);
            const data = await response.json(); // data will be string[]
            setSuggestions(data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowSuggestions(true);

        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(() => {
            fetchSuggestions(value);
        }, 300);
    };

    const handleSuggestionClick = (suggestionText) => {
        setSearchQuery(suggestionText);
        setShowSuggestions(false);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8090/api/places?name=${searchQuery}`);
            const data = await response.json();
            setFilteredPlaces(data.content);
        } catch (error) {
            console.error("Error searching places:", error);
        } finally {
            setLoading(false);
        }
    };

    const routeToageDetails = (id) => {
        localStorage.setItem("place", id)
        window.location.href = "/place-details"
    }

    const handleWishlistToggle = (id) => {
        const wasAdded = WishlistManager.toggleWishlist(id);
        setWishlistItems(WishlistManager.getWishlistSet());

        if (wasAdded) {
            console.log('❤️ Added to wishlist!');
        } else {
            console.log('💔 Removed from wishlist!');
        }
    };

    return (
        <div ref={containerRef}>
            <div className="our-fe pb-10 max-w-full container">
                {loading ? (
                    <div className="flex justify-center items-center min-h-[50vh]">
                        <div className="text-center py-10">Loading...</div>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleSearch} className="max-w-md ml-auto mt-10 sm:mt-20 px-4 sm:px-0 relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search places..."
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                    onFocus={() => setShowSuggestions(true)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                                >
                                    Search
                                </button>
                            </div>

                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            className="p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </form>

                        <div className="flex justify-between flex-wrap mt-10">
                            {(filteredPlaces.length > 0 ? filteredPlaces : places).map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-[23%] my-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                                >
                                    <a href="#">
                                        <img
                                            className="rounded-t-lg w-[100%] h-[200px] object-cover"
                                            src={item.imageUrl}
                                            alt={item.name}
                                        />
                                    </a>
                                    <div className="p-5">
                                        {item.isAvailable === 'true' ? (
                                                                            <span
                                                                                className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-green-50 text-green-700 border border-green-200 hover:scale-105 transition-transform duration-200">
                                            Available
                                        </span>
                                                                        ) : (
                                                                            <span
                                                                                className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-red-50 text-red-700 border border-red-200 hover:scale-105 transition-transform duration-200">
                                            Not Available
                                        </span>
                                                                        )}
                                    </div>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                {item.name}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700">
                                            {item.description.length > 100
                                                ? item.description.slice(0, 100).split(' ').slice(0, -1).join(' ') + '...'
                                                : item.description
                                            }
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <a
                                                onClick={() => routeToageDetails(item.id)}
                                                className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                                            >
                                                See Details
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round" strokeWidth="2"
                                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                            <svg
                                                className={`w-6 h-6 cursor-pointer transition-all duration-200 transform hover:scale-110 ${
                                                    wishlistItems.has(item.id)
                                                        ? 'text-red-500 fill-red-500'
                                                        : 'text-gray-800 hover:text-red-300'
                                                }`}
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill={wishlistItems.has(item.id) ? "currentColor" : "none"}
                                                viewBox="0 0 24 24"
                                                onClick={() => handleWishlistToggle(item.id)}
                                            >
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PlacesPage;