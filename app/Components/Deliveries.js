"use client";
import React from "react";
import HeadingMain from "./HeadingMain";
import { globalPhone, globalEmail } from "./Global";

const Deliveries = () => {
  const handleToggle2 = (e) => {
    e.preventDefault();
    // Execute the Tawk_API.toggle() function
    Tawk_API.toggle();
  };
  return (
    <>
      <section>
        <div className="py-10 __gradientBg2 md:py-20 ">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <HeadingMain
                  txt="Cutting-Edge Services &amp; Outstanding Products"
                  extclass="text-center text-white"
                />
                <p className="mb-10 text-base font-normal text-center text-white lg:mb-20">
                  At our firm, our perseverance in providing groundbreaking
                  strategies sets us apart as the top choice for many of our
                  clients.
                </p>
                <div className="flex lg:divide-x lg:divide-[#1E73DB] mb-10 lg:mb-20 gap-5 flex-wrap lg:flex-nowrap justify-center">
                  <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                    <img
                      alt="[object Object]"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="block m-auto mb-3 hero___fadeInDown__5Jtmb"
                      src="/media/process1.webp"
                    />
                    <h3 className="font-sans font-semibold text-center text-white text-basis md:text-lg xl:text-xl">
                      Top-Notch Creativity
                    </h3>
                  </div>
                  <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                    <img
                      alt="[object Object]"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="block m-auto mb-3 hero___fadeInDown__5Jtma"
                      src="/media/process2.webp"
                    />
                    <h3 className="font-sans font-semibold text-center text-white text-basis md:text-lg xl:text-xl">
                      Bespoke Solutions
                    </h3>
                  </div>
                  <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                    <img
                      alt="[object Object]"
                      loading="lazy"
                      width="130"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="block m-auto hero___fadeInDown__5Jtmb"
                      src="/media/process3.webp"
                    />
                    <h3 className="font-sans font-semibold text-center text-white text-basis md:text-lg xl:text-xl">
                      Flexible Design
                    </h3>
                  </div>
                  <div className="basis-[46%] md:basis-[30%] lg:basis-1/5 border-l-5">
                    <img
                      alt="[object Object]"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="block m-auto mb-3 hero___fadeInDown__5Jtma"
                      src="/media/process4.webp"
                    />
                    <h3 className="font-sans font-semibold text-center text-white text-basis md:text-lg xl:text-xl">
                      Timely Turnaround
                    </h3>
                  </div>
                  <div className="basis-[46%] md:basis-[30%] lg:basis-1/5">
                    <img
                      alt="[object Object]"
                      loading="lazy"
                      width="70"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="block m-auto mb-3 hero___fadeInDown__5Jtmb"
                      src="/media/process5.webp"
                    />
                    <h3 className="font-sans font-semibold text-center text-white text-basis md:text-lg xl:text-xl">
                      Affordable Rates
                    </h3>
                  </div>
                </div>
                <div className="flex border-2 rounded-2xl border-[#fff] items-center justify-evenly p-5 flex-wrap md:flex-nowrap text-center md:text-left flex-col md:flex-row gap-5">
                  <div className="basis-full md:basis-[50%] text-center">
                    <h3 className="font-sans text-xl font-medium text-white lg:text-2xl">
                      Your Corporation is Just a Call Away from Becoming a
                      Recognized Brand
                    </h3>
                    <a
                      className="bg-[#fff] mt-3 text-black inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#000000] hover:text-white text-sm font-medium xl:text-sm"
                      href={`tel:${globalPhone()}`}
                    >
                      Book Free Consultation
                    </a>
                  </div>
                  <div className="basis-full md:basis-[50%] text-center">
                    <h3 className="font-sans text-xl font-medium text-white lg:text-2xl">
                      10 Essential Steps for a successfull <br></br>Website
                      Launch
                    </h3>
                    <a
                      className="bg-[#000000] mt-3 text-white inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 rounded-md hover:bg-[#fff] hover:text-black text-sm font-medium xl:text-sm"
                      href="javscript:;"
                      onClick={handleToggle2}
                    >
                      Get Your Checklist Now
                    </a>
                  </div>
                  {/* <div className="basis-full md:basis-[30%]">
                    <a
                      className="font-sans text-xl font-medium text-white lg:text-2xl"
                      href="tel:(123) 456-7890"
                    >
                      Give us a call at <br></br>(855) 888-8399
                    </a>
                  </div>
                  <div className="basis-full md:basis-[30%]">
                    <a
                      className="font-sans text-xl font-medium text-white lg:text-2xl"
                      href="mailto:info@futureavo.com"
                    >
                      Share Your Ideas with us at <br></br>info@futureavo.com
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deliveries;
