"use client";
import React, {useEffect, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Transportation {
    id: string;
    name: string;
    description: string;
    timeList: string;
    phoneNumber: string;
    priceList: Array<{
        placeId: string;
        price: number;
    }>;
}

interface Hotel {
    id: string;
    name: string;
    phoneNumber: string;
    imageUrl: string;
    description: string;
    placeId: string;
    roomTypes: Array<{
        roomTypeName: string;
        price: number;
    }>;
    mealPlans: Array<{
        mealPlanName: string;
        price: number;
    }>;
}

const PlaceDetails = () => {
    const [place, setPlace] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);

    // Form state
    const [totalPeople, setTotalPeople] = useState(1);
    const [duration, setDuration] = useState(1);
    const [transportations, setTransportations] = useState<Transportation[]>([]);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [selectedTransportation, setSelectedTransportation] = useState<Transportation | null>(null);
    const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
    const [selectedRoomType, setSelectedRoomType] = useState<{roomTypeName: string; price: number} | null>(null);
    const [selectedMealPlan, setSelectedMealPlan] = useState<{mealPlanName: string; price: number} | null>(null);

    // Dropdown states
    const [transportDropdownOpen, setTransportDropdownOpen] = useState(false);
    const [hotelDropdownOpen, setHotelDropdownOpen] = useState(false);
    const [roomTypeDropdownOpen, setRoomTypeDropdownOpen] = useState(false);
    const [mealPlanDropdownOpen, setMealPlanDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const placeId = localStorage.getItem("place") as string;

                // Fetch place details
                const placeResponse = await fetch(`http://localhost:8090/api/places/${placeId}`);
                const placeData = await placeResponse.json();
                setPlace(placeData);

                // Fetch transportations
                const transportResponse = await fetch("http://localhost:8090/api/transportations?size=99999&page=0");
                const transportData = await transportResponse.json();
                setTransportations(transportData.content || []);

                // Fetch hotels
                const hotelResponse = await fetch("http://localhost:8090/api/hotels?size=99999&page=0");
                const hotelData = await hotelResponse.json();
                setHotels(hotelData.content || []);

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Calculate prices
    const getTransportationPrice = () => {
        if (!selectedTransportation || !place) return 0;
        console.log(selectedTransportation)
        return  selectedTransportation.priceList.length > 0 ? selectedTransportation.priceList[0].price : 0;
    };

    const getHotelPrice = () => {
        if (!selectedRoomType) return 0;
        return selectedRoomType.price * duration;
    };

    const getMealPrice = () => {
        if (!selectedMealPlan) return 0;
        return selectedMealPlan.price * totalPeople * duration;
    };

    const getTotalPrice = () => {
        const basePrice = place ? parseFloat(place.minBudget) * totalPeople : 0;
        return basePrice + getTransportationPrice() + getHotelPrice() + getMealPrice();
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    // Image modal functions
    const allImages = [
        { url: place.imageUrl, alt: "Main image" },
        ...(place.additionalImages || []).map((img: any, index: number) => ({
            url: img.url,
            alt: `Additional image ${index + 1}`
        }))
    ];

    const openImageModal = (index: number) => {
        setSelectedImageIndex(index);
        setShowImageModal(true);
    };

    const closeImageModal = () => {
        setShowImageModal(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="mt-10">
            <div className="our-fe pb-10 max-w-full container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 p-4">
                        <div className="grid md:grid-cols-1">
                            {/* Main Image */}
                            <div className="relative group cursor-pointer" onClick={() => openImageModal(0)}>
                                <img
                                    src={place.imageUrl}
                                    alt="Main place image"
                                    className="rounded-lg w-full h-[200px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="m-0 mt-5">
                                <p className="text-[32px] font-bold">{place.name}</p>
                                <p className="mt-5 text-justify">
                                    {place.description}
                                </p>

                                <p className="mt-10">
                                    <div className="flex">
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="#333" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M10.0001 13c0-.8883.4022-2.3826 1-3.27163M18.05 14c0 3.3137-2.6862 6-6 6-3.31366 0-5.99995-2.6863-5.99995-6S8.73634 4 12.05 4c3.3138 0 6 6.6863 6 10Z"/>
                                        </svg>
                                        <span>{place.place}</span>
                                    </div>
                                    <span className="flex mt-2">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                          <path stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                                        </svg>
                                        <span className="text-blue-900 mr-2 font-bold">{place.minBudget}</span> MMK
                                    </span>
                                </p>
                            </div>

                            {/* Additional Images Gallery */}
                            {place.additionalImages && place.additionalImages.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">More Images</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                        {place.additionalImages.map((image: any, index: number) => (
                                            <div
                                                key={index}
                                                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                                onClick={() => openImageModal(index + 1)}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={`Additional image ${index + 1}`}
                                                    className="w-full h-24 sm:h-28 md:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-2 left-2 right-2">
                                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                    {index + 2}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-1 p-4">
                        <p className="font-bold">Customize your trip</p>

                        <div className="mt-10">
                            <div className="flex">
                                {/* Total People Counter */}
                                <div className="mr-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Total People</label>
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button
                                            type="button"
                                            onClick={() => setTotalPeople(Math.max(1, totalPeople - 1))}
                                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            value={totalPeople}
                                            onChange={(e) => setTotalPeople(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setTotalPeople(totalPeople + 1)}
                                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Please select total people</p>
                                </div>

                                {/* Duration Counter */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Duration</label>
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button
                                            type="button"
                                            onClick={() => setDuration(Math.max(1, duration - 1))}
                                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2" d="M1 1h16"/>
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            value={duration}
                                            onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setDuration(duration + 1)}
                                            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Please select total nights</p>
                                </div>
                            </div>

                            {/* Transportation Dropdown */}
                            <div className="relative inline-block text-left w-full mt-5">
                                <p className="mb-2">Transportation</p>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setTransportDropdownOpen(!transportDropdownOpen)}
                                        className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                        {selectedTransportation ? selectedTransportation.name : "Select Transportation"}
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                {transportDropdownOpen && (
                                    <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                                        <div className="py-1">
                                            {transportations.map((transport) => (
                                                <button
                                                    key={transport.id}
                                                    onClick={() => {
                                                        setSelectedTransportation(transport);
                                                        setTransportDropdownOpen(false);
                                                    }}
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <div>
                                                        <p className="font-medium">{transport.name}</p>
                                                        <p className="text-xs text-gray-500">{transport.timeList}</p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Hotel Dropdown */}
                            <div className="relative inline-block text-left w-full mt-5">
                                <p className="mb-2">Hotel</p>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setHotelDropdownOpen(!hotelDropdownOpen)}
                                        className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                        {selectedHotel ? selectedHotel.name : "Select Hotel"}
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                {hotelDropdownOpen && (
                                    <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                                        <div className="py-1">
                                            {hotels.map((hotel) => (
                                                <button
                                                    key={hotel.id}
                                                    onClick={() => {
                                                        setSelectedHotel(hotel);
                                                        setSelectedRoomType(null);
                                                        setSelectedMealPlan(null);
                                                        setHotelDropdownOpen(false);
                                                    }}
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    <div>
                                                        <p className="font-medium">{hotel.name}</p>
                                                        <p className="text-xs text-gray-500">{hotel.phoneNumber}</p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between flex-wrap">
                                {/* Room Type Dropdown */}
                                <div className="relative inline-block text-left w-full md:w-[48%] mt-5">
                                    <p className="mb-2">Room Type</p>
                                    <div>
                                        <button
                                            type="button"
                                            disabled={!selectedHotel}
                                            onClick={() => setRoomTypeDropdownOpen(!roomTypeDropdownOpen)}
                                            className={`inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 shadow-xs ring-gray-300 ring-inset ${
                                                selectedHotel ? 'text-gray-900 hover:bg-gray-50' : 'text-gray-400 cursor-not-allowed'
                                            }`}>
                                            {selectedRoomType ? `${selectedRoomType.roomTypeName} - ${selectedRoomType.price} MMK` : "Select Room Type"}
                                            <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>

                                    {roomTypeDropdownOpen && selectedHotel && (
                                        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                                            <div className="py-1">
                                                {selectedHotel.roomTypes.map((roomType, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedRoomType(roomType);
                                                            setRoomTypeDropdownOpen(false);
                                                        }}
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        <div>
                                                            <p className="font-medium">{roomType.roomTypeName}</p>
                                                            <p className="text-xs text-gray-500">{roomType.price} MMK per night</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Meal Plan Dropdown */}
                                <div className="relative inline-block text-left w-full md:w-[48%] mt-5">
                                    <p className="mb-2">Meal Plan</p>
                                    <div>
                                        <button
                                            type="button"
                                            disabled={!selectedHotel}
                                            onClick={() => setMealPlanDropdownOpen(!mealPlanDropdownOpen)}
                                            className={`inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold ring-1 shadow-xs ring-gray-300 ring-inset ${
                                                selectedHotel ? 'text-gray-900 hover:bg-gray-50' : 'text-gray-400 cursor-not-allowed'
                                            }`}>
                                            {selectedMealPlan ? `${selectedMealPlan.mealPlanName} - ${selectedMealPlan.price} MMK` : "Select Meal Plan"}
                                            <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </div>

                                    {mealPlanDropdownOpen && selectedHotel && (
                                        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                                            <div className="py-1">
                                                {selectedHotel.mealPlans.map((mealPlan, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedMealPlan(mealPlan);
                                                            setMealPlanDropdownOpen(false);
                                                        }}
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        <div>
                                                            <p className="font-medium">{mealPlan.mealPlanName}</p>
                                                            <p className="text-xs text-gray-500">{mealPlan.price} MMK per person/day</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="mb-20"></p>
                            <hr/>

                            {/* Pricing */}
                            <div className="prices my-5">
                                <div className="flex justify-between mb-1">
                                    <p>Base Price ({totalPeople} people)</p>
                                    <p>{(parseFloat(place.minBudget) * totalPeople).toLocaleString()} MMK</p>
                                </div>
                                {selectedTransportation && (
                                    <div className="flex justify-between mb-1">
                                        <p>Transportation ({selectedTransportation.name})</p>
                                        <p>{getTransportationPrice().toLocaleString()} MMK</p>
                                    </div>
                                )}
                                {selectedRoomType && (
                                    <div className="flex justify-between mb-1">
                                        <p>Hotel ({duration} nights)</p>
                                        <p>{getHotelPrice().toLocaleString()} MMK</p>
                                    </div>
                                )}
                                {selectedMealPlan && (
                                    <div className="flex justify-between mb-1">
                                        <p>Meals ({selectedMealPlan.mealPlanName})</p>
                                        <p>{getMealPrice().toLocaleString()} MMK</p>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <p className="font-bold">Total</p>
                                    <p className="font-bold">{getTotalPrice().toLocaleString()} MMK</p>
                                </div>
                            </div>

                            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal/Lightbox */}
            {showImageModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation arrows */}
                        {allImages.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Main modal image */}
                        <img
                            src={allImages[selectedImageIndex]?.url}
                            alt={allImages[selectedImageIndex]?.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                            {selectedImageIndex + 1} / {allImages.length}
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    {allImages.length > 1 && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-xs overflow-x-auto">
                            {allImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                        index === selectedImageIndex
                                            ? 'border-white shadow-lg'
                                            : 'border-transparent opacity-60 hover:opacity-80'
                                    }`}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Click outside to close dropdowns */}
            {(transportDropdownOpen || hotelDropdownOpen || roomTypeDropdownOpen || mealPlanDropdownOpen) && (
                <div
                    className="fixed inset-0 z-5"
                    onClick={() => {
                        setTransportDropdownOpen(false);
                        setHotelDropdownOpen(false);
                        setRoomTypeDropdownOpen(false);
                        setMealPlanDropdownOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default PlaceDetails;