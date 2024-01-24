import React from "react";
import SubHeading from "./SubHeading";
import HeadingMain from "./HeadingMain";

const ContentSec3 = () => {
  return (
    <>
      <section>
        <div className="bg-[#EBEBEB] py-10 lg:py-20">
          <div className="container">
            <div className="text-center mb-5 lg:mb-10">
              <SubHeading
                txt="Digital Marketing Experts"
                extclassName="text-center"
                color="#0f2847"
              />
              <HeadingMain
                txt="Who Craft Tomorrow, Digitally Today"
                extclassName="text-center"
              />
            </div>
            <div className="flex lg:gap-2 xl:gap-4 flex-wrap lg:flex-nowrap justify-between gap-y-4">
              <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                <div className="text-center">
                  <p className="text-black text-base font-light">
                    With a team of dedicated SEO specialists, we optimize your
                    website to rank higher, leading to getting noticed by the
                    audience and securing higher traffic.
                  </p>
                  <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                  <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">
                    Search Engine Optimization
                  </h3>
                  <img
                    alt="one"
                    loading="lazy"
                    width="120"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block"
                    src="/media/mc-one.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                <div className="text-center">
                  <img
                    alt="two"
                    loading="lazy"
                    width="120"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block"
                    src="/media/mc-three.png"
                    style={{ color: "transparent" }}
                  />
                  <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">
                    Social Media Marketing
                  </h3>
                  <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                  <p className="text-black text-base font-light">
                    Our marketing professionals bridge the gap between your
                    brand and the audience, sparking engagement and recognition
                    with the help of effective social media strategies.
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                <div className="text-center">
                  <p className="text-black text-base font-light">
                    We take pride in boasting a team of wordsmiths who craft
                    compelling narratives that resonate with the target
                    audience, effectively mesmerizing them. Get started today.
                  </p>
                  <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                  <h3 className="font-semibold text-lg xl:text-lg text-black mb-3">
                    Content Marketing
                  </h3>
                  <img
                    alt="three"
                    loading="lazy"
                    width="120"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block"
                    src="/media/mc-two.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="basis-full md:basis-[49%] lg:basis-1/4 bg-white shadow-md p-4 lg:p-2 xl:p-4 rounded-xl">
                <div className="text-center">
                  <img
                    alt="four"
                    loading="lazy"
                    width="120"
                    height="120"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block"
                    src="/media/mc-four.png"
                    style={{ color: "transparent" }}
                  />
                  <h3 className="font-semibold text-lg xl:text-lg text-black mt-3">
                    Pay Per Click Advertising
                  </h3>
                  <span className="block h-[1px] bg-[#707070] w-[80%] m-auto mt-3 mb-3"></span>
                  <p className="text-black text-base font-light">
                    We take your brand to the next level across digital
                    platforms through PPC advertising. From noticeable results
                    to cost-effective solutions, we prioritize your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSec3;
