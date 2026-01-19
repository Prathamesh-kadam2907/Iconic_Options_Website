import React from "react";
import { FaEdit, FaEye, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostProperty6 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 text-[13px]">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

        
        <div className="flex justify-between items-center px-8 py-5 border-b">
          <div className="flex items-center gap-2 text-black font-semibold text-lg">
            <FaCheckCircle className="text-2xl" />
            Property Posted Successfully
          </div>

          
        </div>

        <div className="grid md:grid-cols-2">

          
          <div className="p-10 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-4 rounded-full">
                <FaCheckCircle className="text-teal-600 text-3xl" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Congratulations!
                </h2>
                <p className="text-gray-600 mt-1">
                  You have successfully posted your property. It will be live within
                  <span className="font-semibold text-gray-800"> 12 hours.</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 border border-teal-600 text-teal-600 px-6 py-2.5 rounded-xl hover:bg-teal-50 transition">
                <FaEdit /> Edit
              </button>

              <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-2.5 rounded-xl shadow hover:scale-105 transition">
                <FaEye /> Preview Listing
              </button>
            </div>
          </div>

          
          <div className="bg-gray-50 p-10 border-l">
            <h3 className="text-teal-600 font-semibold text-lg mb-4">
              Rentometer
            </h3>

            <p className="text-gray-600 mb-6 text-sm">
              *Observed for similar rental properties in your area.
            </p>

            <div className="bg-white border rounded-2xl p-6 shadow-sm text-center">
              <p className="text-gray-500 mb-2">Estimated Rent Range</p>
              <p className="text-2xl font-bold text-gray-800">₹ 12,000 – ₹ 15,000</p>
              <p className="text-xs text-gray-500 mt-1">
                Based on locality demand & recent listings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProperty6;
