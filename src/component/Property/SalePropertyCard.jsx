import React, { useState } from "react";
import {
  FaRupeeSign,
  FaCompass,
  FaHome,
  FaBath,
  FaParking,
  FaHeart,
  FaBookmark,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SalePropertyCard = ({ data }) => {
  if (!data) return null;

  const priceInLacs = (data.price / 100000).toFixed(2);
  const pricePerSqft = data.area
    ? Math.round(data.price / Number(data.area))
    : 0;

  // EMI Calculation (20 years, 8.5% interest)
  const rate = 8.5 / 12 / 100;
  const months = 240;
  const emi = Math.round(
    (data.price * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1)
  );

  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    console.log(`${liked ? "Unliked" : "Liked"} property: ${data.title}`);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    setSaved(!saved);
    console.log(`${saved ? "Unsaved" : "Saved"} property: ${data.title}`);
  };

  const handleLocationClick = (e) => {
    e.stopPropagation();
    console.log("Location clicked for:", data.title);
    // You can add location/map functionality here
  };

  const handle360View = () => {
    // Handle 360 view functionality here
    console.log("360 View clicked");
    // Add your 360 view logic
  };

  return (
    <div
      onClick={() => navigate("/buypropertyoverview")}
      className="bg-white border border-gray-400 rounded-lg shadow hover:shadow-md transition overflow-hidden cursor-pointer w-full"
    >
     
      <div className="p-2 sm:p-3 border-b">
        <h3 className="font-semibold text-sm sm:text-base flex items-center gap-1">
          {data.title}
          <span className="text-teal-500 cursor-pointer text-xs sm:text-sm">
            ↗
          </span>
        </h3>
        <div className="flex flex-wrap items-center mt-0.5 sm:mt-1">
          <p className="text-xs sm:text-sm text-gray-500">{data.address}</p>

         
          <button
            onClick={handleLocationClick}
            className="flex items-center gap-0.5 text-red-500 hover:text-red-600 ml-1.5"
          >
            <FaMapMarkerAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          <span className="text-xs text-gray-400 mx-1">·</span>

         
          <span className="text-teal-600 cursor-pointer text-xs sm:text-sm hover:text-teal-700">
            Explore Nearby
          </span>
        </div>
      </div>

     
      <div className="grid grid-cols-3 text-center border-t border-b border-gray-300">
        <div className="py-2 sm:py-3">
          <p className="font-semibold text-sm sm:text-base flex justify-center items-center gap-0.5">
            <FaRupeeSign className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {priceInLacs}{" "}
            Lacs
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500">
            ₹{pricePerSqft} per sq.ft.
          </p>
        </div>

        <div className="py-2 sm:py-3 border-l border-r border-gray-300">
          <p className="font-semibold text-sm sm:text-base">
            ₹{emi.toLocaleString()} / Month
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500">Estimated EMI</p>
        </div>

        <div className="py-2 sm:py-3">
          <p className="font-semibold text-sm sm:text-base">{data.area} sqft</p>
          <p className="text-[10px] sm:text-xs text-gray-500">Builtup</p>
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row p-2 sm:p-3 gap-2 sm:gap-3">
        
        <div className="w-full sm:w-[45%]">
          <img
            src={data.image}
            onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
            className="w-full h-40 sm:h-32 object-cover rounded-md"
            alt={data.title}
          />
        </div>

       
        <div className="flex-1 grid grid-cols-2 gap-2 text-xs sm:text-sm">
          <Info
            icon={<FaCompass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            label="Facing"
            value={data.facing}
          />
          <Info
            icon={<FaHome className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            label="Apartment Type"
            value={data.apartmentType}
          />
          <Info
            icon={<FaBath className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            label="Bathrooms"
            value={data.bathrooms}
          />
          <Info
            icon={<FaParking className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            label="Parking"
            value={data.parking}
          />
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row gap-2 p-2 sm:p-3 border-t border-gray-300">
       
        <div className="flex gap-2 flex-1">
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handle360View();
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-1.5 rounded text-xs sm:text-sm font-medium"
            style={{ backgroundColor: "#479490" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#3a7774")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#479490")
            }
          >
            360 View
          </button>

          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/buyownercontact");
            }}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 sm:py-1.5 rounded text-xs sm:text-sm font-medium"
          >
            Contact Owner
          </button>
        </div>

        
        <div className="flex gap-2 justify-center sm:justify-start">
          {/* <button
            onClick={handleSaveClick}
            className="border border-gray-300 rounded p-2 sm:p-1.5 hover:border-blue-300 transition-colors"
          >
            <FaBookmark
              className={`w-3.5 h-3.5 sm:w-3 sm:h-3 transition-colors ${
                saved ? "text-blue-500 fill-blue-500" : "text-gray-500"
              }`}
            />
          </button> */}

          <button
            onClick={handleHeartClick}
            className="border border-gray-300 rounded p-2 sm:p-1.5 hover:border-red-300 transition-colors"
          >
            <FaHeart
              className={`w-3.5 h-3.5 sm:w-3 sm:h-3 transition-colors ${
                liked ? "text-red-500 fill-red-500" : "text-gray-500"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center gap-1.5 sm:gap-2 border border-gray-300 p-1.5 sm:p-2 rounded-md text-xs sm:text-sm">
    {icon}
    <div className="min-w-0 flex-1">
      <p className="font-medium text-xs sm:text-sm truncate">{value}</p>
      <p className="text-gray-500 text-[10px] sm:text-xs truncate">{label}</p>
    </div>
  </div>
);

export default SalePropertyCard;
