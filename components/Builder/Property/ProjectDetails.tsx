// src/components/Builder/Dashboard/PropertyDetails.tsx
'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faShareAlt,
    faHeart,
    faMapMarkerAlt,
    faHome,
    faLayerGroup,
    faCalendarAlt,
    faCouch,
    faBuilding,
    faRupeeSign,
    faPhone,
    faCamera,
    faChevronRight,
    faCheckCircle,
    faSchool,
    faLandmark,
    faDownload,
    faPrint,
    faEnvelope,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface PropertyDetailsProps {
    propertyId?: number;
    onClose?: () => void;
}

const ProjectDetails: React.FC<PropertyDetailsProps> = ({ propertyId = 1, onClose }) => {
    // Mock property data - in real app, this would come from API
    const propertyData = {
        id: propertyId,
        title: '2 BHK Flat For Sale in Om Sai, Gurudwara Colony Nigdi, Pune',
        price: '₹100.0 Lac',
        priceBreakup: '₹100 Lac',
        bookingAmount: '₹9,999',
        emi: '₹35k',
        area: '88 Sq-ft',
        carpetArea: '78 sqft',
        pricePerSqft: '₹1,28,205/sqft',
        projectName: 'Om Sai',
        floor: '2 (Out of 4 Floors)',
        transactionType: 'Resale',
        status: 'Ready to Move',
        furnishedStatus: 'Furnished',
        ageOfConstruction: 'Above 20 years',
        address: 'Nigdi, Pune, Gurudwara Colony Nigdi, Pune - Pimpri Chinchwad Municipal Corporation, Maharashtra',
        owner: {
            name: 'Prathamesh Kadam',
            phone: '+91-70000000000',
            lastContact: '3 days ago',
            location: 'Pune',
        },
        images: [
            'https://blog.ipleaders.in/wp-content/uploads/2020/12/Gurugram-to-have-the-first-Indo-Japanese-real-estate-project-Krisumi-Waterfall-Residences-FB-1200x725-compressed.jpg',
            'https://www.panchshilgroup.com/assets/images/blogs/how-trusted-real-estate-developers-ensure-quality-and-value.webp',
            'https://mrhmfl.co.in/images/gallery/construction_finance_to_real_estate_developers.jpg',
            'https://www.karmaagroup.com/wp-content/uploads/2017/08/Karmaa-Pinnacle-1-e1517820000223-800x400.jpg',
        ],
        landmarks: [
            { name: 'D. Y. Patil International University', distance: '0.4 Km', type: 'Educational Institute' },
            { name: 'Nidgi', type: 'Nearby Locality' },
            { name: 'Sector 29 Ravet', type: 'Nearby Locality' },
        ],
        description: 'Premium 2 BHK flat in Om Sai society, located in the prime area of Gurudwara Colony Nigdi. Well-maintained property with modern amenities and excellent connectivity.',
        features: ['24x7 Water Supply', 'Power Backup', 'Security', 'Parking', 'Lift', 'Garden'],
    };

    const [activeImage, setActiveImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'Hi, I am interested in your property at Om Sai, Gurudwara Colony Nigdi',
    });

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Contact request sent successfully!');
        setShowContactForm(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
                        <Link href="/dashboard" className="hover:text-teal-600 flex items-center gap-1">
                            <FontAwesomeIcon icon={faHome} className="text-xs" />
                            <span className="text-xs sm:text-sm">Home</span>
                        </Link>
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        <Link href="/builder/properties" className="hover:text-teal-600 text-xs sm:text-sm">
                            Flats for Sale in Pune
                        </Link>
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        <Link href="/builder/properties" className="hover:text-teal-600 text-xs sm:text-sm">
                            Gurudwara Colony Nigdi
                        </Link>
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        <span className="text-gray-900 font-medium text-xs sm:text-sm truncate">2 BHK Flats in Gurudwara Colony Nigdi</span>
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                        <span className="text-gray-900 font-medium text-xs sm:text-sm truncate">{propertyData.area}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-3">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">{propertyData.title}</h1>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setIsFavorite(!isFavorite)} className={`p-2 rounded-full ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600'} hover:bg-gray-200`}>
                                <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'text-red-500' : ''} />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                <FontAwesomeIcon icon={faShareAlt} />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hidden sm:block">
                                <FontAwesomeIcon icon={faPrint} />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hidden sm:block">
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                            {onClose && (
                                <button onClick={onClose} className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 ml-2">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Property Images */}
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <div className="relative h-64 sm:h-80 md:h-96">
                                <img src={propertyData.images[activeImage]} alt="Property" className="w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        {propertyData.images.map((_, index) => (
                                            <button key={index} onClick={() => setActiveImage(index)} className={`w-2 h-2 rounded-full ${activeImage === index ? 'bg-white' : 'bg-white/50'}`} />
                                        ))}
                                    </div>
                                    <button className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white">
                                        <FontAwesomeIcon icon={faCamera} className="mr-1 sm:mr-2" />
                                        View All Photos
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-2 p-3 sm:p-4">
                                {propertyData.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`h-16 sm:h-20 rounded-lg overflow-hidden border-2 ${activeImage === index ? 'border-teal-500' : 'border-transparent'}`}
                                    >
                                        <img src={img} alt={`Property ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price and EMI Section */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{propertyData.price}</h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">EMI - {propertyData.emi} | Get Loan offers from 34+ banks</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
                                            Validate Market Price with PropWorth
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button onClick={() => setShowContactForm(true)} className="bg-teal-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-700 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faPhone} />
                                        Contact Owner
                                    </button>
                                    <button className="border border-teal-600 text-teal-600 px-4 py-3 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-50 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                                        <FontAwesomeIcon icon={faCamera} />
                                        Request Photos
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Property Specifications */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Property Specifications</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faHome} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Carpet Area</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.carpetArea}</p>
                                    <p className="text-xs text-gray-500 mt-1">{propertyData.pricePerSqft}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faBuilding} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Project</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.projectName}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faLayerGroup} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Floor</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.floor}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Transaction Type</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.transactionType}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-xs" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600">Status</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.status}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faCouch} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Furnished</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.furnishedStatus}</p>
                                </div>
                                <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-teal-600 text-lg sm:text-xl md:text-2xl mb-2" />
                                    <p className="text-xs sm:text-sm text-gray-600">Age</p>
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.ageOfConstruction}</p>
                                </div>
                            </div>
                        </div>

                        {/* More Details Section */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">More Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-3 text-base sm:text-lg">Price Breakup</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-gray-600 text-sm sm:text-base">Total Price</span>
                                            <span className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.priceBreakup}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-gray-600 text-sm sm:text-base">Booking Amount</span>
                                            <span className="font-bold text-gray-900 text-sm sm:text-base">{propertyData.bookingAmount}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-3 text-base sm:text-lg">Property Details</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 py-2">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-600 mt-1 text-sm" />
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-600">Address</p>
                                                <p className="text-gray-900 text-sm sm:text-base">{propertyData.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 py-2">
                                            <FontAwesomeIcon icon={faCouch} className="text-teal-600 mt-1 text-sm" />
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-600">Furnishing</p>
                                                <p className="text-gray-900 text-sm sm:text-base">{propertyData.furnishedStatus}</p>
                                                <button className="text-teal-600 text-xs sm:text-sm mt-1 hover:underline">Register for Home Interiors Expo to get furnishing ideas</button>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 py-2">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-teal-600 mt-1 text-sm" />
                                            <div>
                                                <p className="text-xs sm:text-sm text-gray-600">Age of Construction</p>
                                                <p className="text-gray-900 text-sm sm:text-base">{propertyData.ageOfConstruction}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-3 sm:p-4 bg-teal-50 border border-teal-100 rounded-lg">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">Contact Owner</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">{propertyData.owner.name}</p>
                                        <p className="text-gray-600 text-sm sm:text-base">{propertyData.owner.phone}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
                                        <button className="bg-teal-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-teal-700 font-medium text-sm sm:text-base">Contact Owner</button>
                                        <button className="border border-teal-600 text-teal-600 px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-teal-50 font-medium text-sm sm:text-base">Request Photos</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Gurudwara Colony Nigdi */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">About Gurudwara Colony Nigdi</h3>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 text-base sm:text-lg">
                                    <FontAwesomeIcon icon={faSchool} className="text-teal-600" />
                                    Educational Institutes
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700 text-sm sm:text-base">D. Y. Patil International University</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700 text-sm sm:text-base">Nidgi, Pune</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700 text-sm sm:text-base">Sector 29 Ravet, Pune</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 text-base sm:text-lg">
                                    <FontAwesomeIcon icon={faLandmark} className="text-teal-600" />
                                    Nearby Localities
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700 text-sm sm:text-base">Nidgi, Pune</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700 text-sm sm:text-base">Sector 29 Ravet, Pune</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t">
                                <button className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 text-sm sm:text-base">
                                    <FontAwesomeIcon icon={faRupeeSign} />
                                    Compare Localities
                                </button>
                            </div>
                        </div>

                        {/* Landmarks Near Om Sai */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Landmarks Near Om Sai</h3>
                            <div className="space-y-3 sm:space-y-4">
                                {propertyData.landmarks.map((landmark, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2">
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm sm:text-base">{landmark.name}</p>
                                            <p className="text-xs sm:text-sm text-gray-600">{landmark.type}</p>
                                        </div>
                                        {landmark.distance && <span className="px-3 py-1 bg-white border rounded-full text-xs sm:text-sm font-medium self-start sm:self-auto">{landmark.distance}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Owner Contact Card */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 sticky top-6">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-3">
                                    <FontAwesomeIcon icon={faUser} className="text-teal-600 text-xl sm:text-2xl" />
                                </div>
                                <h4 className="font-bold text-gray-900 text-base sm:text-lg">{propertyData.owner.name}</h4>
                                <p className="text-gray-600 text-sm sm:text-base">{propertyData.owner.location}</p>
                                <div className="mt-2">
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs">PropWorth</span>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className="w-full bg-teal-600 text-white py-2 sm:py-3 rounded-lg hover:bg-teal-700 font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    <FontAwesomeIcon icon={faPhone} />
                                    Contact Owner
                                </button>

                                <button className="w-full border border-teal-600 text-teal-600 py-2 sm:py-3 rounded-lg hover:bg-teal-50 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
                                    <FontAwesomeIcon icon={faCamera} />
                                    Request Photos
                                </button>

                                <div className="pt-3 sm:pt-4 border-t">
                                    <p className="text-xs sm:text-sm text-gray-500 text-center">Last contact made {propertyData.owner.lastContact}</p>
                                </div>

                                <div className="pt-3 sm:pt-4 border-t">
                                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-3">Quick Connect</p>
                                    <div className="flex gap-2 sm:gap-3">
                                        <button className="flex-1 bg-green-600 text-white p-2 sm:p-3 rounded-lg hover:bg-green-700">
                                            <FontAwesomeIcon icon={faWhatsappBrand} className="text-lg sm:text-xl" />
                                        </button>
                                        <button className="flex-1 bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700">
                                            <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl" />
                                        </button>
                                        <button className="flex-1 bg-red-600 text-white p-2 sm:p-3 rounded-lg hover:bg-red-700">
                                            <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Project */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4">About Project</h4>
                            <p className="text-gray-600 text-sm sm:text-base mb-6">{propertyData.description}</p>

                            <h5 className="font-semibold text-gray-700 text-sm sm:text-base mb-3">Key Features</h5>
                            <div className="space-y-2">
                                {propertyData.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs sm:text-sm" />
                                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-6 border border-teal-600 text-teal-600 py-2 sm:py-3 rounded-lg hover:bg-teal-50 font-medium text-sm sm:text-base">View Project Details</button>
                        </div>

                        {/* Similar Properties */}
                        <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                            <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4">Similar Properties</h4>
                            <div className="space-y-3 sm:space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="border rounded-lg p-3 hover:border-teal-300 cursor-pointer">
                                        <div className="flex gap-3">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
                                                <img src={propertyData.images[0]} alt="Similar Property" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900 text-sm sm:text-base">2 BHK in Om Sai</p>
                                                <p className="text-xs sm:text-sm text-gray-600">88 Sq-ft • Gurudwara Colony</p>
                                                <p className="font-bold text-gray-900 mt-1 text-sm sm:text-base">₹99.99 Lac</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Modal */}
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                        <div className="p-4 sm:p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Contact Owner</h3>
                                <button onClick={() => setShowContactForm(false)} className="text-gray-400 hover:text-gray-600">
                                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleContactSubmit} className="p-4 sm:p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={contactFormData.name}
                                        onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm sm:text-base"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={contactFormData.email}
                                        onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm sm:text-base"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={contactFormData.phone}
                                        onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm sm:text-base"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={3}
                                        value={contactFormData.message}
                                        onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm sm:text-base"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button type="button" onClick={() => setShowContactForm(false)} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base">
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm sm:text-base">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;