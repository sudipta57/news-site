import React, { useState } from "react";
const navitems = [
  {
    name: "Home",
    icon: "/landing/navicon3.png",
  },
  {
    name: "Breaking News",
    icon: "/landing/navicon4.png",
  },
  {
    name: "Politics",
    icon: "/landing/navicon5.png",
  },
  {
    name: "India",
    icon: "/landing/navicon6.png",
  },
  {
    name: "International",
    icon: "/landing/navicon7.png",
  },
  {
    name: "Kolkata",
    icon: "/landing/navicon8.png",
  },
  {
    name: "District",
    icon: "/landing/navicon9.png",
  },
  {
    name: "Education",
    icon: "/landing/navicon10.png",
  },
  {
    name: "State",
    icon: "/landing/navicon11.png",
  },
  {
    name: "Health",
    icon: "/landing/navicon12.png",
  },
  {
    name: "Science",
    icon: "/landing/navicon13.png",
  },
  {
    name: "Crime",
    icon: "/landing/navicon14.png",
  },
  {
    name: "Entertainment",
    icon: "/landing/navicon15.png",
  },
];
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Toggle dark mode on the body
  };

  return (
    <div>
      <div className="flex items-center justify-center p-3 pt-10">
        {/* Placeholder for Alignment */}

        {/* Logo and Date */}
        <div className="flex flex-col items-center">
          <img src="/news_logo.png" alt="news_logo" className="h-12" />
          <h3 className="text-sm mt-2">19 Paush 1431 Sunday 5 January 2025</h3>
        </div>
      </div>

      <div className="bg-[#363636] text-white py-3 px-4 mt-8">
        {/* Navbar Container */}
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Menu Icon (Mobile) */}
            <div
              className="text-white text-xl cursor-pointer lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Logo */}
            <img
              src="/landing/navicon1.png"
              alt="logo"
              className="w-[41px] h-[40px]"
            />

            {/* Language Selector */}
            <img
              src="/landing/navicon2.png"
              alt="logo"
              className="w-[40px] h-[40px]"
            />
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-10 text-sm overflow-x-auto scrollbar-hide mx-14">
            {navitems.map((items) => (
              <div
                key={items.name}
                className="group flex items-center space-x-2 cursor-pointer font-notoBengali whitespace-nowrap"
              >
                <img
                  src={items.icon}
                  alt="logo"
                  className="w-[18px] h-[18px]"
                />
                <p className="text-[18px] font-[400] relative group-hover:border-b-2 group-hover:border-[#DA2228] pb-1">
                  {items.name}
                </p>
              </div>
            ))}
          </div>

          {/* Login Button */}
          <div
            onClick={toggleDarkMode}
            className={`w-[70px] h-[28px] rounded-full flex items-center cursor-pointer ${
              darkMode
                ? "bg-[url('/light-mode.png')]"
                : "bg-[url('/dark-mode.png')]"
            } transition-all duration-300`}
          >
            {/* <div
              className={`w-[21px] h-[21px] bg-[#F8832E] rounded-full shadow-md transform ${
                darkMode ? "translate-x-7" : "translate-x-0"
              } transition-all duration-300`}
            /> */}
            <div
              className={`${
                darkMode ? "translate-x-6" : "translate-x-0"
              } transition-all duration-300`}
            >
              {darkMode ? (
                <img src="/light-mode-btn.png" alt="light" />
              ) : (
                <img src="/dark-mode-btn.png" alt="dark" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 lg:hidden">
            <div className="space-y-2 text-center text-white">
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                • Live News
              </span>
              <span className="block text-[18px] font-semibold cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                Home
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                Breaking News
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                International
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                National
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                State
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                Sports
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                Economy
              </span>
              <span className="block text-[18px] cursor-pointer hover:border-b-2 hover:border-[#DA2228]">
                Technology
              </span>
            </div>
            <div className="text-center mt-4">
              <button className="bg-white text-red-700 px-4 py-2 rounded-lg font-semibold">
                Logo Cat
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Headlines Section */}
      <div
        id="headline-section"
        className="text-black text-sm py-8 flex items-center relative m-4"
      >
        <div className="absolute left-0 top-0 bottom-0 bg-[#DA2228] rounded-[2px] z-10 flex items-center px-4 text-white md:px-8">
          <p className="text-[24px] font-[700] ">Today’s Headlines</p>
        </div>

        {/* Sliding Headlines */}
        <div className="ml-[150px] w-full overflow-hidden relative">
          <div className="headline-slider flex whitespace-nowrap text-[#1C1C1C] text-[24px] font-[500] font-notoBengali">
            {/* Headlines (Duplicated for seamless looping) */}
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>

            {/* Duplicate content for seamless animation */}
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
            <span className="mx-4">
              • The most spectacular technologies you’ll see in 2025
            </span>
          </div>
        </div>
      </div>
      {/* End Headlines Section */}
    </div>
  );
};

export default Navbar2;
