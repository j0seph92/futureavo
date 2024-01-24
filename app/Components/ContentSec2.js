"use client";
import React, { useState } from "react";
import SubHeading from "./SubHeading";
import HeadingMain from "./HeadingMain";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumberblk from "./ButtonNumberblk";
import Popup from "./Popup";

const ContentSec2 = ({ subheading, heading, cont, img, imgclass }) => {
  // ************ Popup Code *************
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  // ************ /Popup Code *************
  return (
    <>
      <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt={subheading}
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain txt={heading} extclass="text-center" />
                <p className="text-base text-[#202020] font-normal text-center mb-10 ">
                  {cont}
                </p>
              </div>
            </div>

            <div className="">
              <img
                alt="screens"
                loading="lazy"
                width="900"
                height="737"
                decoding="async"
                data-nimg="1"
                className={`block m-auto ${imgclass ? imgclass : ""}`}
                style={{ color: "transparent" }}
                src={`/media/${img}`}
              />
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-10 text-center md:flex-nowrap">
              <ButtonStartLiveChat btncolor="#3ea6b6" />
              <ButtonNumberblk openPopup={openPopup} />
            </div>
          </div>
        </div>
      </section>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ContentSec2;
