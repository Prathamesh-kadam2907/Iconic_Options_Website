import React, { useEffect, useState } from "react";
import { FaUser, FaPhone, FaSave } from "react-icons/fa";

const Profile = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setName(storedUser.name || "");
      setMobile(storedUser.mobile || "");
    }
  }, []);

  const handleUpdate = () => {
    const updatedUser = { name, mobile };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    window.dispatchEvent(new Event("userLogin")); // Notify other components
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 mt-10 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mx-auto">
              <FaUser className="text-white text-3xl" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">
            My Profile
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Manage your personal information
          </p>
        </div>

      
        <div className="space-y-6">
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Username
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </div>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 font-medium"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          </div>

         
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaPhone />
              </div>
              <input
                type="tel"
                className="w-full border border-gray-300 p-3 pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 font-medium"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
              />
            </div>
            <p className="text-xs text-gray-500 pt-1">
              We'll use this to verify your account
            </p>
          </div>

         
          <button
            onClick={handleUpdate}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3.5 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 mt-8"
          >
            <FaSave className="text-lg" />
            Update Profile
          </button>

         
          <div className="pt-4 text-center">
            <p className="text-sm text-gray-600">
              Your profile information is stored securely and only visible to you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;