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
import FAQ from "../Components/FAQ";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  const reviewdata = [
    {
      cont: "“I found Future Avo when I was in desperate need of content to boost my brand, and working with them was a game-changer. Their creative copy made my brand shine!”",

      name: " May Richard",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I've worked with similar companies before, but their copywriting team has a knack for turning words into pure magic. They've done a brilliant job capturing our brand's voice at superb prices.”",

      name: " Amanda Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Professional, talented, and a pleasure to work with—that's what my experience has been teaming up with Future Avo. Their creative copywriting services have truly exceeded my expectations. Would recommend.”",

      name: "katty Ava",
      designation: "E-commerce Manager",
    },
  ];

  const faqData = [
    {
      question: "What is creative copywriting?",
      answer:
        "Creative copywriting is one of the most effective ways to appeal to audiences online, converting leads to sales. In this form of writing, engaging and inspiring content is produced by using different tactics that can ensure a wide audience comes across the content. ",
    },
    {
      question: "What is SEO copywriting?",
      answer:
        "SEO copywriting is the process of generating content that's optimized through keywords. This content is produced to grab the attention of the audience and appeal to search engine algorithms. Put simply, this type of copywriting is when content is written for Google and other search engines to understand.",
    },
    {
      question: "What are the different types of copywriting?",
      answer: [
        "There are different types of copywriting, and some of the most common ones are:",
        <br></br>,
        <br></br>,
        "•	Website Copywriting",
        <br></br>,
        "•	SEO Copywriting ",
        <br></br>,
        "•	Product Copywriting",
        <br></br>,
        "•	Corporate Websites",
        <br></br>,
        "•	B2B Copywriting ",
        <br></br>,
        "•	Technical Copywriting",
        <br></br>,
        <br></br>,
        "Although there are other types, these are the most prevalent. ",
      ],
    },
    {
      question: "How to find a creative copywriter?",
      answer:
        "Finding a creative copywriter isn't a challenging task, but finding a professional one can be one heck of a job. Fortunately, companies and interested individuals can get the opportunity to team up with a highly specialized team of copywriters with Future Avo. Drop us a text to learn more. ",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="cc-1.webp"
        bgColor="__gradientBg3"
        subheading="Top Copywriters for Hire "
        heading="We’re the Best Creative Copywriting Company "
        cont="Ready to work with the leading creative copywriting company? Future Avo has got your back! We have mastered the art of transforming ideas into captivating narratives and tales. Our top copywriters for hire include:"
        point1="Technical Copywriters "
        point2="Website Copywriters"
        point3="Landing Page Copywriters"
        point4="SEO Copywriters"
      />
      <ContentSec2
        subheading="Top Copywriters for Hire"
        heading="Embrace the Power of Words as We Inspire and Mesmerize"
        cont="Content is key, and our wordsmiths are here to unlock endless doors with that. Boost your brand's visibility as we paint splendid pictures with words. Your ideas, our words, your success—let's begin."
        img="cc-2.webp"
      />
      <ResponsiveSec
        headingtxt="Reach Out to Our Professional Copywriters Right Away "
        conttxt="Future Avo is the hub for top copywriters who are just waiting to wave their wand and create content that takes your brand to new heights. Hire our professional copywriters today!"
        image="cc-3.webp"
        imgbottom="0"
        bgcolor="__gradientBg2"
        extclass="ccsec2img"
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Creative Copywriting Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Never Go Out of Words with Our Jaw-Dropping Packages"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Are you considering hiring our copywriting company? Avail our
                  services at prices that keep you coming back for more.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
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
