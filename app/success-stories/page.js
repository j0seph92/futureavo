import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";
import InnerBanner from "../Components/InnerBanner";
import ContentSec2 from "../Components/ContentSec2";
import ReviewSec from "../Components/ReviewSec";

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
        image="ss-bg.webp"
        bgColor="__gradientss"
        subheading="Welcome to Future Avo"
        heading="Get Inspired by Real Stories of Our Clients"
        cont="At Future Avo, we take immense pride in being a top choice for clients. Don't believe us? Discover how our digital solutions have transformed the lives of our clients, leading to remarkable success."
        point1="Research & Analysis"
        point2="Time Efficiency"
        point3="Attention to Detail"
        point4="Original Art"
      />
      <ContentSec2
        subheading="success stories"
        heading="Here's a Glimpse of What Clients Gain When Working with Us"
        cont=""
        img="ss-2.webp"
        imgclass="w-full md:w-1/4"
      />
      <section className="relative z-0">
        <div className="pb-10 overflow-hidden lg:pb-16 xl:pb-20 ">
          <div className="container">
            <div className="flex"></div>
            <div className="flex flex-wrap gap-5 mt-16 md:flex-nowrap">
              <div className="basis-full md:basis-[49%] lg:basis-4/12 ">
                <div className="relative p-5 shadow-md __gradientpur lg:p-10 xl:p-12 pe-5 lg:pe-10 xl:pe-28 rounded-xl">
                  <div className="icon-bg2 m-auto bg-[#ffffff8a]">
                    <img
                      src="/media/icon5.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-white font-semibold capitalize mt-12  leading-none mb-3`}
                  >
                    Brand Consistency
                  </h3>
                  <p className="text-white">
                    We ensure our services align seamlessly with our client's
                    brand identities, creating a cohesive and impactful online
                    presence.
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-4/12 ">
                <div className="relative p-5 shadow-md __gradientss lg:p-10 xl:p-12 pe-5 lg:pe-10 xl:pe-10 rounded-xl">
                  <div className="icon-bg2 m-auto bg-[#ffffff8a]">
                    <img
                      src="/media/icon7.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-white font-semibold capitalize mt-12  leading-none mb-3`}
                  >
                    Enhanced User Experience
                  </h3>
                  <p className="text-white">
                    We are recognized for elevating the overall user experience
                    with our services. We aim for higher engagement and customer
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-4/12 ">
                <div className="relative p-5 shadow-md __gradientss lg:p-10 xl:p-12 pe-5 lg:pe-10 xl:pe-10 rounded-xl">
                  <div className="icon-bg2 m-auto bg-[#ffffff8a]">
                    <img
                      src="/media/icon6.png"
                      alt="icon"
                      className="img-fluid lazy"
                      width="64"
                      height="64"
                    ></img>
                  </div>
                  <h3
                    className={`text-2xl sm:text-4xl xl:text-4xl text-white font-semibold capitalize mt-12  leading-none mb-3`}
                  >
                    Improved Online Visibility
                  </h3>
                  <p className="text-white">
                    Our highly customized services can help put our clients on
                    the map by providing services that catch the eye of the
                    audience enhancing online visibility.
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
      <FloatingIcons btnColor="__gradientprice" />
    </>
  );
};

export default page;
