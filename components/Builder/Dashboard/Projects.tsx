'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faCamera,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

interface Project {
    id: number;
    name: string;
    location: string;
    price: string;
    bhk: string;
    photos: number;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Skyline Towers',
        location: 'Baner, Pune',
        price: '₹2.5 Cr - ₹4.5 Cr',
        bhk: '2, 3 & 4 BHK',
        photos: 12,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
        id: 2,
        name: 'Green Valley',
        location: 'Hinjewadi, Pune',
        price: '₹1.8 Cr - ₹3.2 Cr',
        bhk: '1, 2 & 3 BHK',
        photos: 8,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    },
    {
        id: 3,
        name: 'Royal Heights',
        location: 'Wakad, Pune',
        price: '₹95 Lac - ₹1.4 Cr',
        bhk: '2 & 3 BHK',
        photos: 10,
        image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471',
    },
    {
        id: 4,
        name: 'Urban Residency',
        location: 'Kharadi, Pune',
        price: '₹1.2 Cr - ₹2.1 Cr',
        bhk: '2 & 3 BHK',
        photos: 7,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    },
    {
        id: 5,
        name: 'Elite Plaza',
        location: 'Magarpatta, Pune',
        price: '₹1.5 Cr - ₹2.8 Cr',
        bhk: '3 & 4 BHK',
        photos: 9,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    },
    {
        id: 6,
        name: 'Grand Avenue',
        location: 'Hadapsar, Pune',
        price: '₹85 Lac - ₹1.5 Cr',
        bhk: '2 BHK',
        photos: 6,
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    },
];

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

            {/* ===== Heading ===== */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-black">
                    My Projects
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    Manage all your listed properties
                </p>
            </div>

            {/* ===== Cards Grid ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden group"
                    >
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />

                            {/* Photos badge */}
                            <div className="absolute bottom-3 left-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2 shadow">
                                <FontAwesomeIcon icon={faCamera} />
                                {project.photos} Photos
                            </div>

                            {/* Wishlist heart */}
                            <button className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:text-red-500 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4">

                            <h3 className="font-semibold text-gray-900 text-lg">
                                {project.name}
                            </h3>

                            <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
                                {project.location}
                            </p>

                            <p className="text-gray-900 font-bold mt-3">
                                {project.price}
                            </p>

                            <p className="text-sm text-gray-600">
                                {project.bhk}
                            </p>

                            {/* View button */}
                            <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-sm font-medium transition">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
