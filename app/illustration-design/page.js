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
    "illustration-gal-one.webp",
    "illustration-gal-two.webp",
    "illustration-gal-three.webp",
  ];
  const imageFiles2 = [
    "illustration-gal-four.webp",
    "illustration-gal-five.webp",
  ];
  const reviewdata = [
    {
      cont: "“Incredible illustrations that brought our vision to life. Future Avo's professionalism, creativity, and on-time delivery were outstanding, and I'll surely be availing other services, too. Thanks a lot, guys, really appreciate it.”",

      name: " Lillian Johnson",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I got in touch with Future Avo a couple of months ago for their illustration design services, and these few months have been super smooth. Their team offers exceptional services without any hassles.”",

      name: " Stephanie Ruth",
      designation: "E-commerce Manager",
    },
    {
      cont: "“I needed some illustrations for marketing my company, and a friend recommended Future Avo to me, and they exceeded my expectations. Their professional illustrators showed me a couple of designs, ensuring I was satisfied”",

      name: "Mary Wanda",
      designation: "E-commerce Manager",
    },
  ];
  const faqData = [
    {
      question: "What is illustration design?",
      answer:
        "Illustration design is the art of producing visual representations to convey an idea or message or to tell a story rather than using just words. This is done using different types of styles and techniques. Sometimes, illustrations are paired with words for maximum impact. ",
    },
    {
      question:
        "How long does it take to complete an illustration design project?",
      answer:
        "The timeline of a project depends entirely on the complexity of the project, along with the illustrator's expertise. If they're skilled, they are likely to handle all sorts of projects with ease. It's best to discuss the timeline before you begin working.",
    },
    {
      question: "How much do illustration design services typically cost?",
      answer:
        "The cost of illustration design services depends on several factors, such as the complexity of your design, the company's pricing plans, the illustrator's package, etc. The professional's experience also plays a role in the costs. ",
    },
    {
      question: "Can I request revisions for the illustrations?",
      answer:
        "At Future Avo, we give our all to ensure our clients are content with all of our services. As a result, we go above and beyond to make things smooth and easy for them, which is why we offer unlimited revisions to cater to that. ",
    },
    // Add more FAQ items as needed
  ];
  return (
    <>
      <InnerBanner
        image="ill-1.webp"
        bgColor="__gradientill"
        subheading="Best Illustration Designers"
        heading="Work with the Top Illustration Design Company"
        cont="Exhausted from collaborating with illustration agencies that aren’t up to the mark? Say goodbye to horrible experiences with the top illustration design company. We boast a team of the best illustration designers, specializing in creative illustrations, custom character designs, gaming illustrations, etc. "
        point1="Innovative Artistry"
        point2="Customized Designs"
        point3="Unlimited Revisions"
        point4="Timely Deliverables"
      />
      <ContentSec2
        subheading="Custom Illustration Agency"
        heading="Professional Illustrators to Ignite Your Brand with Eye-Catching Designs"
        cont="If you're looking for an illustration company that has a highly qualified team, Future Avo is what you need. Whether it's gaming illustrations and more, we've got you."
        img="ill-2.webp"
      />
      <ResponsiveSec
        headingtxt="Illustrate Your Imagination, One Stroke at a Time"
        conttxt="Future Avo is home to creative minds and exceptionally talented illustrators who know just how to grab the audience's attention. Get in touch with us right away to hire illustrators. "
        image="ill-4.webp"
        imgbottom="0"
        bgcolor="bg-black"
        extclass="illsec2"
      />
      <Portfolio
        bgcolor="#ebebeb"
        heading="Our Illustration Designs Speak Louder Than Words"
        txtcolor="black"
        cont="Our illustration agency's artistic professionals work alongside our clients to impeccably reflect a brand's values while making sure we meet their unique requirements."
        imageFiles={imageFiles}
        imageFiles2={imageFiles2}
      />
      {/* <section>
        <div className="bg-[#fff] overflow-hidden py-10 lg:py-16 xl:py-20">
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <SubHeading
                  txt="Illustration Design Pricing Plans"
                  extclass="text-center"
                  color="#0f2847"
                />
                <HeadingMain
                  txt="Don't Be Slow—Our Prices Are Low"
                  extclass="text-center"
                />
                <p className="text-base text-[#202020] font-normal text-center mb-10">
                  Are you looking for professional illustrators to create
                  character designs and more at incredible prices? We're the
                  right choice!
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
      <FloatingIcons btnColor="bg-[#7A006E]" />
    </>
  );
};

export default page;
