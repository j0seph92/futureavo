"use client";
import React, { useState } from "react";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumber from "./ButtonNumber";
import { globalPhone, globalEmail } from "./Global";
import Popup from "./Popup";

const PreFooter = () => {
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
        <div className="bg-[#0f2847] py-10 pt-20 lg:pb-20 xl:py-24 relative overflow-hidden z-[1]">
          <div className="container">
            <div className="flex flex-wrap items-end lg:items-center lg:gap-5 lg:flex-nowrap">
              <div className="basis-full lg:basis-[40%] mb-8 lg:mb-0 text-center lg:text-left">
                <h3 className="text-2xl font-semibold leading-none text-white lg:text-4xl xl:text-5xl font-megat">
                  Get a Free Consultation
                </h3>
                <p className="text-base font-normal text-white">
                  Want to get a free consultation to avail our services? Get in
                  touch with us right away to make the most of our design,
                  development, and marketing services. Give us a call or drop us
                  a text!
                </p>
              </div>
              <div className="basis-full lg:basis-[35%] mb-8 md:mb-0 text-center">
                <a
                  className="block mb-4 text-2xl font-normal leading-none text-white lg:text-4xl xltext-5xl font-megat"
                  href={`tel:${globalPhone()}`}
                >
                  {globalPhone()}
                </a>
                <div className="flex flex-wrap items-center justify-center gap-3 text-center md:flex-nowrap">
                  <ButtonStartLiveChat btncolor="#3ea6b6" />
                  <ButtonNumber openPopup={openPopup} />
                </div>
              </div>
              <div className="basis-full lg:basis-[25%] text-center">
                <p className="font-sans text-xl font-medium text-white lg:text-2xl">
                  Discuss Your Ideas
                </p>
                <a
                  className="font-sans text-xl font-medium text-white lg:text-2xl"
                  href={`mailto:${globalEmail()}`}
                >
                  {globalEmail()}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 lg:bottom-0 lg:top-auto left-0 z-[-1]">
            <img
              alt="letstalk"
              loading="lazy"
              width="1920"
              height="446"
              decoding="async"
              data-nimg="1"
              src="/media/letstalk.webp"
            />
          </div>
        </div>
      </section>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default PreFooter;
