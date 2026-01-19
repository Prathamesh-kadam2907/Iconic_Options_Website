import React, { useState, useRef } from "react";
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { FaFileContract, FaTruckFast } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaHome, FaCalendarCheck } from "react-icons/fa";
import { FaBuilding, FaBed, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import CityPropertySection from "../component/QuickLinks/CityPropertySection";
import HomePropertyCard from "../component/Property/HomePropertyCard";
import RecommendedProperties from "../component/HomeComponents/RecommendedProperties";
import RecommendedProjects from "../component/HomeComponents/RecommendedProjects";
import RecommendedProjectsSection from "../component/HomeComponents/RecommendedPropertyType";
import BuildersCard from "../component/HomeComponents/BuildersCard";
import RecommendedPropertyType from "../component/HomeComponents/RecommendedPropertyType";

const Home = () => {
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Buy");
  const navigate = useNavigate();
  const [city, setCity] = useState("Pune");
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("Full House"); // ADDED
  const [selectedBHK, setSelectedBHK] = useState("1BHK"); // ADDED

  const propertyTypes = ["Full House", "PG/Hostel", "Flatmate"];
  const bhkOptions = ["1 RK", "1BHK", "2BHK", "3BHK", "4BHK"];

  const handleSearch = () => {
    const searchData = { city, keyword, propertyType, selectedBHK };

    if (activeTab === "Buy") {
      navigate("/buyer", { state: searchData });
    } else if (activeTab === "Rent") {
      navigate("/rent", { state: searchData });
    } else if (activeTab === "Commercial") {
      navigate("/commerical", { state: searchData });
    }
  };

  return (
    <div className="min-h-screen bg-white scrollbar-hide ">
      <div className="py-14 mt-[64px] bg-white border">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 p-4 sm:p-6 rounded-lg border border-red hover:border-gray-500 transition-colors duration-300">
          <h1 className="pb-6 sm:pb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Find Your Perfect Home Without Brokerage
          </h1>

        
          <div className="mt-5 max-w-4xl mx-auto bg-white shadow-xl rounded-t-lg flex text-black border-l border-r border-t border-gray-400">
            {["Buy", "Rent", "Commercial"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 sm:py-3 font-medium text-sm sm:text-base border-b-2 transition ${
                  activeTab === tab
                    ? "border-teal-400 text-teal-600"
                    : "border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

        
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-b-lg border-t p-4 sm:p-6 border-l border-r border-b border-gray-400 ">
          
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center border rounded-md overflow-hidden border-gray-300 gap-0">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="px-4 py-3 outline-none border-b sm:border-b-0 sm:border-r border-gray-300 sm:border-teal-400 bg-white"
              >
                <option>Pune</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>

              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search upto 3 localities or landmarks"
                className="flex-1 px-4 py-3 outline-none border-b sm:border-b-0 border-gray-300"
              />

              <button
                onClick={handleSearch}
                className="bg-red-400 hover:bg-red-500 px-6 sm:px-8 py-3 font-medium text-white flex items-center justify-center gap-2 rounded-none sm:rounded-lg shadow hover:shadow-lg transition"
              >
                <FaSearch className="text-sm" />
                <span className="hidden sm:inline">Search</span>
                <span className="sm:hidden">Go</span>
              </button>
            </div>

           
            <div className="mt-4 bg-white p-3 sm:p-4 rounded-lg border border-gray-300 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
                
                <div className="md:col-span-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 text-left">
                    Property Type
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {propertyTypes.map((type) => (
                      <label
                        key={type}
                        className={`text-center px-2 sm:px-3 py-2 border rounded-md text-xs cursor-pointer transition-all ${
                          propertyType === type
                            ? "bg-teal-500 text-white border-teal-500 shadow-sm"
                            : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                        }`}
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

              
                <div className="md:col-span-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 text-left">
                    BHK Type
                  </h3>
                  <select
                    value={selectedBHK}
                    onChange={(e) => setSelectedBHK(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {bhkOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300">
                <p className="text-xs text-gray-600 text-left sm:text-center">
                  <span className="font-medium">Selected Filters:</span>{" "}
                  <span className="text-teal-600 font-medium">
                    {propertyType}
                  </span>{" "}
                  •{" "}
                  <span className="text-teal-600 font-medium">
                    {selectedBHK}
                  </span>{" "}
                  • <span className="text-teal-600 font-medium">{city}</span>
                  {keyword && (
                    <span>
                      {" "}
                      •{" "}
                      <span className="text-teal-600 font-medium">
                        "{keyword}"
                      </span>
                    </span>
                  )}
                </p>
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

      {/*Home Page Second section */}
      <div className="bg-white py-1 ">
        {/* <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
          <p className="text-gray-500 mt-4">
            Follow these 3 steps to book your place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-200 p-8 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-700 mx-auto text-white text-2xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="mt-5 font-semibold text-lg">
                01. Search for Location
              </h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Search property by city, area or landmark easily and quickly
                using smart filters.
              </p>
            </div>

            <div className="bg-gray-200 p-8 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500 mx-auto text-white text-2xl">
                <FaHome />
              </div>
              <h3 className="mt-5 font-semibold text-lg">
                02. Select Property Type
              </h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Choose apartments, flats, villas or bungalows according to your
                budget.
              </p>
            </div>

            <div className="bg-gray-200 p-8 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 mx-auto text-white text-2xl">
                <FaCalendarCheck />
              </div>
              <h3 className="mt-5 font-semibold text-lg">
                03. Book Your Property
              </h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Schedule a visit instantly and connect directly with the
                property owner.
              </p>
            </div>
          </div>
        </div> */}

        <div>
          <RecommendedProperties></RecommendedProperties>
          <RecommendedProjects></RecommendedProjects>
          <RecommendedPropertyType></RecommendedPropertyType>
          <BuildersCard></BuildersCard>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-1 text-left">
            <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
              Explore by <br /> Property Type
            </h2>
            <div className="w-16 h-1 bg-pink-500 mt-2"></div>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Discover properties by category like apartments, villas, houses
              and offices.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Apartment", count: 32, icon: <FaBuilding /> },
              { title: "Villas", count: 34, icon: <FaBed /> },
              { title: "Houses", count: 33, icon: <FaHome /> },
              { title: "Offices", count: 24, icon: <FaBriefcase /> },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-xl shadow hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer hover:-translate-y-1"
              >
                <div className="text-gray-900 text-4xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {item.count} Properties
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Cities With Listing
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
          <p className="text-gray-500 mt-4">Destinations we love the most</p>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Pune",
                count: 430,
                img: assets.pune,
              },
              {
                name: "Mumbai",
                count: 580,
                img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
              },
              {
                name: "Delhi",
                count: 520,
                img: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
              },
              {
                name: "Bengaluru",
                count: 460,
                img: assets.bang,
              },
              {
                name: "Hyderabad",
                count: 390,
                img: assets.hydrabad,
              },
              {
                name: "Chennai",
                count: 350,
                img: assets.chennai,
              },
            ].map((city, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={city.img}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  alt={city.name}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{city.name}</h3>
                  <p className="text-sm">{city.count} Properties</p>
                </div>
              </div>
            ))}
          </div>

        
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              The Smarter Way to Buy, Sell & Rent Homes
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Buy a Property",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                color: "bg-red-500",
              },
              {
                title: "Sell a Property",
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
                color: "bg-yellow-400",
              },
              {
                title: "Rent a Property",
                img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
                color: "bg-indigo-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={item.img}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-4 left-4 bg-white/90 px-5 py-3 rounded-xl flex items-center justify-between w-[85%]">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <div className={`${item.color} text-white p-2 rounded-full`}>
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 ">
        <div className="max-w-8xl mx-auto px-6 relative">
          <h2 className="text-3xl font-semibold text-black text-center">
            Our Customers Love Us
            <div className="w-16 h-1 bg-pink-500 mt-2 mx-auto"></div>
          </h2>

          <button
            onClick={() => (sliderRef.current.scrollLeft -= 350)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-teal-600 h-10 w-10 rounded-full shadow-md hover:bg-teal-50 hover:scale-110 transition-all duration-200 flex items-center justify-center z-10"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => (sliderRef.current.scrollLeft += 350)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-teal-600 h-10 w-10 rounded-full shadow-md hover:bg-teal-50 hover:scale-110 transition-all duration-200 flex items-center justify-center z-10"
          >
            <FaChevronRight />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 mt-10 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {[
              {
                name: "Shubham",
                msg: "Finding a good flat without brokerage was very easy.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Lisa",
                msg: "Best platform to rent house safely with real photos.",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Kishore",
                msg: "Highly recommended for genuine property listing.",
                img: "https://randomuser.me/api/portraits/men/65.jpg",
              },
              {
                name: "Amit",
                msg: "The interface is very clean and easy to use.",
                img: "https://randomuser.me/api/portraits/men/18.jpg",
              },
              {
                name: "Pooja",
                msg: "NoBroker helped me find my dream flat quickly.",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Suraj",
                msg: "Finding a good flat without brokerage was very easy.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Kishor",
                msg: "Finding a good flat without brokerage was very easy.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-xl p-4 shadow min-w-[180px] sm:min-w-[220px] md:min-w-[260px]"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} className="h-12 w-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <div className="text-teal-500 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-500 mt-4 text-sm">"{item.msg}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <CityPropertySection></CityPropertySection>
      </div>

      <div className="bg-white py-10 border-t ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium">
            <span className="cursor-pointer hover:text-teal-600">About Us</span>
            <span className="cursor-pointer hover:text-teal-600">Careers</span>
            <span className="cursor-pointer hover:text-teal-600">
              Terms & Conditions
            </span>
            <span className="cursor-pointer hover:text-teal-600">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-teal-600">
              Testimonials
            </span>
            <span className="cursor-pointer hover:text-teal-600">Sitemap</span>
            <span className="cursor-pointer hover:text-teal-600">FAQs</span>
          </div>

          <hr className="my-8" />

          <div className="flex justify-center gap-4">
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

          <div className="flex justify-center gap-4 mt-6 text-gray-500">
            <span className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white flex items-center justify-center cursor-pointer transition">
              <FaFacebookF />
            </span>
            <span className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white flex items-center justify-center cursor-pointer transition">
              <FaTwitter />
            </span>
            <span className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white flex items-center justify-center cursor-pointer transition">
              <FaInstagram />
            </span>
            <span className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white flex items-center justify-center cursor-pointer transition">
              <FaLinkedinIn />
            </span>
            <span className="h-10 w-10 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white flex items-center justify-center cursor-pointer transition">
              <FaYoutube />
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            © 2013–25 Iconic Options Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
