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
import FloatingIcons from "../Components/FloatingIcons";
import FAQ from "../Components/FAQ";

const page = () => {
  const imageFiles = [
    "wd-gal-one.webp",
    "wd-gal-two.webp",
    "wd-gal-three.webp",
  ];
  const imageFiles2 = ["wd-gal-four.webp", "wd-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“It's been truly a wonderful experience with Future Avo. They've exceeded my expectations at every stage of the process, from the initial communication to launching my website. Their dedication ensured my website looks flawless.”",

      name: " Adrian Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“For the past few months, Future Avo has been a reliable partner for website development, and they never fall short. From understanding the design to bringing it to life, it's just been so great.”",

      name: " Sarah Adam",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Undoubtedly, the best website development agency I've worked with. They design and develop websites that are ready for success. If you want your website designed, then you need to call these guys.”",

      name: "Blake Zoe",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What stages does web development consist of?",
      answer: [
        "The process of web development can be categorized into multiple stages, and they are as follows:",
        <br></br>,
        <br></br>,
        "•	Research",
        <br></br>,
        "•	Planning",
        <br></br>,
        "•	Designing",
        <br></br>,
        "•	Coding",
        <br></br>,
        "•	Website Testing",
        <br></br>,
        "•	Review and Launch",
        <br></br>,
        "•	Maintenance",
      ],
    },
    {
      question: "What are some top programming languages for web development?",
      answer:
        "There are a plethora of programming languages that web developers use for developing websites, but the one that’s used most commonly across the world is JavaScript. Apart from this, programming languages, HTML, React, Java, CSS, etc., are also used.",
    },
    {
      question:
        "How much time does each web development project take to complete?",
      answer:
        "Generally, the timeline for any web development project will rely on aspects like the size and complexity of the project. It also comes down to how professional the company is. In simpler words, simple projects will take less time, while complex ones will take longer.",
    },
    {
      question: "What are the different types of projects in web development?",
      answer: [
        "There are various types of projects in web development, with the most common ones being:",
        <br></br>,
        <br></br>,
        "•	Blogging Platforms",
        <br></br>,
        "•	Web Applications",
        <br></br>,
        "•	E-commerce Websites",
        <br></br>,
        "•	Corporate Websites ",
        <br></br>,
        "•	Portfolio Websites",
        <br></br>,
        "•	Booking and Reservation Systems",
        <br></br>,
        "•	News and Media Websites",
        <br></br>,
        "•	Social Networking Sites",
        <br></br>,
        "•	Content Management Systems (CMS)",
        <br></br>,
        "•	Online Learning Platforms",
        <br></br>,
        <br></br>,
        "Although there are other types, these are the most prevalent. ",
      ],
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="wd-1.webp"
        bgColor="__gradientwd"
        subheading="Best Website Design & Development"
        heading="Hire Top Website Development Company "
        cont="Is your current website not grabbing attention? Turn that around with the top website development company. Focusing on functionality and user experience, our website design & development is a game-changer for you."
        point1="Brand Consistency"
        point2="Optimized Performance"
        point3="Search Engine Visibility"
        point4="Responsive Design"
      />
      <ContentSec2
        subheading="Custom Website Development"
        heading="Team Up with Top Custom Websites Development Company"
        cont="In the digital era, your website is the first thing potential customers see, which is why you can't compromise on that. At Future Avo, we take custom website development up a notch. Wondering how? Just need to join hands with the top custom website development company. "
        img="wd-2.webp"
      />
      <ResponsiveSec
        headingtxt="Get in Touch with Our Web Development Company to Lure Traffic in"
        conttxt="At our web development company, our professionals are well-equipped and skilled in building custom websites that compel visitors to choose your brand every time, paving the path to success."
        image="wd-3.webp"
        imgbottom="0"
        bgcolor="bg-[#220e3e]"
        extclass="wdsec2"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="100% Satisfaction Guaranteed at Our Website Development Company"
        txtcolor="black"
        cont="Browse through our web development and design projects as you get an idea of how flawless our work is."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Web Development Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Pocket-Friendly Website Development Company"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  At our firm, we are driven to provide our clients with
                  affordable and top-tier website development services.
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
      <ReviewSec reviewdata={reviewdata} />
      <FAQ faqData={faqData} />
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
