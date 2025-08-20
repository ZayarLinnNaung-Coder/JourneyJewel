"use client";
import WishlistCard from "./wishlistCard";
import {useEffect, useState} from "react";
import WishlistManager from "@/common/utils/WishlistManager";

const WishlistPage = () => {

    const [wishlist, setWishlist] = useState([]);
    const [wishlistItems, setWishlistItems] = useState(new Set()); // Add wishlist state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load wishlist on component mount
        setWishlistItems(WishlistManager.getWishlistSet());

        const fetchBenefits = async () => {
            try {
                const response = await fetch("http://localhost:8090/api/places?page=0&size=9999");  // Replace with your real API URL
                const data = await response.json();
                setWishlist(data.content);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBenefits().then(r => console.log(r));
    }, []);

    return (
        <div className="p-6 mt-5">
            <h2 className="text-3xl font-bold text-center mb-2">Your Wishlist</h2>
            <p className="text-center text-gray-500 mb-6">Save your favorite destinations for later</p>
            <div className="flex flex-wrap justify-center">
                {wishlist.map((item, index) => (
                    <WishlistCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
