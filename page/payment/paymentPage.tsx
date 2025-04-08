"use client";
import React from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const PaymentSection = () => {

    return (
        <div className="mt-10">
            <div className="our-fe pb-10 max-w-full container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4">

                        <div
                            className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 mb-3">
                            <p className="font-bold mb-10 text-[20px]">Buyer Information</p>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name"
                                           className="block mb-2 text-sm font-medium text-gray-900">First
                                        name</label>
                                    <input type="text" id="first_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="John" required/>
                                </div>
                                <div>
                                    <label htmlFor="last_name"
                                           className="block mb-2 text-sm font-medium text-gray-900">Last
                                        name</label>
                                    <input type="text" id="last_name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="Doe" required/>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="text" id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="exmple@mail.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber"
                                           className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                    <input type="text" id="phoneNumber"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="+959 111111111" required/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
                            <p className="font-bold mb-10 text-[20px]">Card Details</p>
                            <div className="mb-6">
                                <label htmlFor="cardNumber"
                                       className="block mb-2 text-sm font-medium text-gray-900">Card Number</label>
                                <input type="text" id="cardNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="xxx xxxx xxxx xx" required/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="expiryDate"
                                           className="block mb-2 text-sm font-medium text-gray-900">Expiry Date</label>
                                    <input type="month" id="expiryDate"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="John" required/>
                                </div>
                                <div>
                                    <label htmlFor="cvv"
                                           className="block mb-2 text-sm font-medium text-gray-900">CVV</label>
                                    <input type="text" id="cvv"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="xxx" required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="nameOnCard"
                                       className="block mb-2 text-sm font-medium text-gray-900">Name on Card</label>
                                <input type="text" id="nameOnCard"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="John" required/>
                            </div>
                        </div>

                        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
                            <p className="font-bold mb-10 text-[20px]">Billing Address</p>
                            <div className="mb-6">
                                <label htmlFor="address"
                                       className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                                <input type="text" id="cardNumber"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="" required/>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="city"
                                           className="block mb-2 text-sm font-medium text-gray-900">City</label>
                                    <input type="text" id="city"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="" required/>
                                </div>
                                <div>
                                    <label htmlFor="postalCode"
                                           className="block mb-2 text-sm font-medium text-gray-900">Postal Code</label>
                                    <input type="text" id="postalCode"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                           placeholder="" required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 order-details">

                        {/* Order Summary Card */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                            <p className="text-lg font-bold mb-4">Order Summary</p>
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://media.architecturaldigest.com/photos/67c721a9b35a51f890d2039d/3:2/w_3000,h_2000,c_limit/GettyImages-1301180174.jpg" alt="Luxury Water Villa"
                                     className="w-16 h-16 rounded object-cover"/>
                                <div>
                                    <p className="font-semibold">Luxury Water Villa</p>
                                    <p className="text-gray-500 text-sm">Maldives</p>
                                    <p className="text-gray-500 text-sm">Mar 15 - Mar 20, 2025 • 2 Adults</p>
                                </div>
                            </div>
                            <div className="border-t pt-4 text-sm">
                                <div className="flex justify-between mb-2">
                                    <span>Room Rate (5 nights)</span>
                                    <span className="font-medium">$2,495</span>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <span>Taxes & Fees</span>
                                    <span className="font-medium">$249</span>
                                </div>
                                <div className="flex justify-between font-bold text-base border-t pt-3">
                                    <span>Total Amount</span>
                                    <span>$2,744</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox mr-2"/>
                                    <span className="text-sm text-gray-700">
                                        I agree to the terms and conditions and privacy policy
                                    </span>
                                </label>
                            </div>

                            <button
                                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                                <span role="img" aria-label="lock">🔒</span> Pay Securely Now
                            </button>

                            <p className="text-xs text-gray-500 mt-3 text-center">
                                🔐 Your payment information is secure
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default PaymentSection;