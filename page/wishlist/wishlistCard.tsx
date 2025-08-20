import React from "react";
import { Star, Trash2 } from "lucide-react";

interface WishlistCardProps {
    imageUrl: string;
    title: string;
    location: string;
    price: number;
    rating: number;
    onDelete?: () => void;
    onBook?: () => void;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
                                                       imageUrl,
                                                       name,
                                                       description,
                                                       price,
                                                       rating,
                                                       onDelete,
                                                       onBook,
                                                   }) => {
    return (
        <div className="rounded-2xl shadow-md bg-white overflow-hidden w-full max-w-xs relative m-3">
            <div className="relative h-48 w-full">
                <img
                    src={imageUrl}
                    alt="Destination"
                    className="h-full w-full object-cover"
                />
                <button
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                    <Trash2 className="h-4 w-4 text-gray-700" />
                </button>
            </div>
            <div className="p-4 space-y-1">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-500">{description}</p>
                <div className="flex items-center justify-between pt-2">
                    <p className="text-xl font-bold">{price} <span className="text-base font-normal text-gray-600"></span></p>
                </div>
                <button
                    onClick={onBook}
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default WishlistCard;
