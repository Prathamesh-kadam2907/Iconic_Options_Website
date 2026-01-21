// src/components/dashboard/Sidebar.tsx
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClipboardList,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
}

const menu: MenuItem[] = [
  { name: "Dashboard", icon: <FontAwesomeIcon icon={faHome} /> },
  { name: "My Orders", icon: <FontAwesomeIcon icon={faClipboardList} /> },
  { name: "Wallet", icon: <FontAwesomeIcon icon={faWallet} /> },
  { name: "Profile", icon: <FontAwesomeIcon icon={faUser} /> },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="mt-2 w-64 bg-white border-r hidden md:flex flex-col min-h-screen">
      
      {/* Sidebar Title */}
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          My Account
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Manage your activities
        </p>
      </div>

      {/* Menu */}
      <nav className="px-3 py-4 space-y-1">
        {menu.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`group flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                }`}
            >
              <span
                className={`text-base transition-colors duration-200
                  ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-500 group-hover:text-red-600"
                  }`}
              >
                {item.icon}
              </span>

              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
