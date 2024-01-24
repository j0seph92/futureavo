import React from "react";

const SubHeading = ({ txt, extclass, color }) => {
  return (
    <div>
      <h4
        className={`text-xl sm:text-3xl xl:text-4xl ${extclass} pb-3 capitalize  font-semibold font-[${color}]`}
      >
        {txt}
      </h4>
    </div>
  );
};

export default SubHeading;
