import React from "react";
import Image from "next/image";

const BookingConfirmation = () => {
    return (
        <div className="p-10 px-4 md:px-10 max-w-screen-xl mx-auto">
            {/* Success Alert */}
            <div className="bg-green-50 border border-green-50 text-center text-green-900 py-20 rounded-lg mb-6">
                <div className="text-2xl font-semibold mb-2">✅ Booking Confirmed!</div>
                <p>Your booking has been confirmed and your itinerary has been sent to your email.</p>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left/Main Column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Booking Details */}
                    <div className="bg-white border border-gray-200 rounded-lg p-10">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-sm text-gray-500">Booking ID: <span className="font-medium">#BK289355</span></p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Confirmed</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <img
                                src="https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-174028267-1494616481.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*"
                                alt="Luxury Water Villa"
                                width={80}
                                height={80}
                                className="rounded-lg object-cover"
                            />
                            <div>
                                <p className="font-semibold">Luxury Water Villa</p>
                                <p className="text-sm text-gray-500">Maldives</p>
                                <p className="text-sm text-gray-500">Mar 15 - Mar 20, 2025 • 2 Adults</p>
                                <a href="#" className="text-blue-600 text-sm mt-1 inline-block">⬇️ Download Receipt</a>
                            </div>
                        </div>
                    </div>

                    {/* Rate Experience */}
                    <div className="bg-white border border-gray-200 rounded-lg p-10">
                        <p className="font-semibold text-lg mb-4">Rate Your Experience</p>
                        <div className="flex gap-1 mb-3 text-yellow-400 text-xl">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>☆</span> // Replace with star component if desired
                            ))}
                        </div>
                        <textarea
                            placeholder="Share your experience..."
                            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={4}
                        ></textarea>
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium">
                            Submit Review
                        </button>
                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Need Help Section */}
                    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-10">
                        <p className="font-semibold text-lg mb-4">Need Help?</p>
                        <div className="space-y-3 text-sm">
                            <button className="w-full flex items-center justify-between text-blue-600 hover:underline">
                                💬 Live Chat <span>›</span>
                            </button>
                            <button className="w-full flex items-center justify-between text-blue-600 hover:underline">
                                📧 Email Support <span>›</span>
                            </button>
                            <button className="w-full flex items-center justify-between text-blue-600 hover:underline">
                                📞 Call Us <span>›</span>
                            </button>
                        </div>
                    </div>

                    {/* Recommended for You */}
                    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-10">
                        <p className="font-semibold text-lg mb-4">Recommended for You</p>
                        <div className="space-y-4">
                            {[{
                                title: "Beach Resort",
                                location: "Bali, Indonesia",
                                price: "$199/night"
                            }, {
                                title: "Mountain Lodge",
                                location: "Swiss Alps",
                                price: "$299/night"
                            }].map((hotel, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <img
                                        src="https://hips.hearstapps.com/hmg-prod/images/great-ocean-road-174028267-1494616481.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*"
                                        alt={hotel.title}
                                        width={60}
                                        height={60}
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="text-sm">
                                        <p className="font-medium">{hotel.title}</p>
                                        <p className="text-gray-500">{hotel.location}</p>
                                        <p className="text-blue-600 font-semibold">{hotel.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;