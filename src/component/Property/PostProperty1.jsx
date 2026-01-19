import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostProperty1 = () => {
  const [formData, setFormData] = useState({
    apartmentType: "",
    floors: "",
    bhkType: "",
    propertyAge: "",
    facing: "",
    builtUpArea: "",
  });

  const apartmentTypes = [
    "Independent House/Villa",
    "Apartment",
    "Studio",
    "Penthouse",
    "Farm House",
    "Others",
  ];
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
  const ageOptions = ["Under Construction", "0-1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"];
  const facingOptions = ["East", "West", "North", "South", "North-East", "North-West", "South-East", "South-West"];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 text-[14px]">
      <div className="max-w-3xl mx-auto">

      
        <div className="mb-8">
          <Link to="/postproperty" className="inline-flex items-center gap-2 text-gray-600 mb-4">
            <FaArrowLeft /> Back
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 text-center">Property Details</h1>
          <p className="text-gray-500 text-center">Fill your property information</p>
        </div>

       
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">

         
          <div>
            <label className="block font-semibold mb-2">Apartment Type</label>
            <select
              name="apartmentType"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
            >
              <option value="">Select Apartment Type</option>
              {apartmentTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          
          <div>
            <label className="block font-semibold mb-2">No. of Floors</label>
            <select
              name="floors"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
            >
              <option value="">Select Floors</option>
              {[...Array(15).keys()].slice(1).map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">BHK Type</label>
              <select
                name="bhkType"
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
              >
                <option value="">Select BHK</option>
                {bhkOptions.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Property Age</label>
              <select
                name="propertyAge"
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
              >
                <option value="">Select Property Age</option>
                {ageOptions.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>
          </div>

         
          <div>
            <label className="block font-semibold mb-2">Facing</label>
            <select
              name="facing"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
            >
              <option value="">Select Facing</option>
              {facingOptions.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          
          <div>
            <label className="block font-semibold mb-2">Built Up Area (Sq.ft)</label>
            <input
              type="number"
              name="builtUpArea"
              onChange={handleChange}
              placeholder="Enter area"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-200 focus:border-teal-600 outline-none"
            />
          </div>

         
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaPhone className="text-teal-600" />
              869-000-5267
            </div>
            <Link to="/postproperty2">
              <button className="px-8 py-3 bg-teal-600 text-white rounded-xl shadow hover:scale-105 transition">
                Save & Continue
              </button>
            </Link>
          </div>
        </div>
      </div>

     
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default PostProperty1;
