"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import HeadingMain from "./HeadingMain";

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <section>
        <div className="bg-[#EBEBEB] overflow-hidden pt-10 lg:pt-16 xl:pt-20">
          <div className="container">
            <div className="block lg:flex">
              <div className="items-end justify-center hidden px-10 basis-full lg:basis-2/4 lg:block">
                <img
                  alt="reviewsIllustration"
                  loading="lazy"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain w-auto h-auto"
                  src="/media/beautiful-curly-girl-pointing-finger.webp"
                />
              </div>
              <div className="flex flex-col justify-center overflow-hidden basis-full lg:basis-2/4">
                <HeadingMain
                  txt="Frequently Asked Questions"
                  extclass="text-center lg:text-left"
                />
                <div className="py-8 faq">
                  {faqData.map((item, index) => (
                    <div
                      className={`faq-item border-b-2 border-gray-300 py-4 transition-all ${
                        index === activeIndex ? " border-blue-900" : ""
                      }`}
                      key={index}
                    >
                      <button
                        className={`faq-question outline-none py-4 flex items-center justify-between ${
                          index === activeIndex
                            ? "text-cyan-500"
                            : "text-gray-800"
                        }`}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="text-lg font-semibold text-left">
                          {item.question}
                        </span>
                        <span className="ml-2">
                          <FaArrowRight
                            className={`w-5 h-5 transition-transform transform ${
                              index === activeIndex ? "rotate-90" : "rotate-0"
                            }`}
                          />
                        </span>
                      </button>
                      {index === activeIndex && (
                        <p className="mt-2 text-gray-800 faq-answer">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
