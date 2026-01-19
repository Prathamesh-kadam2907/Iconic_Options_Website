import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PostProperty3 = () => {
  const [availableFor, setAvailableFor] = useState("rent");
  const [maintenanceType, setMaintenanceType] = useState("included");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-10 text-[13px]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
          Rent & Availability Details
        </h2>

       
        <div className="flex gap-6 mb-6">
          {["rent", "lease"].map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                checked={availableFor === type}
                onChange={() => setAvailableFor(type)}
                className="accent-teal-600 w-3.5 h-3.5"
              />
              <span className="text-gray-700 font-medium capitalize">
                Only {type}
              </span>
            </label>
          ))}
        </div>

       
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-medium text-gray-700">Expected Rent *</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-2 mt-1 focus-within:ring-2 focus-within:ring-teal-200">
              <FaRupeeSign className="text-gray-400 mr-2" />
              <input
                className="w-full outline-none text-[13px]"
                placeholder="Enter Amount"
              />
              <span className="text-gray-400 text-[11px] ml-2">/Month</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600 text-[12px]">
              <input type="checkbox" className="accent-teal-600 w-3.5 h-3.5" />
              Rent Negotiable
            </div>
          </div>

          <div>
            <label className="font-medium text-gray-700">
              Expected Deposit *
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-2 mt-1 focus-within:ring-2 focus-within:ring-teal-200">
              <FaRupeeSign className="text-gray-400 mr-2" />
              <input
                className="w-full outline-none text-[13px]"
                placeholder="Enter Amount"
              />
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-medium text-gray-700">
              Monthly Maintenance
            </label>
            <select
              value={maintenanceType}
              onChange={(e) => setMaintenanceType(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2 mt-1 text-[13px] focus:ring-2 focus:ring-teal-200"
            >
              <option value="included">Maintenance Included</option>
              <option value="extra">Maintenance Extra</option>
            </select>
          </div>

          {maintenanceType === "extra" && (
            <div>
              <label className="font-medium text-gray-700">
                Maintenance Amount *
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl p-2 mt-1 focus-within:ring-2 focus-within:ring-teal-200">
                <FaRupeeSign className="text-gray-400 mr-2" />
                <input
                  className="w-full outline-none text-[13px]"
                  placeholder="Enter Amount"
                />
                <span className="text-gray-400 text-[11px] ml-2">/ Month</span>
              </div>
            </div>
          )}
        </div>

       
        <div className="mb-6">
          <label className="font-medium text-gray-700">Available From *</label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl p-2 mt-1 text-[13px] focus:ring-2 focus:ring-teal-200"
          />
        </div>

        
        <div className="mb-6">
          <label className="font-medium text-gray-700 mb-2 block">
            Preferred Tenants *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              "Anyone",
              "Family",
              "Bachelor Female",
              "Bachelor Male",
              "Company",
            ].map((t) => (
              <label
                key={t}
                className="flex items-center gap-2 text-gray-700 text-[12px]"
              >
                <input
                  type="checkbox"
                  className="accent-teal-600 w-3.5 h-3.5"
                />{" "}
                {t}
              </label>
            ))}
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <select className="w-full border border-gray-300 rounded-xl p-2 text-[13px] focus:ring-2 focus:ring-teal-200">
            <option>Furnishing *</option>
            <option>Unfurnished</option>
            <option>Semi Furnished</option>
            <option>Fully Furnished</option>
          </select>

          <select className="w-full border border-gray-300 rounded-xl p-2 text-[13px] focus:ring-2 focus:ring-teal-200">
            <option>Parking *</option>
            <option>None</option>
            <option>Bike</option>
            <option>Car</option>
            <option>Both</option>
          </select>
        </div>

       
        <div className="mb-8">
          <label className="font-medium text-gray-700">Description</label>
          <textarea
            rows="3"
            className="w-full border border-gray-300 rounded-xl p-2 mt-1 text-[13px] focus:ring-2 focus:ring-teal-200"
            placeholder="Write a few lines about your property..."
          ></textarea>
        </div>

        
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/location-details")}
            className="px-7 py-2.5 bg-gray-400 text-white rounded-xl shadow text-[13px]"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/postproperty4")}
            className="px-8 py-2.5 bg-teal-600 text-white rounded-xl shadow-lg hover:scale-105 transition text-[13px]"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProperty3;
