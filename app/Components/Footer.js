import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { globalPhone, globalAddress, globalEmail } from "./Global";

const footer = () => {
  return (
    <>
      <footer>
        <div className="pt-10 __footerGradientBg md:pt-32">
          <div className="container">
            <div className="flex gap-x-5 pb-10 xl:pb-20 border-b-[1px] border-[#707070] flex-wrap lg:flex-nowrap justify-between gap-y-5 lg:gap-y-0">
              <div className="basis-full sm:basis-[48%] lg:basis-[25%]">
                <Link className="block mb-5" href="/">
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
                <p className="text-sm font-normal text-white xl:text-base">
                  FutureAVO is the one-stop solution to accomplish your branding
                  objectives as we design and create logos, websites, and
                  applications for you. We also provide additional services for
                  clients to benefit from.
                </p>
                <img
                  alt="certification"
                  loading="lazy"
                  width="192"
                  height="45"
                  decoding="async"
                  data-nimg="1"
                  className="mt-3"
                  src="/media/certification.b4622630.svg"
                />
              </div>
              <div className="basis-full sm:basis-[48%] lg:basis-[15%]">
                <h4 className="text-3xl capitalize font-semibold text-white leading-none mb-3 pb-4 border-b-[2px] border-[#41DADF]">
                  quick Links
                </h4>
                <ul>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/why-choose-us"
                    >
                      Why Choose Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/success-stories"
                    >
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/about-us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/contact-us"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/refund-policy"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/terms-and-conditions"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/pricing"
                    >
                      Pricing/Packages
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="basis-full sm:basis-[48%] lg:basis-1/5">
                <h4 className="text-3xl capitalize font-semibold text-white leading-none mb-3 pb-4 border-b-[2px] border-[#41DADF]">
                  services
                </h4>
                <ul>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/logo-design"
                    >
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/creative-copywriting"
                    >
                      Creative Copywriting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/digital-marketing-agency"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/ecommerce-website-solutions"
                    >
                      Ecommerce Web Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/website-development-company"
                    >
                      Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/motion-graphic-design"
                    >
                      Motion Graphics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/illustration-design"
                    >
                      Illustration Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/marketing-collateral"
                    >
                      Marketing Collateral
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/mobile-app-development-company"
                    >
                      App Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-normal leading-8 text-white xl:text-base hover:opacity-50 xl:leading-8"
                      href="/seo-services"
                    >
                      SEO Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="basis-full sm:basis-[48%] lg:basis-1/5">
                <h4 className="text-3xl capitalize font-semibold text-white leading-none mb-3 pb-4 border-b-[2px] border-[#41DADF]">
                  contact
                </h4>
                <ul>
                  <li className="flex items-center gap-2 mb-3 last:mb-0">
                    <FaLocationDot className="text-xl text-white md:text-2xl hover:opacity-50" />

                    <Link
                      className="text-sm font-normal text-white xl:text-base hover:opacity-50"
                      href="#"
                    >
                      {globalAddress()}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-3 last:mb-0">
                    <FaPhone className="text-xl font-normal text-white xl:text-base hover:opacity-50" />
                    <Link
                      className="text-sm font-normal text-white xl:text-base hover:opacity-50"
                      href={`tel:${globalPhone()}`}
                    >
                      {globalPhone()}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-3 last:mb-0">
                    <FaEnvelope className="text-xl font-normal text-white xl:text-base hover:opacity-50" />
                    <Link
                      className="text-sm font-normal text-white xl:text-base hover:opacity-50"
                      href={`mailto:${globalEmail()}`}
                    >
                      {globalEmail()}
                    </Link>
                  </li>
                </ul>
                <img
                  alt="cards"
                  loading="lazy"
                  width="223"
                  height="22"
                  decoding="async"
                  data-nimg="1"
                  className="mt-3"
                  src="/media/cards.91a7a0cf.svg"
                />
              </div>
            </div>
            <div className="flex gap-x-5 py-5 flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 items-center border-b-[1px] border-[#707070]">
              <div className="basis-full sm:basis-1/2">
                <p className="text-sm font-light leading-6 text-center text-white sm:text-left">
                  Copyright © 2024 <Link href="/">FutureAVO</Link>
                </p>
              </div>
              <div className="basis-full sm:basis-1/2">
                <ul className="flex items-center justify-center gap-4 sm:justify-end">
                  <li className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50">
                    <Link
                      href="https://www.facebook.com/FutureAvo"
                      target="_blank"
                    >
                      <FaFacebookF className="text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50">
                    <Link href="#" target="_blank">
                      <FaTwitter className="text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50">
                    <Link
                      href="https://www.instagram.com/future.avo"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-white" />
                    </Link>
                  </li>
                  <li className="bg-[#375a85] w-7 h-7 flex items-center justify-center p-1 hover:opacity-50">
                    <Link href="#" target="_blank">
                      <FaLinkedin className="text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-5">
              <p className="text-[12px] font-light text-white leading-[22px]">
                <span className="font-semibold">Disclaimer</span>: Logo, name
                and graphic representation of futureavo and its products and
                services are trademarks of futureavo. All other company names,
                trademarks and logos mentioned on this website are the property
                of their respective owners and do not represent or imply
                endorsement, sponsorship or recommendation by futureavo and
                constitute or imply endorsement, sponsorship or recommendation
                thereof by futureavo and do not constitute or imply endorsement,
                sponsorship or recommendation of futureavo by the respective
                trademark owner.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
