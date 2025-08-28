// ContactModal.jsx
import React from "react";
import { X, Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    contactInfo: {
        name: string;
        phone: string;
        email: string;
        address: string;
        hours: string;
        website?: string;
    };
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, contactInfo }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="relative p-6">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    >
                        <X size={24} />
                    </button>

                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
                        <h3 className="text-lg font-semibold text-blue-600">{contactInfo.name}</h3>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Phone className="text-blue-600" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <a href={`tel:${contactInfo.phone}`} className="text-gray-800 hover:text-blue-600">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Mail className="text-blue-600" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <a href={`mailto:${contactInfo.email}`} className="text-gray-800 hover:text-blue-600">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <MapPin className="text-blue-600" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="text-gray-800">{contactInfo.address}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Clock className="text-blue-600" size={20} />
                            <div>
                                <p className="text-sm text-gray-500">Business Hours</p>
                                <p className="text-gray-800">{contactInfo.hours}</p>
                            </div>
                        </div>

                        {contactInfo.website && (
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="text-blue-600">🌐</div>
                                <div>
                                    <p className="text-sm text-gray-500">Website</p>
                                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer"
                                       className="text-gray-800 hover:text-blue-600">
                                        {contactInfo.website}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-3">
                        <a
                            href={`tel:${contactInfo.phone}`}
                            className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center hover:bg-blue-700 transition"
                        >
                            Call Now
                        </a>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="flex-1 bg-gray-600 text-white py-3 rounded-lg text-center hover:bg-gray-700 transition"
                        >
                            Send Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;