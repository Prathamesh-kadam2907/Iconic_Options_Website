import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const RecommendedPropertyType = () => {
    const propertyTypeCards = [
        {
            id: 1,
            title: 'Residential Apartment',
            count: '500+ Properties',
            bgImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 2,
            title: 'Commercial Property',
            count: '150+ Properties',
            bgImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 3,
            title: 'Independent House',
            count: '80+ Properties',
            bgImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            title: 'Builder Project',
            count: '45+ Projects',
            bgImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 5,
            title: 'PG / Hostel',
            count: '120+ Properties',
            bgImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 6,
            title: '1 RK / Studio',
            count: '90+ Properties',
            bgImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <div className="bg-white py-6 w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-center mb-10 pt-10">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2">Explore by Property Type</h2>

                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Discover properties by category like apartments, villas, houses and offices.</p>

                <div className="w-20 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
            </div>

            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={24}
                breakpoints={{
                    320: { slidesPerView: 1.1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {propertyTypeCards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className="relative h-[380px] rounded-xl overflow-hidden cursor-pointer group">
                            <img src={card.bgImage} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />

                            <div className="absolute inset-0 bg-black/50"></div>

                            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                                    <p className="text-white/90 text-lg">{card.count}</p>
                                </div>

                                <button className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-100 transition">View all properties</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RecommendedPropertyType;
