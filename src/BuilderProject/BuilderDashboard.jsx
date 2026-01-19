import React from "react";
import { Link } from "react-router-dom";

const BuilderDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

    
      <div className="w-64 bg-white shadow-md min-h-screen p-5">
        <h2 className="text-xl font-bold mb-6">Builder Panel</h2>

        <ul className="space-y-4">
          <li>
            <Link to="/builder/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/builder/projects" className="hover:text-blue-600">
              My Projects
            </Link>
          </li>

          <li>
            <Link to="/builder/add-project" className="hover:text-blue-600">
              Add Project
            </Link>
          </li>

          <li>
            <Link to="/builder/leads" className="hover:text-blue-600">
              Leads
            </Link>
          </li>

          <li>
            <Link to="/builder/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </li>
        </ul>
      </div>

 
      <div className="flex-1 p-6">

        <h1 className="text-2xl font-semibold mb-6">
          Builder Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Total Projects</h3>
            <p className="text-3xl font-bold">05</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Total Leads</h3>
            <p className="text-3xl font-bold">23</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-gray-500">Active Listings</h3>
            <p className="text-3xl font-bold">12</p>
          </div>

        </div>

       
        <div className="bg-white rounded-xl p-6 shadow">

          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">My Projects</h2>

            <Link
              to="/builder/add-project"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add New Project
            </Link>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Project Name</th>
                <th>Status</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">Green City</td>
                <td>Active</td>
                <td>Pune</td>
                <td>
                  <button className="text-blue-600 mr-3">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default BuilderDashboard;
