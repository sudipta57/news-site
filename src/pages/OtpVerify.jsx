import React, { useState } from "react";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only a single digit is entered
    setOtp(newOtp);

    // Move focus to the next input automatically
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex min-h-screen max-w-[1600px]">
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
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/news_logo.png" // Replace with the logo URL
              alt="Logo"
              className="h-12"
            />
          </div>

          {/* Welcome Message */}
          <img
            src="/auth.png"
            alt="thinking"
            className="w-[90px] h-[114px] my-10"
          />
          <div className="mb-10">
            <h2 className="text-[#1C1C1C] text-[32px] font-[600] font-Roboto">
              OTP Verification
            </h2>
            <p className="my-2 text-[#546E7A] text-[16px] font-[400] font-Roboto">
              Enter OTP Sent to{" "}
              <span className="font-[500]">****64@gmail.com</span>
            </p>
          </div>
          {/* Login Form */}
          <form>
            {/* OTP Input */}
            <div className="space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg"
                  maxLength={1}
                />
              ))}
            </div>
            {/* Verify Button */}
            <div className="flex justify-center space-x-6 mt-10">
              <button className="border border-[#DA2228] text-[16px] font-[600] font-Roboto text-[#E31837] px-6 py-2 w-[190px] rounded-md">
                Clear
              </button>{" "}
              <button className="text-[16px] font-[600] font-Roboto text-white bg-[#E31837] px-6 py-2 w-[190px] rounded-md">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
