'use client';
import { faCameraAlt, faHeart, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { properties } from './HomePropertyCardFunction';

const HomePropertyCard = () => {
    const handleHeartClick = (e: any, id: any) => {
        e.stopPropagation();
        // setProperties((prev) => prev.map((item) => (item.id === id ? { ...item, liked: !item.liked } : item)));
        // console.log(`Toggled like for property ID: ${id}`);
    };

    const handleLocationClick = (e: any, title: any) => {
        e.stopPropagation();
        console.log('Location clicked for:', title);
    };

    return (
        <div className="md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {properties.map((data: any) => (
                    <div key={data.id} className="bg-white border border-gray-400 rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
                        <div className="p-3 border-b border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-sm flex items-center gap-1.5 text-gray-900">
                                        {data.title}
                                        <span className="text-teal-500 cursor-pointer text-xs hover:text-teal-600 transition-colors">↗</span>
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <p className="text-xs text-gray-600">{data.address}</p>

                                        <button onClick={(e) => handleLocationClick(e, data.title)} className="flex items-center gap-0.5 text-red-700 hover:text-red-800 ml-2 transition-colors">
                                            <FontAwesomeIcon icon={faMapMarkedAlt} className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    <button
                                        onClick={(e) => handleHeartClick(e, data.id)}
                                        className="border border-gray-200 rounded-lg p-1.5 hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                                    >
                                        <FontAwesomeIcon icon={faHeart} className={`w-3.5 h-3.5 transition-colors ${data.liked ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="relative w-full group">
                                <img src={data.image} className="w-full h-40 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-out" alt={data.title} />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-lg"></div>
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[#479490] shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                                    <FontAwesomeIcon icon={faCameraAlt} className="w-3.5 h-3.5" />
                                    Request Photos
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 p-3 border-t border-gray-100">
                            <div className="flex justify-between items-center w-full">
                                <div className="text-[11px] text-gray-600 space-y-0.5">
                                    <div>
                                        In <span className="font-medium text-gray-800">Maithili Square</span>, Kiwale, Pune
                                    </div>
                                    <div className="flex gap-2">
                                        <span>
                                            Posted by <span className="font-medium text-gray-800">Owner</span>
                                        </span>
                                        <span className="text-gray-400">•</span>
                                        <span>3 weeks ago</span>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                    className="px-6 py-1.5 bg-[#479490] text-white text-xs font-medium rounded-lg hover:bg-[#3a7c79] transition-colors duration-200 min-w-20"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePropertyCard;
