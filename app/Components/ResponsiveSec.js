"use client";
import React, { useState } from "react";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumber from "./ButtonNumber";
import HeadingMain from "./HeadingMain";
import Popup from "./Popup";

const ResponsiveSec = ({
  headingtxt,
  conttxt,
  image,
  imgbottom,
  bgcolor,
  extclass,
}) => {
  function hasPx(value) {
    // Use a regular expression to check for "px" in the string
    const regex = /px/i;
    return regex.test(value);
  }
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
        <div className={`${bgcolor ? bgcolor : "__gradientBg2"}`}>
          <div className="container relative z-0 pt-10 lg:py-10 xl:py-20">
            <div className="flex">
              <div className="text-center basis-full lg:basis-2/4 md:text-left">
                <HeadingMain
                  txt={headingtxt}
                  extclass="text-center lg:text-left text-white"
                />
                <p className="mb-5 text-base font-normal text-center text-white lg:text-left">
                  {conttxt}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-5 lg:justify-start lg:mb-0">
                  <ButtonStartLiveChat btncolor="#0f2847" />
                  <ButtonNumber openPopup={openPopup} />
                </div>
              </div>
            </div>
            <div
              className={`lg:absolute lg:right-0 m-auto w-max z-[-1] ${
                hasPx(imgbottom) == true
                  ? `lg:bottom-[${imgbottom}]`
                  : `lg:bottom-${imgbottom}`
              } 
              ${extclass ? `${extclass}` : ""}`}
            >
              <img
                alt="img"
                loading="lazy"
                width="600"
                height="800"
                decoding="async"
                data-nimg="1"
                className={`max-w-xs lg:max-w-md  xl:max-w-full  hero___fadeInDown__5Jtma`}
                style={{ color: "transparent" }}
                src={`/media/${image}`}
              />
            </div>
          </div>
        </div>
      </section>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ResponsiveSec;
