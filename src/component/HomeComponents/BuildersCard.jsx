import React from "react";

const buildersData = [
  {
    id: 1,
    name: "Lodha Group",
    logo: "https://gharinvest.com/wp-content/uploads/2017/11/lodha-500x328.webp",
    description: "Leading real estate developer delivering premium homes.",
    projects: 120,
    cities: ["Mumbai", "Pune", "Thane"],
  },
  {
    id: 2,
    name: "Prestige Group",
    logo: "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/118689.Prestige-Group-to-Launch-New-Malls-in-Mumbai-and-Delhi-NCR.jpg",
    description: "Innovative designs with world class infrastructure.",
    projects: 95,
    cities: ["Bangalore", "Chennai", "Hyderabad"],
  },
  {
    id: 3,
    name: "DLF Limited",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFkYd49JE86Dg/company-logo_200_200/company-logo_200_200/0/1630538535381/dlf_logo?e=2147483647&v=beta&t=qCoIJDJk9yeGrjOAns8tjCgIHgJm2m80TMUP7jkoEmU",
    description: "India’s largest real estate developer with iconic townships.",
    projects: 150,
    cities: ["Delhi NCR", "Gurgaon", "Chandigarh"],
  },
  {
    id: 4,
    name: "Sobha Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTcQAhtHtRSEJNWOXoYKhfWXdvls3h7wnIw&s",
    description: "Premium residential and commercial developments.",
    projects: 70,
    cities: ["Bangalore", "Kochi", "Thrissur"],
  },
  {
    id: 5,
    name: "Shapoorji Pallonji Real Estate",
    logo: "https://myrealestate.in/storage/2021/05/Shapoorji-Pallonji.png",
    description: "Legacy builder known for quality construction.",
    projects: 60,
    cities: ["Mumbai", "Pune", "Kolkata"],
  },
  {
    id: 6,
    name: "Tata Housing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/512px-Tata_logo.svg.png",
    description: "Trusted brand offering modern lifestyle homes.",
    projects: 65,
    cities: ["Mumbai", "Goa", "Bangalore"],
  },
  {
    id: 7,
    name: "Brigade Group",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxWB853kIYU6IQbMeYmTgwKsrBxkOOxqVkw&s",
    description: "Award-winning developer with innovative projects.",
    projects: 75,
    cities: ["Bangalore", "Mysore", "Chennai"],
  },
  {
    id: 8,
    name: "Kolte Patil Developers",
    logo: "https://assets.upstox.com/content/assets/images/cms/2024412/Kolte%20Patil.jpg",
    description: "Creating landmarks with customer-centric approach.",
    projects: 50,
    cities: ["Pune", "Mumbai", "Bangalore"],
  },
  {
    id: 9,
    name: "Mahindra Lifespaces",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBhWutbjxrtMQmdp11TXirbC3y_ztk0BKyA&s",
    description: "Sustainable homes with green living concepts.",
    projects: 55,
    cities: ["Mumbai", "Chennai", "Hyderabad"],
  },
  {
    id: 10,
    name: "Puravankara Limited",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGJa49tdzSQeg/company-logo_200_200/company-logo_200_200/0/1650874143502?e=2147483647&v=beta&t=NVQz8TGi5iwmqNq6s9jkkyacLRHpCyFEF-igtlIMnYA",
    description: "Luxury homes with world-class amenities.",
    projects: 68,
    cities: ["Bangalore", "Pune", "Chennai"],
  },
];

const BuildersCard = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12">

     <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">

      
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Top Real Estate Builders
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
            Explore trusted real estate builders delivering quality homes across
            prime locations.
          </p>

          <div className="w-16 sm:w-20 h-1 bg-pink-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

      
        <div className="flex justify-end mb-3 sm:mb-4 ">
          <p className="text-sm sm:text-base text-teal-600 font-semibold cursor-pointer hover:underline">
            View More →
          </p>
        </div>

     
        <div
          className="
    flex gap-4 sm:gap-6
    overflow-x-auto pb-4
    scroll-smooth
    scrollbar-hide
  "
        >
          {buildersData.map((builder) => (
            <div
              key={builder.id}
              className="
                bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-5

                
                min-w-[260px]
                sm:min-w-[280px]
                md:min-w-[320px]

                max-w-[260px]
                sm:max-w-[280px]
                md:max-w-[320px]

                flex-shrink-0

                transition-all duration-300
                border border-gray-200
                 hover:border-gray-500 
                hover:shadow-2xl hover:scale-[1.02]
              "
            >
             
              <div className="flex justify-center mb-3 sm:mb-4 overflow-hidden rounded">
                <img
                  src={builder.logo}
                  alt={builder.name}
                  className="
                    w-44 sm:w-52 md:w-60
                    h-28 sm:h-32 md:h-40
                    object-contain
                    transition-transform duration-300
                    hover:scale-105
                  "
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-center mb-1 sm:mb-2 text-gray-800">
                {builder.name}
              </h3>

            
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                {builder.description}
              </p>

            
              <div className="text-xs sm:text-sm text-gray-700 space-y-1 sm:space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold">Total Projects:</span>
                  <span>{builder.projects}</span>
                </p>

                <p className="flex justify-between">
                  <span className="font-semibold">Cities:</span>
                  <span className="text-right">
                    {builder.cities.join(", ")}
                  </span>
                </p>
              </div>

            
              <button
                className="
                  mt-4 sm:mt-5
                  w-full
                  text-sm sm:text-base
                  bg-teal-500 text-white py-2 rounded
                  transition-all duration-300
                  hover:bg-teal-600 hover:scale-[1.02]
                  active:scale-95
                "
              >
                View Builder Projects
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildersCard;
