import React from "react";

const Navbar = () => {
  return (
    <>
      {/* start Nav */}
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <a href="/" className="text-orange-600 font-bold text-xl">
              MEGA.news
            </a>
            <div className="hidden md:flex space-x-6">
              <div className="relative group">
                <button className="text-gray-700 hover:text-black font-medium">
                  Categories
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Category 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Category 2
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black font-medium">
                  Pages
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Page 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Page 2
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black font-medium"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Anything"
                className="hidden sm:block bg-gray-100 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/9f57/6c9f/afa13c83cf7421c8f61ddbbffbce636d?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYKWl7ya~HsQsQMg-xGdqTfhIVec2UIVk4Wz9yicSyLf8GuS~6KCCYkTx4-h4gLbCv78ruKdCKffoUKxCrEuudnqG0m-VUf-uQIvp7dPutHgGef02e0LQCkyqZEkzNxMtB35CN-nA1koNVcHrmQS6N1MKE~PIBC~7pRp4EsMoNRUIvkqjUn-9eaJRebcenJJz5EOCAB1JR~rA3qlgLSo6mQ8U8kSr6n7~iD0hWVNV3LP4DNHeLfK7ae8vF5qlykPDS96fUqfCZGL-7dJnxfAJaZXXpp17nRTs3PciUTzKGCFhqvn9vKsX0GymquhvqTJE4MEZGKxU57RutrRaKbkVQ__"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700 font-medium">Behzad</span>
          </div>
        </div>
      </nav>
      {/* end Navbar */}
    </>
  );
};

export default Navbar;
