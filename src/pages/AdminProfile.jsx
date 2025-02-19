import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (showPasswordModal || showOtpModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showPasswordModal, showOtpModal]);

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
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      {/* Profile Section */}
      <div className="flex space-x-4 items-center space-y-4 relative">
        <img
          src="/admin/profile.png" // Replace with the actual user profile image URL
          alt="User Avatar"
          className="w-24 h-24 rounded-full "
        />
        <img
          src="/admin/camera.png"
          alt="camera"
          className="absolute bottom-0 left-10 cursor-pointer"
        />
        <h2 className="text-[20px] font-[500] font-poppins">Fiona Mahtab</h2>
      </div>

      {/* User Info */}
      <div className="space-y-4">
        {/* User ID */}
        <div>
          <label className="block text-[#000000] text-[16px] font-[400] font-poppins mb-3">
            User ID
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded-md bg-[#F9F9F9]"
            value="fionamehtab077564@gmail.com"
          />
        </div>

        {/* Current Password */}
        <div className="relative">
          <label className="block text-[#000000] text-[16px] font-[400] font-poppins mb-3">
            Current Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md bg-[#F9F9F9]"
            value="************"
          />
          <button
            className="absolute top-11 right-4 text-gray-500"
            onClick={() => {}}
          >
            <i class="fa-regular fa-eye-slash"></i>
          </button>
        </div>

        {/* Change Password */}
        <div className="text-right">
          <button
            className="text-[#DA2228] text-[14px] font-[500] font-Roboto hover:underline"
            onClick={() => setShowPasswordModal(true)}
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <motion.div
          className="fixed inset-[-24px] bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPasswordModal(false)}
        >
          <motion.div
            className="bg-white rounded-lg p-6 min-w-[600px] space-y-4 shadow-lg relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPasswordModal(false)}
            >
              ✕
            </button> */}
            <img
              src="/admin/close.png"
              alt="close"
              className="absolute top-[-20px] right-[-20px] cursor-pointer"
            />
            <h3 className="text-[20px] font-[600] font-poppins border-b border-[#D7D7D7D7] pb-4">
              Password
            </h3>
            <p className="text-[#9FA2AB] text-[20px] font-[500] font-poppins pt-8 pb-5">
              Choose a strong password and don't reuse it for other accounts.
            </p>

            {/* New Password */}
            <div>
              <label className="block text-[#000000] text-[16px] font-[400] font-poppins mb-3">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md bg-[#F9F9F9]"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[#000000] text-[16px] font-[400] font-poppins mb-3">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-md bg-[#F9F9F9]"
                placeholder="Confirm new password"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-4 py-10">
              <button
                className="bg-[#DA2228] text-white px-4 py-2 rounded-[5px]"
                onClick={() => {
                  setShowPasswordModal(false);
                  setShowOtpModal(true);
                }}
              >
                Generate OTP
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <motion.div
          className="fixed inset-[-24px] bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowOtpModal(false)}
        >
          <motion.div
            className="bg-white rounded-lg p-6 min-w-[400px] space-y-6 shadow-lg relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowOtpModal(false)}
            >
              ✕
            </button> */}
            <img
              src="/admin/close.png"
              alt="close"
              className="absolute top-[-20px] right-[-20px] cursor-pointer"
            />
            <h3 className="text-[20px] font-[600] font-poppins border-b border-[#D7D7D7D7] pb-4">
              Verify OTP
            </h3>
            <p className="text-[#9FA2AB] text-[20px] font-[500] font-poppins pt-8 pb-5">
              OTP is sent to your user ID: ******64@gmail.com
            </p>

            {/* OTP Input */}
            <div className="flex justify-center space-x-4">
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
            <div className="flex justify-center space-x-6">
              <button className="border border-[#DA2228] text-[#DA2228] px-6 py-2 rounded-[5px]">
                Clear
              </button>{" "}
              <button className="bg-[#DA2228] text-white px-6 py-2 rounded-[5px]">
                Verify
              </button>
            </div>
            {/* Timer and Resend */}
            <div className="text-center text-[#000000] text-[20px] font-[600] font-poppins">
              <p>1:59</p>
              <p className="text-[#1C1C1C] text-[14px] font-[400] font-Roboto hover:underline mt-5">
                Didn’t get OTP?{" "}
                <span className="text-[#DA2228] font-[500]">Request again</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfilePage;
