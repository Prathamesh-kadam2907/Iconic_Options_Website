'use client';
import { faBed, faBriefcase, faBuilding, faChevronLeft, faChevronRight, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import RecommendedProperties from './RecommendedProperties';
import RecommendedProjects from './RecommendedProjects';
import RecommendedPropertyType from './RecommendedPropertyType';
import BuildersCard from './BuildersCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Home = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState('Buy');
    const [city, setCity] = useState('Pune');
    const [keyword, setKeyword] = useState('');
    const [propertyType, setPropertyType] = useState('Full House');
    const [selectedBHK, setSelectedBHK] = useState('1BHK');

    const propertyTypes = ['Full House', 'PG/Hostel', 'Flatmate'];
    const bhkOptions = ['1 RK', '1BHK', '2BHK', '3BHK', '4BHK'];

    const handleSearch = () => {
        const searchData = { city, keyword, propertyType, selectedBHK };

        // if (activeTab === 'Buy') {
        //     navigate('/buyer', { state: searchData });
        // } else if (activeTab === 'Rent') {
        //     navigate('/rent', { state: searchData });
        // } else if (activeTab === 'Commercial') {
        //     navigate('/commerical', { state: searchData });
        // }
    };

    return (
        <div className="min-h-screen">
            <div className="">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
                    <div className="text-center rounded-xl p-6 sm:p-8">
                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Find Your Perfect Home Without Brokerage</h1>

                        {/* Tabs */}
                        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg border border-gray-200 flex overflow-hidden">
                            {['Buy', 'Rent', 'Commercial'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-all
                        ${activeTab === tab ? 'bg-white text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-teal-500'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Search Box */}
                        <div className="max-w-4xl mx-auto mt-5 bg-white rounded-lg border border-gray-200 shadow-lg p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-lg overflow-hidden border border-gray-300">
                                {/* City */}
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="px-4 py-3 text-sm bg-white outline-none border-b sm:border-b-0 sm:border-r border-gray-300 focus:ring-2 focus:ring-teal-500"
                                >
                                    <option>Pune</option>
                                    <option>Bangalore</option>
                                    <option>Mumbai</option>
                                </select>

                                {/* Search */}
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="Search up to 3 localities or landmarks"
                                    className="flex-1 px-4 py-3 text-sm outline-none border-b sm:border-b-0 border-gray-300 focus:ring-2 focus:ring-teal-500"
                                />

                                {/* Button */}
                                <button
                                    onClick={handleSearch}
                                    className="bg-red-500 hover:bg-red-600 px-6 sm:px-8 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                    <span className="hidden sm:inline">Search</span>
                                    <span className="sm:hidden">Go</span>
                                </button>
                            </div>

                            {/* Filters */}
                            <div className="mt-5 bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-5">
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
                                    {/* Property Type */}
                                    <div className="md:col-span-3">
                                        <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 text-left">Property Type</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                            {propertyTypes.map((type) => (
                                                <label
                                                    key={type}
                                                    className={`cursor-pointer text-center px-3 py-2 text-xs sm:text-sm rounded-md border transition-all
                                        ${propertyType === type ? 'bg-teal-500 text-white border-teal-500 shadow' : 'bg-white text-gray-600 border-gray-300 hover:border-teal-400'}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="propertyType"
                                                        value={type}
                                                        checked={propertyType === type}
                                                        onChange={(e) => setPropertyType(e.target.value)}
                                                        className="hidden"
                                                    />
                                                    {type}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BHK */}
                                    <div className="md:col-span-2">
                                        <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 text-left">BHK Type</h3>
                                        <select
                                            value={selectedBHK}
                                            onChange={(e) => setSelectedBHK(e.target.value)}
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-teal-500"
                                        >
                                            {bhkOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Selected Filters */}
                                <div className="mt-4 pt-3 border-t border-gray-200">
                                    <p className="text-xs sm:text-sm text-gray-600 text-left sm:text-center">
                                        <span className="font-medium">Selected:</span> <span className="text-teal-600 font-semibold">{propertyType}</span> •{' '}
                                        <span className="text-teal-600 font-semibold">{selectedBHK}</span> • <span className="text-teal-600 font-semibold">{city}</span>
                                        {keyword && (
                                            <>
                                                • <span className="text-teal-600 font-semibold">"{keyword}"</span>
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-white text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Discover Your Dream Home
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Browse through our exclusive collection of premium properties with
          zero brokerage
        </p>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
      </div> */}

            {/* <div>
        <HomePropertyCard></HomePropertyCard>
      </div> */}

            <div className="py-1">
                <div>
                    <RecommendedProperties />
                    <RecommendedProjects />
                    <RecommendedPropertyType />
                    <BuildersCard />
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Cities With Listing</h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
                    <p className="text-gray-500 mt-4">Destinations we love the most</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                name: 'Pune',
                                count: 430,
                                img: `/assets/images/pune1.jpg`,
                            },
                            {
                                name: 'Mumbai',
                                count: 580,
                                img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
                            },
                            {
                                name: 'Delhi',
                                count: 520,
                                img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
                            },
                            {
                                name: 'Bengaluru',
                                count: 460,
                                img: `/assets/images/bang.jpg`,
                            },
                            {
                                name: 'Hyderabad',
                                count: 390,
                                img: `/assets/images/hydrabad.jpg`,
                            },
                            {
                                name: 'Chennai',
                                count: 350,
                                img: `/assets/images/Chennai.jpg`,
                            },
                        ].map((city, index) => (
                            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                <img src={city.img} className="h-52 w-full object-cover group-hover:scale-110 transition duration-500" alt={city.name} />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-semibold">{city.name}</h3>
                                    <p className="text-sm">{city.count} Properties</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-semibold text-gray-800">The Smarter Way to Buy, Sell & Rent Homes</h2>
                        <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {[
                            {
                                title: 'Buy a Property',
                                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
                                color: 'bg-red-500',
                            },
                            {
                                title: 'Sell a Property',
                                img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
                                color: 'bg-yellow-400',
                            },
                            {
                                title: 'Rent a Property',
                                img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4',
                                color: 'bg-indigo-500',
                            },
                        ].map((item, index) => (
                            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                                <img src={item.img} className="h-72 w-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
                                <div className="absolute inset-0 bg-black/30"></div>

                                <div className="absolute bottom-4 left-4 bg-white/90 px-5 py-3 rounded-xl flex items-center justify-between w-[85%]">
                                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                    <div className={`${item.color} text-white p-2 rounded-full`}>→</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-1">
                <div className="max-w-8xl mx-auto px-6 relative">
                    <h2 className="text-3xl font-semibold text-black text-center">
                        Our Customers Love Us
                        <div className="w-16 h-1 bg-pink-500 mt-2 mx-auto"></div>
                    </h2>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={3500}
                        loop
                        spaceBetween={24}
                        breakpoints={{
                            320: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="mt-10"
                    >
                        {[
                            {
                                name: 'Shubham',
                                msg: 'Finding a good flat without brokerage was very easy.',
                                img: 'https://randomuser.me/api/portraits/men/32.jpg',
                            },
                            {
                                name: 'Lisa',
                                msg: 'Best platform to rent house safely with real photos.',
                                img: 'https://randomuser.me/api/portraits/women/44.jpg',
                            },
                            {
                                name: 'Kishore',
                                msg: 'Highly recommended for genuine property listing.',
                                img: 'https://randomuser.me/api/portraits/men/65.jpg',
                            },
                            {
                                name: 'Amit',
                                msg: 'The interface is very clean and easy to use.',
                                img: 'https://randomuser.me/api/portraits/men/18.jpg',
                            },
                            {
                                name: 'Pooja',
                                msg: 'NoBroker helped me find my dream flat quickly.',
                                img: 'https://randomuser.me/api/portraits/women/68.jpg',
                            },
                            {
                                name: 'Suraj',
                                msg: 'Finding a good flat without brokerage was very easy.',
                                img: 'https://randomuser.me/api/portraits/men/32.jpg',
                            },
                            {
                                name: 'Kishor',
                                msg: 'Finding a good flat without brokerage was very easy.',
                                img: 'https://randomuser.me/api/portraits/men/32.jpg',
                            },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-200 rounded-xl p-4 shadow h-full">
                                    <div className="flex items-center gap-3">
                                        <img src={item.img} alt={item.name} className="h-12 w-12 rounded-full" />
                                        <div>
                                            <h4 className="font-semibold">{item.name}</h4>
                                            <div className="text-teal-500 text-sm">★★★★★</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 mt-4 text-sm">“{item.msg}”</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
