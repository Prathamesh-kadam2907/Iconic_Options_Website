import React, { useEffect, useState } from "react";
import { FaList, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import BuyerFilter from "../../PropertyFilters/BuyerFilter";
import SalePropertyCard from "./SalePropertyCard";
import QuickLink from "../QuickLinks/QuickLinks";

const BuyerProperty = () => {
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("list");
  const [properties, setProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Load JSON data
  useEffect(() => {
    fetch("/saleproperties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log("JSON Load Error:", err));
  }, []);

  // Search filter
  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase()) ||
      p.address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    
      <div className="fixed top-16 left-0 right-0 w-full p-2 sm:p-3 px-3 sm:px-6 bg-white shadow z-10">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between">
          
          <div className="bg-white shadow-md border rounded-2xl flex items-center px-3 sm:px-4 py-2 w-full sm:w-[520px] hover:border-teal-600 transition-colors duration-200">
            <input
              type="text"
              placeholder="Search upto 3 localities or landmarks"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 outline-none px-2 sm:px-3 text-xs sm:text-sm text-gray-600 focus:outline-none"
              onFocus={(e) => {
                e.target.parentElement.classList.add(
                  "border-teal-600",
                  "border-2"
                );
                e.target.parentElement.classList.remove("border");
              }}
              onBlur={(e) => {
                e.target.parentElement.classList.remove(
                  "border-teal-600",
                  "border-2"
                );
                e.target.parentElement.classList.add("border");
              }}
            />
          </div>

         
          <div className="flex gap-2 justify-between sm:justify-start sm:ml-auto">
           
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-2xl text-xs shadow-md"
            >
              <FaFilter /> Filters
            </button>

           
            <div className="border flex bg-white shadow-md rounded-2xl px-2 sm:px-3 py-1">
              <button
                onClick={() => setView("list")}
                className={`flex items-center gap-1 px-3 sm:px-5 py-1 rounded-full text-xs ${
                  view === "list" ? "bg-teal-600 text-white" : "text-gray-600"
                }`}
              >
                <FaList /> <span className="hidden sm:inline">List</span>
              </button>

              <button
                onClick={() => setView("map")}
                className={`flex items-center gap-1 px-3 sm:px-5 py-1 rounded-full text-xs ${
                  view === "map" ? "bg-teal-600 text-white" : "text-gray-600"
                }`}
              >
                <FaMapMarkerAlt /> <span className="hidden sm:inline">Map</span>
              </button>
            </div>
          </div>
        </div>
      </div>

     
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 mt-16">
          <div className="bg-white h-full overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-2xl text-gray-600"
              >
                ×
              </button>
            </div>
            <BuyerFilter />
          </div>
        </div>
      )}

      
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 mt-32 sm:mt-28 md:mt-24 px-3 sm:px-6 md:px-12 lg:px-20 xl:px-40 pt-4 sm:pt-6 md:pt-10">
       
        <div className="hidden lg:block">
          <BuyerFilter />
        </div>

       
        <div className="flex-1 h-auto lg:h-[75vh] overflow-y-auto pr-0 sm:pr-1 space-y-4 sm:space-y-6 scrollbar-hide">
          {view === "list" &&
            filteredProperties.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4
                   transition-all duration-200 cursor-pointer
                   hover:border-gray-500 hover:shadow-lg hover:-translate-y-1 hover:bg-white"
              >
                <SalePropertyCard data={item} />
              </div>
            ))}

          {view === "map" && (
            <div className="h-[300px] sm:h-[400px] bg-white shadow rounded-xl flex items-center justify-center text-gray-500 text-sm sm:text-base">
              Map View Coming Soon...
            </div>
          )}
        </div>

       
        <div className="hidden xl:block">
          <QuickLink />
        </div>
      </div>
    </>
  );
};

export default BuyerProperty;
