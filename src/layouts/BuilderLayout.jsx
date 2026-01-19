import React from "react";
import { Outlet } from "react-router-dom";

const BuilderLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default BuilderLayout;
