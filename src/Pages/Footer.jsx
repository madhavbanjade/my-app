import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#303030] w-screen mt-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between  md:px-16 py-4">
        {/* Portfolio Title */}
        <span className="text-2xl font-bold text-blue-400 mb-2 md:mb-0">
          Portfolio
        </span>

        {/* Copyright Text */}
        <div className="text-center text-white">
          <p className="text-sm md:text-base">
            ©2024 codewithmadhav. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
