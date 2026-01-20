import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, FaBuilding, FaPlusCircle, FaUsers, FaUserCircle,
  FaChartLine, FaEdit, FaTrash, FaEye, FaBell,
  FaSearch, FaCalendarAlt, FaMapMarkerAlt,
  FaRupeeSign, FaHeart, FaClipboardList, FaCog
} from "react-icons/fa";

 import { assets } from "../assets/assets";
   

const BuilderDashboard = () => {

  const projects = [
    { id: 1, name: "Green Valley Residency", status: "Active", location: "Pune", price: "2.5 Cr", leads: 15 },
    { id: 2, name: "Skyline Towers", status: "Upcoming", location: "Mumbai", price: "4.8 Cr", leads: 8 },
    { id: 3, name: "Royal Gardens", status: "Sold Out", location: "Bangalore", price: "3.2 Cr", leads: 42 }
  ];

  const stats = [
    { title: "Total Projects", value: "05", icon: <FaBuilding />, color: "text-blue-600" },
    { title: "Active Listings", value: "12", icon: <FaHome />, color: "text-green-600" },
    { title: "Total Leads", value: "93", icon: <FaUsers />, color: "text-purple-600" },
    { title: "Revenue", value: "₹18.2 Cr", icon: <FaRupeeSign />, color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-2xl">

      {/* ===== NAVBAR ===== */}
      <nav className="bg-gray-500 text-white px-6 py-3 flex justify-between items-center shadow">
        
        <div className="flex items-center gap-3">
          <img src={assets.logo} className="w-10" />
          <h2 className="text-lg font-bold tracking-wide">Iconic Option</h2>
          
        </div>

        <div className="flex items-center gap-4 text-xs">

          <Link
            to="/builder/add-project"
            className="bg-white text-indigo-700 px-3 py-1 rounded hover:bg-gray-100"
          >
            Post Project
          </Link>

          <Link to="/builderlogin" className="hover:underline">
            Login
          </Link>

          <Link
            to="/builderregister"
            className="border px-3 py-1 rounded hover:bg-indigo-700"
          >
            Register
          </Link>

          <button className="relative p-1">
            <FaBell />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <FaUserCircle className="text-lg" />
        </div>
      </nav>

      <div className="flex">

        {/* ===== SIDEBAR WITH RANDOM OPTIONS ===== */}
        <div className="w-60 bg-white shadow min-h-screen p-4 border-r text-xs">

          <h3 className="font-bold text-gray-700 mb-3">Menu</h3>

          <ul className="space-y-1">

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaHome /> Dashboard
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaBuilding /> My Properties
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaHeart /> Saved Buyers
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaClipboardList /> Requirements
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaUsers /> Leads
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaChartLine /> Reports
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded">
                <FaCog /> Settings
              </Link>
            </li>
          </ul>

        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex-1 p-5">

          <h1 className="text-xl font-bold mb-1">
            Welcome to Iconic Option
          </h1>

          <p className="text-gray-500 text-xs mb-6">
            Manage your real estate projects & buyer requirements
          </p>

          {/* ===== STATS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

            {stats.map((s, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">{s.title}</p>
                    <p className={`text-lg font-bold ${s.color}`}>
                      {s.value}
                    </p>
                  </div>
                  <span className={`text-xl ${s.color}`}>{s.icon}</span>
                </div>
              </div>
            ))}

          </div>

          {/* ===== PROJECT TABLE ===== */}
          <div className="bg-white rounded p-4 shadow">

            <div className="flex justify-between mb-3">
              <h2 className="font-semibold">My Projects</h2>

              <Link
                to="/builder/add-project"
                className="bg-indigo-600 text-white px-3 py-1 rounded text-xs"
              >
                + Add Project
              </Link>
            </div>

            <table className="w-full text-xs">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="text-left py-2">Name</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {projects.map(p => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">

                    <td className="py-2 font-medium">{p.name}</td>

                    <td>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                        {p.status}
                      </span>
                    </td>

                    <td className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" />
                      {p.location}
                    </td>

                    <td className="font-semibold">{p.price}</td>

                    <td>
                      <button className="text-blue-600 mr-2">
                        <FaEye />
                      </button>

                      <button className="text-green-600 mr-2">
                        <FaEdit />
                      </button>

                      <button className="text-red-600">
                        <FaTrash />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-800 text-gray-300 text-xs py-3 px-6 text-center">
        © 2025 Iconic Option – All Rights Reserved
      </footer>

    </div>
  );
};

export default BuilderDashboard;
