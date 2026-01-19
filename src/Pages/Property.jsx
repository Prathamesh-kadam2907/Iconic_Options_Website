import React, { useState, useEffect } from "react";
import { FaList, FaMapMarkerAlt } from "react-icons/fa";
import BuyerFilter from "../PropertyFilters/RentFilter";
import PropertyCard from "../component/Property/RentPropertyCard";
import RentFilter from "../PropertyFilters/RentFilter";

const Property = () => {
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("list");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log("JSON Load Error:", err));
  }, []);

  const filteredProperties = properties.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="relative z-0 fixed top-16 left-0 right-0 w-full p-3 mt-0 px-6 bg-white  shadow ">
        <div className="flex max-w-full justify-between ">
          <div className="bg-white shadow-md border border-black rounded-2xl flex items-center px-4 py-2 w-[520px]">
            <input
              type="text"
              placeholder="Search upto 3 localities or landmarks"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 outline-none px-3 text-sm text-gray-600"
            />
          </div>

          <div className="ml-auto border border-black flex bg-white shadow-md rounded-2xl px-3 py-1">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1 px-5 rounded-full text-xs ${
                view === "list" ? "bg-teal-600 text-white" : "text-gray-600"
              }`}
            >
              <FaList className="text-xs" /> List
            </button>

            <button
              onClick={() => setView("map")}
              className={`flex items-center gap-1 px-5 rounded-full text-xs ${
                view === "map" ? "bg-teal-600 text-white" : "text-gray-600"
              }`}
            >
              <FaMapMarkerAlt className="text-xs" /> Map
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-20 px-6">
        {/* <BuyerFilter /> */}
        <RentFilter></RentFilter>

        <div className="flex-1 h-[75vh] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-200 space-y-6 scrollbar-hide">
          {view === "list" &&
            filteredProperties.map((item) => (
              <PropertyCard key={item.id} data={item} />
            ))}

          {view === "map" && (
            <div className="h-[400px] bg-white shadow rounded-xl flex items-center justify-center text-gray-500">
              Map View Coming Soon...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Property;
