"use client";
import WishlistCard from "./wishlistCard";
import { useEffect, useState } from "react";
import WishlistManager from "@/common/utils/WishlistManager";

const WishlistPage = () => {
    const [allPlaces, setAllPlaces] = useState([]);
    const [wishlistPlaces, setWishlistPlaces] = useState([]);
    const [wishlistItems, setWishlistItems] = useState(new Set());
    const [loading, setLoading] = useState(true);

    const fetchAllPlaces = async () => {
        try {
            const response = await fetch("http://localhost:8090/api/places?page=0&size=9999");
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error("Error fetching places:", error);
            return [];
        }
    };

    const updateWishlistPlaces = (places, wishlistIds) => {
        const filtered = places.filter(place => wishlistIds.has(place.id));
        setWishlistPlaces(filtered);
    };

    const handleRemoveFromWishlist = (id) => {
        // Remove from wishlist using WishlistManager
        WishlistManager.toggleWishlist(id);

        // Update local state
        const updatedWishlistItems = WishlistManager.getWishlistSet();
        setWishlistItems(updatedWishlistItems);

        // Update displayed wishlist places
        updateWishlistPlaces(allPlaces, updatedWishlistItems);

        console.log('💔 Removed from wishlist!');
    };

    useEffect(() => {
        const initializeWishlist = async () => {
            setLoading(true);
            try {
                // Get current wishlist items
                const currentWishlistItems = WishlistManager.getWishlistSet();
                setWishlistItems(currentWishlistItems);

                // Fetch all places
                const places = await fetchAllPlaces();
                setAllPlaces(places);

                // Filter places to show only wishlist items
                updateWishlistPlaces(places, currentWishlistItems);
            } catch (error) {
                console.error("Error initializing wishlist:", error);
            } finally {
                setLoading(false);
            }
        };

        initializeWishlist();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="text-center py-10">Loading your wishlist...</div>
            </div>
        );
    }

    return (
        <div className="p-6 mt-5">
            <h2 className="text-3xl font-bold text-center mb-2">Your Wishlist</h2>
            <p className="text-center text-gray-500 mb-6">Save your favorite destinations for later</p>

            {wishlistPlaces.length === 0 ? (
                <div className="text-center py-20">
                    <div className="mb-4">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500 mb-4">Start exploring and add some places to your wishlist!</p>
                    <a
                        href="/places"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Explore Places
                    </a>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {wishlistPlaces.map((item, index) => (
                        <WishlistCard
                            key={item.id} // Use item.id instead of index for better React key
                            {...item}
                            onRemoveFromWishlist={handleRemoveFromWishlist}
                            isInWishlist={true} // All items here are in wishlist
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;