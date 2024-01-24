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
      cont: "“Your team has genuinely made a huge impact on my brand. I remember when we started working together, my company was at its breaking point. However, within a few months, things got better.” ”",
      name: " May Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“If SEO is done right, the results will amaze you, but the wrong practices can damage your company. Unfortunately, that’s what happened with us until we teamed up with Future Avo.”",
      name: " Sarah Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“There’s a reason why they call themselves the experts. They have proved themselves at every step of the process. Besides SEO services, I’ve also been availing their design services, and I’m super satisfied.””",
      name: "katty Johnson",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "How many types of SEO are there?",
      answer: [
        "SEO can be categorized into four types, and most companies utilize all or some of them. The types are as follows:",
        <br></br>,
        <br></br>,
        "•	Technical SEO ",
        <br></br>,
        "•	Local SEO",
        <br></br>,
        "•	On-page SEO",
        <br></br>,
        "•	Off-page SEO",
        <br></br>,
        <br></br>,
        "If you’re interested in exceptional SEO services, feel free to leave us a text or call. ",
      ],
    },
    {
      question: "Can I manage SEO alone?",
      answer:
        "There are actually no restrictions or terms and conditions that prevent companies from managing search engine optimization on their own. However, we recommend working with someone who knows what they’re doing. SEO can make or break your company, so it’s best not to take risks with it. ",
    },
    {
      question: "How do you optimize a website? ",
      answer:
        "Optimizing a website can entail following one or a combination of a few practices. For instance, at Future Avo, our SEO specialists use long-tail keywords for maximum impact, producing unique, relevant, and informational content, utilizing keywords effectively, etc.",
    },
    {
      question: "What do SEO services entail?",
      answer:
        "SEO services entail providing everything from professional guidance to top-notch SEO services to optimize your website, content, and more. These services help companies and individuals boost their rank on search engine rankings. Are you considering availing these services? Drop us a text to learn more. ",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <InnerBanner
        image="seo-1.webp"
        bgColor="__gradientseo"
        subheading="Professional SEO Company"
        heading="work with our professional SEO company"
        cont="Experience the change that doesn’t just help your brand rank higher but also helps outrank the competition by hiring an SEO company. At Future Avo, we employ effective techniques to boost traffic, assisting you in getting SEO-savvy. Here’s what we offer:"
        point1="Research & Analysis"
        point2="On-Page & Off-Page"
        point3="Technical SEO Audit"
        point4="E-Commerce SEO"
      />
      <ContentSec2
        subheading="SEO Services Company"
        heading="No Shortcuts: Only High Rankings with the Top SEO Agency"
        cont="From hidden pages to top ranks, SEO is an art we’ve mastered. Invest in a proven formula for success with our SEO agency. Hire us today!"
        img="seo-2.webp"
      />
      <ResponsiveSec
        headingtxt="Dominate the SERPs with Our SEO Consultation"
        conttxt="Get found, get traffic, get results—that’s what our SEO consultation and services look like. Schedule a free consultation today and go big with SEO."
        image="seo-3.webp"
        imgbottom="0"
        bgcolor="__gradientseo"
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="SEO Packages"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Keep the Profits Rolling in with Our Affordable SEO Services"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Are you on the lookout for affordable SEO services? We’re just
                  what you’re looking for, as Future Avo delivers incomparable
                  services at superb rates.
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
