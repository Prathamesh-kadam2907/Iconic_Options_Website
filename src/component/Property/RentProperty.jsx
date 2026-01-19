import React, { useState, useEffect } from "react";
import { FaList, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import BuyerFilter from "../../PropertyFilters/RentFilter";
import PropertyCard from "./RentPropertyCard";
import QuickLink from "../QuickLinks/QuickLinks";

const RentProperty = () => {
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("list");
  const [properties, setProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log("JSON Load Error:", err));

    // Check if mobile on mount and on resize
    const checkMobile = () => {
  setIsMobile(window.matchMedia("(max-width: 767px)").matches);
};


    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProperties = properties.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      
      <div className="fixed top-16 left-0 right-0 w-full p-3 px-4 sm:px-6 bg-white shadow z-10">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          
          <div className="relative w-full sm:w-auto sm:max-w-[400px] md:max-w-[520px]">
            <div className="bg-white shadow-md border rounded-2xl flex items-center px-4 py-2 w-full hover:border-teal-600 transition-colors duration-200">
              <FaSearch className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search upto 3 localities or landmarks"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 outline-none px-3 text-sm text-gray-600 focus:outline-none w-full"
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
          </div>

          
          <div className="sm:hidden flex justify-between items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-teal-600 text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2"
            >
              Filters
              <span className="text-xs bg-white text-teal-600 rounded-full w-5 h-5 flex items-center justify-center">
                {showFilters ? "−" : "+"}
              </span>
            </button>

           
            <div className="ml-auto border flex bg-white shadow-md rounded-2xl px-3 py-1">
              <button
                onClick={() => setView("list")}
                className={`flex items-center gap-1 px-4 py-1 rounded-full text-xs ${
                  view === "list" ? "bg-teal-600 text-white" : "text-gray-600"
                }`}
              >
                <FaList /> List
              </button>

              <button
                onClick={() => setView("map")}
                className={`flex items-center gap-1 px-4 py-1 rounded-full text-xs ${
                  view === "map" ? "bg-teal-600 text-white" : "text-gray-600"
                }`}
              >
                <FaMapMarkerAlt /> Map
              </button>
            </div>
          </div>

         
          <div className="hidden sm:flex ml-auto border bg-white shadow-md rounded-2xl px-3 py-1">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1 px-5 rounded-full text-xs ${
                view === "list" ? "bg-teal-600 text-white" : "text-gray-600"
              }`}
            >
              <FaList /> List
            </button>

            <button
              onClick={() => setView("map")}
              className={`flex items-center gap-1 px-5 rounded-full text-xs ${
                view === "map" ? "bg-teal-600 text-white" : "text-gray-600"
              }`}
            >
              <FaMapMarkerAlt /> Map
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-4 mt-28 sm:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 pt-4 sm:pt-10">
        
        <div
          className={`${
            showFilters || !isMobile ? "block" : "hidden"
          } lg:block w-full lg:w-[320px]
`}
        >
          <div className="sticky top-32">
            <BuyerFilter />
          </div>

          
          {showFilters && isMobile && (
            <div className="mt-4 lg:hidden">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-xl text-sm border border-gray-300"
              >
                Close Filters
              </button>
            </div>
          )}
        </div>

        
        <div
          className={`${
            showFilters && isMobile ? "hidden" : "block"
          } lg:block flex-1`}
        >
          <div
            className="max-h-[70vh] sm:max-h-[75vh]
 overflow-y-auto pr-1 space-y-4 sm:space-y-6"
          >
            {view === "list" &&
              filteredProperties.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4
                    transition-all duration-200 cursor-pointer
                    hover:border-gray-500 hover:shadow-lg hover:-translate-y-1 hover:bg-white"
                >
                  <PropertyCard data={item} />
                </div>
              ))}

            {view === "list" && filteredProperties.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No properties found matching your search.
              </div>
            )}

            {view === "map" && (
              <div className="h-[400px] bg-white shadow rounded-xl flex items-center justify-center text-gray-500 p-4">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-teal-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">
                    Map View Coming Soon...
                  </p>
                  <p className="text-sm text-gray-400">
                    Interactive map feature will be available soon.
                  </p>
                  <button
                    onClick={() => setView("list")}
                    className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Back to List View
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        
        <div
          className={`${
            showFilters && isMobile ? "hidden" : "block"
          } lg:block w-full lg:w-[260px]`}
        >
          <div className="sticky top-32">
            <QuickLink />
          </div>
        </div>
      </div>

      
      {isMobile && !showFilters && (
        <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg rounded-xl p-3 border border-gray-200 z-20 lg:hidden">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowFilters(true)}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <span>Filters & Search</span>
            </button>

            <div className="text-xs text-gray-500">
              {filteredProperties.length} properties found
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RentProperty;
