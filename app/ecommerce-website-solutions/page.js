import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import ReviewSec from "../Components/ReviewSec";
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
    "ec-gal-one.webp",
    "ec-gal-two.webp",
    "ec-gal-three.webp",
  ];
  const imageFiles2 = ["ec-gal-four.webp", "ec-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“I found Future Avo when I was searching for a professional to revamp my online store. Since the beginning, they gave me various options, making sure I was completely satisfied with everything.”",
      name: " May Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Their exceptional team of designers and professionals truly go above and beyond for each project. They made sure they created an efficient and highly appealing website design for my online store.””",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Unlike other companies I've worked with, my experience with Future Avo has been pretty extraordinary. My e-commerce website was already designed, and they transformed it completely in no time without any hassle.”",
      name: "katty Johnson",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What is the basic structure of an e-commerce website?",
      answer:
        "The ideal e-commerce website should follow a hierarchical structure. As a result, the homepage should be at the top, and there can be 2 or 3 levels below, with the last level being the product pages. Learn more about the details of an e-commerce website for your store with our experts.",
    },
    {
      question: "How many types of e-commerce websites are there?",
      answer: [
        "Different types of e-commerce models are followed, such as:",
        <br></br>,
        <br></br>,
        "•	Business to Business (B2B)",
        <br></br>,
        "•	Business to Administration (B2A)",
        <br></br>,
        "•	B2C online store creation",
        <br></br>,
        <br></br>,
        "The list goes on, but the design will depend on your audience and the market. Once you have an understanding of these models and your business, you can get your website designed. ",
      ],
    },
    {
      question: "What are ecommerce website design services?",
      answer:
        "E-commerce web design is the procedure of creating a web design for e-commerce businesses that operate online. Put simply, for online stores. These website designs have features that allow online selling, and highly specialized designers and experts offer these services.",
    },
    {
      question: "What's the first step in eCommerce website design?",
      answer:
        "Almost every design and development process begins with research and planning. This is because success stories are incomplete without due diligence, setting goals, and planning. So, before you get your website designed, we'll conduct research for a clearer perspective.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="ec-2.webp"
        bgColor="__gradientec"
        subheading="eCommerce Website Design Company "
        heading="functional websites with ecommerce website solutions"
        cont="As the top ecommerce website design company, we excel in designing websites that drive sales and delight customers across various platforms, ensuring we customize our solutions for every client."
        point1="Website Design"
        point2="Website Development"
        point3="Analytics & Tracking"
        point4="Conversion Optimization"
      />
      <ContentSec2
        subheading="Ecommerce Solutions Company"
        heading="Ecommerce Web Development Experts"
        cont="Our ecommerce web development experts emphasize providing designs and solutions that successfully improve online presence, boost sales, and increase revenue. "
        img="ec-1.webp"
      />
      <ResponsiveSec
        headingtxt="Elevate Your E-commerce Presence with Stunning Ecommerce Website Design"
        conttxt="At Future Avo, we take pride in creating custom ecommerce solutions that not only look amazing but also drive results, putting you ahead of the competition."
        image="ec-3.webp"
        imgbottom="0"
        bgcolor="bg-[#ffc502]"
        extclass="ecsec2"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Ecommerce Website Design that Converts and Captivates"
        txtcolor="black"
        cont="Get a glimpse into how we artistically and meticulously design ecommerce websites that are functional and aesthetically pleasing."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Reasonable Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Find the Perfect Plan for Our Ecommerce Website Solutions"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Our eCommerce solutions are available in various pricing plans
                  to make sure you don't deprive yourself of quality eCommerce
                  Website Design.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
              <PackagesBox />
              <PackagesBox />
              <PackagesBox />
              <PackagesBox />
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
