import React from "react";
import { Link } from "react-router-dom";

const QuickLink = () => {
  const links = [
    "Commercial Properties for rent in Kalewadi Road",
    "Commercial Properties for rent in Dehu Road",
    "Commercial Properties for rent in Sahyog Nagar",
    "Commercial Properties for rent in Dattawadi",
    "Commercial Properties for rent in Nigdi",
    "Commercial Properties for rent in Sahyog Nagar",
    "Commercial Properties for rent in Hinjewadi",
    "Commercial Properties for rent in Baner",
    "Commercial Properties for rent in Wakad",
    "Commercial Properties for rent in Kalyani Nagar",
  ];

  return (
    <div className="bg-white border border-gray-400 rounded-md pt-3 sm:pt-2 pl-3 sm:pl-2 pr-3 sm:pr-2 pb-3 sm:pb-2 w-full sm:w-64 md:w-56 lg:w-48 xl:w-40 mt-4 sm:mt-6 md:mt-8 inline-block">
      <h2 className="text-teal-500 text-base sm:text-base font-semibold mb-2 sm:mb-2">
        Quick links
      </h2>

      <div className="border-b mb-2 sm:mb-2"></div>

      <p className="text-gray-700 text-sm sm:text-xs font-medium mb-3 sm:mb-3">
        People also searched for
      </p>

      <ul className="list-disc list-inside space-y-3 sm:space-y-3">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-xs sm:text-[10px] text-gray-600 hover:text-teal-600 transition-colors leading-relaxed"
          >
            <Link to="#" className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLink;
