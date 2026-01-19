import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log(err));
  }, []);

 
  const handleHeartClick = (e, id) => {
    e.stopPropagation();
    setProperties((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
    console.log(`Toggled like for property ID: ${id}`);
  };

  
  const handleLocationClick = (e, title) => {
    e.stopPropagation();
    console.log("Location clicked for:", title);
  };

  return (
    <div className="bg-white py-1 max-w-full mx-auto px-4 md:px-12 lg:px-56">
      {/* Section Header - Shows only once at top */}
      {/* <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Discover Your Dream Home
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Browse through our exclusive collection of premium properties with
          zero brokerage
        </p>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
      </div> */}

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {properties.map((data) => (
          <div
            key={data.id}
            onClick={() => navigate("/rentpropertyoverview")}
            className="bg-white border border-gray-400 rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
          >
            <div className="p-3 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-1.5 text-gray-900">
                    {data.title}
                    <span className="text-teal-500 cursor-pointer text-xs hover:text-teal-600 transition-colors">
                      ↗
                    </span>
                  </h3>
                  <div className="flex items-center mt-1">
                    <p className="text-xs text-gray-600">{data.address}</p>

                    {/* Red location option */}
                    <button
                      onClick={(e) => handleLocationClick(e, data.title)}
                      className="flex items-center gap-0.5 text-red-700 hover:text-red-800 ml-2 transition-colors"
                    >
                      <FaMapMarkerAlt className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={(e) => handleHeartClick(e, data.id)}
                    className="border border-gray-200 rounded-lg p-1.5 hover:border-red-300 hover:bg-red-50 transition-all duration-200"
                  >
                    <FaHeart
                      className={`w-3.5 h-3.5 transition-colors ${
                        data.liked
                          ? "text-red-500 fill-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="relative w-full group">
                <img
                  src={data.image}
                  className="w-full h-40 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-out"
                  alt={data.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-lg"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[#479490] shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  <MdOutlinePhotoCamera className="w-3.5 h-3.5" />
                  Request Photos
                </div>
              </div>
            </div>

            <div className="flex gap-3 p-3 border-t border-gray-100">
              <div className="flex justify-between items-center w-full">
                <div className="text-[11px] text-gray-600 space-y-0.5">
                  <div>
                    In{" "}
                    <span className="font-medium text-gray-800">
                      Maithili Square
                    </span>
                    , Kiwale, Pune
                  </div>
                  <div className="flex gap-2">
                    <span>
                      Posted by{" "}
                      <span className="font-medium text-gray-800">Owner</span>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>3 weeks ago</span>
                  </div>
                </div>

              
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/rentpropertyoverview");
                  }}
                  className="px-6 py-1.5 bg-[#479490] text-white text-xs font-medium rounded-lg hover:bg-[#3a7c79] transition-colors duration-200 min-w-20"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePropertyCard;
