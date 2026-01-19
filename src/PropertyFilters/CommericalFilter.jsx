import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

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

const CommericalFilter = () => {
  const [lookingTo, setLookingTo] = useState("Buy");
  const [propertyType, setPropertyType] = useState("");
  const [rent, setRent] = useState(50000);
  const [area, setArea] = useState(5000);
  const [furnishing, setFurnishing] = useState("");
  const [buildingType, setBuildingType] = useState("");

  const resetFilters = () => {
    setLookingTo("");
    setPropertyType("");
    setRent(50000);
    setArea(5000);
    setFurnishing("");
    setBuildingType("");
  };

  return (
    <div className="mt-4 lg:mt-8 w-full lg:w-[320px] bg-gray-50 border border-gray-400 shadow rounded-lg p-3 space-y-3 max-h-[70vh] lg:h-[68vh] overflow-y-auto scrollbar-hide">

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
        <p className="text-xs font-semibold mb-1">Looking To</p>
        <div className="grid grid-cols-2 gap-1.5">
          {["Rent", "Buy"].map((opt) => (
            <Button
              key={opt}
              label={opt}
              active={lookingTo === opt}
              onClick={() => setLookingTo(lookingTo === opt ? "" : opt)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">Property Type</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            "Office Space",
            "Co-Working",
            "Shop",
            "Showroom",
            "Godown/Warehouse",
            "Industrial Shed",
            "Industrial Building",
            "Other Business",
            "Restaurant/Cafe",
          ].map((t) => (
            <Button
              key={t}
              label={t}
              active={propertyType === t}
              onClick={() => setPropertyType(propertyType === t ? "" : t)}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">
          Rent Range: ₹0 – ₹{rent.toLocaleString()}
        </p>
        <input
          type="range"
          min="0"
          max="200000"
          step="5000"
          value={rent}
          onChange={(e) => setRent(Number(e.target.value))}
          className="w-full h-1.5"
        />
      </div>

      <div>
        <p className="text-xs font-semibold mb-1">
          Built-Up Area: 0 – {area} sq.ft
        </p>
        <input
          type="range"
          min="0"
          max="100000"
          step="500"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="w-full h-1.5"
        />
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

      <div>
        <p className="text-xs font-semibold mb-1">Building Type</p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            "Independent House",
            "Mall",
            "Standalone Building",
            "Business Park",
            "Independent Shop",
          ].map((b) => (
            <Button
              key={b}
              label={b}
              active={buildingType === b}
              onClick={() => setBuildingType(buildingType === b ? "" : b)}
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
};

export default CommericalFilter;
