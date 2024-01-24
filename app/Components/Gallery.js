"use client";
import React, { useState } from "react";
import HeadingMain from "./HeadingMain";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumberblk from "./ButtonNumberblk";
import Popup from "./Popup";

const Gallery = ({ heading, cont, tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderImages = (images) => {
    return images.map((image, index) => (
      <div key={index}>
        <img
          alt={index.toString()}
          loading="lazy"
          width="800"
          height="300"
          decoding="async"
          data-nimg="1"
          className="block m-auto"
          style={{ color: "transparent" }}
          src={image}
        />
      </div>
    ));
  };
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
        <div className="bg-[#EFEFEF] pt-10 md:pt-36 pb-10 md:pb-20">
          <div className="container">
            <div className="mb-10 text-center">
              <HeadingMain txt={heading} extclass="text-center" />
              <p className="text-base text-[#202020] font-normal">{cont}</p>
            </div>
            <div className="block overflow-hidden">
              <nav>
                <ul
                  role="tablist"
                  className="relative flex flex-row flex-wrap justify-center gap-3 p-0 mb-10 bg-transparent rounded-lg bg-opacity-60 md:flex-nowrap"
                >
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      role="tab"
                      className={`flex items-center justify-center text-center h-full relative antialiased select-none cursor-pointer border-2 font-sans font-medium text-base rounded-[50px] w-max py-[0.5rem] px-[0.8rem] hover:bg-[#0d3163] hover:border-[#0d3163] hover:text-white ${
                        activeTab === index + 1
                          ? "text-white border-[#0d3163] bg-[#0d3163]  isactive"
                          : "text-gray-600 border-[#707070] bg-transparent"
                      } capitalize`}
                      onClick={() => handleTabClick(index + 1)}
                    >
                      <div className="z-10 text-inherit">{tab.label}</div>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="relative block w-full overflow-hidden bg-transparent">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    role="tabpanel"
                    className={`w-full h-max text-gray-700 antialiased font-sans text-base font-light leading-relaxed p-0 ${
                      activeTab === index + 1
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3">
                      {renderImages(tab.images)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-10">
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

export default Gallery;
