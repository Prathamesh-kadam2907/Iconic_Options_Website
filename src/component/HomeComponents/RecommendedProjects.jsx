import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RecommendedProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: "Skyline Towers",
        address: "Baner, Pune",
        image:
          "https://www.prestigepallavagardens.live/images/prestige/casagrand-enters-pune-with-big-housing-projects-worth-rs3000-crore.webp",
        liked: false,
        price: "₹2.5 Cr - ₹4.5 Cr",
        configuration: "2, 3 & 4 BHK",
        photosCount: 12,
      },
      {
        id: 2,
        title: "Green Valley",
        address: "Hinjewadi, Pune",
        image:
          "https://www.koltepatil.com/assets/uploads/projects/small_image/1607667865843869780.jpg",
        liked: true,
        price: "₹1.8 Cr - ₹3.2 Cr",
        configuration: "1, 2 & 3 BHK",
        photosCount: 8,
      },
      {
        id: 2,
        title: "Green Valley",
        address: "Hinjewadi, Pune",
        image: "https://puneupcomingprojects.com/images/godr_meda.jpg",
        liked: true,
        price: "₹1.8 Cr - ₹3.2 Cr",
        configuration: "1, 2 & 3 BHK",
        photosCount: 8,
      },
      {
        id: 2,
        title: "Green Valley",
        address: "Hinjewadi, Pune",
        image:
          "https://www.luxuryresidences.in/generic-assest/images/pune/godrej-river-royale.webp",
        liked: true,
        price: "₹1.8 Cr - ₹3.2 Cr",
        configuration: "1, 2 & 3 BHK",
        photosCount: 8,
      },
      {
        id: 2,
        title: "Green Valley",
        address: "Hinjewadi, Pune",
        image:
          "https://www.koltepatil.com/assets/uploads/projects/small_image/16842389881572232736.jpg",
        liked: true,
        price: "₹1.8 Cr - ₹3.2 Cr",
        configuration: "1, 2 & 3 BHK",
        photosCount: 8,
      },
      {
        id: 2,
        title: "Green Valley",
        address: "Hinjewadi, Pune",
        image:
          "https://www.luxuryresidences.in/seo-assest/images/yoo-one-pune-banner.webp",
        liked: true,
        price: "₹1.8 Cr - ₹3.2 Cr",
        configuration: "1, 2 & 3 BHK",
        photosCount: 8,
      },
    ];

    setProjects(mockProjects);
  }, []);

  const handleHeartClick = (e, id) => {
    e.stopPropagation();
    setProjects((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className="bg-white py-1 max-w-full mx-auto px-4 md:px-12 lg:px-56">
      <div className="bg-white text-center mb-12 pt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Recommended Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Browse through our exclusive collection of premium properties with
          zero brokerage
        </p>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project-details/${project.id}`)}
            className="bg-white border border-gray-400 rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
          >
          
            <div className="px-2 pt-2">
              <div className="relative w-full group">
                <img
                  src={project.image}
                  className="w-full h-44 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-out"
                  alt={project.title}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-lg"></div>

               
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-lg flex items-center gap-1 text-[#479490] shadow">
                  <MdOutlinePhotoCamera className="w-3 h-3" />
                  {project.photosCount} Photos
                </div>

             
                <div className="absolute top-3 right-3">
                  <button
                    onClick={(e) => handleHeartClick(e, project.id)}
                    className="border border-gray-200 bg-white rounded-lg p-1 hover:border-red-300 hover:bg-red-50"
                  >
                    <FaHeart
                      className={
                        project.liked
                          ? "text-red-500 fill-red-500 w-3.5 h-3.5"
                          : "text-gray-500 w-3.5 h-3.5"
                      }
                    />
                  </button>
                </div>
              </div>
            </div>

           
            <div className="px-3 pb-3">
              <h3 className="font-semibold text-sm text-gray-900">
                {project.title}
              </h3>

              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-600">{project.address}</p>

                
                <button className="flex items-center text-red-700 ml-2">
                  <FaMapMarkerAlt className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-sm font-semibold mt-1">{project.price}</p>

              <p className="text-xs text-gray-600 mb-2">
                {project.configuration}
              </p>

             
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/project-details/${project.id}`);
                }}
                className="w-full px-6 py-1.5 bg-[#479490] text-white text-xs font-medium rounded-lg hover:bg-[#3a7c79] transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProjects;
