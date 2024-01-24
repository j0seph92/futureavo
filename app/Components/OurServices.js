"use client";
import React from "react";
import HeadingMain from "./HeadingMain";

const OurServices = () => {
  return (
    <>
      <section>
        <div className="bg-[#EBEBEB] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <HeadingMain
                  txt={[
                    `Our Web Design & Development Company`,
                    <br className="hidden sm:block"></br>,
                    `Excels in All-Inclusive Areas `,
                  ]}
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  With a team of keen and qualified web designers and developers
                  working in-house, FutureAVO is driven to deliver{" "}
                  <br className="hidden md:block"></br>top-notch solutions and
                  products for businesses. Our across-the-board services
                  include:
                </p>
                <div className="approach___cardsWrapper__TCANa">
                  <div className="flex flex-wrap gap-4 justify-evenly lg:flex-nowrap">
                    <div className="basis-[45%]  lg:basis-1/5">
                      <div className="approach___cards__rzZMW shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:-rotate-45 lg:right-[-200px] z-[1]">
                        <a href="/logo-design-company">
                          <img
                            alt="uiux"
                            loading="lazy"
                            width="1400"
                            height="988"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80"
                            style={{ color: "transparent" }}
                            src="/media/logoservice1.webp"
                          />
                          <h3 className="absolute left-0 right-0 text-xl font-medium leading-none text-center text-white bottom-2/4 lg:bottom-8">
                            Logo
                          </h3>
                        </a>
                      </div>
                    </div>
                    <div className="basis-[45%]  lg:basis-1/5">
                      <div className="approach___cards__rzZMW shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:-rotate-45 lg:right-[-100px] z-[2]">
                        <a href="/website-development-company">
                          <img
                            alt="application"
                            loading="lazy"
                            width="1400"
                            height="1912"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80"
                            style={{ color: "transparent" }}
                            src="/media/webservices1.webp"
                          />
                          <h3 className="absolute left-0 right-0 text-xl font-medium leading-none text-center text-white bottom-2/4 lg:bottom-8">
                            Website
                          </h3>
                        </a>
                      </div>
                    </div>
                    <div className="basis-[45%]  lg:basis-1/5">
                      <div className="approach___cards__rzZMW shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative z-[3]">
                        <a href="/mobile-app-design-company">
                          <img
                            alt="branding"
                            loading="lazy"
                            width="1400"
                            height="820"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80"
                            style={{ color: "transparent" }}
                            src="/media/mobileapp1.webp"
                          />
                          <h3 className="absolute left-0 right-0 text-xl font-medium leading-none text-center text-white bottom-2/4 lg:bottom-8">
                            Application
                          </h3>
                        </a>
                      </div>
                    </div>
                    <div className="basis-[45%]  lg:basis-1/5">
                      <div className="approach___cards__rzZMW shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:rotate-45 lg:right-[100px] z-[4]">
                        <a href="/digital-marketing-company">
                          <img
                            alt="socialMedia"
                            loading="lazy"
                            width="1400"
                            height="821"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover object-left h-52 md:h-96 lg:h-60 xl:h-80"
                            style={{ color: "transparent" }}
                            src="/media/smmservices.webp"
                          />
                          <h3 className="absolute left-0 right-0 text-xl font-medium leading-none text-center text-white bottom-2/4 lg:bottom-8">
                            SMM
                          </h3>
                        </a>
                      </div>
                    </div>
                    <div className="basis-[45%]  lg:basis-1/5">
                      <div className="approach___cards__rzZMW shadow-[0_23px_56px_rgba(0,0,0,0.3)] relative lg:rotate-45 lg:right-[200px] z-[5]">
                        <a href="/seo-company">
                          <img
                            alt="brandColors"
                            loading="lazy"
                            width="1400"
                            height="835"
                            decoding="async"
                            data-nimg="1"
                            className="object-cover object-center h-52 md:h-96 lg:h-60 xl:h-80"
                            style={{ color: "transparent" }}
                            src="/media/seoservices.webp"
                          />
                          <h3 className="absolute left-0 right-0 text-xl font-medium leading-none text-center text-white bottom-2/4 lg:bottom-8">
                            SEO
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="block mx-auto mt-10 w-max hover:scale-75"
                  href="#"
                >
                  <img
                    alt="btn"
                    loading="lazy"
                    width="208"
                    height="208"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/media/btn.8a1686f1.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
