// src/app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import PropertyCard from '@/components/Builder/Dashboard/PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

import {
    faCheckCircle,
    faBell,
    faArrowRight,
    faBuilding,
    faUsers,
    faCalendarCheck,
    faChartLine,
    faPlus,
    faLocationDot,
    faEye,
    faPenToSquare,
    faChartColumn,
    faClock,
    faCalendar,
    faBars,
    faHome,
    faXmark,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface StatCard {
    label: string;
    value: string;
    change: string;
    icon: any;
    color: string;
    bgColor: string;
}

interface Property {
    id: number;
    name: string;
    type: string;
    location: string;
    area: string;
    status: 'Live' | 'Draft' | 'On Hold' | 'Closed';
    leads: number;
    visits: number;
    image?: string;
}

interface Lead {
    id: number;
    project: string;
    broker: string;
    date: string;
    status: 'New' | 'Contacted' | 'Site Visit Done' | 'Negotiation' | 'Closed';
    requirement: string;
}

interface SiteVisit {
    id: number;
    project: string;
    broker: string;
    date: string;
    time: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
    requirement: string;
}

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [notificationCount] = useState<number>(5);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false);
    const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedPropertyForDetails, setSelectedPropertyForDetails] = useState<Property | null>(null);
    const router = useRouter();

    const stats: StatCard[] = [
        {
            label: 'Total Properties',
            value: '12',
            change: '+2 this month',
            icon: faBuilding,
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            label: 'Active Leads',
            value: '48',
            change: '+8 this week',
            icon: faUsers,
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            label: 'Site Visits',
            value: '23',
            change: '15 scheduled',
            icon: faCalendarCheck,
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            label: 'Conversions',
            value: '5',
            change: '10.4% rate',
            icon: faChartLine,
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
    ];

    const properties: Property[] = [
        {
            id: 1,
            name: 'Tech Park Plaza',
            type: 'IT Park',
            location: 'Hinjewadi, Pune',
            area: '50,000 sq.ft',
            status: 'Live',
            leads: 15,
            visits: 8,
            image: 'https://www.panchshilgroup.com/assets/images/blogs/how-trusted-real-estate-developers-ensure-quality-and-value.webp',
        },
        {
            id: 2,
            name: 'Retail Hub Central',
            type: 'Retail',
            location: 'MG Road, Pune',
            area: '25,000 sq.ft',
            status: 'Live',
            leads: 12,
            visits: 5,
            image: 'https://blog.ipleaders.in/wp-content/uploads/2020/12/Gurugram-to-have-the-first-Indo-Japanese-real-estate-project-Krisumi-Waterfall-Residences-FB-1200x725-compressed.jpg',
        },
        {
            id: 3,
            name: 'Metro Office Tower',
            type: 'Office',
            location: 'Baner, Pune',
            area: '75,000 sq.ft',
            status: 'Live',
            leads: 21,
            visits: 10,
            image: 'https://mrhmfl.co.in/images/gallery/construction_finance_to_real_estate_developers.jpg',
        },
        {
            id: 4,
            name: 'Warehouse Plus',
            type: 'Warehouse',
            location: 'Chakan, Pune',
            area: '100,000 sq.ft',
            status: 'Draft',
            leads: 0,
            visits: 0,
            image: 'https://www.karmaagroup.com/wp-content/uploads/2017/08/Karmaa-Pinnacle-1-e1517820000223-800x400.jpg',
        },
    ];

    const recentLeads: Lead[] = [
        {
            id: 1,
            project: 'Tech Park Plaza',
            broker: 'Sharma Properties',
            date: '2026-01-20',
            status: 'Site Visit Done',
            requirement: 'Office Space - 5,000 sq.ft',
        },
        {
            id: 2,
            project: 'Metro Office Tower',
            broker: 'Elite Realty',
            date: '2026-01-19',
            status: 'Negotiation',
            requirement: 'Office Space - 8,000 sq.ft',
        },
        {
            id: 3,
            project: 'Retail Hub Central',
            broker: 'Prime Brokers',
            date: '2026-01-19',
            status: 'Contacted',
            requirement: 'Retail - 2,000 sq.ft',
        },
        {
            id: 4,
            project: 'Tech Park Plaza',
            broker: 'Metro Consultants',
            date: '2026-01-18',
            status: 'New',
            requirement: 'IT Office - 3,000 sq.ft',
        },
    ];

    const upcomingSiteVisits: SiteVisit[] = [
        {
            id: 1,
            project: 'Metro Office Tower',
            broker: 'Elite Realty',
            date: '2026-01-22',
            time: '10:00 AM',
            status: 'Scheduled',
            requirement: 'Office - 8,000 sq.ft',
        },
        {
            id: 2,
            project: 'Tech Park Plaza',
            broker: 'Prime Brokers',
            date: '2026-01-22',
            time: '02:30 PM',
            status: 'Scheduled',
            requirement: 'IT Space - 6,000 sq.ft',
        },
        {
            id: 3,
            project: 'Retail Hub Central',
            broker: 'Metro Consultants',
            date: '2026-01-23',
            time: '11:00 AM',
            status: 'Scheduled',
            requirement: 'Retail - 3,500 sq.ft',
        },
    ];

    const getStatusColor = (status: string): string => {
        const colors: Record<string, string> = {
            Live: 'bg-green-100 text-green-700',
            Draft: 'bg-gray-100 text-gray-700',
            'On Hold': 'bg-yellow-100 text-yellow-700',
            Closed: 'bg-red-100 text-red-700',
            New: 'bg-blue-100 text-blue-700',
            Contacted: 'bg-purple-100 text-purple-700',
            'Site Visit Done': 'bg-indigo-100 text-indigo-700',
            Negotiation: 'bg-orange-100 text-orange-700',
            Scheduled: 'bg-teal-100 text-teal-700',
            Completed: 'bg-green-100 text-green-700',
            Cancelled: 'bg-red-100 text-red-700',
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    const handleEditProperty = (propertyId: number) => {
        setSelectedPropertyId(propertyId);
        setIsEditPopupOpen(true);
    };

    const handleViewDetails = (propertyId: number) => {
        const property = properties.find((prop) => prop.id === propertyId);
        setSelectedPropertyForDetails(property || null);
        setShowDetailsModal(true);
    };

    const handleClosePopup = () => {
        setIsEditPopupOpen(false);
        setSelectedPropertyId(null);
    };

    // Get the selected property for editing
    const selectedProperty = properties.find((prop) => prop.id === selectedPropertyId);

    const [showSubscription, setShowSubscription] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Edit Property Popup Modal */}
            {showSubscription && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-[80vh] shadow-xl relative">
                        {/* Close Button */}
                        <button onClick={() => setShowSubscription(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl">
                            ✕
                        </button>

                        {/* Page inside modal */}
                        <iframe src="/builder/BuilderSubscription" className="w-full h-full rounded-2xl" />
                    </div>
                </div>
            )}

            {isEditPopupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div>
                                <h2 className="text-2xl font-bold text-black">Edit Property</h2>
                                <p className="text-gray-500 mt-1">Editing: {selectedProperty?.name || 'Property'}</p>
                            </div>
                            <button onClick={handleClosePopup} className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition">
                                <FontAwesomeIcon icon={faXmark} className="text-gray-500 text-xl" />
                            </button>
                        </div>

                        {/* Modal Content - This would be your /builder/PostProperty content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {/* Example simplified edit form */}
                            <div className="space-y-6">
                                {/* Property Images */}
                                <div>
                                    <h3 className="text-lg font-semibold text-black mb-3">Property Images</h3>
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                                        <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                            <FontAwesomeIcon icon={faPlus} className="text-teal-600 text-xl" />
                                        </div>
                                        <p className="text-gray-600 mb-2">Drag & drop images here or click to upload</p>
                                        <p className="text-sm text-gray-500">Recommended: 5-10 high quality images</p>
                                    </div>
                                </div>

                                {/* Basic Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                                        <input
                                            type="text"
                                            defaultValue={selectedProperty?.name}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="Enter property name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                                        <select
                                            defaultValue={selectedProperty?.type}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                        >
                                            <option value="IT Park">IT Park</option>
                                            <option value="Office">Office</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Warehouse">Warehouse</option>
                                            <option value="Residential">Residential</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                        <input
                                            type="text"
                                            defaultValue={selectedProperty?.location}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="Enter location"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                                        <input
                                            type="text"
                                            defaultValue={selectedProperty?.area}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                            placeholder="Enter area"
                                        />
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Live', 'Draft', 'On Hold', 'Closed'].map((status) => (
                                            <button
                                                key={status}
                                                className={`px-4 py-2 rounded-lg border ${
                                                    selectedProperty?.status === status ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-300 hover:border-teal-600'
                                                }`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                        placeholder="Describe your property in detail..."
                                        defaultValue="Premium commercial space with modern amenities, located in prime business district. Perfect for IT companies and corporate offices."
                                    />
                                </div>

                                {/* Pricing */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-gray-500">₹</span>
                                            <input
                                                type="text"
                                                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                                                placeholder="Enter price"
                                                defaultValue="99,99,000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Price Unit</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                                            <option>Lac</option>
                                            <option>Cr</option>
                                            <option>Sq.Ft</option>
                                            <option>Total</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Negotiable</label>
                                        <div className="flex gap-4 mt-2">
                                            <label className="flex items-center">
                                                <input type="radio" name="negotiable" defaultChecked className="mr-2" />
                                                Yes
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="negotiable" className="mr-2" />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t p-6">
                            <div className="flex justify-end gap-4">
                                <button onClick={handleClosePopup} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        // Handle save logic here
                                        alert('Property updated successfully!');
                                        handleClosePopup();
                                    }}
                                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center gap-2"
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* View Details Popup Modal */}
            {showDetailsModal && selectedPropertyForDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-teal-50 to-white">
                            <div>
                                <h2 className="text-2xl font-bold text-black">{selectedPropertyForDetails.name}</h2>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedPropertyForDetails.status)}`}>{selectedPropertyForDetails.status}</span>
                                    <span className="text-sm text-gray-500">ID: PROJ-{selectedPropertyForDetails.id.toString().padStart(6, '0')}</span>
                                </div>
                            </div>
                            <button onClick={() => setShowDetailsModal(false)} className="hidden sm:block p-2 hover:bg-gray-100 rounded-full transition">
                                <FontAwesomeIcon icon={faXmark} className="text-gray-500 text-xl" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-8">
                                {/* Property Images Carousel */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-black">Property Images</h3>
                                        <span className="text-sm text-gray-500">5 images</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative h-64 rounded-xl overflow-hidden">
                                            <img src={selectedPropertyForDetails.image} alt={selectedPropertyForDetails.name} className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                                <span className="text-white text-sm font-medium">Main Image</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[1, 2, 3, 4].map((index) => (
                                                <div key={index} className="h-30 rounded-lg overflow-hidden border">
                                                    <img src={selectedPropertyForDetails.image} alt={`${selectedPropertyForDetails.name} ${index}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Property Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Column */}
                                    <div className="space-y-6">
                                        {/* Basic Information */}
                                        <div className="bg-gray-50 rounded-xl p-5">
                                            <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faBuilding} className="text-teal-600" />
                                                Basic Information
                                            </h4>
                                            <div className="space-y-4">
                                                <DetailItem label="Property Type" value={selectedPropertyForDetails.type} />
                                                <DetailItem label="Area" value={selectedPropertyForDetails.area} />
                                                <DetailItem label="Location" value={selectedPropertyForDetails.location} />
                                                <DetailItem label="Listed Date" value="Jan 15, 2026" />
                                                <DetailItem label="Last Updated" value="2 days ago" />
                                            </div>
                                        </div>

                                        {/* Performance Metrics */}
                                        <div className="bg-gray-50 rounded-xl p-5">
                                            <h4 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faChartLine} className="text-teal-600" />
                                                Performance Metrics
                                            </h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">Total Leads</span>
                                                    <span className="text-2xl font-bold text-teal-600">{selectedPropertyForDetails.leads}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">Site Visits</span>
                                                    <span className="text-2xl font-bold text-teal-600">{selectedPropertyForDetails.visits}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-600">Conversion Rate</span>
                                                    <span className="text-2xl font-bold text-teal-600">
                                                        {selectedPropertyForDetails.visits > 0 ? `${((selectedPropertyForDetails.visits / selectedPropertyForDetails.leads) * 100).toFixed(1)}%` : '0%'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="space-y-6">
                                        {/* Description */}
                                        <div className="bg-gray-50 rounded-xl p-5">
                                            <h4 className="text-lg font-semibold text-black mb-4">Description</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                Premium commercial space with state-of-the-art facilities, located in the heart of the business district. Perfect for IT companies, corporate offices,
                                                and modern enterprises looking for a strategic location with excellent connectivity and amenities.
                                            </p>
                                        </div>

                                        {/* Amenities */}
                                        <div className="bg-gray-50 rounded-xl p-5">
                                            <h4 className="text-lg font-semibold text-black mb-4">Amenities & Features</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {['24/7 Power Backup', 'Parking Space', 'Security', 'Elevator', 'Conference Room', 'Cafeteria', 'Fire Safety', 'Wi-Fi'].map((amenity, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                                                        <span className="text-gray-700">{amenity}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-5">
                                    <h4 className="text-lg font-semibold text-black mb-4">Recent Activity</h4>
                                    <div className="space-y-3">
                                        {[
                                            { action: 'New lead received', time: '2 hours ago', user: 'Sharma Properties' },
                                            { action: 'Site visit scheduled', time: '1 day ago', user: 'Elite Realty' },
                                            { action: 'Price updated', time: '2 days ago', user: 'Admin' },
                                            { action: 'Property status changed to Live', time: '1 week ago', user: 'Admin' },
                                        ].map((activity, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faBell} className="text-teal-600 text-sm" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-800 font-medium">{activity.action}</p>
                                                    <p className="text-sm text-gray-500">by {activity.user}</p>
                                                </div>
                                                <span className="text-sm text-gray-500">{activity.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t p-6">
                            <div
                                className="flex flex-row justify-between gap-3
"
                            >
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            setShowDetailsModal(false);
                                            handleEditProperty(selectedPropertyForDetails.id);
                                        }}
                                        className="px-3 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition flex items-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        Edit Property
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setShowDetailsModal(false)} className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-1 lg:px-2 xl:px-10 py-6 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-6 border">
                    <h1 className="text-2xl md:text-2xl font-semibold text-black">Hi Prathamesh, Welcome to your Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your properties, track performance and view buyer activity</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 ">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-5 border border-gray-200 hover:border-teal-300 group flex flex-col items-center justify-center text-center"
                        >
                            <div className="relative mb-3 sm:mb-4">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <FontAwesomeIcon icon={stat.icon} className={`${stat.color} text-base sm:text-lg`} />
                                </div>

                                <div
                                    className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColor} blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                                ></div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-1 sm:mb-2 leading-tight">{stat.value}</h3>

                            <p className="text-sm sm:text-base font-semibold text-black mb-1 sm:mb-2 line-clamp-1">{stat.label}</p>

                            {/* Change indicator - Better visual hierarchy */}
                            <div className="flex items-center gap-1 sm:gap-2">
                                <span className="text-xs sm:text-sm text-gray-600 font-medium">{stat.change}</span>
                                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${stat.change.includes('+') ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            </div>

                            {/* Bottom border effect on hover */}
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Top Stats - Property and Response Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* LEFT PROPERTY CARD */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-5 sm:p-6 hover:shadow-md transition">
                        {/* Top row */}
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <span className="flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                ACTIVE
                            </span>
                            <p className="text-sm text-gray-500">Property ID: 83049057 | Valid Till Jun 4, 2026</p>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                            {/* Image */}
                            <div className="w-full sm:w-36 h-28 rounded-lg border overflow-hidden relative">
                                <img
                                    src="https://blog.ipleaders.in/wp-content/uploads/2020/12/Gurugram-to-have-the-first-Indo-Japanese-real-estate-project-Krisumi-Waterfall-Residences-FB-1200x725-compressed.jpg"
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 ">
                                <h3 className="text-lg font-semibold text-black">₹99.99 Lac · 2 BHK Multistorey Apartment for Sale</h3>
                                <p className="text-sm text-gray-500 mt-1">88 Sq-ft · Gurudwara Colony Nigdi, Pune</p>
                                <button className="text-gray-700 text-sm font-medium mt-2 hover:underline inline-flex items-center gap-1">
                                    Check Property Value
                                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                </button>

                                {/* Buttons */}
                                <div className="flex  gap-3 mt-4">
                                    <button
                                        onClick={() => handleEditProperty(1)} // Assuming ID 1 for this property
                                        className="px-3 py-1.5 border border-gray-500 text-black rounded-full text-sm hover:bg-red-50 font-medium transition"
                                    >
                                        Edit Property
                                    </button>
                                    <button onClick={() => handleViewDetails(1)} className="px-3 py-1.5 border border-gray-500 text-black rounded-full text-sm hover:bg-red-50 font-medium transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT RESPONSE CARD */}
                    <div className="bg-white rounded-2xl border shadow-sm p-5 sm:p-6 hover:shadow-md transition">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="flex items-center gap-2 font-semibold text-black">
                                <FontAwesomeIcon icon={faBell} className="text-teal-600" />4 Responses
                            </h3>
                            <button className="text-gray-800 text-sm font-medium hover:underline inline-flex items-center gap-1">
                                View All
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                            </button>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded-lg p-2">
                            <p className="text-sm text-black mb-2">Your Free Listing is visible to fewer Buyers!</p>
                            <p className="text-sm font-semibold text-black mb-3">Get more Responses with Premium Plan</p>
                            <button
                                onClick={() => setShowSubscription(true)}
                                className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-teal-700 transition shadow-md inline-flex items-center justify-center gap-2"
                            >
                                Upgrade Now
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        {/* Properties List */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-2xl shadow-sm border-0 sm:0 xl:border p-0 sm:p-3 lg:p-0 xl:p-5">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-lg font-semibold text-black">Projects </h2>
                                </div>

                                <div className="space-y-4">
                                    {properties.map((property) => (
                                        <div
                                            key={property.id}
                                            className="border rounded-2xl shadow-sm p-4 sm:p-5 lg:p-2 xl:p-2 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-2 items-start md:items-center xl:items-center">
                                                {/* Image */}
                                                <div
                                                    className="w-full sm:w-40 md:w-52 lg:w-64 xl:w-80 2xl:w-96 
                h-44 md:h-48 lg:h-52 xl:h-48 2xl:h-60 
                rounded-xl border overflow-hidden shrink-0 group"
                                                >
                                                    <img src={property.image} alt={property.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 mx-auto text-center sm:text-left flex flex-col items-center ">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h3 className="text-lg sm:text-2xl font-semibold text-black">{property.name}</h3>

                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>{property.status}</span>
                                                    </div>

                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {property.area} · {property.location}
                                                    </p>

                                                    <p className="text-sm text-gray-600 mt-1">{property.type}</p>

                                                    <div className="flex flex-wrap gap-6 text-sm mt-3">
                                                        <span>
                                                            Leads: <b className="text-teal-600">{property.leads}</b>
                                                        </span>
                                                        <span>
                                                            Visits: <b className="text-teal-600">{property.visits}</b>
                                                        </span>
                                                    </div>

                                                    <div className="flex gap-6 mt-4 flex-wrap sm:flex-nowrap">
                                                        <button
                                                            onClick={() => handleEditProperty(property.id)}
                                                            className="px-5 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-100"
                                                        >
                                                            <FontAwesomeIcon icon={faPenToSquare} className="mr-1" />
                                                            Edit
                                                        </button>

                                                        <button
                                                            onClick={() => handleViewDetails(property.id)}
                                                            className="px-5 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700"
                                                        >
                                                            <FontAwesomeIcon icon={faEye} className="mr-1" />
                                                            View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Site Visits Sidebar */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl shadow-sm border-0 sm:border p-0 sm:p-2">
                                <h2 className="text-lg font-semibold text-black mb-5">Upcoming Site Visits</h2>
                                <div className="space-y-3">
                                    {upcomingSiteVisits.map((visit) => (
                                        <div key={visit.id} className="bg-white border rounded-2xl shadow-sm p-2 hover:shadow-md transition">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                </div>
                                                <h3 className="font-semibold text-black text-sm flex-1">{visit.project}</h3>
                                            </div>

                                            <div className="grid grid-cols-1 gap-3 text-sm mb-3">
                                                <InfoBox icon={faUsers} label="Broker" value={visit.broker} />
                                                <div className="flex items-start gap-3 border rounded-lg p-3">
                                                    <span className="text-teal-600 mt-1">
                                                        <FontAwesomeIcon icon={faClock} />
                                                    </span>
                                                    <div>
                                                        <p className="text-xs text-gray-500">Schedule</p>
                                                        <p className="text-black font-medium">
                                                            {visit.date} • {visit.time}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t pt-3">
                                                <p className="text-xs text-gray-500">Requirement</p>
                                                <p className="text-sm text-black font-medium">{visit.requirement}</p>
                                            </div>

                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-3 ${getStatusColor(visit.status)}`}>{visit.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'leads' && (
                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                            <h2 className="text-lg font-semibold text-black">Recent Leads</h2>
                            <div className="flex items-center gap-3 flex-wrap">
                                <select className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 hover:border-teal-600">
                                    <option>All Projects</option>
                                    <option>Tech Park Plaza</option>
                                    <option>Metro Office Tower</option>
                                    <option>Retail Hub Central</option>
                                </select>
                                <select className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 hover:border-teal-600">
                                    <option>All Status</option>
                                    <option>New</option>
                                    <option>Contacted</option>
                                    <option>Site Visit Done</option>
                                    <option>Negotiation</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {recentLeads.map((lead) => (
                                <div key={lead.id} className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                        <h3 className="font-semibold text-black text-lg flex-1">{lead.project}</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
                                        <InfoBox icon={faUsers} label="Broker" value={lead.broker} />
                                        <InfoBox icon={faCalendar} label="Date" value={lead.date} />
                                        <div className="sm:col-span-2">
                                            <InfoBox icon={faBuilding} label="Requirement" value={lead.requirement} />
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>{lead.status}</span>
                                    </div>

                                    <button className="mt-4 w-full py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition text-sm font-medium">View Details →</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Property Card Section */}
            </div>
        </div>
    );
}

/* ---------- Reusable Info Box Component ---------- */
function InfoBox({ icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <div className="flex items-start gap-3 border rounded-lg p-3">
            <span className="text-teal-600 mt-1">
                <FontAwesomeIcon icon={icon} />
            </span>
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-black font-medium">{value}</p>
            </div>
        </div>
    );
}

/* ---------- Detail Item Component ---------- */
function DetailItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
            <span className="text-gray-600">{label}</span>
            <span className="font-medium text-black">{value}</span>
        </div>
    );
}

/* ---------- Source Item Component ---------- */
function SourceItem({ source, percentage, color }: { source: string; percentage: number; color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-gray-700">{source}</span>
                <span className="font-medium">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}
