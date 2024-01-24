"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import HeadingMain from "./HeadingMain";
import ReactPlayer from "react-player";

const ReviewSec = ({ reviewdata }) => {
  let videosrc =
    "/media/5079565_Video_Call_Telework_Telecommuting_1280x720.mp4";
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReview = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  var testslider = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="__reviewsCmp bg-[#F5F5F5] py-10 md:py-20 relative overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-stretch gap-5 lg:flex-nowrap">
            <div className="overflow-hidden basis-full lg:basis-2/4">
              <img
                alt="[object Object]"
                loading="lazy"
                width="120"
                height="100"
                decoding="async"
                data-nimg="1"
                className="mb-0"
                src="/media/quote.f2da51d4.png"
              />
              <HeadingMain
                txt="Our Success Stories"
                extclass="text-center md:text-left"
              />
              <Slider {...testslider} className="pb-8">
                {reviewdata.map((item, index) => (
                  <div key={index}>
                    <p className="text-sm lg:text-[16px] leading-[24px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">
                      {item.cont}
                    </p>
                    <div className="flex items-center gap-5 mt-5">
                      <div>
                        <h5 className="mb-2 font-sans text-lg font-bold leading-none text-black">
                          {item.name}
                        </h5>
                        <p className="mb-2 text-sm font-light text-black">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="basis-full lg:basis-2/4">
              <div className="shadow-lg shadow-black">
                {/* <img
                alt="reviewsIllustration"
                loading="lazy"
                width="2400"
                height="1440"
                decoding="async"
                data-nimg="1"
                src="/media/reviews.996d07b3.png"
              /> */}
                <video width="100%" height="100%" controls>
                  <source src={videosrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videosrc}
                  controls={true}
                  // light is usefull incase of dark mode
                  light={false}
                  // picture in picture
                  pip={true}
                />
                <source src={videosrc} type="video/mp4" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSec;
