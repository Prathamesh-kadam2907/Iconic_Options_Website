'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheckCircle, 
    faTimesCircle, 
    faStar, 
    faCrown, 
    faGem, 
    faRocket, 
    faBolt, 
    faFire, 
    faPercent,
    faCalendarDays,
    faEnvelope,
    faEye,
    faUsers,
    faArrowRight,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Plan {
    name: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    icon: any;
    gradient: string;
    badge?: string;
    badgeColor?: string;
    features: {
        label: string;
        value: string | boolean;
        icon: any;
    }[];
    buttonText: string;
    buttonColor: string;
}

const Subscription = () => {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<number | null>(1); // Default select GOLD plan

    const plans: Plan[] = [
        {
            name: 'FREE',
            price: '₹0',
            icon: faUsers,
            gradient: 'from-gray-100 to-gray-200',
            badge: 'Current Plan',
            badgeColor: 'bg-gray-500',
            features: [
                { label: 'Enquiries', value: 'Upto 2', icon: faUsers },
                { label: 'Boost Days', value: false, icon: faRocket },
                { label: 'Visibility', value: '17%', icon: faEye },
                { label: 'Premium Badge', value: false, icon: faStar },
                { label: 'Email Notifications', value: false, icon: faEnvelope },
                { label: 'Validity', value: 'Limited', icon: faCalendarDays },
                { label: 'Phone Support', value: false, icon: faBolt },
            ],
            buttonText: 'Continue Free',
            buttonColor: 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
        },
        {
            name: 'GOLD',
            price: '₹2,479',
            oldPrice: '₹6,198',
            discount: '60% OFF',
            icon: faCrown,
            gradient: 'from-amber-50 to-yellow-50',
            badge: 'Most Popular',
            badgeColor: 'bg-gradient-to-r from-amber-500 to-yellow-500',
            features: [
                { label: 'Enquiries', value: 'Upto 30', icon: faUsers },
                { label: 'Boost Days', value: '8 Days', icon: faRocket },
                { label: 'Visibility', value: '90%', icon: faEye },
                { label: 'Premium Badge', value: true, icon: faStar },
                { label: 'Email Notifications', value: false, icon: faEnvelope },
                { label: 'Validity', value: '90 Days', icon: faCalendarDays },
                { label: 'Phone Support', value: true, icon: faBolt },
            ],
            buttonText: 'Upgrade to Gold',
            buttonColor: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600',
        },
        {
            name: 'DIAMOND',
            price: '₹3,235',
            oldPrice: '₹8,088',
            discount: '60% OFF',
            icon: faGem,
            gradient: 'from-blue-50 to-indigo-50',
            badge: 'Best Value',
            badgeColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
            features: [
                { label: 'Enquiries', value: 'Upto 40', icon: faUsers },
                { label: 'Boost Days', value: '10 Days', icon: faRocket },
                { label: 'Visibility', value: '92%', icon: faEye },
                { label: 'Premium Badge', value: true, icon: faStar },
                { label: 'Email Notifications', value: '500 Emails', icon: faEnvelope },
                { label: 'Validity', value: '120 Days', icon: faCalendarDays },
                { label: 'Phone Support', value: true, icon: faBolt },
            ],
            buttonText: 'Choose Diamond',
            buttonColor: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600',
        },
        {
            name: 'TITANIUM',
            price: '₹3,691',
            oldPrice: '₹9,232',
            discount: '60% OFF',
            icon: faFire,
            gradient: 'from-purple-50 to-pink-50',
            badge: 'Premium',
            badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
            features: [
                { label: 'Enquiries', value: 'Upto 50', icon: faUsers },
                { label: 'Boost Days', value: '50 Days', icon: faRocket },
                { label: 'Visibility', value: '98%', icon: faEye },
                { label: 'Premium Badge', value: true, icon: faStar },
                { label: 'Email Notifications', value: '1000 Emails', icon: faEnvelope },
                { label: 'Validity', value: '180 Days', icon: faCalendarDays },
                { label: 'Phone Support', value: true, icon: faBolt },
            ],
            buttonText: 'Go Premium',
            buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
        },
    ];

    const renderFeatureValue = (value: string | boolean) => {
        if (value === true) {
            return (
                <div className="flex items-center justify-center w-7 h-7 bg-green-100 rounded-full">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xs" />
                </div>
            );
        }
        if (value === false) {
            return (
                <div className="flex items-center justify-center w-7 h-7 bg-red-100 rounded-full">
                    <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-xs" />
                </div>
            );
        }
        return <span className="text-base font-semibold text-gray-900">{value}</span>;
    };

    const handleCardClick = (index: number) => {
        setSelectedPlan(index);
    };

    const handleBuyNow = (planName: string) => {
        // Handle purchase logic here
        console.log(`Purchasing ${planName} plan`);
        router.push('/payment');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 lg:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-12">
                    
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                            Get More Visibility
                        </span>
                        <br />
                        <span className="text-gray-800">For Your Properties</span>
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                        Speak directly to genuine buyers & close deals faster. Choose the perfect plan for your business growth.
                    </p>
                </div>

                {/* Comparison Table Header (Desktop) */}
                <div className="hidden lg:grid grid-cols-4 gap-4 mb-1 px-4">
                    {plans.map((plan, index) => (
                        <div key={index} className="text-center">
                            <h3 className={`text-lg font-bold ${index === 0 ? 'text-gray-700' : 'text-gray-900'}`}>
                                {plan.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden group
                                ${selectedPlan === index 
                                    ? 'border-teal-500 shadow-lg transform lg:scale-105' 
                                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                        >
                            {/* Top Gradient Bar */}
                            <div className={`h-1.5 ${plan.gradient}`}></div>

                            {/* Badge */}
                            {plan.badge && (
                                <div className={`absolute top-2 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10 whitespace-nowrap`}>
                                    {plan.badge}
                                </div>
                            )}

                            {/* Content Container */}
                            <div className="p-4 sm:p-5 lg:p-4">
                                {/* Plan Header */}
                                <div className="text-center mb-4">
                                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-2 ${plan.gradient}`}>
                                        <FontAwesomeIcon 
                                            icon={plan.icon} 
                                            className={index === 0 ? 'text-gray-600' : 'text-gray-700'} 
                                            size="sm"
                                        />
                                    </div>
                                    
                                    <h2 className={`text-lg sm:text-xl font-bold mb-1.5 ${selectedPlan === index ? 'text-teal-700' : 'text-gray-900'}`}>
                                        {plan.name}
                                    </h2>

                                    {/* Price Section */}
                                    <div className="mb-3">
                                        {plan.oldPrice && (
                                            <div className="flex items-center justify-center gap-1.5 mb-0.5">
                                                <span className="text-gray-400 line-through text-xs">{plan.oldPrice}</span>
                                                {plan.discount && (
                                                    <span className="bg-red-100 text-red-700 text-xs font-bold px-1.5 py-0.5 rounded">
                                                        {plan.discount}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        <div className="flex items-baseline justify-center">
                                            <span className={`text-2xl sm:text-3xl font-bold ${selectedPlan === index ? 'text-teal-800' : 'text-gray-900'}`}>
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-500 text-xs ml-1">/plan</span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3"></div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-2 sm:space-y-3 mb-4">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center justify-between min-h-[32px]">
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon 
                                                    icon={feature.icon} 
                                                    className="text-gray-400 text-xs" 
                                                />
                                                <span className="text-xs text-gray-600">{feature.label}</span>
                                            </div>
                                            <div className="text-right">
                                                {renderFeatureValue(feature.value)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBuyNow(plan.name);
                                    }}
                                    className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 ${plan.buttonColor} shadow-sm hover:shadow flex items-center justify-center gap-1.5 text-sm`}
                                >
                                    {plan.buttonText}
                                    {index !== 0 && (
                                        <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                    )}
                                </button>

                                {/* Selection Indicator */}
                                {selectedPlan === index && (
                                    <div className="absolute top-3 right-3 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center animate-pulse">
                                        <FontAwesomeIcon icon={faCheck} className="text-white text-[10px]" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Selected Plan Summary */}
                {selectedPlan !== null && (
                    <div className="mt-6 lg:mt-10 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-200 p-4 sm:p-5 shadow-md animate-fadeIn">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                
                                
                                <div className="flex flex-col sm:flex-row gap-2.5">
                                    <button
                                        onClick={() => setSelectedPlan(null)}
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        Change Plan
                                    </button>
                                    <button
                                        onClick={() => handleBuyNow(plans[selectedPlan].name)}
                                        className="px-5 py-2 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-600 transition-all shadow-sm flex items-center justify-center gap-1.5 text-sm"
                                    >
                                        Proceed to Payment
                                        <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Info */}
                <div className="mt-6 lg:mt-10 text-center">
                    <p className="text-gray-500 text-xs">
                        <span className="font-semibold text-teal-600">Note:</span> All prices include GST. 
                        7-day money-back guarantee on all paid plans. 
                        Upgrade or downgrade anytime.
                    </p>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                /* Custom scrollbar for mobile comparison */
                .overflow-x-auto::-webkit-scrollbar {
                    height: 4px;
                }

                .overflow-x-auto::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 8px;
                }

                .overflow-x-auto::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 8px;
                }

                .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </div>
    );
};

export default Subscription;