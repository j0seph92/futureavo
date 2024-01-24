"use client";
import React, { useState } from "react";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumber from "./ButtonNumber";
import Slider from "react-slick";
import InnerBanner from "./InnerBanner";
import Popup from "./Popup";

const HomeBanner = () => {
  var mainbanslider = {
    dots: false,
    arrow: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
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
      <Slider {...mainbanslider} className="overflow-hidden">
        <section className="">
          <div className="__homeHeroGradientBg pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/ban-img.webp"
                />
              </div>
              {/* <div className="absolute lg:top-[420px] xl:top-[450px] lg:right-[460px] xl:right-[560px] 2xl:right-[580px] hidden lg:block hero___fadeInDown__5Jtma">
              <img
                alt="icon"
                loading="lazy"
                width="140"
                height="140"
                decoding="async"
                data-nimg="1"
                src="/media/designicon.webp"
              />
            </div>
            <div className="absolute lg:top-[250px] xl:top-[350px] lg:right-[0] xl:right-[50px] hidden lg:block hero___fadeInDown__5Jtma">
              <img
                alt="icon"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                src="/media/minimalicon.webp"
              />
            </div>
            <div className="absolute lg:top-[600px] xl:top-[700px] lg:right-[0] xl:right-[50px] hidden lg:block hero___fadeInDown__5Jtma">
              <img
                alt="icon"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                src="/media/uiuxicon.webp"
              />
            </div> */}
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Top Web Design & Web Development Company
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Creating Functional and Appealing Designs
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Are you fed up with website design and development services
                    that aren't up to par? Switch to the better side with us.
                    FutureAVO is a reliable web design & web development company
                    operating across the nation, creating products that are:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Optimized
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
                              Interactive
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
                              Highly Responsive
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
                              Brilliant UI and UX
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
        <section className="">
          <div className="__gradientlogo pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/screen1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Custom Logo Designs
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Hire the Best Logo Design Company for Creative Logos
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Are you looking for a professional logo design company for
                    custom logo designs? Future Avo has got you covered! At our
                    logo design agency, we have a team of artistic logo
                    designers to create corporate logo designs for established
                    companies and startups.
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Creative Logo Designs
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
                              Improved Credibility
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
                              Brand Identity
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
                              Increased Brand Visibility
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
        <section className="">
          <div className="__gradientBg3 pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/cc-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Top Copywriters for Hire
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    We’re the Best Creative Copywriting Company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Ready to work with the leading creative copywriting company?
                    Future Avo has got your back! We have mastered the art of
                    transforming ideas into captivating narratives and tales.
                    Our top copywriters for hire include:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Technical Copywriters
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
                              Website Copywriters
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
                              Landing Page Copywriters
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
                              SEO Copywriters
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
        <section className="">
          <div className="__gradientdm pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/dm-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Best Digital Marketing Experts
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Hire Top Digital Marketing Company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Engage, convert, and succeed—that's the motto at Future Avo.
                    Are you looking for a reliable digital marketing company to
                    jumpstart your digital dreams? Hire top digital marketing
                    company to witness noticeable results and propel forward
                    with data-driven marketing. Here's what we offer:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              SEO Content Marketing
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
                              Social Media Marketing
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
                              Pay Per Click Advertising
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
                              Conversion Rate
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
        <section className="">
          <div className="__gradientec pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/ec-2.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      eCommerce Website Design Company
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    functional websites with ecommerce website solutions
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    As the top ecommerce website design company, we excel in
                    designing websites that drive sales and delight customers
                    across various platforms, ensuring we customize our
                    solutions for every client.
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Website Design
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
                              Website Development
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
                              Analytics & Tracking
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
                              Conversion Optimization
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
        <section className="">
          <div className="__gradientwd pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/wd-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Best Website Design & Development
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Hire Top Website Development Company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Is your current website not grabbing attention? Turn that
                    around with the top website development company. Focusing on
                    functionality and user experience, our website design &
                    development is a game-changer for you.
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Brand Consistency
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
                              Optimized Performance
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
                              Search Engine Visibility
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
                              Responsive Design
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
        <section className="">
          <div className="__gradientmg pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/online-cinema.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Get Moving with Motion Graphics
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    A professional motion graphic design company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Step into a motion-packed world with the best motion graphic
                    design company as we animate your brand into action. Here’s
                    what our creative motion graphics entails:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Logo Animation
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
                              Tailored Animation
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
                              Visual Effects (VFX)
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
                              3D Modeling
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
        <section className="">
          <div className="__gradientill pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/ill-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Best Illustration Designers
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Work with the Top Illustration Design Company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Exhausted from collaborating with illustration agencies that
                    aren’t up to the mark? Say goodbye to horrible experiences
                    with the top illustration design company. We boast a team of
                    the best illustration designers, specializing in creative
                    illustrations, custom character designs, gaming
                    illustrations, etc.
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Innovative Artistry
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
                              Customized Designs
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
                              Unlimited Revisions
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
                              Timely Deliverables
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
        <section className="">
          <div className="__gradientmc pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/mc-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Top Marketing Collateral Company
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Team Up with the Top Marketing Collateral Company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Are you searching for a reliable team of professionals who
                    can improve your content and help your brand reach the
                    audience? At Future Avo, we have top-notch content writers
                    who craft compelling content to boost and retain your client
                    base.
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Improved Brand Image
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
                              Visible Results
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
                              Extensive Solutions
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
                              Save Resources and Time
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
        <section className="">
          <div className="__gradientapp pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/app-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Mobile App Design Company
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    Top-of-the-line Mobile App Design and Development
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Welcome to Future Avo, the leading mobile app design company
                    and master of mobile app design and development. Our
                    expertise when building a mobile app goes way beyond just
                    eye-catching designs; we're driven to build mobile apps
                    with:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Multi-Device Integration
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
                              Scalability
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
                              Easy Monetization
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
                              Interactivity
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
        <section className="">
          <div className="__gradientseo pt-28 lg:pt-0 relative z-[1] ">
            <div className="container relative z-[1]">
              {/* <div className="absolute bottom-0 md:right-0 lg:right-[100px] xl:right-[100px] z-[-1] hidden md:block"> */}
              <div className="absolute bottom-0 md:right-0 lg:right-0 xl:right-0 z-[-1] hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                <img
                  alt="banner"
                  fetchPriority="high"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover h-auto p-2 md:max-w-xs lg:max-w-lg xl:max-w-screen-sm"
                  src="/media/seo-1.webp"
                />
              </div>
              <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
                <div className="basis-full lg:basis-[60%] xl:basis-[50%]">
                  <div className="relative mb-10 w-max">
                    <span className="inline-block text-sm font-normal leading-none text-white sm:text-base xl:text-lg">
                      Professional SEO Company
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
                  <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl">
                    work with our professional SEO company
                  </h1>
                  <p className="mb-3 text-sm font-normal text-white sm:text-base 2xl:text-lg sm:mb-5">
                    Experience the change that doesn’t just help your brand rank
                    higher but also helps outrank the competition by hiring an
                    SEO company. At Future Avo, we employ effective techniques
                    to boost traffic, assisting you in getting SEO-savvy. Here’s
                    what we offer:
                  </p>
                  <div className="flex mb-5 xl:mb-8">
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
                              Research & Analysis
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
                              On-Page & Off-Page
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
                              Technical SEO Audit
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
                              E-Commerce SEO
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
      </Slider>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default HomeBanner;
