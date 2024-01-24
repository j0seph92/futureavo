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
    "mc-gal-one.webp",
    "mc-gal-two.webp",
    "mc-gal-three.webp",
  ];
  const imageFiles2 = ["mc-gal-four.webp", "mc-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“Their marketing collateral services have been a game-changer for us. Our clients have been raving about the quality and creativity of our materials. Thank you for taking our marketing to the next level.” ”",
      name: " Nathan Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Future Avo deserves all the praise and recognition for their incredible marketing collateral services. Their attention to detail and the ability to capture our brand essence has been truly impressive.”",
      name: " Sarah Peter",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I've been working with this team for quite some time now, and they've been the best in the game. My business has actually started getting recognized, and we're gradually gaining engagement and sales”",
      name: "katty Sebastian",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What exactly is marketing collateral?",
      answer:
        "Marketing collateral refers to collecting various forms of media to promote a product or a service to boost sales. It is a common term in marketing and sales that focuses on establishing a relationship between the audience and the brand.",
    },
    {
      question: "How do you track marketing collateral?",
      answer: [
        "Tracking the effectiveness of the marketing collateral is essential to measure the impact. One of the best practices for tracking marketing collateral include:",
        <br></br>,
        <br></br>,
        "•	Creating custom URLs to track them.",
        <br></br>,
        "•	Adding QR codes",
        <br></br>,
        "•	Assigning promo codes",
        <br></br>,
        <br></br>,
        "There are other ways methods to manage and track marketing collateral.",
      ],
    },
    {
      question: "What are some examples of marketing collateral?",
      answer: [
        "The most popular types of marketing collateral include:",
        <br></br>,
        <br></br>,
        "•	Logo",
        <br></br>,
        "•	Website",
        <br></br>,
        "•	Mission statement",
        <br></br>,
        "•	Social profiles",
        <br></br>,
        "•	About us page",
        <br></br>,
        "•	Listings",
        <br></br>,
        "•	Business cards",
        <br></br>,
        <br></br>,
        "We've mentioned a couple of them, but there are many more that companies use.",
      ],
    },
    {
      question: "What marketing collateral do I need?",
      answer:
        "When it comes to choosing a marketing collateral, it's essential to keep in mind what will align with the target audience and your goals. Some common marketing collateral types are flyers, business cards, case studies, brochures, etc. You can take your pick from the one that appeals most to your goals. ",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="mc-1.webp"
        bgColor="__gradientmc"
        subheading="Top Marketing Collateral Company"
        heading="Team Up with the Top Marketing Collateral Company"
        cont="Are you searching for a reliable team of professionals who can improve your content and help your brand reach the audience? At Future Avo, we have top-notch content writers who craft compelling content to boost and retain your client base.  "
        point1="Improved Brand Image"
        point2="Visible Results"
        point3="Extensive Solutions "
        point4="Save Resources and Time"
      />
      <ContentSec2
        subheading="Marketing Collateral Solutions"
        heading="Soar Above the Competition as We Write for You"
        cont="Our top-notch content writers possess the ability to empower your brand with unique and authentic content. Our marketing collateral solutions are intended to drive conversions by attracting the audience. "
        img="mc-2.webp"
      />
      <ResponsiveSec
        headingtxt="Hire Us for Exceptional Marketing Collateral Services"
        conttxt="Future Avo is here to assist you in beginning your digital journey by providing top-tier marketing collateral services. Drop us a text!"
        image="mc-3.webp"
        imgbottom="0"
        bgcolor="__gradientmc"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Experience Creativity at Its Peak with Custom Marketing Collateral"
        txtcolor="black"
        cont="We allow firms to achieve greater success as our marketing specialists provide custom marketing collateral that piques interest and increases conversions."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Hire Marketing Collateral Company"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Where Quality Meets Affordability "
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Welcome to Future Avo, where excellence and affordability go
                  hand in hand. Take a look at our amazing pricing plans today!
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
