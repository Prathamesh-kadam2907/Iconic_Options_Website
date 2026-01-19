import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

const Button = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`border px-2 py-1 rounded text-[10px] sm:text-[10px] w-full ${
      active ? "bg-teal-500 text-white" : "bg-white text-gray-600"
    }`}
  >
    {label}
  </button>
);

const BuyerFilter = () => {
  const [bhk, setBhk] = useState("");
  const [status, setStatus] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [rent, setRent] = useState(20); // in Lakhs
  const [floor, setFloor] = useState("3rd Floor");
  const [parking, setParking] = useState("");
  const [property, setProperty] = useState("");

  const resetFilters = () => {
    setBhk("");
    setStatus("");
    setFurnishing("");
    setRent(20);
    setFloor("3rd Floor");
    setParking("");
    setProperty("");
  };

  return (
    <div className="w-full sm:ml-4 md:ml-6 mt-4 sm:mt-6 md:mt-8 sm:w-72 md:w-80 bg-gray-50 border border-gray-400 shadow rounded-lg p-3 sm:p-3 space-y-3 sm:space-y-3 h-auto sm:h-[68vh] overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between border-b pb-1.5 sm:pb-1.5">
        <span className="text-sm sm:text-sm font-semibold text-gray-700">
          Filter
        </span>
        <button
          onClick={resetFilters}
          className="flex items-center gap-0.5 text-xs sm:text-xs text-teal-600"
        >
          <FiRefreshCcw className="w-3 h-3 sm:w-3 sm:h-3" /> Reset
        </button>
      </div>

      <div>
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">
          BHK Type
        </p>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-1.5">
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
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">
          Price Range: ₹0 – ₹{rent} Cr
        </p>
        <input
          type="range"
          min="0"
          max="200"
          step="5"
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
          className="w-full h-1.5 sm:h-1.5"
        />
      </div>

      <div>
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">
          Floor Preference
        </p>
        <select
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
          className="w-full border px-2 py-1 sm:py-1 rounded text-xs sm:text-xs"
        >
          <option>Ground Floor</option>
          <option>1st Floor</option>
          <option>2nd Floor</option>
          <option>3rd Floor</option>
          <option>4th Floor</option>
        </select>
      </div>

      <div>
        <p className="text-xs sm:text-xs font-semibold mb-1.5 sm:mb-1.5">
          Property Status
        </p>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-1.5">
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
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">
          Furnishing
        </p>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-1.5">
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

      <div>
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">
          Property Type
        </p>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-1.5">
          {[
            "Apartment",
            "Independent House/Villa",
            "Gated Community Villa",
            "Standalone Building",
          ].map((p) => (
            <Button
              key={p}
              label={p}
              active={property === p}
              onClick={() => setProperty(property === p ? "" : p)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs sm:text-xs font-semibold mb-1 sm:mb-1">Parking</p>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-1.5">
          {["2 Wheeler", "4 Wheeler"].map((p) => (
            <Button
              key={p}
              label={p}
              active={parking === p}
              onClick={() => setParking(parking === p ? "" : p)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-2 sm:pt-2">
        <button
          onClick={resetFilters}
          className="bg-teal-500 text-white px-3 sm:px-3 py-1 sm:py-1 rounded text-xs sm:text-xs"
        >
          Clear All
        </button>
        <button className="bg-orange-500 text-white px-3 sm:px-3 py-1 sm:py-1 rounded text-xs sm:text-xs">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default BuyerFilter;
