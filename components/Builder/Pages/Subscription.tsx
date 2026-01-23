'use client';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Plan {
    name: string;
    price: string;
    oldPrice?: string;
    highlight?: boolean;
    badge?: string;
    features: (string | boolean)[];
}

const Subscription = () => {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const plans: Plan[] = [
        {
            name: 'FREE',
            price: '₹0',
            badge: 'Currently Active',
            features: ['Upto 2 Enquiries', false, '17% Visibility', false, false, 'Limited Validity', false],
        },
        {
            name: 'GOLD',
            price: '₹2479',
            oldPrice: '₹6198',
            highlight: true,
            badge: 'Most Popular',
            features: ['Upto 30 Enquiries', '8 Days Boost', '90% Visibility', true, false, '90 Days Validity', true],
        },
        {
            name: 'DIAMOND',
            price: '₹3235',
            oldPrice: '₹8088',
            features: ['Upto 40 Enquiries', '10 Days Boost', '92% Visibility', true, '500 Emails', '120 Days Validity', true],
        },
        {
            name: 'TITANIUM',
            price: '₹3691',
            oldPrice: '₹9232',
            features: ['Upto 50 Enquiries', '50 Days Boost', '98% Visibility', true, '1000 Emails', '180 Days Validity', true],
        },
    ];

    const renderFeature = (feature: any) => {
        if (feature === true) return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg" />;

        if (feature === false) return <FontAwesomeIcon icon={faTimesCircle} className="text-red-400 text-lg" />;

        return <span className="text-sm text-gray-700">{feature}</span>;
    };

    const handleCardClick = (index: number) => {
        setSelectedPlan(index);
    };

    return (
        <div className="min-h-screen bg-white py-10 lg:py-16 px-4 border border-gray-200 hover:border-gray-600 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Buyers are unable to notice your Property</h1>

                    <p className="text-gray-600 text-sm md:text-base">
                        Speak to buyers directly & <span className="text-teal-600 font-semibold">Pay No Brokerage</span>
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col text-center transition-all duration-300 cursor-pointer
              ${selectedPlan === index ? 'border-teal-500 shadow-2xl scale-[1.02] ring-4 ring-teal-100' : 'border-gray-200'}
              hover:scale-[1.01] hover:border-gray-500 group`}
                        >
                            {/* Selection Indicator */}
                            {selectedPlan === index && (
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                                </div>
                            )}

                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                                    <FontAwesomeIcon icon={faStar} />
                                    {plan.badge}
                                </div>
                            )}

                            {/* Name */}
                            <h2
                                className={`text-xl font-bold mt-2 mb-1 transition-colors duration-300
                ${selectedPlan === index ? 'text-teal-600' : 'text-gray-900'}`}
                            >
                                {plan.name}
                            </h2>

                            {/* Price */}
                            <div className="my-5">
                                {plan.oldPrice && <p className="line-through text-gray-400 text-sm mb-1">{plan.oldPrice}</p>}
                                <p
                                    className={`text-4xl font-bold transition-colors duration-300
                  ${selectedPlan === index ? 'text-teal-700' : 'text-gray-900'}`}
                                >
                                    {plan.price}
                                    <span className="text-sm font-normal text-gray-500">/plan</span>
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2"></div>

                            {/* Features */}
                            <div className="flex-1 space-y-4 mb-6 mt-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex justify-center transition-transform duration-300 hover:scale-105">
                                        {renderFeature(feature)}
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push('/payment');
                                }}
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-4 border-2
                ${
                    plan.name === 'FREE'
                        ? 'border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-700 hover:bg-teal-50'
                        : 'bg-teal-500 text-white border-teal-500 hover:bg-teal-600 hover:border-teal-600'
                }`}
                            >
                                {plan.name === 'FREE' ? 'Continue Free' : 'Buy Now'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Selected Plan Info (Visible only when a plan is selected) */}
                {selectedPlan !== null && (
                    <div className="mt-8 max-w-2xl mx-auto p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl border border-teal-200 animate-fadeIn">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Selected Plan: <span className="text-teal-600">{plans[selectedPlan].name}</span>
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">Click "Buy Now" to proceed with the {plans[selectedPlan].name} plan</p>
                            </div>
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="px-4 py-2 text-sm text-black hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors border border-teal-300"
                            >
                                Clear Selection
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Add custom styles for animations */}
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
            `}</style>
        </div>
    );
};

export default Subscription;
