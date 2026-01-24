import React from 'react';
import HomePropertyCard from './HomePropertyCard';

const RecommendedProperties = () => {
    return (
        <>
            <div className="bg-white text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Recommended Properties</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Browse through our exclusive collection of premium properties with zero brokerage</p>
                <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div>
                <HomePropertyCard />
            </div>
        </>
    );
};

export default RecommendedProperties;
