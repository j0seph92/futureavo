"use client";
import { useEffect, useState } from "react";
import HomeBanner from "./Components/HomeBanner";
import ReviewSec from "./Components/ReviewSec";
import Portfolio from "./Components/Portfolio";
import Gallery from "./Components/Gallery";
import ResponsiveSec from "./Components/ResponsiveSec";
import OurServices from "./Components/OurServices";
import ContentSec1 from "./Components/ContentSec1";
import Deliveries from "./Components/Deliveries";
import PreFooter from "./Components/PreFooter";
import FloatingIcons from "./Components/FloatingIcons";
import FAQ from "./Components/FAQ";
import BlogSec from "./Components/BlogSec";

export default function Home() {
  const [logoData, setLogoData] = useState([]);
  const [marketcotData, setMarketcotData] = useState([]);
  const [webData, setWebData] = useState([]);
  const [illustrationData, setillustrationData] = useState([]);
  const [digimarketData, setDigimarketData] = useState([]);
  const [applicationData, setapplicationData] = useState([]);
  // Add similar state variables for illustration and application data

  useEffect(() => {
    // Fetch or set your data
    // For example:
    setLogoData([
      "/media/portfolio/logo1.webp",
      "/media/portfolio/logo2.webp",
      "/media/portfolio/logo3.webp",
      "/media/portfolio/logo4.webp",
      "/media/portfolio/logo5.webp",
      "/media/portfolio/logo6.webp",
    ]);
    setMarketcotData([
      "/media/portfolio/mc1.webp",
      "/media/portfolio/mc2.webp",
      "/media/portfolio/mc3.webp",
      "/media/portfolio/mc4.webp",
      "/media/portfolio/mc5.webp",
      "/media/portfolio/mc6.webp",
    ]);
    setWebData([
      "/media/portfolio/web1.webp",
      "/media/portfolio/web2.webp",
      "/media/portfolio/web3.webp",
      "/media/portfolio/web4.webp",
      "/media/portfolio/web5.webp",
      "/media/portfolio/web6.webp",
    ]);

    setillustrationData([
      "/media/portfolio/ill1.webp",
      "/media/portfolio/ill2.webp",
      "/media/portfolio/ill3.webp",
      "/media/portfolio/ill4.webp",
      "/media/portfolio/ill5.webp",
      "/media/portfolio/ill6.webp",
    ]);
    setDigimarketData([
      "/media/portfolio/dm1.webp",
      "/media/portfolio/dm2.webp",
      "/media/portfolio/dm3.webp",
      "/media/portfolio/dm4.webp",
      "/media/portfolio/dm5.webp",
      "/media/portfolio/dm6.webp",
    ]);
    setapplicationData([
      "/media/portfolio/app1.webp",
      "/media/portfolio/app2.webp",
      "/media/portfolio/app3.webp",
      "/media/portfolio/app4.webp",
      "/media/portfolio/app5.webp",
      "/media/portfolio/app6.webp",
    ]);
    // Set similar data for illustration and application
  }, []);
  const tabs = [
    { label: "Logo Design", images: logoData },
    { label: "Marketing Collaterals", images: marketcotData },
    { label: "Website Design", images: webData },
    { label: "Illustration Design", images: illustrationData },
    { label: "Digital Marketing", images: digimarketData },
    { label: "Mobile App Development", images: applicationData },
    // Add similar objects for illustration and application tabs
  ];
  const imageFiles = ["gal-one.webp", "gal-two.webp", "gal-three.webp"];
  const imageFiles2 = ["gal-four.webp", "gal-five.webp"];
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

  const faqData = [
    {
      question: "What is our best-selling service?",
      answer:
        "One of the most common questions clients ask us is this. This can be tough to answer as all our services have been receiving equal recognition and praise, so it comes down to our clients. Some clients can't stop raving about our design services, while others love our development services.",
    },
    {
      question: "How do we cater to diverse projects at Future Avo?",
      answer: [
        "Every client we work with is different and has unique requirements, so handling them can get complicated. Fortunately, our team is equipped to manage things smoothly. As a result, we follow a plan for each project, allowing us to work on projects efficiently. You can learn by connecting with us.",
      ],
    },
    {
      question: "What is the process of application design?",
      answer: [
        "Application designing is the process of creating the user experience and interface of the mobile application. Generally, this is the first stage of designing an application to get a clear understanding of the objectives of the application and the target audience, as it can help with creating a seamless design.",
      ],
    },
    {
      question: "What are the different categories of illustration?",
      answer: [
        "Usually, there are 4 main categories that an illustration can fall under, they include:",
        <br></br>,
        <br></br>,
        "•	Narrative",
        <br></br>,
        "•	Informative",
        <br></br>,
        "•	Decorative",
        <br></br>,
        "•	Conceptual",
        <br></br>,
        <br></br>,
        "These categories help decide how the illustration will be created and what elements it must include.",
      ],
    },
    {
      question: "What's the easiest coding language for website development?",
      answer: [
        "Python is known as one of the most simple programming languages that developers use to develop websites as it has a straightforward syntax and is quite easy to incorporate as compared to other languages. Interested in learning more about website development? Our experts can guide you.",
      ],
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <HomeBanner />
      <OurServices />
      <ResponsiveSec
        headingtxt="We Design Beyond Boundaries, Redefining Aesthetics"
        conttxt="As a leading logo design and mobile app development company,
        we take pride in providing solutions that align with your
        business goals, ensuring we produce a value-added product for
        you."
        image="responsivePhone.webp"
        imgbottom="-100px"
      />
      <Gallery
        heading="Impress, Engage and Drive Results "
        cont="We specialize in customized logo design, motion graphics, illustration design, creative copywriting, and digital marketing services, including social media marketing services, search engine marketing services, and more. "
        tabs={tabs}
      />
      <ContentSec1
        heading="We're Your One-Stop Solutions for Branding"
        cont={[
          "Future Avo is the fruit of creativity and quality services. We take immense pride in providing clients and individuals with a broad spectrum of services, such as logo design, motion graphics, creative copywriting, digital marketing, illustration design, and more. Our team comprises like-minded, incredibly talented professionals with a shared goal to deliver the best for our clients, which is why we provide cutting-edge services.",
          <br></br>,
          <br></br>,
          "What sets us apart besides our top-tier services is the fact that we're passionate about assisting our clients. That's why we provide unlimited revisions to ensure 100% client satisfaction. ",
        ]}
        image="17265-min.webp"
      />
      {/* <Portfolio
        bgcolor="#41dadf"
        heading="Browse Our Portfolio"
        cont="At FutureAVO, we provide a seamless user experience through innovative solutions. Don't believe us? Check out our portfolio and witness it yourself."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      /> */}
      <ReviewSec reviewdata={reviewdata} />
      <Deliveries />
      <FAQ faqData={faqData} />
      <BlogSec />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
}
