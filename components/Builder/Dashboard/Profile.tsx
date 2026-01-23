'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faEnvelope,
    faPhone,
    faShieldAlt,
    faEdit,
    faCheckCircle,
    faCog,
    faBell,
    faLock,
    faMessage,
    faMoneyBillWave,
    faArrowRight,
    faCamera,
    faStar,
    faChevronDown,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
    const [user] = useState({
        name: 'Prathamesh Kadam',
        registeredAs: 'Individual',
        email: 'prathameshkadam2907@gmail.com',
        mobile: '7058138814',
        profileImage: 'https://public.r2.headshotpro-cf.com/headshotpro/reviews/695d2d6417d1245c2c36dc50-695d34b1f195682517b83d60.png',
        joinDate: 'January 15, 2024',
        propertiesListed: 12,
        activeLeads: 48,
        
    });

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('Profile Details');

    const menuItems = [
        { icon: faUser, label: 'Profile Details' },
        { icon: faEdit, label: 'Edit Login Details' },
        { icon: faLock, label: 'Change Password' },
        { icon: faMessage, label: 'Saved Messages' },
        { icon: faCog, label: 'Account Settings' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-whitw to-teal-50/30 ">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-sm border border-gray-200"
                    >
                        <span className="font-semibold text-gray-900">
                            {activeMenuItem}
                        </span>
                        <FontAwesomeIcon 
                            icon={mobileMenuOpen ? faTimes : faChevronDown} 
                            className="text-gray-600"
                        />
                    </button>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-500 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {/* Left Sidebar - Responsive */}
                        <aside className={`lg:border-r border-gray-500 bg-gradient-to-b from-white to-gray-50 p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
                            mobileMenuOpen ? 'block' : 'hidden lg:block'
                        }`}>
                            {/* Profile Summary Card */}
                            <div className="mb-6 sm:mb-8">
                                <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-4 sm:gap-6 lg:gap-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={user.profileImage}
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <button 
                                            className="absolute bottom-0 right-0 sm:right-0 lg:bottom-2 lg:right-2 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-teal-600 transition-colors"
                                            aria-label="Change profile photo"
                                        >
                                            <FontAwesomeIcon icon={faCamera} className="text-xs sm:text-sm" />
                                        </button>
                                    </div>
                                    
                                    <div className="text-center sm:text-left lg:text-center flex-1 sm:flex-auto lg:flex-1">
                                        <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 mb-1 break-words">
                                            {user.name}
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                                            {user.registeredAs}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                                    <div className="bg-teal-50 rounded-lg sm:rounded-xl p-3 text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                            {user.propertiesListed}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                            Properties
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                            {user.activeLeads}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                            Active Leads
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Items - Responsive */}
                            <div className="space-y-1 sm:space-y-2">
    {menuItems.map((item, index) => {
        const isActive = activeMenuItem === item.label;

        return (
            <button
                key={index}
                onClick={() => {
                    setActiveMenuItem(item.label);
                    setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-left transition-all duration-200 group border border-gray-00
                    ${
                        isActive
                            ? 'bg-teal-50 text-teal-700 border border-gray-500 shadow-sm'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
                    }`}
            >
                {/* Icon */}
                <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition
                        ${
                            isActive
                                ? 'bg-teal-600 text-white'
                                : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'
                        }`}
                >
                    <FontAwesomeIcon icon={item.icon} />
                </div>

                {/* Label */}
                <span className="font-medium text-sm sm:text-base flex-1 truncate">
                    {item.label}
                </span>
            </button>
        );
    })}
</div>

                        </aside>

                        {/* Right Content - Responsive */}
                        <section className="lg:col-span-3 p-4 sm:p-6 md:p-8">
                            <div className="mb-6 sm:mb-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-1 sm:mb-2">
                                    Profile Details
                                </h2>
                                <p className="text-gray-800 text-sm sm:text-base md:text-lg">
                                    View and manage your personal information
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-sm">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                                    {/* Personal Information Section */}
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-gray-200">
                                            Personal Information
                                        </h3>
                                        
                                        <div className="space-y-4 sm:space-y-6">
                                            <InfoCard
                                                icon={faUser}
                                                label="Full Name"
                                                value={user.name}
                                                color="text-teal-600"
                                                bgColor="bg-teal-50"
                                            />
                                            
                                            <InfoCard
                                                icon={faUser}
                                                label="Registered As"
                                                value={user.registeredAs}
                                                color="text-blue-600"
                                                bgColor="bg-blue-50"
                                                badge={
                                                    <span className="ml-2 px-2 py-1 sm:px-3 sm:py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full whitespace-nowrap">
                                                        Active
                                                    </span>
                                                }
                                            />
                                            
                                            <InfoCard
                                                icon={faEdit}
                                                label="Member Since"
                                                value={user.joinDate}
                                                color="text-purple-600"
                                                bgColor="bg-purple-50"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact & Security Section */}
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-gray-200">
                                            Contact & Security
                                        </h3>
                                        
                                        <div className="space-y-4 sm:space-y-6">
                                            <InfoCard
                                                icon={faEnvelope}
                                                label="Email Address"
                                                value={
                                                    <div className="flex flex-col">
                                                        <span className="text-gray-900 text-sm sm:text-base break-all">
                                                            {user.email}
                                                        </span>
                                                        <div className="flex items-center gap-1 sm:gap-2 mt-1">
                                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs sm:text-sm" />
                                                            <span className="text-green-600 text-xs sm:text-sm font-medium">Verified</span>
                                                        </div>
                                                    </div>
                                                }
                                                color="text-red-600"
                                                bgColor="bg-red-50"
                                                action={
                                                    <button className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium hover:underline transition-colors whitespace-nowrap">
                                                        Add Alternate Email
                                                    </button>
                                                }
                                            />
                                            
                                            <InfoCard
                                                icon={faPhone}
                                                label="Mobile Number"
                                                value={
                                                    <div className="flex flex-col">
                                                        <span className="text-gray-900 text-sm sm:text-base">
                                                            +91 {user.mobile}
                                                        </span>
                                                        <div className="flex items-center gap-1 sm:gap-2 mt-1">
                                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs sm:text-sm" />
                                                            <span className="text-green-600 text-xs sm:text-sm font-medium">Verified</span>
                                                        </div>
                                                    </div>
                                                }
                                                color="text-green-600"
                                                bgColor="bg-green-50"
                                                action={
                                                    <button className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium hover:underline transition-colors whitespace-nowrap">
                                                        Change Mobile
                                                    </button>
                                                }
                                            />
                                            
                                            <InfoCard
                                                icon={faShieldAlt}
                                                label="Password"
                                                value={
                                                    <span className="text-gray-900 text-sm sm:text-base italic">
                                                        ••••••••
                                                    </span>
                                                }
                                                color="text-orange-600"
                                                bgColor="bg-orange-50"
                                                action={
                                                    <button className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium hover:underline transition-colors whitespace-nowrap">
                                                        Change Password
                                                    </button>
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Information Section */}
                                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                                        Additional Information
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-teal-300 transition-colors">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-teal-100 to-teal-50 flex items-center justify-center flex-shrink-0">
                                                    <FontAwesomeIcon icon={faCog} className="text-teal-600 text-base sm:text-lg" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                                                        Account Settings
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                                                        Manage notification preferences and privacy settings
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-5 hover:border-teal-300 transition-colors">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-blue-600 text-base sm:text-lg" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                                                        Earn Commissions
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                                                        Refer customers and earn home loan commissions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons - Responsive */}
                                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                                        <FontAwesomeIcon icon={faEdit} className="text-xs sm:text-sm" />
                                        Edit Profile
                                    </button>
                                    
                                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                                        <FontAwesomeIcon icon={faCog} className="text-xs sm:text-sm" />
                                        Account Settings
                                    </button>
                                    
                                    <button className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-red-300 text-red-600 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:border-red-400 hover:bg-red-50 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                                        <FontAwesomeIcon icon={faLock} className="text-xs sm:text-sm" />
                                        Privacy Settings
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Enhanced Info Card Component ---------- */
function InfoCard({ 
    icon, 
    label, 
    value, 
    color, 
    bgColor, 
    badge, 
    action 
}: { 
    icon: any; 
    label: string; 
    value: React.ReactNode; 
    color: string; 
    bgColor: string; 
    badge?: React.ReactNode;
    action?: React.ReactNode;
}) {
    return (
        <div className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all duration-300">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
                <FontAwesomeIcon icon={icon} className={`text-base sm:text-lg ${color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                        {label}
                    </span>
                    {badge}
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors break-words">
                    {value}
                </div>
                {action && (
                    <div className="mt-1 sm:mt-2">
                        {action}
                    </div>
                )}
            </div>
        </div>
    );
}