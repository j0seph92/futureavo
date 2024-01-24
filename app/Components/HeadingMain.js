import React from "react";

const HeadingMain = ({ txt, extclass }) => {
  return (
    <div>
      <h3
        className={`text-2xl sm:text-4xl xl:text-5xl text-[#202020] ${extclass} font-semibold capitalize  leading-none mb-3`}
      >
        {txt}
      </h3>
    </div>
  );
};

export default HeadingMain;
