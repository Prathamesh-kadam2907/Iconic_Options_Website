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

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto px-0 sm:px-6 lg:px-8 py-0 space-y-6">
                {/* Welcome Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6 border">
                    <h1 className="text-2xl md:text-2xl font-semibold text-black">Hi Prathamesh, Welcome to your Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your properties, track performance and view buyer activity</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    {stats.map((stat, index) => (
        <div 
            key={index} 
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-5 border border-gray-200 hover:border-teal-300 group"
        >
            {/* Icon with background effect */}
            <div className="relative mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon 
                        icon={stat.icon} 
                        className={`${stat.color} text-base sm:text-lg`} 
                    />
                </div>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.bgColor} blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>

            {/* Stats Value - Larger on mobile */}
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black mb-1 sm:mb-2 leading-tight">
                {stat.value}
            </h3>

            {/* Label - Better spacing */}
            <p className="text-sm sm:text-base font-semibold text-black mb-1 sm:mb-2 line-clamp-1">
                {stat.label}
            </p>

            {/* Change indicator - Better visual hierarchy */}
            <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.change}
                </span>
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
                        <div className="flex flex-col sm:flex-row gap-5">
                            {/* Image */}
                            <div className="w-full sm:w-36 h-28 rounded-lg border overflow-hidden relative">
                                <img
                                    src="https://blog.ipleaders.in/wp-content/uploads/2020/12/Gurugram-to-have-the-first-Indo-Japanese-real-estate-project-Krisumi-Waterfall-Residences-FB-1200x725-compressed.jpg"
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-black">₹99.99 Lac · 2 BHK Multistorey Apartment for Sale</h3>
                                <p className="text-sm text-gray-500 mt-1">88 Sq-ft · Gurudwara Colony Nigdi, Pune</p>
                                <button className="text-gray-700 text-sm font-medium mt-2 hover:underline inline-flex items-center gap-1">
                                    Check Property Value
                                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                </button>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <button className="px-4 py-1.5 border border-gray-500 text-black rounded-full text-sm hover:bg-red-50 font-medium transition">Edit Property</button>
                                    <button className="px-4 py-1.5 border border-gray-500 text-black rounded-full text-sm hover:bg-red-50 font-medium transition">Refresh</button>
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

                        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                            <p className="text-sm text-black mb-2">Your Free Listing is visible to fewer Buyers!</p>
                            <p className="text-sm font-semibold text-black mb-3">Get more Responses with Premium Plan</p>
                            <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-teal-700 transition shadow-md inline-flex items-center justify-center gap-2">
                                Upgrade Now
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap gap-3">
                    {['Overview', 'Properties', 'Leads', 'Site Visits'].map((tab) => {
                        const active = activeTab === tab.toLowerCase().replace(' ', '-');
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${active ? 'bg-teal-600 text-white shadow-md' : 'bg-white border text-black hover:border-teal-600'}`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {/* Content based on active tab */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Properties List */}
                        <div className="lg:col-span-2 space-y-4">
                           <div className="bg-white rounded-2xl shadow-sm border-0 sm:border p-0 sm:p-2">

                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-lg font-semibold text-black">Projects </h2>
                                    {/* <button
                                        onClick={() => router.push('/builder/PostProperty')}
                                        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition shadow-md text-sm font-medium"
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        Add New
                                    </button> */}
                                </div>

                                <div className="space-y-4">
                                    {properties.map((property) => (
                                        <div key={property.id} className="border rounded-2xl shadow-sm p-4 hover:shadow-md transition bg-white">
                                            <div className="flex flex-col sm:flex-row gap-5">
                                                {/* Image */}
                                                <div className="w-full sm:w-36 h-28 rounded-lg border overflow-hidden shrink-0">
                                                    <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                                        <h3 className="text-base sm:text-lg font-semibold text-black">{property.name}</h3>

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

                                                    <div className="flex flex-wrap gap-3 mt-4">
                                                        <button className="px-4 py-1.5 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100">
                                                            <FontAwesomeIcon icon={faPenToSquare} className="mr-1" />
                                                            Edit
                                                        </button>

                                                        <button className="px-4 py-1.5 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700">
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
