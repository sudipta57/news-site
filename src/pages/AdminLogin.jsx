import React from "react";

const AdminLogin = () => {
  return (
    <div className="flex min-h-screen max-w-[1600px] mx-auto">
      {/* Left Side */}
      <div className="flex-1 relative text-white">
        <img
          src="/admin/loginbg.png" // Replace with the actual image URL
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full p-16">
          <h1 className="text-4xl font-bold mb-4">The News Pole</h1>
          <p className="text-lg mb-6">The Most Popular World Wide News</p>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Read More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white flex items-center justify-center p-16">
        <div className="w-full max-w-[307px]">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/news_logo.png" // Replace with the logo URL
              alt="Logo"
              className="h-12"
            />
          </div>

          {/* Welcome Message */}
          <h2 className="text-[26px] font-[700] text-[#333333] mb-2">
            Hello Fiona!
          </h2>
          <p className=" text-[18px] font-[400] mb-6">Welcome Back</p>

          {/* Login Form */}
          <form>
            {/* User ID */}
            <div className="mb-4">
              <div className="border border-[#9FA2AB] text-[#333333] rounded-[10px] px-4 py-2 focus:ring-2 focus:ring-red-500 flex items-center space-x-3">
                <img src="/email.png" alt="email" />
                <input
                  type="text"
                  id="userId"
                  className="w-full outline-none h-[60px]"
                  placeholder="User ID"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="border border-[#9FA2AB] text-[#333333] rounded-[10px] px-4 py-2 focus:ring-2 focus:ring-red-500 flex items-center space-x-3">
                <img src="/password.png" alt="email" />
                <input
                  type="text"
                  id="userId"
                  className="w-full outline-none h-[60px]"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Generate OTP */}
            <div className="mb-4 flex justify-end">
              <button className="text-[#DA2228] text-[14px] font-[500] font-Roboto hover:underline">
                Generate OTP
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#DA2228] h-[57px] text-white py-2 rounded-md hover:bg-red-600"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <button className="text-sm text-[#333333] text-[14px] font-[400] font-poppins hover:underline">
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
