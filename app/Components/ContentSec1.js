import React from "react";
import HeadingMain from "./HeadingMain";

const ContentSec1 = ({ heading, cont, image }) => {
  return (
    <>
      <section>
        <div className="bg-[#fff] py-10 lg:pb-20 xl:py-24 relative overflow-hidden z-[1]">
          <div className="container">
            <div className="flex flex-wrap items-end lg:items-center lg:gap-5 lg:flex-nowrap">
              <div className="basis-full lg:basis-[50%] mb-8 lg:mb-0 overflow-hidden rounded-[50px]">
                <img
                  alt="reviewsIllustration"
                  loading="lazy"
                  width="2400"
                  height="1440"
                  decoding="async"
                  data-nimg="1"
                  src={`/media/${image}`}
                />
              </div>
              <div className="basis-full lg:basis-[50%] mb-8 lg:mb-0">
                <div className="mb-10 text-center lg:text-left">
                  <HeadingMain txt={heading} extclass="" />
                  <p className="text-base text-[#202020] font-normal">{cont}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSec1;
