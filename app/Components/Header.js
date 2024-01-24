"use client";
import React, { useState } from "react";
import ButtonStartLiveChat from "./ButtonStartLiveChat";
import ButtonNumber from "./ButtonNumber";
import Link from "next/link";
import Popup from "./Popup";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const containerStyle = {
    // Your default styles here
    height: isToggled ? "auto" : "0px", // Adjust the height based on your requirements
    overflow: "hidden",
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
      <header>
        <nav className="absolute top-0 left-0 z-10 block w-full px-0 py-0 text-white bg-transparent border border-none rounded-none shadow-none bg-opacity-80 border-white/80 max-w-none z-9999 backdrop-saturate-100 backdrop-blur-none">
          <div className="container">
            <div className="flex items-center h-24">
              <Link href="/">
                <img
                  alt="logo"
                  loading="lazy"
                  width="212"
                  height="51"
                  decoding="async"
                  data-nimg="1"
                  src="/media/logo.png"
                />
              </Link>
              <div className="items-center hidden h-full ml-auto lg:flex xl:m-auto">
                <ul className="gap-6 px-5 py-5 bg-black lg:flex lg:items-center lg:h-full rounded-2xl lg:bg-transparent lg:rounded-none lg:py-0 lg:px-0">
                  <li className="lg:h-full lg:flex lg:items-center">
                    <Link className="text-base font-medium leading-10" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="relative lg:h-full lg:flex lg:items-center group">
                    <button
                      href="/"
                      className="flex items-center gap-3 text-base font-medium leading-10"
                    >
                      Services
                      <img
                        alt="down"
                        loading="lazy"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="brightness-0 invert"
                        src="/media/down.bb5bf734.png"
                      />
                    </button>
                    <div className="lg:absolute lg:flex lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 top-full w-full lg:w-[600px] lg:justify-between lg:left-[-200px] xl:left-[-100px] rounded-2xl right-0 bg-white lg:p-3 lg:mt--20px">
                      <ul className="hidden w-1/2 lg:block">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="logoDesign"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/logoDesign.5ba9dd49.png"
                          />
                          <Link className="text-base" href="/logo-design">
                            Logo Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="creativeCopywriting"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/creativeCopywriting.423ec8cc.png"
                          />
                          <Link
                            className="text-base"
                            href="/creative-copywriting"
                          >
                            Creative Copywriting
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="digitalMarketing"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/digitalMarketing.ed56e5e8.png"
                          />
                          <Link
                            className="text-base"
                            href="/digital-marketing-agency"
                          >
                            Digital Marketing
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="ecommerce"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/ecommerce.ed738f9a.png"
                          />
                          <Link
                            className="text-base"
                            href="/ecommerce-website-solutions"
                          >
                            Ecommerce Website Solutions
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="websiteDevelopment"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/websiteDevelopment.c06f2bac.png"
                          />
                          <Link
                            className="text-base"
                            href="/website-development-company"
                          >
                            Website Development
                          </Link>
                        </li>
                      </ul>
                      <ul className="hidden w-1/2 lg:block">
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="motionGraphics"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/motionGraphics.a31748b7.png"
                          />
                          <Link
                            className="text-base"
                            href="/motion-graphic-design"
                          >
                            Motion Graphics
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="illustrationDesign"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/illustrationDesign.b9f7b76b.png"
                          />
                          <Link
                            className="text-base"
                            href="/illustration-design"
                          >
                            Illustration Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="marketingCollateral"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/marketingCollateral.cd01fbf7.png"
                          />
                          <Link
                            className="text-base"
                            href="/marketing-collateral"
                          >
                            Marketing Collateral
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="mobileApplication"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/mobileApplication.06820cfe.png"
                          />
                          <Link
                            className="text-base"
                            href="/mobile-app-development-company"
                          >
                            App Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="seoServices"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/seoServices.3ee664e6.png"
                          />
                          <Link className="text-base" href="/seo-services">
                            SEO Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* <li className="lg:h-full lg:flex lg:items-center">
                    <Link
                      className="text-base font-medium leading-10"
                      href="/pricing"
                    >
                      Pricing/Packages
                    </Link>
                  </li> */}

                  <li className="lg:h-full lg:flex lg:items-center">
                    <Link
                      className="text-base font-medium leading-10"
                      href="/why-choose-us"
                    >
                      Why Choose Us
                    </Link>
                  </li>

                  <li className="lg:h-full lg:flex lg:items-center">
                    <Link
                      className="text-base font-medium leading-10"
                      href="/success-stories"
                    >
                      Success Stories
                    </Link>
                  </li>

                  <li className="lg:h-full lg:flex lg:items-center">
                    <Link
                      className="text-base font-medium leading-10"
                      href="/about-us"
                    >
                      About
                    </Link>
                  </li>
                  <li className="lg:h-full lg:flex lg:items-center">
                    <Link
                      className="text-base font-medium leading-10"
                      href="/contact-us"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="items-center hidden gap-3 xl:flex">
                <ButtonStartLiveChat btncolor="#3ea6b6" />
                <ButtonNumber openPopup={openPopup} />
              </div>
              <button
                className="relative w-6 h-6 ml-auto font-sans text-xs font-medium text-center uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-40px max-h-40px text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                type="button"
                onClick={handleToggle}
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div
            className={`w-full basis-full overflow-hidden block xl:hidden `}
            style={{ height: "0px", ...containerStyle }}
          >
            <div className="container mx-auto">
              <ul className="gap-6 px-5 py-5 bg-black lg:flex lg:items-center lg:h-full rounded-2xl lg:bg-transparent lg:rounded-none lg:py-0 lg:px-0">
                <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/"
                    onClick={handleToggle}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative lg:h-full lg:flex lg:items-center group">
                  <button
                    href="/"
                    onClick={handleToggle}
                    className="flex items-center gap-3 text-base font-medium leading-10"
                  >
                    Services
                    <img
                      alt="down"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="brightness-0 invert"
                      src="/media/down.bb5bf734.png"
                    />
                  </button>
                  <div className="right-0 w-full bg-white lg:absolute lg:flex lg:opacity-0 lg:invisible group-hover:visible group-hover:opacity-100 top-full lg:w-600px lg:justify-between lg:left--200px xl:left--100px rounded-2xl lg:p-3 lg:mt--20px">
                    <div className="block w-full overflow-hidden basis-full lg:hidden">
                      <ul>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="logoDesign"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/logoDesign.5ba9dd49.png"
                          />
                          <Link
                            className="text-base"
                            href="/logo-design"
                            onClick={handleToggle}
                          >
                            Logo Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="creativeCopywriting"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/creativeCopywriting.423ec8cc.png"
                          />
                          <Link
                            className="text-base"
                            href="/creative-copywriting"
                            onClick={handleToggle}
                          >
                            Creative Copywriting
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="digitalMarketing"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/digitalMarketing.ed56e5e8.png"
                          />
                          <Link
                            className="text-base"
                            href="/digital-marketing-agency"
                            onClick={handleToggle}
                          >
                            Digital Marketing
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="ecommerce"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/ecommerce.ed738f9a.png"
                          />
                          <Link
                            className="text-base"
                            href="/ecommerce-website-solutions"
                            onClick={handleToggle}
                          >
                            Ecommerce Website Solutions
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="websiteDevelopment"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/websiteDevelopment.c06f2bac.png"
                          />
                          <Link
                            className="text-base"
                            href="/website-development-company"
                            onClick={handleToggle}
                          >
                            Website Development
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="motionGraphics"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/motionGraphics.a31748b7.png"
                          />
                          <Link
                            className="text-base"
                            href="/motion-graphic-design"
                            onClick={handleToggle}
                          >
                            Motion Graphics
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="illustrationDesign"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/illustrationDesign.b9f7b76b.png"
                          />
                          <Link
                            className="text-base"
                            href="/illustration-design"
                            onClick={handleToggle}
                          >
                            Illustration Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="marketingCollateral"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/marketingCollateral.cd01fbf7.png"
                          />
                          <Link
                            className="text-base"
                            href="/marketing-collateral"
                            onClick={handleToggle}
                          >
                            Marketing Collateral
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="mobileApplication"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/mobileApplication.06820cfe.png"
                          />
                          <Link
                            className="text-base"
                            href="/mobile-app-development-company"
                            onClick={handleToggle}
                          >
                            App Design
                          </Link>
                        </li>
                        <li className="flex p-3 items-center text-black gap-3 rounded-2xl hover:bg-#e9e9e9">
                          <img
                            alt="seoServices"
                            loading="lazy"
                            width="28"
                            height="28"
                            decoding="async"
                            data-nimg="1"
                            src="/media/seoServices.3ee664e6.png"
                          />
                          <Link
                            className="text-base"
                            href="/seo-services"
                            onClick={handleToggle}
                          >
                            SEO Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/why-choose-us"
                    onClick={handleToggle}
                  >
                    Why Choose Us
                  </Link>
                </li>

                <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/success-stories"
                    onClick={handleToggle}
                  >
                    Success Stories
                  </Link>
                </li>
                <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/about-us"
                    onClick={handleToggle}
                  >
                    About Us
                  </Link>
                </li>
                {/* <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/pricing"
                    onClick={handleToggle}
                  >
                    Pricing/Packages
                  </Link>
                </li> */}
                <li className="lg:h-full lg:flex lg:items-center">
                  <Link
                    className="text-base font-medium leading-10"
                    href="/contact-us"
                    onClick={handleToggle}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Header;
