import React from "react";
import { FaEnvelope, FaCog, FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4">
      <input
        type="search"
        placeholder="Search"
        className="rounded p-2 bg-gray-700 text-white w-1/3"
      />
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-gray-400 text-xl cursor-pointer" />
        <FaCog className="text-gray-400 text-xl cursor-pointer" />
        <FaBell className="text-gray-400 text-xl cursor-pointer" />
        <FaUserCircle className="text-gray-400 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
