import React from 'react'
import {
  FaArrowUp,
  FaArrowDown,
  FaBox,
  FaTruck,
  FaTimesCircle,
  FaDollarSign,
  FaBullseye,
  FaUtensils,
  FaList,
  FaArrowRight,
} from 'react-icons/fa'
import ActivityChart from './ActivityChart'
import RecentOrders from './RecentOrders'
import CustomerFeedback from './CustomerFeedback'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Dashboard = () => {
  const percentage = 70

  return (
    <div className="flex flex-col md:flex-row flex-grow p-4 md:p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Side (60%) */}
      <div className="flex-grow md:w-3/5 space-y-6">
        {/* Top Cards in one line */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded flex justify-between items-start relative">
            <div className="flex flex-col items-start space-y-2 text-left">
              <FaBox className="text-blue-400 text-2xl" />
              <h2 className="text-sm font-bold whitespace-nowrap">Total Orders</h2>
              <p className="text-xl whitespace-nowrap">75</p>
            </div>
            <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center text-green-400 text-xs">
              <FaArrowUp className="mr-1 text-sm" />
              <span>3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded flex justify-between items-start relative">
            <div className="flex flex-col items-start space-y-2 text-left">
              <FaTruck className="text-green-400 text-2xl" />
              <h2 className="text-sm font-bold whitespace-nowrap">Total Delivered</h2>
              <p className="text-xl whitespace-nowrap">70</p>
            </div>
            <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center text-red-400 text-xs">
              <FaArrowDown className="mr-1 text-sm" />
              <span>3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded flex justify-between items-start relative">
            <div className="flex flex-col items-start space-y-2 text-left">
              <FaTimesCircle className="text-red-400 text-2xl" />
              <h2 className="text-sm font-bold whitespace-nowrap">Total Cancelled</h2>
              <p className="text-xl whitespace-nowrap">05</p>
            </div>
            <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center text-green-400 text-xs">
              <FaArrowUp className="mr-1 text-sm" />
              <span>3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded flex justify-between items-start relative">
            <div className="flex flex-col items-start space-y-2 text-left">
              <FaDollarSign className="text-yellow-400 text-2xl" />
              <h2 className="text-sm font-bold whitespace-nowrap">Total Revenue</h2>
              <p className="text-xl whitespace-nowrap">$12k</p>
            </div>
            <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center text-red-400 text-xs">
              <FaArrowDown className="mr-1 text-sm" />
              <span>3%</span>
            </div>
          </div>
        </div>
        {/* Activity Card */}
        <div className="bg-gray-800 p-1 rounded">
          <ActivityChart />
        </div>
        {/* Recent Orders */}
        <div className="bg-gray-800 p-1 rounded">
          <RecentOrders />
        </div>
      </div>

      {/* Right Side (40%) */}
      <div className="w-full md:w-2/5 space-y-6">
        {/* Net Profit Card */}
        <div className="bg-gray-800 p-6 rounded relative">
          {/* Heading */}
          <h2 className="text-xs font-bold absolute top-2 left-2">Net Profit</h2>

          {/* Content Wrapper */}
          <div className="flex flex-col md:flex-row items-start mt-8">
            {/* Left Side */}
            <div className="flex flex-col md:w-3/5 space-y-2">
              <div className="text-2xl flex items-center space-x-1">
                <h2>$6759.25</h2>
              </div>
              <div className="flex items-center space-x-1 text-green-400">
                <FaArrowUp className="text-sm" />
                <span className="text-sm">70%</span>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-center justify-center w-full md:w-2/5 text-center mt-4 md:mt-0">
              <div className="relative flex items-center justify-center w-24 h-24">
                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-white">
                  <div>{percentage}%</div>
                  <div>Goal Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Goals, Popular Dishes, Menus */}
        <div className="bg-gray-800 p-6 rounded space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <FaBullseye className="text-red-400 text-2xl" />
              </div>
              <h2 className="text-lg font-bold">Goals</h2>
            </div>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center ml-2">
              <FaArrowRight className="text-white text-xs" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <FaUtensils className="text-blue-400 text-2xl" />
              </div>
              <h2 className="text-lg font-bold">Popular Dishes</h2>
            </div>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center ml-2">
              <FaArrowRight className="text-white text-xs" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <FaList className="text-green-400 text-2xl" />
              </div>
              <h2 className="text-lg font-bold">Menus</h2>
            </div>
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center ml-2">
              <FaArrowRight className="text-white text-xs" />
            </div>
          </div>
        </div>
        {/* Customer's Feedback */}
        <div className="bg-gray-800 p-1 rounded">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
