import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const data = {
  Hydrabad: [
    "Flats for Sale in Banjara Hills",
    "Flats for Sale in Jubilee Hills",
    "Flats for Sale in Madhapur",
    "Flats for Sale in Gachibowli",
    "Flats for Sale in Kondapur",
    "Flats for Sale in Kukatpally",
    "Flats for Sale in Miyapur",
    "Flats for Sale in Manikonda",
    "Flats for Sale in Hitech City",
    "Flats for Sale in Begumpet",
    "Properties for Sale in Hydrabad",
    "Independent Floor for Sale in Hydrabad",
    "Bank Auction Properties for Sale in Hydrabad",
  ],
  Delhi: [
    "Flats for Sale in Vasant Vihar",
    "Flats for Sale in Safdarjung Enclave",
    "Flats for Sale in Hauz Khas",
    "Flats for Sale in Greater Kailash",
    "Flats for Sale in Dwarka",
    "Flats for Sale in Rohini",
    "Flats for Sale in Janakpuri",
    "Flats for Sale in Lajpat Nagar",
    "Flats for Sale Below 60 Lakhs in Delhi",
    "Flats for Sale Below 80 Lakhs in Delhi",
    "Flats for Sale Below 1 Cr in Delhi",
    "Properties for Sale in Delhi",
    "Independent Floor for Sale in Delhi",
    "Bank Auction Properties for Sale in Delhi",
  ],
  Mumbai: [
    "Flats for Sale in Andheri West",
    "Flats for Sale in Andheri East",
    "Flats for Sale in Malad West",
    "Flats for Sale in Navi Mumbai",
    "Flats for Sale in Powai",
    "Flats for Sale in Thane West",
    "Flats for Sale in Bandra West",
    "Flats for Sale Below 60 Lakhs",
    "Flats for Sale Below 80 Lakhs",
    "Flats for Sale Below 1 Cr",
    "Properties for Sale in Mumbai",
    "Independent Floor for Sale in Mumbai",
    "Bank Auction Properties for Sale in Mumbai",
  ],
  Chennai: [
    "Flats for Sale in Velachery",
    "Flats for Sale in Thiruvanmiyur",
    "Flats for Sale in Medavakkam",
    "Flats for Sale in Mylapore",
    "Flats for Sale in Adyar",
    "Flats for Sale in T Nagar",
    "Flats for Sale Below 45 Lakhs",
    "Flats for Sale Below 60 Lakhs",
    "Flats for Sale Below 80 Lakhs",
    "Properties for Sale in Chennai",
    "Independent Floor for Sale in Chennai",
    "Bank Auction Properties for Sale in Chennai",
  ],
  Pune: [
    "Flats for Sale in Wakad",
    "Flats for Sale in Kharadi",
    "Flats for Sale in Baner",
    "Flats for Sale in Hadapsar",
    "Flats for Sale in Aundh",
    "Flats for Sale in Hinjewadi",
    "Flats for Sale Below 45 Lakhs",
    "Flats for Sale Below 70 Lakhs",
    "Flats for Sale Below 90 Lakhs",
    "Properties for Sale in Pune",
    "Independent Floor for Sale in Pune",
    "Bank Auction Properties for Sale in Pune",
  ],
  
};

const CityPropertySection = ({ onClose }) => {
  const [expandedCity, setExpandedCity] = useState(null);

  return (
    <div className="relative bg-white h-full">

      
      <div className="hidden lg:grid grid-cols-2 xl:grid-cols-5 gap-6 px-6 py-6 text-xs text-gray-700 overflow-y-auto scrollbar-hide">
        {Object.entries(data).map(([city, items]) => (
          <div key={city}>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Flats for Sale in {city}
            </h3>
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={index} className="hover:text-teal-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
      <div className="lg:hidden px-4 py-6 overflow-y-auto scrollbar-hide flex-grow">
        {Object.entries(data).map(([city, items]) => (
          <div key={city} className="border-b">
            <button
              onClick={() =>
                setExpandedCity(expandedCity === city ? null : city)
              }
              className="w-full py-3 flex justify-between"
            >
              <span className="font-semibold">
                Flats for Sale in {city}
              </span>
              <span>{expandedCity === city ? "−" : "+"}</span>
            </button>

            {expandedCity === city && (
              <ul className="pb-3 text-sm">
                {items.map((item, index) => (
                  <li key={index} className="pl-3 hover:text-teal-600">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityPropertySection;
