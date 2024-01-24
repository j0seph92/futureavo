import React from "react";
import { RiSettings5Line } from "react-icons/ri";

const PackagesBox = ({
  packagetitle,
  packagelist,
  popular,
  amount,
  decimal,
  icon: Icon,
}) => {
  const handleToggle2 = (e) => {
    e.preventDefault();
    // Execute the Tawk_API.toggle() function
    Tawk_API.toggle();
  };
  return (
    <>
      <div
        className={`card_body rounded-[30px] px-4 py-5 h-full overflow-hidden bg-[#0F2847] ${
          popular === true
            ? "bg-gradient-to-r from-[#41DADF] to-[#0F2847]"
            : "bg-[#0F2847]"
        }`}
      >
        <div className="relative w-full popular">
          <p
            className={`text-[14px] text-center leading-[14px] font-bold uppercase py-3 text-white bg-[#0F2847]  rotate-[45deg] absolute right-[-109px] top-[12px] w-[281px] block ${
              popular === true ? "block" : "hidden"
            }`}
          >
            Popular
          </p>
        </div>
        <div className="relative card_header">
          <div className="flex justify-center icon-bg align-items-center">
            {Icon && <Icon className="text-4xl opacity-80" />}
          </div>
        </div>
        <div className="flex flex-col justify-between h-full card_body">
          <h4 className="text-center mt-[110px] font-semibold text-[22px] text-[#f7f7f7f7]  mb-[-5px] capitalize relative before:content-[''] before:absolute before:mx-auto before:h-[2px] before:w-[70%] before:left-0 before:right-0 before:top-[35px] h2_before">
            {packagetitle}
          </h4>
          <ul className="text-center max-h-[150px] overflow-y-scroll mt-10 overflow-x-hidden">
            {packagelist?.map((item, index) => (
              <li key={index}>
                <p className="text-white font-[600] text-[12px] leading-[30px] tracking-[0.1rem] mb-0">
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <div className="mt-6 price">
              <p className="text-white text-[50px] font-bold relative z-1 leading-[45px] text-center mb-0">
                <span className="text-[15px] font-[400] py-[5px]">$</span>
                {amount}
                <span className="text-[15px] font-[400] py-[5px]">
                  / .{decimal}
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center mt-4 btn">
              <a
                className={` ${
                  popular === true
                    ? "bg-[#0F2847]"
                    : "bg-gradient-to-r from-[#41DADF] to-[#0F2847]"
                } text-white inline-flex items-center justify-center gap-3 pr-3.5 pl-3.5 h-14 rounded-full hover:bg-[#2C7D96] w-full`}
                href="javscript:;"
                onClick={handleToggle2}
              >
                <span className="text-sm font-medium xl:text-lg">Chat Now</span>
                <img
                  alt="liveChatIcon"
                  loading="lazy"
                  width="22"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  src="/media/liveChatIcon.b502fe65.svg"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesBox;
