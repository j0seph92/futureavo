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
import ContentSec3 from "../Components/ContentSec3";
import FAQ from "../Components/FAQ";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  const reviewdata = [
    {
      cont: "“If you have any goals to expand your business and boost your online presence, then you need to get in touch with these guys. They're all about more work, less talk.”",
      name: " May Lucas",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I honestly didn't have much expectations when I hired Future Avo, but I was completely surprised by how worthwhile this has been. My company has achieved goals that I didn't even know existed.”",
      name: " Sarah Paul",
      designation: "E-commerce Manager",
    },
    {
      cont: "“Over the past two years, our firm has splurged a good amount of money on digital marketing, but the results weren't worth it. I've collaborated with Future Avo for 6 months, and I can already see the difference.”",
      name: "katty Victoria",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What are the forms of digital marketing?",
      answer:
        "Digital marketing is one of the most popular types of marketing, and many companies like Future Avo provide various digital marketing services. Some common services are search engine optimization, social media marketing, content marketing, pay per click marketing, etc.",
    },
    {
      question: "What are some top platforms for digital marketing?",
      answer:
        "There are various popular platforms for digital marketing that firms and individuals employ, such as Instagram, LinkedIn, Facebook, Snapchat, TikTok, Pinterest, etc. Besides these, other channels are being used for digital marketing. ",
    },
    {
      question: "Is there any platform that's best for digital marketing?",
      answer:
        "As mentioned, there are already various platforms that are utilized for digital marketing, and according to your business goals, you choose a channel for your efforts. All platforms have different target audiences and are suitable for different purposes. As a result, you'll have to consider your requirements for a platform to be best for you.",
    },
    {
      question: "How do you choose a digital marketing company?",
      answer:
        "Nowadays, there are plenty of companies providing digital marketing services to help businesses grow and prosper. As a result, deciding which company to choose can be challenging. The best way to make the right choice is by considering your requirements, the expertise of that company, pricing, etc. ",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="dm-1.webp"
        bgColor="__gradientdm"
        subheading="Best Digital Marketing Experts"
        heading="Hire Top Digital Marketing Company "
        cont="Engage, convert, and succeed—that's the motto at Future Avo. Are you looking for a reliable digital marketing company to jumpstart your digital dreams? Hire top digital marketing company to witness noticeable results and propel forward with data-driven marketing. Here's what we offer:"
        point1="SEO Content Marketing"
        point2="Social Media Marketing"
        point3="Pay Per Click Advertising"
        point4="Conversion Rate"
      />
      <ContentSec2
        subheading="Innovate Your Brand's Impact"
        heading="Custom-Built Digital Marketing Services for You"
        cont="Our digital marketing specialists at Future Avo create digital marketing campaigns that are completely tailored to help accomplish your unique ambitions. Achieve digital dreams with real results by teaming up with our digital marketing experts."
        img="dm-2.webp"
      />
      <ResponsiveSec
        headingtxt="Unleash the Power of Unmatched Digital Marketing Services "
        conttxt="Revolutionize your online presence with a creative digital marketing company like Future Avo. Get your free quote today!"
        image="dm-3.webp"
        imgbottom="0"
        bgcolor="__gradientBg2"
      />
      <ContentSec3 />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Digital Marketing Pricing Plans"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Don't delay; choose a suitable pricing plan"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Ready to put your brand at the forefront on digital platforms?
                  Our outstanding services and astonishing prices have got you
                  covered!
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
