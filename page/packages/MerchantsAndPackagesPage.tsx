"use client";
import React, {useEffect, useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WishlistManager from "../../common/utils/WishlistManager"

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MerchantsAndPackagesPage = () => {
    const containerRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMerchants, setFilteredMerchants] = useState([]);
    const [selectedMerchant, setSelectedMerchant] = useState(null);

    useGSAP(() => {
        gsap.from(".merchants-hero", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(".merchant-card", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".merchants-grid",
                start: "top 80%",
            }
        });
    }, []);

    const [merchants, setMerchants] = useState([]);
    const [merchantPackages, setMerchantPackages] = useState({});
    const [loading, setLoading] = useState(true);
    const [wishlistItems, setWishlistItems] = useState(new Set());

    useEffect(() => {
        const initializePage = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:8090/api/merchants?page=0&size=99999");
                const data = await response.json();
                const merchantsData = Array.isArray(data.data.content) ? data.data.content : Array.isArray(data) ? data : [];
                setMerchants(merchantsData);
                setFilteredMerchants(merchantsData); // Initialize filtered merchants with all merchants
                setWishlistItems(WishlistManager.getWishlistSet());
            } catch (error) {
                console.error("Error fetching merchants:", error);
                setMerchants([]);
                setFilteredMerchants([]);
            } finally {
                setLoading(false);
            }
        };

        initializePage();
    }, []);

    const fetchMerchantPackages = async (merchantId) => {
        if (merchantPackages[merchantId]) return; // Already loaded

        try {
            const response = await fetch(`http://localhost:8090/api/merchants/${merchantId}/packages`);
            const data = await response.json();
            setMerchantPackages(prev => ({
                ...prev,
                [merchantId]: Array.isArray(data.data.content) ? data.data.content : Array.isArray(data) ? data : []
            }));
        } catch (error) {
            console.error("Error fetching packages:", error);
            setMerchantPackages(prev => ({
                ...prev,
                [merchantId]: []
            }));
        }
    };

    // Local filtering function
    const filterMerchants = (query) => {
        if (!query.trim()) {
            return merchants;
        }

        const lowercaseQuery = query.toLowerCase();
        return merchants.filter(merchant => {
            const name = (merchant.name || merchant.businessName || "").toLowerCase();
            const description = (merchant.description || merchant.businessDescription || "").toLowerCase();
            const category = (merchant.category || "").toLowerCase();

            return name.includes(lowercaseQuery) ||
                description.includes(lowercaseQuery) ||
                category.includes(lowercaseQuery);
        });
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        // Filter merchants locally in real-time
        const filtered = filterMerchants(value);
        setFilteredMerchants(filtered);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Since we're already filtering in real-time, just ensure the latest filter is applied
        const filtered = filterMerchants(searchQuery);
        setFilteredMerchants(filtered);
    };

    const handleMerchantClick = (merchant) => {
        setSelectedMerchant(selectedMerchant?.id === merchant.id ? null : merchant);
        if (selectedMerchant?.id !== merchant.id) {
            fetchMerchantPackages(merchant.id);
        }
    };

    const routeToPackageDetails = (packageId) => {
        localStorage.setItem("selectedPackage", packageId);
        window.location.href = "/package-details";
    };

    const handleWishlistToggle = (id, type = 'merchant') => {
        const wasAdded = WishlistManager.toggleWishlist(id);
        setWishlistItems(WishlistManager.getWishlistSet());

        if (wasAdded) {
            console.log(`❤️ Added ${type} to wishlist!`);
        } else {
            console.log(`💔 Removed ${type} from wishlist!`);
        }
    };

    const displayedMerchants = React.useMemo(() => {
        return filteredMerchants || [];
    }, [filteredMerchants]);

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section */}
            <div className="merchants-hero relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Discover Amazing Merchants
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Explore our trusted partners and their exclusive packages
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full p-6 pr-32 text-gray-900 border-0 rounded-full shadow-2xl focus:ring-4 focus:ring-white focus:ring-opacity-50 text-lg"
                                placeholder="Search for merchants or packages..."
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 font-semibold shadow-lg transition-all duration-300"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {loading ? (
                    <div className="flex justify-center items-center min-h-[50vh]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600">Loading amazing merchants...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Search Results Info */}
                        {searchQuery && (
                            <div className="mb-8 text-center">
                                <p className="text-lg text-gray-600">
                                    {displayedMerchants.length > 0
                                        ? `Found ${displayedMerchants.length} merchant${displayedMerchants.length === 1 ? '' : 's'} for "${searchQuery}"`
                                        : `No merchants found for "${searchQuery}"`
                                    }
                                </p>
                            </div>
                        )}

                        {/* Merchants Grid */}
                        <div className="merchants-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {displayedMerchants.map((merchant, index) => (
                                <div key={index} className="merchant-card group">
                                    {/* Merchant Card */}
                                    <div
                                        className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 ${
                                            selectedMerchant?.id === merchant.id ? 'border-purple-500 ring-4 ring-purple-200' : 'border-transparent'
                                        }`}
                                        onClick={() => handleMerchantClick(merchant)}
                                    >

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {merchant.name || merchant.businessName}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {merchant.description || merchant.businessDescription}
                                            </p>

                                            <div className="flex items-center justify-between mb-4">
                                                {merchant.category && (
                                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {merchant.category}
                                                    </span>
                                                )}
                                                {merchant.rating && (
                                                    <div className="flex items-center text-sm">
                                                        <div className="flex text-yellow-400 mr-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg key={i} className="w-4 h-4" fill={i < Math.floor(merchant.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <span className="text-gray-600">{merchant.rating}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-semibold transition-all duration-300 transform hover:scale-105">
                                                    {selectedMerchant?.id === merchant.id ? 'Hide Packages' : 'View Packages'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Packages Section - Animated */}
                                    {selectedMerchant?.id === merchant.id && (
                                        <div className="mt-8 space-y-4">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                                {merchant.name}'s Packages
                                            </h4>

                                            {merchantPackages[merchant.id] && Array.isArray(merchantPackages[merchant.id]) ? (
                                                <div className="space-y-6">
                                                    {merchantPackages[merchant.id].map((pkg, pkgIndex) => (
                                                        <div
                                                            key={pkgIndex}
                                                            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
                                                        >

                                                            <div className="p-6">
                                                                <div className="flex items-start justify-between mb-4">
                                                                    <h5 className="font-bold text-gray-900 text-xl">{pkg.name}</h5>
                                                                    <svg
                                                                        className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
                                                                            wishlistItems.has(pkg.id)
                                                                                ? 'text-red-500 fill-red-500'
                                                                                : 'text-gray-400 hover:text-red-400'
                                                                        }`}
                                                                        onClick={() => handleWishlistToggle(pkg.id, 'package')}
                                                                        fill={wishlistItems.has(pkg.id) ? "currentColor" : "none"}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                                    </svg>
                                                                </div>

                                                                <p className="text-gray-600 mb-4">
                                                                    {pkg.description}
                                                                </p>

                                                                {/* Package Price */}
                                                                <div className="mb-6">
                                                                    {pkg.price && (
                                                                        <div className="flex items-center justify-center">
                                                                            <span className="text-3xl font-bold text-purple-600">
                                                                                ${Number(pkg.price).toLocaleString()}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Room Type & Meal Plan */}
                                                                <div className="mb-6 space-y-2">
                                                                    {pkg.selectedRoomType && (
                                                                        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                                                                            <span className="text-sm font-medium text-gray-700">Room Type:</span>
                                                                            <span className="text-sm font-bold text-blue-700">{pkg.selectedRoomType}</span>
                                                                        </div>
                                                                    )}
                                                                    {pkg.selectedMealPlan && (
                                                                        <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                                                                            <span className="text-sm font-medium text-gray-700">Meal Plan:</span>
                                                                            <span className="text-sm font-bold text-green-700">{pkg.selectedMealPlan}</span>
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Place Information */}
                                                                {pkg.placeInfo && (
                                                                    <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                                        <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                                            </svg>
                                                                            Destination: {pkg.placeInfo.name}
                                                                        </h6>
                                                                        {pkg.placeInfo.imageUrl && (
                                                                            <img
                                                                                src={pkg.placeInfo.imageUrl}
                                                                                alt={pkg.placeInfo.name}
                                                                                className="w-full h-32 object-cover rounded-lg mb-3"
                                                                            />
                                                                        )}
                                                                        <p className="text-sm text-gray-600 mb-2">{pkg.placeInfo.description}</p>
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                                                                                {pkg.placeInfo.placeType}
                                                                            </span>
                                                                            <span className="text-sm font-medium text-gray-700">
                                                                                Min Budget: ${Number(pkg.placeInfo.minBudget).toLocaleString()}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Hotel Information */}
                                                                {pkg.hotelInfo && (
                                                                    <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                                        <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                                                            </svg>
                                                                            Hotel: {pkg.hotelInfo.name}
                                                                        </h6>
                                                                        {pkg.hotelInfo.imageUrl && (
                                                                            <img
                                                                                src={pkg.hotelInfo.imageUrl}
                                                                                alt={pkg.hotelInfo.name}
                                                                                className="w-full h-32 object-cover rounded-lg mb-3"
                                                                            />
                                                                        )}
                                                                        <p className="text-sm text-gray-600 mb-3">{pkg.hotelInfo.description}</p>
                                                                        <div className="space-y-2">
                                                                            <div className="flex items-center text-sm text-gray-700">
                                                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                                                </svg>
                                                                                {pkg.hotelInfo.phoneNumber}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Transportation Information */}
                                                                {pkg.transportationInfo && (
                                                                    <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                                        <h6 className="font-bold text-gray-900 mb-3 flex items-center">
                                                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                                                                            </svg>
                                                                            Transportation: {pkg.transportationInfo.name}
                                                                        </h6>
                                                                        <p className="text-sm text-gray-600 mb-3">{pkg.transportationInfo.description}</p>
                                                                        <div className="space-y-2">
                                                                            <div className="flex items-center text-sm text-gray-700">
                                                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                                                </svg>
                                                                                Times: {pkg.transportationInfo.timeList}
                                                                            </div>
                                                                            <div className="flex items-center text-sm text-gray-700">
                                                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                                                </svg>
                                                                                {pkg.transportationInfo.phoneNumber}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <button
                                                                    onClick={() => routeToPackageDetails(pkg.id)}
                                                                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition-all duration-300 transform hover:scale-105"
                                                                >
                                                                    Book This Package
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-8">
                                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                                                    <p>Loading packages...</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Empty States */}
                        {(Array.isArray(filteredMerchants) && filteredMerchants.length === 0 && searchQuery) && (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-8xl mb-6">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">No merchants found</h3>
                                <p className="text-gray-600 text-lg">Try adjusting your search terms</p>
                            </div>
                        )}

                        {(Array.isArray(merchants) && merchants.length === 0 && !loading) && (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-8xl mb-6">🏪</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">No merchants available</h3>
                                <p className="text-gray-600 text-lg">Check back later for new merchants and their amazing packages</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MerchantsAndPackagesPage;