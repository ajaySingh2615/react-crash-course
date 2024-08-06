import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { FaChevronDown } from 'react-icons/fa'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ActivityChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'], // x-axis labels
    datasets: [
      {
        data: [3000, 5000, 10000, 15000, 10000, 5000, 15000, 10000, 5000, 15000, 10000], // y-axis data
        backgroundColor: (context) => {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) {
            return null
          }
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
          gradient.addColorStop(0, 'rgba(82, 78, 183, 1)') // Gradient color
          gradient.addColorStop(1, 'rgba(82, 78, 183, 1)') // Gradient color
          return gradient
        },
        borderColor: 'rgba(82, 78, 183, 1)', // Border color
        borderWidth: 2,
        barThickness: 12, // Set the thickness of the bars
        borderRadius: 10, // Rounded corners for bars
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(82, 78, 183, 1)',
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return '$' + (context.raw / 1000).toLocaleString() + 'k' // Format the tooltip label
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 12, // Font size for x-axis labels
          },
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
        barPercentage: 0.6, // Adjust the spacing between bars
        categoryPercentage: 0.7, // Adjust the width of each bar
      },
      y: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 12, // Font size for y-axis labels
          },
          callback: function (value) {
            return value / 1000 + 'k' // Format y-axis labels
          },
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
  }

  return (
    <div className="bg-gray-800 p-1 rounded relative w-full h-full">
      <h2 className="absolute top-1 left-2 text-lg font-bold text-white">Activity</h2>
      <button className="absolute top-1 right-2 bg-gray-700 text-white rounded-full px-2 py-1 text-xs flex items-center space-x-1 hover:bg-gray-600">
        <span>Weekly</span>
        <FaChevronDown className="text-xs" />
      </button>
      <div className="pt-8 w-full h-full">
        <div className="w-full h-40">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ActivityChart
