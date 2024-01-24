import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import ReviewSec from "../Components/ReviewSec";
import ComboPackage from "../Components/ComboPackage";
import SubHeading from "../Components/SubHeading";
import HeadingMain from "../Components/HeadingMain";
import PackagesBox from "../Components/PackagesBox";
import Portfolio from "../Components/Portfolio";
import ResponsiveSec from "../Components/ResponsiveSec";
import Gallery from "../Components/Gallery";
import InnerBanner from "../Components/InnerBanner";
import ContentSec2 from "../Components/ContentSec2";
import FAQ from "../Components/FAQ";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  const imageFiles = [
    "app-gal-one.webp",
    "app-gal-two.webp",
    "app-gal-three.webp",
  ];
  const imageFiles2 = ["app-gal-four.webp", "app-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“My business partner and I had been sitting on a mobile application idea for two years. We tried to make this a reality, but something always got in the way, and then came Future Avo, bringing it to life.”",
      name: " May Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I honestly had a smooth and hassle-free experience working with them for my mobile app development. Currently, it's almost about to be launched, and it's up to the mark in every way possible.””",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Before choosing Future Avo, I did my research and explored a few options, but they lacked. However, with them, I got outstanding mobile app services at the most brilliant pricing plans without any quality dips.”",
      name: "katty Johnson",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question:
        "What is the duration to complete a mobile app development project?",
      answer:
        "The timeline to develop and create a mobile app will depend on various factors. For example, the complexity of the mobile application, the features that are required, the individual requirements of the client, etc. Usually, it can take a couple of weeks to a few months.",
    },
    {
      question: "What is the cost of developing a mobile app?",
      answer:
        "The costs of developing a mobile application rely on several factors, such as how complex the functionality of the application is, the features, the design requirements, the expertise of the professionals, etc. To avoid miscommunication, it’s best to establish clear communication with us.  ",
    },
    {
      question: "What platforms are utilized for mobile app development?",
      answer:
        "Mobile applications can be built for various platforms, including Android and iOS. In fact, some mobile applications are also designed and developed to work on several platforms as they have cross-platform compatibility. Drop us a text to learn more. ",
    },
    {
      question: "Can I modify my mobile application after launching it?",
      answer:
        "It is quite common for individuals and companies to constantly update or modify their applications even after every detail has been finalized and launched. The truth is that, yes, you actually can keep updating your application to ensure it functions smoothly.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="app-1.webp"
        bgColor="__gradientapp"
        subheading="Mobile App Design Company "
        heading="Top-of-the-line Mobile App Design and Development"
        cont="Welcome to Future Avo, the leading mobile app design company and master of mobile app design and development. Our expertise when building a mobile app goes way beyond just eye-catching designs; we're driven to build mobile apps with:"
        point1="Multi-Device Integration"
        point2="Scalability"
        point3="Easy Monetization"
        point4="Interactivity"
      />
      <ContentSec2
        subheading="Mobile Application Development"
        heading="Mobile Application Design Services"
        cont="At our mobile app agency, our mobile app developers utilize cutting-edge technologies for mobile application development. Our mobile application design services entail mobile applications for businesses with compatibility for diverse platforms. From idea to integration, we provide a seamless user experience. "
        img="app-2.webp"
      />
      <ResponsiveSec
        headingtxt="Give Us a Call to Partner Up with Qualified Mobile App Developers"
        conttxt="Our mobile app developers excel in designing and developing mobile app designs that are built to rise in the digital world. Ring us up now. "
        image="app-3.webp"
        imgbottom="0"
        bgcolor="__gradientapp"
        extclass="mobsec2"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Ride the Digital Wave with Our Mobile App Agency"
        txtcolor="black"
        cont="At Future Avo, our mobile app designs stand out in the crowd thanks to our incredibly skilled and creative specialists."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Jaw-Dropping Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="That Keep You Coming Back for More"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Are you worried our mobile app development services will cost
                  a fortune? Find the perfect package for your pocket.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
              <PackagesBox />
              <PackagesBox />
              <PackagesBox />
            </div>
          </div>
        </div>
      </section> */}
      <ReviewSec reviewdata={reviewdata} />
      <FAQ faqData={faqData} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
