// ButtonNumber.js
"use client";
import React, { useState } from "react";

const ButtonNumber = ({ openPopup }) => {
  const handleButtonClick = () => {
    openPopup();
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-transparent text-white inline-flex items-center gap-3 w-max px-[14px] h-12 rounded-md hover:bg-[#000] border-2  border-[#fff] hover:border-[#000] text-sm font-medium xl:text-sm"
      >
        Book Free Consultation
      </button>
    </div>
  );
};

export default ButtonNumber;
