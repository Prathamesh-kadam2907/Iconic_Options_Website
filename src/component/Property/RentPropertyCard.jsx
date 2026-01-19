import React, { useState } from "react";
import { FaMapMarkerAlt, FaHeart, FaBookmark } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ data }) => {
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
  };

  return (
    <div
      onClick={() => navigate("/rentpropertyoverview")}
      className="bg-white border border-gray-400 rounded-lg shadow hover:shadow-md transition overflow-hidden cursor-pointer"
    >
      <div className="p-2 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-sm flex items-center gap-1">
              {data.title}
              <span className="text-teal-500 cursor-pointer text-xs">↗</span>
            </h3>
            <div className="flex items-center mt-0.5">
              <p className="text-xs text-gray-500">{data.address}</p>
              
             
              <button
                onClick={handleLocationClick}
                className="flex items-center gap-0.5 text-red-500 hover:text-red-600 ml-1.5"
              >
                <FaMapMarkerAlt className="w-3 h-3" />
              </button>

              <span className="text-xs text-gray-400 mx-1">·</span>

              
              <span className="text-teal-600 cursor-pointer text-xs hover:text-teal-700">
                Explore Nearby
              </span>
            </div>
          </div>
          
        
        </div>
      </div>

      <div className="grid grid-cols-3 text-center border-t border-b border-gray-300">
        <div className="py-2">
          <p className="font-semibold text-base text-[#479490]">₹ {data.rent}</p>
          <p className="text-xs text-gray-500">Rent</p>
        </div>
        <div className="py-2 border-l border-r border-gray-300">
          <p className="font-semibold text-base text-[#479490]">
            ₹ {data.deposit}
          </p>
          <p className="text-xs text-gray-500">Deposit</p>
        </div>
        <div className="py-2">
          <p className="font-semibold text-base text-[#479490]">{data.area}</p>
          <p className="text-xs text-gray-500">Builtup</p>
        </div>
      </div>

      <div className="flex p-2 gap-2">
        <div className="relative w-[45%]">
          <img
            src={data.image}
            className="w-full h-32 object-cover rounded-md opacity-90"
            alt={data.title}
          />
          <div className="absolute bottom-1 left-1 bg-white text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 text-[#479490]">
            <MdOutlinePhotoCamera className="w-3 h-3" /> Request Photos
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
            <div>
              <p className="font-medium">{data.furnishing}</p>
              <p className="text-gray-500">Furnishing</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
            <div>
              <p className="font-medium">{data.apartmentType}</p>
              <p className="text-gray-500">Apartment Type</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
            <div>
              <p className="font-medium">{data.tenant}</p>
              <p className="text-gray-500">Preferred Tenants</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 border border-gray-300 p-1.5 rounded-md">
            <div>
              <p className="font-medium">{data.available}</p>
              <p className="text-gray-500">Available From</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-2 border-t border-gray-300">
        <div className="flex gap-2 flex-auto">
         
          <button
            onClick={(e) => {
              e.stopPropagation();
              handle360View();
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded text-xs"
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
            navigate("/rentownercontact");
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1.5 rounded text-xs"
        >
          Contact Owner
        </button>
        </div>
        

        <div className="flex gap-1">
            {/* <button
              onClick={handleSaveClick}
              className="border border-gray-300 rounded p-1 hover:border-blue-300 transition-colors"
            >
              <FaBookmark
                className={`w-3 h-3 transition-colors ${
                  saved ? "text-blue-500 fill-blue-500" : "text-gray-500"
                }`}
              />
            </button> */}
            
            <button
              onClick={handleHeartClick}
              className="border border-gray-300 rounded p-1 hover:border-red-300 transition-colors"
            >
              <FaHeart
                className={`w-3 h-3 transition-colors ${
                  liked ? "text-red-500 fill-red-500" : "text-gray-500"
                }`}
              />
            </button>
          </div>
      </div>
    </div>
  );
};

export default PropertyCard;