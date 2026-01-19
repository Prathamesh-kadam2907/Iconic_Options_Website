import React, { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const PostProperty = () => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [listingType, setListingType] = useState("Rent");
const navigate = useNavigate();

  return (
    <div className="mt-16 min-h-screen font-lato bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

       
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Post Your Property
          </h1>
          <p className="text-sm text-gray-500">
            Fill all required information below
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-300">

          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Contact Information
          </h3>

          <div className="grid gap-3 mb-6">
            <input
              placeholder="Full Name"
              className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none"
            />
            <input
              placeholder="Email Address"
              className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none"
            />
            <input
              placeholder="Mobile Number"
              className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none"
            />
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Property Type
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {["Residential", "Commercial"].map((type) => (
              <div
                key={type}
                onClick={() => setPropertyType(type)}
                className={`cursor-pointer text-center text-[13px] px-3 py-2 rounded-xl border hover:-translate-y-1 transition ${
                  propertyType === type
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {type}
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Listing Type
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["Rent", "Sale", "PG/Hostel", "Flatmates"].map((type) => (
              <div
                key={type}
                onClick={() => setListingType(type)}
                className={`cursor-pointer text-center text-[13px] px-3 py-2 rounded-xl border hover:-translate-y-1 transition ${
                  listingType === type
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {type}
              </div>
            ))}
          </div>

          <button
  onClick={() => navigate("/postproperty1")}
  className="w-full bg-teal-600 text-white py-2.5 rounded-full text-sm font-medium shadow hover:scale-105 transition"
>
  Continue
</button>

        </div>

        <div className="mt-5 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
            <FaPhone className="text-green-500" />
            Need help? Call <span className="font-semibold">869-000-5267</span>
          </div>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp size={22} />
      </button>
    </div>
  );
};

export default PostProperty;
