import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";
import InnerBanner from "../Components/InnerBanner";
import ReviewSec from "../Components/ReviewSec";
import HeadingMain from "../Components/HeadingMain";
import { IoIosPaperPlane } from "react-icons/io";

const page = () => {
  const reviewdata = [
    {
      cont: "“FutureAVO is the expert to reach out to for exceptional logo designs that grab attention. I recently got my brand logo designed by them, and it's absolutely flawless. Would definitely recommend their services.”",
      name: " May Johnson",
      designation: "Business Owner",
    },
    {
      cont: "“As a brand that needed a responsive and interactive website, I wasn't sure who to trust. Fortunately, I came across FutureAVO, and they were super professional through every step. Thank you, guys!”",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I've been working with their company for the past four months for different services, and I can say one thing for sure—this is the future. They've transformed my company into a brand in every way.”",
      name: "katty Johnson",
      designation: "CEO",
    },
  ];
  return (
    <>
      <InnerBanner
        image="wcu-bg.webp"
        bgColor="__gradientwcu"
        subheading="Welcome To Futureavo"
        heading="Why Choose Future Avo For Your Web Design & Web Development Needs?"
        cont="Welcome to the future, where innovation meets leading-edge technologies and premium quality services. That’s what partnering up with the leading web design & web development company is like. Here’s more on us."
        point1="Research & Analysis"
        point2="Time Efficiency"
        point3="Attention to Detail"
        point4="Original Art"
      />
      <section className="relative z-0">
        <div className="absolute left-0 right-0 bottom-0 h-40 bg-[#72239c] z-0 opacity-70 hidden md:block"></div>
        <div className="bg-[#EBEBEB] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <HeadingMain
                  txt="Why is Future Avo the Right Firm for You?"
                  extclass="text-center"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mt-0 md:flex-nowrap md:mt-16">
              <div className="basis-full md:basis-[49%] lg:basis-6/12 ">
                <div className="relative p-5 pt-5 shadow-md __gradientseo lg:p-10 xl:p-12 rounded-xl">
                  <div className="relative top-0 bg-white icon-bg2 md:-top-20">
                    <img
                      src="/media/icon1.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-white font-semibold capitalize  leading-none mb-3`}
                  >
                    User-Centric Approach
                  </h3>
                  <p className="text-white">
                    Our team is driven to create seamless user experiences,
                    ensuring the final products lead to customer satisfaction
                    for your <br></br>users.
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-6/12 ">
                <div className="relative p-5 pt-5 bg-white shadow-md lg:p-10 xl:p-12 rounded-xl">
                  <div className="relative top-0 bg-gray-200 icon-bg2 md:-top-20">
                    <img
                      src="/media/icon2.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-[#202020] font-semibold capitalize  leading-none mb-3`}
                  >
                    Creative Customization
                  </h3>
                  <p className="text-[#202020]">
                    We understand that every business is different, which is why
                    we offer highly customized services that resonate with your
                    target audience and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mt-5 md:mt-16 md:flex-nowrap">
              <div className="basis-full md:basis-[49%] lg:basis-6/12 ">
                <div className="relative p-5 pt-5 bg-white shadow-md lg:p-10 xl:p-12 rounded-xl">
                  <div className="relative top-0 bg-gray-200 icon-bg2 md:-top-20">
                    <img
                      src="/media/icon3.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-[#202020] font-semibold capitalize  leading-none mb-3`}
                  >
                    Timely Deliveries
                  </h3>
                  <p className="text-[#202020]">
                    We value your time and understand the importance of
                    commitment; we will deliver within the agreed-upon timeframe
                    without compromising on quality.
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-6/12 ">
                <div className="relative p-5 pt-5 bg-white shadow-md lg:p-10 xl:p-12 rounded-xl">
                  <div className="relative top-0 bg-gray-200 icon-bg2 md:-top-20">
                    <img
                      src="/media/icon4.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-[#202020] font-semibold capitalize  leading-none mb-3`}
                  >
                    Commitment to Perfection
                  </h3>
                  <p className="text-[#202020]">
                    Our team has meticulous attention to detail, ensuring
                    <br></br> that every bit of what we offer is polished and
                    <br></br> professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewSec reviewdata={reviewdata} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientapp" />
    </>
  );
};

export default page;
