"use client";
import React from "react";

const ButtonStartLiveChat = ({ btncolor }) => {
  const handleToggle2 = (e) => {
    e.preventDefault();
    // Execute the Tawk_API.toggle() function
    Tawk_API.toggle();
  };
  return (
    <div>
      <a
        className={`bg-[${btncolor}]  text-white inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#000000]`}
        href="javscript:;"
        onClick={handleToggle2}
      >
        <span className="text-sm font-medium xl:text-sm">Get Instant Help</span>
        <img
          alt="liveChatIcon"
          loading="lazy"
          width="22"
          height="28"
          decoding="async"
          data-nimg="1"
          src="/media/liveChatIcon.b502fe65.svg"
        />
      </a>
    </div>
  );
};

export default ButtonStartLiveChat;
