"use client";
import React, { useEffect, useState } from "react";
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
import FAQ from "../Components/FAQ";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  const [logo2dData, setLogo2dData] = useState([]);
  const [logo3dData, setLogo3dData] = useState([]);
  const [emblemlogoData, setEmblemLogoData] = useState([]);
  const [illustrativelogoData, setIllustrativeLogoData] = useState([]);
  const [letterlogoData, setLetterLogoData] = useState([]);
  const [mascotlogoData, setMascotLogoData] = useState([]);
  const [wordmarklogoData, setWordmarkLogoData] = useState([]);

  // Add similar state variables for illustration and application data

  useEffect(() => {
    // Fetch or set your data
    // For example:
    setLogo2dData([
      "/media/portfolio/logo1.webp",
      "/media/portfolio/logo2.webp",
      "/media/portfolio/logo3.webp",
      "/media/portfolio/logo4.webp",
      "/media/portfolio/logo5.webp",
      "/media/portfolio/logo6.webp",
    ]);
    setLogo3dData([
      "/media/portfolio/logo3d1.webp",
      "/media/portfolio/logo3d3.webp",
      "/media/portfolio/logo3d4.webp",
      "/media/portfolio/logo3d5.webp",
      "/media/portfolio/logo3d2.webp",
      "/media/portfolio/logo3d6.webp",
    ]);

    setEmblemLogoData([
      "/media/portfolio/emblemlogo1.webp",
      "/media/portfolio/emblemlogo3.webp",
      "/media/portfolio/emblemlogo4.webp",
      "/media/portfolio/emblemlogo5.webp",
      "/media/portfolio/emblemlogo2.webp",
      "/media/portfolio/emblemlogo6.webp",
    ]);

    setIllustrativeLogoData([
      "/media/portfolio/illustrativelogo1.webp",
      "/media/portfolio/illustrativelogo3.webp",
      "/media/portfolio/illustrativelogo4.webp",
      "/media/portfolio/illustrativelogo5.webp",
      "/media/portfolio/illustrativelogo2.webp",
      "/media/portfolio/illustrativelogo6.webp",
    ]);

    setLetterLogoData([
      "/media/portfolio/letterlogo1.webp",
      "/media/portfolio/letterlogo3.webp",
      "/media/portfolio/letterlogo4.webp",
      "/media/portfolio/letterlogo5.webp",
      "/media/portfolio/letterlogo2.webp",
      "/media/portfolio/letterlogo6.webp",
    ]);
    setMascotLogoData([
      "/media/portfolio/mascotlogo1.webp",
      "/media/portfolio/mascotlogo3.webp",
      "/media/portfolio/mascotlogo4.webp",
      "/media/portfolio/mascotlogo5.webp",
      "/media/portfolio/mascotlogo2.webp",
      "/media/portfolio/mascotlogo6.webp",
    ]);

    setWordmarkLogoData([
      "/media/portfolio/wordmarklogo1.webp",
      "/media/portfolio/wordmarklogo3.webp",
      "/media/portfolio/wordmarklogo4.webp",
      "/media/portfolio/wordmarklogo5.webp",
      "/media/portfolio/wordmarklogo2.webp",
      "/media/portfolio/wordmarklogo6.webp",
    ]);

    // Set similar data for illustration and application
  }, []);
  const tabs = [
    { label: "2D Logo", images: logo2dData },
    { label: "3D Logo", images: logo3dData },
    { label: "Emblem Logos", images: emblemlogoData },
    { label: "Illustrative Logos", images: illustrativelogoData },
    { label: "letter Logos", images: letterlogoData },
    { label: "Mascot Logos", images: mascotlogoData },
    { label: "Wordmark Logos", images: wordmarklogoData },
    // Add similar objects for illustration and application tabs
  ];
  const imageFiles = [
    "logo-gal-one.webp",
    "logo-gal-two.webp",
    "logo-gal-three.webp",
  ];
  const imageFiles2 = ["logo-gal-four.webp", "logo-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“From concept to creation, working with them has given me a golden chance to experience what it's like to have some of the best logo designers at my service. Can't thank them enough!”",
      name: " May Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Before they could create a logo for me, the team showed me a few designs, and then I chose the one that appealed to me the most. Their logo design services were worth every penny.”",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“My company has been in the industry for a few years, but it still hasn't established an identity. I contacted Future Avo to get a logo redesign and got a logo that captures its true essence.”",
      name: "katty Johnson",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What makes a logo design perfect?",
      answer:
        "The ideal logo design aligns perfectly with the brand's core values and principles. In addition, the design should be appropriate for the target audience. So, your logo design should represent what your brand stands for, offering a unique identity to it. ",
    },
    {
      question: "How can I make my logo design better?",
      answer:
        "In many cases, firms get stuck with logos that don't leave a lasting impression on their clients or customers. As a result, it impacts their branding. The simplest way to improve your logo design is by revamping or retouching a few elements. You can also consider redesigning it. ",
    },
    {
      question: "What are the core elements of a logo design?",
      answer:
        "The procedure of creating a logo involves some core elements that professionals need to consider. These elements include text, color, shape, typography, and more. You can get familiar with each of them by scheduling a free consultation call with us. ",
    },
    {
      question: "How do you hire the best logo designer?",
      answer:
        "If you're looking for the best logo designer to hire, you need to start by conducting some research. When you do that, you can explore the internet, ask around, and use your resources to find reliable companies, or you could make things simpler and go for the best by choosing us. Contact us for more. ",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="screen1.webp"
        bgColor="__gradientlogo"
        subheading="Custom Logo Designs"
        heading="Hire the Best Logo Design Company for Creative Logos  "
        cont="Are you looking for a professional logo design company for custom logo designs? Future Avo has got you covered! At our logo design agency, we have a team of artistic logo designers to create corporate logo designs for established companies and startups."
        point1="Creative Logo Designs"
        point2="Improved Credibility "
        point3="Brand Identity "
        point4="Increased Brand Visibility"
      />
      <Gallery
        heading="The Best Logo Designers That Outshine in the Competition"
        cont="Our logo design agency is recognized as a company that has mastered the art of creative logo designs, logo redesign, and more. We create a logo that captures your brand's unique identity while resonating with the audience."
        tabs={tabs}
      />
      <ResponsiveSec
        headingtxt="Need Top Logo Design Services? Future Avo is At Your Service!"
        conttxt="If you're interested in top logo design services that set you apart from the crowd, our team of professionals is here to assist you at all times."
        image="screnn3.webp"
        imgbottom="0"
        extclass="logosec2img"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Get a Peek into Our Custom Logo Designs"
        txtcolor="black"
        cont="At Future Avo, we are constantly dedicated to accomplishing excellence across an array of assorted logo designs, including various logo design styles."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Logo Design Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="We Offer Pricing Plans That Suit Every Pocket"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Get tailored logo designs without burning a hole in your
                  pocket as you collaborate with our affordable logo design
                  company. Here's more on our plans.
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
            </div>
          </div>
        </div>
      </section> */}
      {/* <ComboPackage /> */}
      <ReviewSec reviewdata={reviewdata} />
      <FAQ faqData={faqData} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
