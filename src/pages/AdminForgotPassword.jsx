import React from "react";

const AdminForgotPassword = () => {
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
        <div className="w-full max-w-[390px]">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/news_logo.png" // Replace with the logo URL
              alt="Logo"
              className="h-12"
            />
          </div>

          {/* Welcome Message */}
          <img src="/think.png" alt="thinking" className="w-20 h-20 my-10" />
          <div className="mb-10">
            <h2 className="text-[#1C1C1C] text-[32px] font-[600] font-Roboto">
              Forget Password
            </h2>
            <p className="text-[16px] font-[400] font-Roboto">
              Enter user id you used when you joined & we will Send you OTP
            </p>
          </div>
          {/* Login Form */}
          <form>
            {/* User ID */}
            <div className="mb-4">
              <label
                htmlFor="userId"
                className="block text-[14px] font-[500] font-Roboto text-[#1C1C1C] mb-2"
              >
                User ID
              </label>
              <div className="border-[0.8px] border-[#9FA2AB] rounded-md px-4 py-2">
                <input
                  type="text"
                  id="userId"
                  className="w-full outline-none"
                  placeholder="fionamehtab077564@gmail.com"
                />
              </div>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#DA2228] text-white py-2 rounded-md mt-4"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
