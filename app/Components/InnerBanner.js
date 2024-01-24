"use client";
import React, { useState } from "react";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumber from "./ButtonNumber";
import Popup from "./Popup";

const InnerBanner = ({
  image,
  bgColor,
  subheading,
  heading,
  cont,
  point1,
  point2,
  point3,
  point4,
  showpoints,
}) => {
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
        <div className={`${bgColor} pt-28 lg:pt-0 relative z-[1]`}>
          <div className="container relative z-[1]">
            <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
              <img
                alt="banner"
                fetchPriority="high"
                width="700"
                height="700"
                decoding="async"
                data-nimg="1"
                className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                src={`/media/${image}`}
              />
            </div>
            <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
              <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                <div className="relative mb-10 w-max">
                  <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                    {subheading}
                  </span>
                  <img
                    alt="downArrow"
                    loading="lazy"
                    width="71"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="absolute hidden ml-5 top-2/4 left-full sm:ml-10 sm:block"
                    src="/media/downArrow.ec405da6.svg"
                  />
                </div>
                <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat">
                  {heading}
                </h1>
                <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                  {cont}
                </p>
                <div
                  className={`flex mb-5 xl:mb-8 ${
                    showpoints === "hide" ? "hidden" : ""
                  }`}
                >
                  <div className="basis-full">
                    <div className="flex flex-wrap">
                      <div className="basis-6/12 md:basis-[48%] p-3 border-brown-10 px-0 border-r-2 border-b-2">
                        <div className="flex items-center gap-x-3">
                          <img
                            alt="circleCheck"
                            loading="lazy"
                            width="23"
                            height="23"
                            decoding="async"
                            data-nimg="1"
                            src="/media/circleCheck.svg"
                          />
                          <p className="text-xs font-normal text-white sm:text-lg xl:text-xl">
                            {point1}
                          </p>
                        </div>
                      </div>
                      <div className="basis-6/12 md:basis-[48%] p-3 border-brown-100 pr-0 border-b-2">
                        <div className="flex items-center gap-x-3">
                          <img
                            alt="circleCheck"
                            loading="lazy"
                            width="23"
                            height="23"
                            decoding="async"
                            data-nimg="1"
                            src="/media/circleCheck.svg"
                          />
                          <p className="text-xs font-normal text-white sm:text-lg xl:text-xl">
                            {point2}
                          </p>
                        </div>
                      </div>
                      <div className="basis-6/12 md:basis-[48%] p-3 border-brown-100 pl-0 border-r-2">
                        <div className="flex items-center gap-x-3">
                          <img
                            alt="circleCheck"
                            loading="lazy"
                            width="23"
                            height="23"
                            decoding="async"
                            data-nimg="1"
                            src="/media/circleCheck.svg"
                          />
                          <p className="text-xs font-normal text-white sm:text-lg xl:text-xl">
                            {point3}
                          </p>
                        </div>
                      </div>
                      <div className="basis-6/12 md:basis-[48%] p-3 pr-0">
                        <div className="flex items-center gap-x-3">
                          <img
                            alt="circleCheck"
                            loading="lazy"
                            width="23"
                            height="23"
                            decoding="async"
                            data-nimg="1"
                            src="/media/circleCheck.svg"
                          />
                          <p className="text-xs font-normal text-white sm:text-lg xl:text-xl">
                            {point4}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  alt="reviewPlatforms"
                  loading="lazy"
                  width="635"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  src="/media/reviewPlatforms.5d0e3d8b.svg"
                />
                <div className="flex flex-wrap items-center justify-center gap-3 pb-8 mt-5 text-center md:justify-start md:flex-nowrap xl:mt-8 lg:pb-0">
                  <ButtonStartLiveChat btncolor="#3ea6b6" />
                  <ButtonNumber openPopup={openPopup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default InnerBanner;
