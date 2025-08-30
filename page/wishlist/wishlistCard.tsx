import React, { useState } from "react";
import ContactModal from "../model/ContactModal"; // Import the modal

interface WishlistCardProps {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    onDelete?: () => void;
    onBook?: () => void;
    contactInfo?: {
        name: string;
        phone: string;
        email: string;
        address: string;
        hours: string;
        website?: string;
    };
}

const WishlistCard: React.FC<WishlistCardProps> = ({
                                                       imageUrl,
                                                       name,
                                                       description,
                                                       price,
                                                       rating,
                                                       onDelete,
                                                       onBook,
                                                       contactInfo,
                                                   }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    return (
        <>
            <div className="rounded-2xl shadow-md bg-white overflow-hidden w-full max-w-xs relative m-3">
                <div className="relative h-48 w-full">
                    <img
                        src={imageUrl}
                        alt="Destination"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-4 space-y-1">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-gray-500">{description}</p>
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-xl font-bold">{price} <span className="text-base font-normal text-gray-600"></span></p>
                    </div>
                    <button
                        onClick={handleContactClick}
                        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        Contact Now
                    </button>
                </div>
            </div>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                contactInfo={{
                    name: "Journey Jewel",
                    phone: "095154403",
                    email: "hsumyatyadanar@gmail.com",
                    address: "123 Beach Road, Paradise Island",
                    hours: "24/7 Available",
                    website: "https://journeyjewel.com"
                }}
            />
        </>
    );
};

export default WishlistCard;