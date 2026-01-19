import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  FaHeart,
  FaBed,
  FaCar,
  FaCalendarAlt,
  FaCamera,
  FaMapMarkerAlt,
  FaUser,
  FaPhoneAlt,
  FaHome,
  FaLock,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaSwimmingPool,
  FaWifi,
  FaBuilding,
  FaShieldAlt,
  FaBus,
  FaHospital,
  FaFilm,
  FaBookmark,
  FaRupeeSign,
  FaBath,
  FaCompass,
  FaParking,
} from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import propertyImg from "../../assets/property.jpg";
import roomImg from "../../assets/room.jpg";
import darkRoomImg from "../../assets/darkroom.jfif";

const center = [18.5074, 73.8077];

const DATA = {
  Transit: {
    title: "Bus Stations",
    icon: <FaBus />,
    items: [
      ["Kothrud Stand", "2.8 km | 8 mins"],
      ["Warje", "4.8 km | 10 mins"],
      ["Jijai Garden", "1.3 km | 5 mins"],
      ["Warje Malwadi Police Station", "2.0 km | 9 mins"],
    ],
  },
  Essentials: {
    title: "Hospitals",
    icon: <FaHospital />,
    items: [
      ["Jeevan MEDICAL & General Stores", "3.3 km | 9 mins"],
      ["Krishna Hospital", "4.7 km | 14 mins"],
      ["Srujan Maternity & Nursing Home", "2.5 km | 7 mins"],
      ["Deodhar Eye Hospital", "5.7 km | 19 mins"],
    ],
  },
  Utility: {
    title: "Movie Theaters",
    icon: <FaFilm />,
    items: [
      ["City Pride, Kothrud", "4.1 km | 12 mins"],
      ["Fun Time Multiplex", "5.0 km | 16 mins"],
      ["Watermark Filmclub", "3.7 km | 12 mins"],
    ],
  },
};

