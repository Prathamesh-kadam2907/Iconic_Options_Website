import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

const Button = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`border px-2 py-1 rounded text-xs sm:text-sm w-full ${
      active ? "bg-teal-500 text-white" : "bg-white text-gray-600"
    }`}
  >
    {label}
  </button>
);

const RentFilter = ({ isMobile, isOpen, onClose }) => {
  const [bhk, setBhk] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [rent, setRent] = useState(50000);
  const [floor, setFloor] = useState("3rd Floor");

  const resetFilters = () => {
    setBhk("");
    setPropertyType("");
    setStatus("");
    setFurnishing("");
    setRent(50000);
    setFloor("3rd Floor");
  };

  const filterContent = (
    <div className="bg-gray-50 border border-gray-400 shadow rounded-lg p-3 space-y-3 h-full overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between border-b pb-1.5">
        <span className="text-sm font-semibold text-gray-700">Filter</span>
        <button
          onClick={resetFilters}
          className="flex items-center gap-0.5 text-xs text-teal-600"
        >
          <FiRefreshCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">Property Type</p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Apartment", "Gated Community Villa", "Independent House"].map(
            (t) => (
              <Button
                key={t}
                label={t}
                active={propertyType === t}
                onClick={() => setPropertyType(propertyType === t ? "" : t)}
              />
            )
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">BHK Type</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["1RK", "1BHK", "2BHK", "3BHK", "4BHK", "4+BHK"].map((b) => (
            <Button
              key={b}
              label={b}
              active={bhk === b}
              onClick={() => setBhk(bhk === b ? "" : b)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">Rent Range: ₹0 – ₹{rent}</p>
        <input
          type="range"
          min="0"
          max="50000"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="w-full h-1.5"
        />
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">Floor Preference</p>
        <select
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          className="w-full border px-2 py-1 rounded text-xs"
        >
          <option>Ground Floor</option>
          <option>1st Floor</option>
          <option>2nd Floor</option>
          <option>3rd Floor</option>
          <option>4th Floor</option>
        </select>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1.5">Property Status</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["Resale", "Ready", "Under Construction"].map((s) => (
            <Button
              key={s}
              label={s}
              active={status === s}
              onClick={() => setStatus(status === s ? "" : s)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">Furnishing</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["Full", "Semi", "None"].map((f) => (
            <Button
              key={f}
              label={f}
              active={furnishing === f}
              onClick={() => setFurnishing(furnishing === f ? "" : f)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <button
          onClick={resetFilters}
          className="bg-teal-500 text-white px-3 py-1 rounded text-xs"
        >
          Clear All
        </button>
        <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs">
          Apply Filter
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={`fixed inset-x-0 bottom-0 bg-white rounded-t-3xl p-4 transform transition-transform duration-300 max-h-[85vh] ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold">Filters</h3>
            <button
              onClick={onClose}
              className="text-gray-500 text-3xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="h-[calc(85vh-80px)]">{filterContent}</div>
        </div>
      </div>
    );
  }

  return <div className="mt-8 w-full lg:w-[320px]">{filterContent}</div>;
};

// Demo Component to show usage
const RentPropertyPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white shadow-md border rounded-2xl text-xs text-gray-600 hover:border-teal-600 transition-colors"
        >
          <FaFilter /> Filters
        </button>
      </div>

      <div className="flex gap-2 px-3 sm:px-6 md:px-10 lg:px-20 xl:px-40 pt-4 sm:pt-6 md:pt-10 pb-6">
        {/* Desktop Filter */}
        <div className="hidden lg:block">
          <RentFilter isMobile={false} />
        </div>

        {/* Mobile Filter Modal */}
        <RentFilter
          isMobile={true}
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Properties for Rent</h2>
          <p className="text-gray-600">Property listings will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default RentFilter;
