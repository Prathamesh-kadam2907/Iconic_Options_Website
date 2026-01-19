import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBath, FaBuilding, FaWater, FaDog, FaDumbbell, FaLeaf, FaShieldAlt } from "react-icons/fa";

const PostProperty4 = () => {
  const navigate = useNavigate();
  const [bathroom, setBathroom] = useState(0);
  const [balcony, setBalcony] = useState(0);
  const [water, setWater] = useState("");
  const [pet, setPet] = useState("no");
  const [gym, setGym] = useState("no");
  const [veg, setVeg] = useState("no");
  const [gated, setGated] = useState("no");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-[13px] mt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-200">

        <h2 className="text-lg font-semibold text-black mb-8 border-b pb-3">
          Provide additional details about your property to get maximum visibility
        </h2>

      
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            ["Bathroom(s)", bathroom, setBathroom, <FaBath />],
            ["Balcony", balcony, setBalcony, <FaBuilding />],
          ].map(([label, value, setter, icon]) => (
            <div key={label}>
              <label className="flex items-center gap-2 text-gray-700 mb-1">
                <span className="text-teal-600">{icon}</span> {label}*
              </label>
              <div className="flex justify-between items-center border rounded-xl p-2 hover:shadow">
                <button onClick={() => setter(Math.max(0, value - 1))} className="px-3 text-lg">−</button>
                <span className="font-semibold">{value}</span>
                <button onClick={() => setter(value + 1)} className="px-3 text-lg">+</button>
              </div>
            </div>
          ))}

          <div>
            <label className="flex items-center gap-2 text-gray-700 mb-1">
              <FaWater className="text-teal-600" /> Water Supply
            </label>
            <select
              value={water}
              onChange={(e) => setWater(e.target.value)}
              className="w-full border rounded-xl p-2 focus:ring-2 focus:ring-teal-200"
            >
              <option value="">Select</option>
              <option>Borewell</option>
              <option>Corporation</option>
              <option>Both</option>
            </select>
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            ["Pet Allowed", pet, setPet, <FaDog />],
            ["Gym", gym, setGym, <FaDumbbell />],
            ["Non-Veg Allowed", veg, setVeg, <FaLeaf />],
            ["Gated Security", gated, setGated, <FaShieldAlt />],
          ].map(([label, state, setter, icon]) => (
            <div key={label} className="flex justify-between items-center border rounded-xl p-3 hover:shadow">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="text-teal-600">{icon}</span> {label}*
              </span>
              <div className="flex gap-2">
                {["no", "yes"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setter(v)}
                    className={`px-4 py-1 rounded-lg border transition ${
                      state === v ? "bg-teal-600 text-white" : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {v.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block text-gray-700 mb-1">Who will show the property?*</label>
            <select className="w-full border rounded-xl p-2 focus:ring-2 focus:ring-teal-200">
              <option>Select</option>
              <option>Owner</option>
              <option>Care Taker</option>
              <option>Security</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Secondary Number</label>
            <div className="flex border rounded-xl p-2 focus-within:ring-2 focus-within:ring-teal-200">
              <span className="mr-2 text-gray-500">+91</span>
              <input className="w-full outline-none" placeholder="Secondary Number" />
            </div>
          </div>
        </div>

      
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/postproperty3")}
            className="px-7 py-2.5 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/postproperty5")}
            className="px-9 py-2.5 bg-teal-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProperty4;