const RentPropertyOverview = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("Transit");
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <div className="min-h-screen bg-white mt-16 px-4 sm:px-6 md:px-10 lg:px-32 xl:px-56 py-4  text-black">
      
      <div className="w-full bg-white border border-gray-400 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden mb-4">
        <div className="p-3">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="font-semibold text-base flex items-center gap-1">
                1 BHK Flat in Siddhi Apartment For Rent in Warje
                <span className="text-teal-500 cursor-pointer text-sm">↗</span>
              </h2>
              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-500">
                  Sharma auto service centre siddhi j warje jakat naka pune
                </p>
                <button className="flex items-center gap-0.5 text-red-500 hover:text-red-600 ml-2">
                  <FaMapMarkerAlt className="w-3 h-3" />
                </button>
                <span className="text-xs text-gray-400 mx-1">·</span>
                <span className="text-teal-600 cursor-pointer text-xs hover:text-teal-700">
                  Explore Nearby
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              <button
                onClick={handleSaveClick}
                className="border border-gray-300 rounded p-1.5 hover:border-blue-300 transition-colors"
              >
                <FaBookmark
                  className={`w-3.5 h-3.5 transition-colors ${
                    saved ? "text-blue-500 fill-blue-500" : "text-gray-500"
                  }`}
                />
              </button>
              <button
                onClick={handleHeartClick}
                className="border border-gray-300 rounded p-1.5 hover:border-red-300 transition-colors"
              >
                <FaHeart
                  className={`w-3.5 h-3.5 transition-colors ${
                    liked ? "text-red-500 fill-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 text-center border-t border-b border-gray-300 py-2">
            <div>
              <p className="font-semibold text-lg text-[#479490]">₹ 16,000</p>
              <p className="text-xs text-gray-500">Rent</p>
            </div>
            <div className="border-l border-r border-gray-300">
              <p className="font-semibold text-lg text-[#479490]">₹ 30,000</p>
              <p className="text-xs text-gray-500">Deposit</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-[#479490]">540 sqft</p>
              <p className="text-xs text-gray-500">Builtup</p>
            </div>
            <div>
              <p className="font-semibold text-lg text-[#479490]">2/4</p>
              <p className="text-xs text-gray-500">Floor</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       
        <div className="lg:col-span-2 grid grid-cols-3 gap-2 h-[320px]">
          <div className="relative col-span-2">
            <img
              src={propertyImg}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
            <div className="absolute top-2 left-2 flex gap-1">
              <button className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <FaCamera /> Photos
              </button>
              <button className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <FaMapMarkerAlt /> Location
              </button>
            </div>
            <div className="absolute bottom-2 left-2 bg-white text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 text-[#479490]">
              <MdOutlinePhotoCamera className="w-3 h-3" /> Request Photos
            </div>
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-[1px] rounded-full">
              ● LIVE
            </span>
          </div>

          <div className="grid grid-rows-2 gap-2">
            <div className="relative">
              <img
                src={roomImg}
                className="w-full h-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="relative">
              <img
                src={darkRoomImg}
                className="w-full h-full object-cover rounded-lg brightness-50"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-base">
                +12
              </span>
            </div>
          </div>
        </div>

        
        <div className="bg-white border border-gray-400 rounded-lg shadow-sm overflow-hidden">
          <div className="p-3 border-b">
            <h3 className="font-semibold text-sm mb-2">Property Details</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaBed className="text-gray-600" />
                <div>
                  <p className="font-medium">1 Bedroom</p>
                  <p className="text-gray-500">Bedrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaBath className="text-gray-600" />
                <div>
                  <p className="font-medium">1</p>
                  <p className="text-gray-500">Bathrooms</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaCompass className="text-gray-600" />
                <div>
                  <p className="font-medium">East</p>
                  <p className="text-gray-500">Facing</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaParking className="text-gray-600" />
                <div>
                  <p className="font-medium">Bike</p>
                  <p className="text-gray-500">Parking</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaCalendarAlt className="text-gray-600" />
                <div>
                  <p className="font-medium">Immediately</p>
                  <p className="text-gray-500">Possession</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
                <FaHome className="text-gray-600" />
                <div>
                  <p className="font-medium">Apartment</p>
                  <p className="text-gray-500">Property Type</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-blue-700">
                <FaCalendarAlt />
                <span>
                  Showing at <b>01:00 PM Tomorrow!</b>
                </span>
              </div>
              <button className="text-blue-700 font-semibold text-xs hover:text-blue-800">
                Join Visit →
              </button>
            </div>
          </div>

          <div className="p-3">
            <div className="flex gap-2">
              <button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-xs font-semibold transition-colors"
                style={{ backgroundColor: "#e53e3e" }}
              >
                Contact Owner
              </button>
              <button className="flex-1 bg-[#479490] hover:bg-[#3a7774] text-white py-2 rounded text-xs font-semibold transition-colors relative">
                Schedule Visit
                <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] px-1 py-[1px] rounded-full">
                  ✔ Verified
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-3 mt-4">
        <p className="text-xs text-gray-600 mb-2">Nearby Places:</p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Shri Laxmikrupa Urban Co-Op Bank Limited",
            "Kothrud Depot",
            "Fit Pune",
            "Deenanath Mangeshkar Hospital",
            "City Pride - Kothrud",
          ].map((place, i) => (
            <span
              key={i}
              className="bg-gray-50 border border-gray-300 px-2.5 py-1 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {place}
            </span>
          ))}
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
       
        <div className="lg:col-span-2 bg-white border border-gray-400 rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-base border-l-4 border-red-500 pl-2">
              Description
            </h3>
            

          </div>

          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            <p>
              This 1 BHK for rent in Warje is perfect for families & bachelors
              as it is spacious and comfortable with an area of 540 sq. ft. This
              East facing home is on the 2nd floor.
            </p>
            <p>
              This 1 BHK for rent in Warje is perfect for families & bachelors
              as it is spacious and comfortable with an area of 540 sq. ft. This
              East facing home is on the 2nd floor.
            </p>
            <p>
              This 1 BHK for rent in Warje is perfect for families & bachelors
              as it is spacious and comfortable with an area of 540 sq. ft. This
              East facing home is on the 2nd floor.
            </p>
            
            <p>
              With National Institute of Open Schooling, Paranjape Vidya Mandir
              and Elixir Spoken English Classes close to this home, you'll be
              able to provide your children with many options to choose from.
            </p>
            {showMore && (
              <p>
                With City Pride, Kothrud, Fun Time Multiplex & Watermark
                Filmclub close by, you can catch your favourite movies running &
                never worry about missing a show because of traffic.
              </p>
            )}
          </div>

          <div
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-1 mt-4 text-[#479490] cursor-pointer text-sm hover:text-[#3a7774] transition-colors"
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

       
        <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-base mb-3 border-l-4 border-[#479490] pl-2">
            Property Activity
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-600" />
                  <span className="text-xs text-gray-600">Unique Views</span>
                </div>
                <span className="font-semibold text-lg">2,456</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-[#479490] h-1.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaHeart className="text-gray-600" />
                  <span className="text-xs text-gray-600">Shortlists</span>
                </div>
                <span className="font-semibold text-lg">47</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-red-500 h-1.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-gray-600" />
                  <span className="text-xs text-gray-600">Contacted</span>
                </div>
                <span className="font-semibold text-lg">122</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      
        <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-base mb-3 border-l-4 border-red-500 pl-2">
            Amenities
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { icon: <FaCar />, label: "Parking" },
              { icon: <FaSwimmingPool />, label: "Swimming Pool" },
              { icon: <FaWifi />, label: "Wi-Fi" },
              { icon: <FaBuilding />, label: "Club House" },
              { icon: <FaShieldAlt />, label: "Security" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 p-2 border border-gray-300 rounded-lg hover:border-[#479490] transition-colors"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
                  {item.icon}
                </div>
                <p className="text-xs font-medium text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-base mb-3 border-l-4 border-[#479490] pl-2">
            Overview
          </h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {[
              ["Furnishing Status", "Unfurnished"],
              ["Water Supply", "Corporation"],
              ["Pet Allowed", "Yes"],
              ["Non-Veg Allowed", "Yes"],
              ["Age of Building", "3-5 Years"],
              ["Gated Security", "No"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="flex justify-between items-center p-2 border-b border-gray-200"
              >
                <span className="text-gray-600">{label}</span>
                <span className="font-medium text-[#479490]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-base border-l-4 border-red-500 pl-2">
            Neighbourhood
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs">
              <FaMapMarkerAlt className="text-red-500 text-xs" />
              <span className="text-gray-800">Your Location -</span>
            </div>
            <input
              placeholder="Type in place to get direction"
              className="border px-3 py-1.5 rounded text-xs w-full sm:w-48"
            />
            <button className="border border-red-500 text-red-500 px-3 py-1.5 rounded text-xs hover:bg-red-50 transition-colors">
              Get Directions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 h-[340px] rounded-lg overflow-hidden border border-gray-400">
            <MapContainer center={center} zoom={13} className="h-full w-full">
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={center}>
                <Popup>1 BHK Flat in Siddhi Apartment</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="border border-gray-400 rounded-lg overflow-hidden max-h-[340px] lg:max-h-none overflow-y-auto">
            <div className="flex text-xs border-b border-gray-400">
              {["Transit", "Essentials", "Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-center transition-colors ${
                    activeTab === tab
                      ? "bg-[#479490] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-3 space-y-3">
              <p className="font-semibold text-sm flex items-center gap-2 text-[#479490]">
                {DATA[activeTab].icon} {DATA[activeTab].title}
              </p>
              <div className="space-y-2">
                {DATA[activeTab].items.map(([name, dist], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-2 border border-gray-300 rounded hover:border-[#479490] transition-colors"
                  >
                    <span className="text-xs">{name}</span>
                    <span className="text-xs text-gray-500 font-medium">
                      {dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white border border-gray-400 rounded-lg shadow-sm p-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-semibold text-base border-l-4 border-[#479490] pl-2">
              Rent Trend in Pune
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Based on similar properties
            </p>
          </div>
          <span className="bg-[#479490] text-white text-xs px-3 py-1 rounded-full">
            NBEstimate Price Trends
          </span>
        </div>

        <div className="relative mb-6">
          <div className="w-full h-1.5 bg-gray-300 rounded-full">
            <div className="w-2/3 h-1.5 bg-gradient-to-r from-[#479490] to-red-500 rounded-full"></div>
          </div>

          <div className="absolute left-2/3 top-[-8px] transform -translate-x-1/2">
            <div className="bg-[#479490] text-white text-xs px-2 py-1 rounded-lg shadow">
              <div className="flex items-center gap-1">
                <FaHome className="text-xs" />
                <span className="font-semibold">₹16k</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>₹9k</span>
            <span>₹11k</span>
            <span>₹15k</span>
            <span>₹17k</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-600 mb-2">
            Recent Transactions:
          </p>
          {["664 sqft - ₹15,500/month", "951 sqft - ₹18,200/month"].map(
            (transaction, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-300 hover:border-[#479490] transition-colors"
              >
                <span className="text-xs">{transaction}</span>
                <FaLock className="text-red-500 text-xs" />
              </div>
            )
          )}
        </div>

        <button className="w-full border border-[#479490] text-[#479490] text-xs py-2 rounded-lg mt-4 hover:bg-[#479490] hover:text-white transition-colors">
          View more details →
        </button>
      </div>
    </div>
  );
};

export default RentPropertyOverview;
