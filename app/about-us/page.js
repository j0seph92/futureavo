import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import ReviewSec from "../Components/ReviewSec";
import SubHeading from "../Components/SubHeading";
import HeadingMain from "../Components/HeadingMain";
import PackagesBox from "../Components/PackagesBox";
import ResponsiveSec from "../Components/ResponsiveSec";
import InnerBanner from "../Components/InnerBanner";
import ContentSec2 from "../Components/ContentSec2";
import FloatingIcons from "../Components/FloatingIcons";

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
        image="abt-1.webp"
        bgColor="__gradientBg3"
        subheading="Welcome to the FutureAVO"
        heading="Where Our Services Are a Surefire Way to Victory"
        cont="Step into the hub where creativity has no bounds and excellence is evident at every stage. We are the perfect partner to rely on as we take the weight off your shoulders, providing digital experiences to help your business flourish."
        point1="Logo Design"
        point2="Website and Mobile Development "
        point3="Digital Marketing"
        point4="SEO Services"
      />
      <ContentSec2
        subheading="Top Website & Development Company"
        heading="Where Digital Dreams Are Attainable"
        cont="At Future Avo, we take pride in providing an assorted array of design and development services, including custom logo designs, motion graphics, website development, mobile development, and much more."
        img="abt-3.webp"
      />
      <ResponsiveSec
        headingtxt="Let Us Become Part of Your Dreams"
        conttxt="Our team of professionals is here to guide and support you regardless of what your business goals are. Don’t wait anymore; give us a call!"
        image="responsivePhone.webp"
        imgbottom="-100px"
      />
      <ReviewSec reviewdata={reviewdata} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
