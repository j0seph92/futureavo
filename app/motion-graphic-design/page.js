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
    "mg-gal-one.webp",
    "mg-gal-two.webp",
    "mg-gal-three.webp",
  ];
  const imageFiles2 = ["mg-gal-four.webp", "mg-gal-five.webp"];
  const reviewdata = [
    {
      cont: "“I was absolutely blown away by the quality of their motion graphics and how creative their team gets with every design. There aren’t enough words to describe them; just commendable!”",
      name: " May Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Exceptional work! Future Avo’s motion graphics were engaging and captivating. Not just that; it also aligned perfectly with our brand, taking my brand to the next level.”",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Future Avo is truly unlike other companies I’ve worked with. Their seamless animation and attention to detail set them apart, and their work just added the wow factor I needed.”",
      name: "katty Johnson",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What are the three types of motion graphics videos?",
      answer: [
        "The most common types of motion graphics videos are explainer videos, emotive videos, and promotional videos. ",
        <br></br>,
        <br></br>,
        <b>• Explainer Videos: </b>,
        "These videos provide the audience with a brief and clear explanation of how your product works. ",
        <br></br>,
        <b>• Emotive Videos: </b>,
        "They are used to evoke a powerful emotional response from the viewer. Through motion graphics, you can connect to viewers and convince them to take a certain action. ",
        <br></br>,
        <b>• Promotional Videos: </b>,
        "The purpose of these videos is to market a product or service and lead to sales. ",
      ],
    },
    {
      question: "What tool is used for motion graphics?",
      answer:
        "The most common tool for motion graphics is Adobe After Effects, and it is often the primary software that designers must master to excel at motion graphics. Get in touch with our graphic designers to learn more. ",
    },
    {
      question: "Why are motion graphics useful?",
      answer:
        "Motion graphics can visually represent your information and content in an attractive way that helps the audience understand the content more effectively. As a result, it also helps them retain the information in a better way.",
    },
    {
      question: "What do motion graphics include?",
      answer:
        "Motion graphics is an animation type that involves converting static designs into pictures in motion. These animations are usually in 2D or 3D and sometimes have sounds too. Many companies use motion graphics to make their content more appealing and attractive to viewers. ",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <InnerBanner
        image="online-cinema.webp"
        bgColor="__gradientmg"
        subheading="Get Moving with Motion Graphics"
        heading="A professional motion graphic design company"
        cont="Step into a motion-packed world with the best motion graphic design company as we animate your brand into action. Here’s what our creative motion graphics entails:"
        point1="Logo Animation"
        point2="Tailored Animation"
        point3="Visual Effects (VFX)"
        point4="3D Modeling "
      />
      <ContentSec2
        subheading="Motion Graphic Design Company"
        heading="Adding Motion Magic to Your Brand's Narrative"
        cont="Our creative motion graphics designers at Future Avo animate ideas with creativity and visual impact, elevating your brand. From 3D animations to striking visuals and more, our motion graphics designers work on graphics that move, inspire, and captivate."
        img="mg-2.webp"
      />
      <ResponsiveSec
        headingtxt="Transform Ideas into Dynamic Visual Stories with Our Motion Graphics Designers"
        conttxt="At our company, we take pride in having a team of some of the most creative motion graphics designers, providing 3D animations, modeling, and captivating effects. "
        image="mg-1.webp"
        imgbottom="0"
        bgcolor="__gradientmg"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Bringing Your Vision in Motion"
        txtcolor="black"
        cont="Unleash your creativity with the help of our talented team of experts, who transform your concepts into spellbinding animations that fascinate and convert."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Save More, Spend Less"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="With Our Pricing Plans"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Say goodbye to skyrocketing prices as you get premium-quality
                  motion graphics at the best rates possible with our packages.
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
