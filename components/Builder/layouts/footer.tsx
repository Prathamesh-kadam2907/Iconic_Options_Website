"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="p-6 mt-auto text-center dark:text-white-dark">
            <div className="flex justify-center gap-4 mb-6">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    className="h-10 cursor-pointer"
                    alt="Google Play"
                />
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    className="h-10 cursor-pointer"
                    alt="App Store"
                />
            </div>

            <div className="flex justify-center gap-4 mb-4">
                {[
                    { icon: faFacebook, color: '#1877F2' },
                    { icon: faTwitter, color: '#1DA1F2' },
                    { icon: faInstagram, color: '#E4405F' },
                    { icon: faLinkedin, color: '#0A66C2' },
                    { icon: faYoutube, color: '#FF0000' },
                ].map((item, index) => (
                    <span
                        key={index}
                        className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 flex items-center justify-center cursor-pointer transition"
                    >
                        <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
                    </span>
                ))}
            </div>
{/* 
            <div className="mb-4">
                <Link
                    href="/builder/dashboard"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Builder Control Panel
                </Link>
            </div> */}

            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Iconic Options Technologies Pvt. Ltd.
            </p>
        </footer>
    );
};

export default Footer;
