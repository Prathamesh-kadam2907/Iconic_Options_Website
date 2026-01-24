// src/components/dashboard/Sidebar.tsx
'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBuilding,
  faPlus,
  faUsers,
  faCalendarCheck,
  faChartLine,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import DashboardPage from '@/components/Builder/Dashboard/DashboardPage';
import Projects from '@/components/Builder/Dashboard/Projects';

// import Leads from '@/components/Builder/Dashboard/Leads';
// import SiteVisits from '@/components/Builder/Dashboard/SiteVisits';


import Profile from '@/components/Builder/Dashboard/Profile';
import PostProperty from '@/components/Builder/Property/PostProperty';


interface MenuItem {
    name: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}

const menu: MenuItem[] = [
    {
        name: 'My Properties',
        icon: <FontAwesomeIcon icon={faHome} />,
        component: <DashboardPage />,
    },
    {
        name: 'Projects',
        icon: <FontAwesomeIcon icon={faBuilding} />,
        component: <Projects />,
    },
   
    // {
    //     name: 'Leads',
    //     icon: <FontAwesomeIcon icon={faUsers} />,
    //     component: <Leads />,
    // },
    // {
    //     name: 'Site Visits',
    //     icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    //     component: <SiteVisits />,
    // },
    // {
    //     name: 'Analytics',
    //     icon: <FontAwesomeIcon icon={faChartLine} />,
    //     component: <Analytics />,
    // },
    
    {
        name: 'Profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        component: <Profile />,
    },
    {
    name: 'Post Property',
    icon: <FontAwesomeIcon icon={faPlus} />,
    component: <PostProperty />,
},

];


export default function Sidebar() {
    const [active, setActive] = useState('My Properties');

    // Find the active component
    const activeMenuItem = menu.find((item) => item.name === active);
    const ActiveComponent = activeMenuItem ? activeMenuItem.component : <DashboardPage />;

    return (
        <div className="flex h-[90vh] overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 bg-white border-r hidden md:flex flex-col h-full sticky top-0">
                {/* Sidebar Title */}
                <div className="px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">My Account</h2>
                    <p className="text-xs text-gray-500 mt-1">Manage your activities</p>
                </div>

                {/* Menu */}
                <nav className="px-3 py-4 space-y-1 flex-1">
                    {menu.map((item) => {
                        const isActive = active === item.name;

                        return (
                            <button
                                key={item.name}
                                onClick={() => setActive(item.name)}
                                className={`group flex items-center gap-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  ${isActive ? 'bg-red-50 text-black border-l-4 border-teal-700' : 'text-gray-700 hover:bg-gray-100 hover:text-teal-600'}`}
                            >
                                <span
                                    className={`text-base transition-colors duration-200
                    ${isActive ? 'text-teal-600' : 'text-gray-500 group-hover:text-teal-600'}`}
                                >
                                    {item.icon}
                                </span>

                                <span>{item.name}</span>
                            </button>
                        );
                    })}
                </nav>

                {/* User Profile Section */}
                <div className="p-4 border-t">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">PK</div>
                        <div>
                            <p className="text-base font-medium text-gray-800">Prathamesh Kadam</p>
                            <p className="text-base text-gray-500">Builder</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
             <main className="flex-1 min-w-0 bg-white overflow-y-auto h-full">

                

                {/* Dynamic Content */}
                <div className="p-4 md:p-6">{ActiveComponent}</div>
            </main>
        </div>
    );
}
