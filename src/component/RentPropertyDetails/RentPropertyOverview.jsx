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
  FaBath,
  FaCompass,
  FaParking,
} from "react-icons/fa";
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

  return (
    <div className="min-h-screen bg-white mt-16 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-56 py-4 text-black">
      
      <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden mb-4">
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                1 BHK Flat in Siddhi Apartment For Rent in Warje
                <span className="text-teal-500 cursor-pointer text-sm">↗</span>
              </h2>
              <div className="flex items-center mt-2">
                <p className="text-sm text-gray-600">
                  Sharma auto service centre siddhi j warje jakat naka pune
                </p>
                <button className="flex items-center gap-1 text-red-500 hover:text-red-600 ml-2">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-400 mx-2">·</span>
                <span className="text-teal-600 cursor-pointer text-sm hover:text-teal-700">
                  Explore Nearby
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="border border-gray-300 rounded-lg p-2 hover:border-blue-400 transition-colors">
                <FaBookmark
                  className={`w-4 h-4 ${
                    saved ? "text-blue-500 fill-blue-500" : "text-gray-500"
                  }`}
                />
              </button>
              <button className="border border-gray-300 rounded-lg p-2 hover:border-red-400 transition-colors">
                <FaHeart
                  className={`w-4 h-4 ${
                    liked ? "text-red-500 fill-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 text-center border-t border-b border-gray-200 py-3">
            <div>
              <p className="font-semibold text-xl text-[#479490]">₹ 16,000</p>
              <p className="text-xs text-gray-500">Rent</p>
            </div>
            <div className="border-l border-r border-gray-200">
              <p className="font-semibold text-xl text-[#479490]">₹ 30,000</p>
              <p className="text-xs text-gray-500">Deposit</p>
            </div>
            <div>
              <p className="font-semibold text-xl text-[#479490]">540 sqft</p>
              <p className="text-xs text-gray-500">Builtup</p>
            </div>
            <div>
              <p className="font-semibold text-xl text-[#479490]">2/4</p>
              <p className="text-xs text-gray-500">Floor</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      
        <div className="lg:col-span-2 grid grid-cols-3 gap-2 h-[240px] sm:h-[280px] lg:h-[320px]">
          <div className="relative col-span-2 rounded-lg overflow-hidden">
            <img
              src={propertyImg}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <button className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
                <FaCamera /> Photos
              </button>
              <button className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
                <FaMapMarkerAlt /> Location
              </button>
            </div>
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              ● LIVE
            </span>
          </div>

          <div className="grid grid-rows-2 gap-2">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={roomImg}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={darkRoomImg}
                className="w-full h-full object-cover brightness-50"
                alt=""
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                +12
              </span>
            </div>
          </div>
        </div>

       
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Property Details
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#479490]/10 p-2 rounded-lg">
                  <FaBed className="text-[#479490] w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">1 Bedroom</p>
                  <p className="text-xs text-gray-500">Bedrooms</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#479490]/10 p-2 rounded-lg">
                  <FaBath className="text-[#479490] w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">1</p>
                  <p className="text-xs text-gray-500">Bathrooms</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#479490]/10 p-2 rounded-lg">
                  <FaCompass className="text-[#479490] w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">East</p>
                  <p className="text-xs text-gray-500">Facing</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#479490]/10 p-2 rounded-lg">
                  <FaParking className="text-[#479490] w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Bike</p>
                  <p className="text-xs text-gray-500">Parking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-600 w-4 h-4" />
                <div>
                  <p className="text-sm font-medium text-blue-800">
                    Owner showing at{" "}
                    <span className="font-semibold">01:00 PM Tomorrow!</span>
                  </p>
                </div>
              </div>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                Join Visit →
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg text-sm transition-colors">
              Contact Owner
            </button>
            <button className="flex-1 bg-[#479490] hover:bg-[#3a7774] text-white font-semibold py-3 rounded-lg text-sm transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>

      
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 mb-4">
        <h3 className="font-semibold text-lg mb-3 text-gray-800">
          Nearby Places
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Shri Laxmikrupa Urban Co-Op Bank Limited",
            "Kothrud Depot",
            "Fit Pune",
            "Deenanath Mangeshkar Hospital",
            "City Pride - Kothrud",
          ].map((place, i) => (
            <span
              key={i}
              className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {place}
            </span>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 bg-white border border-gray-300 rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Description</h3>
          </div>

          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              This 1 BHK for rent in Warje is perfect for families & bachelors
              as it is spacious and comfortable with an area of 540 sq. ft. This
              East facing home is on the 2nd floor.
            </p>
            <p>
              With National Institute of Open Schooling, Paranjape Vidya Mandir
              and Elixir Spoken English Classes close to this home, you'll be
              able to provide your children with many options to choose from. If
              you are in need of any emergency services or medical assistance,
              you will be happy to note that Jeevan MEDICAL & General Stores,
              Krishna Hospital and Srujan Maternity & Nursing home are very
              close by.
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
            className="flex items-center gap-2 mt-6 text-[#479490] cursor-pointer text-sm font-medium hover:text-[#3a7774] transition-colors"
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-5">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Property Activity
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <FaUser className="text-gray-500 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    Unique Views
                  </span>
                </div>
                <span className="font-semibold text-xl text-gray-800">
                  2,456
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#479490] h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <FaHeart className="text-gray-500 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    Shortlists
                  </span>
                </div>
                <span className="font-semibold text-xl text-gray-800">47</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-500 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    Contacted
                  </span>
                </div>
                <span className="font-semibold text-xl text-gray-800">122</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-right mt-4">
            Powered By : <span className="font-medium">NBEstimate</span>
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-5">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {[
              { icon: <FaCar />, label: "Parking" },
              { icon: <FaSwimmingPool />, label: "Pool" },
              { icon: <FaWifi />, label: "Wi-Fi" },
              { icon: <FaBuilding />, label: "Club" },
              { icon: <FaShieldAlt />, label: "Security" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#479490] transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 text-lg">
                  {item.icon}
                </div>
                <p className="text-xs font-medium text-gray-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-5">
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Furnishing Status", "Unfurnished"],
              ["Water Supply", "Corporation"],
              ["Pet Allowed", "Yes"],
              ["Non-Veg Allowed", "Yes"],
              ["Age of Building", "3-5 Years"],
              ["Gated Security", "No"],
              ["Property Type", "Apartment"],
              ["Preferred Tenant", "Anyone"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="flex justify-between items-center pb-3 border-b border-gray-100"
              >
                <span className="text-sm text-gray-600">{label}</span>
                <span className="text-sm font-medium text-gray-800">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-5 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg text-gray-800">Neighbourhood</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Your Location</span>
            </div>
            <input
              placeholder="Search location..."
              className="border border-gray-300 px-3 py-2 rounded-lg text-sm w-full sm:w-48"
            />
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors">
              Get Directions
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 h-[360px] rounded-lg overflow-hidden border border-gray-300">
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

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex text-sm">
              {["Transit", "Essentials", "Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-center transition-colors ${
                    activeTab === tab
                      ? "bg-[#479490] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                {DATA[activeTab].icon}
                <p className="font-semibold text-sm text-gray-800">
                  {DATA[activeTab].title}
                </p>
              </div>

              <div className="space-y-3">
                {DATA[activeTab].items.map(([name, dist], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xs text-gray-700">{name}</span>
                    <span className="text-xs font-medium text-gray-500">
                      {dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Rent Trend in Pune
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              NBEestimate Price Trends
            </p>
          </div>
          <span className="bg-[#479490] text-white text-sm px-4 py-1.5 rounded-full">
            Market Analysis
          </span>
        </div>

        <div className="relative mb-8">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-2/3 h-2 bg-gradient-to-r from-[#479490] to-red-500 rounded-full"></div>
          </div>

          <div className="absolute left-2/3 top-[-12px] transform -translate-x-1/2">
            <div className="bg-[#479490] text-white text-sm px-3 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <FaHome className="text-xs" />
                <span className="font-bold">₹16k</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-500 mt-6">
            <span>₹9k</span>
            <span>₹11k</span>
            <span>₹15k</span>
            <span>₹17k</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <p className="text-sm font-semibold text-gray-700">
            Recent Transactions
          </p>
          {["664 sqft - ₹15,500/month", "951 sqft - ₹18,200/month"].map(
            (transaction, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-[#479490] transition-colors"
              >
                <span className="text-sm text-gray-700">{transaction}</span>
                <FaLock className="text-red-500" />
              </div>
            )
          )}
        </div>

        <button className="w-full border-2 border-[#479490] text-[#479490] font-semibold py-3 rounded-lg text-sm hover:bg-[#479490] hover:text-white transition-colors">
          View Detailed Market Report →
        </button>
      </div>
    </div>
  );
};

export default RentPropertyOverview;
