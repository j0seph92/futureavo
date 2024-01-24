import Link from "next/link";
import React from "react";
import { globalPhone, globalEmail } from "./Global";

const ButtonNumberblk = ({ openPopup }) => {
  const handleButtonClick = () => {
    openPopup();
  };
  return (
    <div>
      {/* <Link
        className="bg-transparent text-black inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#000] border-2  border-[#000] hover:text-[#fff]"
        href={`tel:${globalPhone()}`}
      >
        <span className="text-sm font-medium xl:text-sm">
          Book Free Consultation
        </span>
      </Link> */}
      <button
        onClick={handleButtonClick}
        className="bg-transparent text-black inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#000] border-2  border-[#000] hover:text-[#fff] text-sm font-medium xl:text-sm"
      >
        Book Free Consultation
      </button>
    </div>
  );
};

export default ButtonNumberblk;
