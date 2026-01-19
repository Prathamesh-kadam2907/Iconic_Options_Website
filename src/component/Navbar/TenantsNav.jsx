import React from "react";
import { useNavigate } from "react-router-dom";
import CityPropertySection from "../QuickLinks/CityPropertySection";

const TenantsNav = ({ onClose }) => {
  return (
   
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
     
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] max-w-8xl h-[65vh] bg-white border border-gray-300 shadow-2xl rounded-2xl p-6 text-sm flex flex-col"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-grow overflow-y-auto">
          
          <div className="hidden md:block md:col-span-3 lg:col-span-2 border-r border-gray-300 px-4 py-8 space-y-4 text-gray-700 relative">
            <h4 className="font-semibold text-gray-900 cursor-pointer hover:text-[#479490] hover:translate-x-1 transition-all duration-200">
              RENT A HOME
            </h4>

            <h4 className="font-semibold text-gray-900 cursor-pointer hover:text-[#479490] hover:translate-x-1 transition-all duration-200">
              COMMERCIAL
            </h4>

            <div className="pt-8 text-xs text-gray-500 md:absolute md:bottom-6 md:left-4 md:right-4">
              contact us toll free on <br />
              <span className="text-gray-800 font-semibold">1800 41 99099</span>
              <br />
              <span>(9AM – 11PM IST)</span>
            </div>
          </div>

          
          <div className="col-span-1 md:col-span-9 lg:col-span-10">
            <CityPropertySection onClose={onClose} />
          </div>
        </div>

        
        <div className="pt-6 text-xs text-gray-500 text-center">
          Email us at services@iconicoptions.in or call us at
          <span className="font-medium text-gray-700"> 1800 41 99099</span>
        </div>
      </div>
    </div>
  );
};

export default TenantsNav;