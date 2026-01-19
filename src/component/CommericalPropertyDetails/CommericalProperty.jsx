import React, { useEffect, useState } from "react";
import CommericalFilter from "../../PropertyFilters/CommericalFilter";
import { FaList, FaMapMarkerAlt } from "react-icons/fa";
import CommericalPropertyCard from "./CommericalPropertyCard";
import QuickLink from "../QuickLinks/QuickLinks";

const CommericalProperty = () => {
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("list");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log("JSON Load Error:", err));
  }, []);

  const filteredProperties = properties.filter((item) =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="fixed top-16 left-0 right-0 w-full p-3 px-6 bg-white shadow z-10">
        <div className="flex justify-between">
          <div className="bg-white shadow-md border rounded-2xl flex items-center px-4 py-2 w-full sm:max-w-[520px]">

            <input
              type="text"
              placeholder="Search upto 3 localities or landmarks"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 outline-none px-3 text-sm text-gray-600 focus:outline-none"
              onFocus={(e) => {
                e.target.parentElement.classList.add('border-teal-600', 'border-2');
                e.target.parentElement.classList.remove('border');
              }}
              onBlur={(e) => {
                e.target.parentElement.classList.remove('border-teal-600', 'border-2');
                e.target.parentElement.classList.add('border');
              }}
            />
          </div>

          <div className="ml-auto border flex bg-white shadow-md rounded-2xl px-3 py-1">
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

      <div className="flex flex-col lg:flex-row gap-4 mt-6 sm:mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 pt-24">

        <CommericalFilter />

        <div className="flex-1 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto pr-1 space-y-6 scrollbar-hide">

          {view === "list" &&
            filteredProperties.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-4
                   transition-all duration-200 cursor-pointer
                   hover:border-gray-500 hover:shadow-lg hover:-translate-y-1 hover:bg-white"
              >
                <CommericalPropertyCard data={item} />
              </div>
            ))}

          {view === "map" && (
            <div className="h-[400px] bg-white shadow rounded-xl flex items-center justify-center text-gray-500">
              Map View Coming Soon...
            </div>
          )}
        </div>
        <QuickLink></QuickLink>
      </div>
    </>
  );
};

export default CommericalProperty;