import React from "react";
import HeadingMain from "./HeadingMain";

const Portfolio = ({
  bgcolor,
  heading,
  cont,
  imageFiles,
  imageFiles2,
  txtcolor,
}) => {
  return (
    <>
      <section>
        <div className={`bg-[${bgcolor}] py-10 md:py-20`}>
          <div className="container">
            <div className="flex">
              <div className="basis-full">
                <HeadingMain
                  txt={heading}
                  extclass={`text-center  ${
                    txtcolor === "black" ? "text-black" : "text-white"
                  }`}
                />
                <p
                  className={`text-base text-center font-normal mb-10 ${
                    txtcolor === "black" ? "text-black" : "text-white"
                  }`}
                >
                  {cont}
                </p>
                <div className="flex flex-wrap gap-x-5 md:flex-nowrap">
                  <div className="basis-full md:basis-6/12">
                    {imageFiles.map((filename, index) => (
                      <div
                        key={index}
                        className={`group/image hover:cursor-pointer relative z-10  ${
                          index === 0
                            ? ""
                            : index === 1
                            ? "mt-5 mb-5"
                            : index === 2
                            ? "mb-5 md:mb-0"
                            : ""
                        }`}
                      >
                        <img
                          alt={`FutureAVO - Porfolios ${index + 1}`}
                          loading="lazy"
                          width="812"
                          height="410"
                          decoding="async"
                          data-nimg="1"
                          className="h-[200px] xl:h-auto object-cover rounded-xl"
                          src={`/media/portfolio/${filename}`}
                        />
                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl"></div>
                      </div>
                    ))}
                  </div>
                  <div className="basis-full md:basis-6/12">
                    {imageFiles2.map((filename, index) => (
                      <div
                        key={index + 1}
                        className={`group/image hover:cursor-pointer relative z-10  ${
                          index === 0 ? "mb-5" : index === 1 ? "" : ""
                        }`}
                      >
                        <img
                          alt={`FutureAVO - Porfolios ${index + 1}`}
                          loading="lazy"
                          width="812"
                          height={` ${index === 0 ? 610 : 844}`}
                          decoding="async"
                          data-nimg="1"
                          className="h-[360px] xl:h-auto object-cover rounded-xl"
                          src={`/media/portfolio/${filename}`}
                        />
                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
