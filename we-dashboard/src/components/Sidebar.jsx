import React from "react";
import {
  FaHome,
  FaBox,
  FaTruck,
  FaTimesCircle,
  FaDollarSign,
  FaChartLine,
  FaBullseye,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-col justify-between min-h-screen w-16 md:w-20 lg:w-24">
      <div className="space-y-4 mt-4">
        <FaHome className="text-blue-400 text-2xl mx-auto cursor-pointer" />
        <FaBox className="text-gray-400 text-2xl mx-auto cursor-pointer" />
        <FaTruck className="text-gray-400 text-2xl mx-auto cursor-pointer" />
        <FaTimesCircle className="text-gray-400 text-2xl mx-auto cursor-pointer" />
        <FaDollarSign className="text-gray-400 text-2xl mx-auto cursor-pointer" />
        <FaChartLine className="text-gray-400 text-2xl mx-auto cursor-pointer" />
        <FaBullseye className="text-gray-400 text-2xl mx-auto cursor-pointer" />
      </div>
      <FaSignOutAlt className="text-gray-400 text-2xl mx-auto mb-4 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
