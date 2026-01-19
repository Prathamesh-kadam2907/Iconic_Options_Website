import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router-dom";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationPicker = ({ setPosition, setFormData }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();

      setFormData((prev) => ({
        ...prev,
        address: data.display_name || "",
        city: data.address.city || "",
        locality: data.address.suburb || "",
      }));
    },
  });
  return null;
};

const PostProperty2 = () => {
  const [position, setPosition] = useState([18.5204, 73.8567]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
    address: "",
  });

  const searchLocation = async () => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
    );
    const data = await res.json();
    if (data.length > 0) {
      const { lat, lon, display_name } = data[0];
      setPosition([lat, lon]);
      setFormData((prev) => ({ ...prev, address: display_name }));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-[14px]">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/property-details"
          className="inline-flex items-center gap-2 text-gray-600 mb-6"
        >
          <FaArrowLeft /> Back
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
         
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-5 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Location Details
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-600"
                placeholder="Enter full address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Locality
                </label>
                <input
                  value={formData.locality}
                  onChange={(e) =>
                    setFormData({ ...formData, locality: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-600"
                  placeholder="Enter locality"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-600"
                  placeholder="Enter city"
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <FaPhone className="text-green-500" /> 869-000-5267
              </div>
              <button
                onClick={() => navigate("/postproperty3")}
                className="px-8 py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
              >
                Save & Continue
              </button>
            </div>
          </div>

          
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Pin Location on Map
            </h2>

            <div className="flex mb-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search building, street, area"
                className="flex-1 p-3 border border-gray-300 rounded-l-xl outline-none"
              />
              <button
                onClick={searchLocation}
                className="bg-teal-600 text-white px-5 rounded-r-xl"
              >
                <FaSearch />
              </button>
            </div>

            <MapContainer
              center={position}
              zoom={14}
              className="h-[380px] rounded-xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position} icon={markerIcon} />
              <LocationPicker
                setPosition={setPosition}
                setFormData={setFormData}
              />
            </MapContainer>
          </div>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default PostProperty2;
