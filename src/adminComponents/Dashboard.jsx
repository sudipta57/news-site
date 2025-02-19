import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LeftCards = () => {
  // tracker card configs
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "This Month",
        data: [4000, 4200, 4300, 4400, 4509, 4600, 4700],
        borderColor: "#4F46E5", // Blue Line
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Last Month",
        data: [3800, 3900, 4000, 4100, 4200, 4300, 4400],
        borderColor: "#EF4444", // Red Line
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF", // Gray Tick Labels
        },
      },
      y: {
        grid: {
          color: "#E5E7EB", // Light Gray Gridlines
        },
        ticks: {
          color: "#9CA3AF", // Gray Tick Labels
        },
      },
    },
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-blue-50 p-4 rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] h-[274px]">
        <h3 className="text-[17px] font-[600] font-inter border-b text-[#0E132F]">
          Statistic
        </h3>
        <p className="text-[12px] text-[#000000] font-[500] font-notoBengali my-2">
          Today’s Total Visitors:{" "}
          <span className="text-[14px] font-[500] font-notoBengali">1,200</span>
        </p>
        <p className="text-[12px] text-[#000000] font-[500] font-notoBengali my-2">
          Total Monthly Visitors:{" "}
          <span className="text-[14px] font-[500] font-notoBengali">
            50,000
          </span>
        </p>
        <p className="text-[12px] text-[#000000] font-[500] font-notoBengali my-2">
          Total No of Current Visitors on Website:{" "}
          <span className="text-[14px] font-[500] font-notoBengali">983</span>
        </p>
      </div>

      {/* Analyst Card */}
      <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-blue-50 p-4 rounded-[20px] shadow-[0px_4px_4px_0px_#00000040]">
        <div className="flex justify-between items-center">
          <h3 className="text-[17px] font-[600] font-inter border-b text-[#0E132F]">
            Analyst
          </h3>
          <button className="bg-white text-[#5A6ACF] text-[12px] font-[500] font-poppins px-3 py-1 rounded shadow">
            View Report
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg
              className="absolute inset-0"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-gray-300"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
              <circle
                className="text-red-500"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                strokeDasharray="32, 100"
                strokeDashoffset="25"
              />
              <circle
                className="text-blue-400"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                strokeDasharray="40, 100"
                strokeDashoffset="72"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
          <div className="items-center flex flex-col ">
            <div className="flex items-center justify-center space-x-1">
              <div className="bg-black w-2 h-2 rounded-full"></div>
              <p className="text-[12px] font-[500] font-notoBengali text-[#000000]">
                Videos
              </p>
            </div>
            <p className="text-[10px] font-[500] font-notoBengali text-[#000000]">
              40%
            </p>
          </div>
          <div className="items-center flex flex-col ">
            <div className="flex items-center justify-center space-x-1">
              <div className="bg-[#8B8B8B] w-2 h-2 rounded-full"></div>
              <p className="text-[12px] font-[500] font-notoBengali text-[#000000]">
                Trending News
              </p>
            </div>
            <p className="text-[10px] font-[500] font-notoBengali text-[#000000]">
              40%
            </p>
          </div>{" "}
          <div className="items-center flex flex-col ">
            <div className="flex items-center justify-center space-x-1">
              <div className="bg-[#DA2228] w-2 h-2 rounded-full"></div>
              <p className="text-[12px] font-[500] font-notoBengali text-[#000000]">
                Breaking News
              </p>
            </div>
            <p className="text-[10px] font-[500] font-notoBengali text-[#000000]">
              40%
            </p>
          </div>
        </div>
      </div>

      {/* Traker Card */}
      <div className="bg-white p-4 rounded-[20px] shadow-[0px_4px_4px_0px_#00000040]">
        <div className="flex justify-between items-center">
          <h3 className="text-[17px] font-[600] font-inter border-b text-[#0E132F]">
            Traker
          </h3>
          <span className="text-sm text-gray-500">2024</span>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span className="text-gray-700 font-bold">$4,509</span> (7 days)
          </p>
        </div>
        <div className="mt-4">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

const BlankComponent = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-full">
      <iframe
        src="http://localhost:5173/" // URL of the website
        title="secwebxperts"
        className="w-full h-full" // Adjust dimensions as needed
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 h-[calc(100%-64px)]">
      {/* Middle Content */}
      <div className="col-span-8">
        <BlankComponent />
      </div>
      {/* Left Cards and Image */}
      <div className="col-span-4">
        <LeftCards />
      </div>
    </div>
  );
};

export default Dashboard;
