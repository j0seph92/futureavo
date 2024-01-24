import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pt-40 pb-20 __gradientill">
        <div className="container m-auto">
          <div className="flex">
            <div className="text-center basis-full">
              <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat">
                Our Blogs
              </h1>
              <p className="text-base text-[#fff] font-normal text-center mb-10 ">
                Welcome to an informative hub where you can gain valuable
                insights. Browse through our blogs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container m-auto">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            <div className="basis-full lg:basis-4/12 ">
              <Link href="/blog/on-device-generative-ai-what-app-developers-need-to-know">
                <div className="relative p-5 text-center shadow-md __gradientpur rounded-xl">
                  <div className="m-auto">
                    <img
                      src="/media/smmservices.webp"
                      alt="icon"
                      className="object-contain w-full img-fluid lazy h-96 lg:h-auto lg:w-full lg:object-cover"
                      width="550"
                      height="250"
                    ></img>
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl xl:text-2xl text-white font-semibold capitalize mt-5  leading-none mb-3`}
                  >
                    On-Device Generative AI: What App Developers Need to Know?
                  </h3>
                  <p className="text-white">
                    Innovation and technology have altered the future,
                    especially since the introduction of emerging technologies{" "}
                    <strong>Read More...</strong>
                  </p>
                </div>
              </Link>
            </div>
            <div className="basis-full lg:basis-4/12 ">
              <Link href="/blog/the-ultimate-guide-to-website-development">
                <div className="relative p-5 text-center shadow-md __gradientill rounded-xl">
                  <div className="m-auto">
                    <img
                      src="/media/webservices.webp"
                      alt="icon"
                      className="object-contain w-full img-fluid lazy h-96 lg:h-auto lg:w-full lg:object-cover"
                      width="550"
                      height="250"
                    ></img>
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl xl:text-2xl text-white font-semibold capitalize mt-5  leading-none mb-3`}
                  >
                    The Ultimate Guide to Website Development
                  </h3>
                  <p className="text-white">
                    Businesses, regardless of the industry, are constantly
                    looking for effective and innovative ways to establish and
                    maintain an online presence. <strong>Read More...</strong>
                  </p>
                </div>
              </Link>
            </div>
            <div className="basis-full lg:basis-4/12 ">
              <Link href="/blog/top-6-programming-languages">
                <div className="relative p-5 text-center shadow-md __gradientss rounded-xl">
                  <div className="m-auto">
                    <img
                      src="/media/seoservices.webp"
                      alt="icon"
                      className="object-contain w-full img-fluid lazy h-96 lg:h-auto lg:w-full lg:object-cover"
                      width="550"
                      height="250"
                    ></img>
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl xl:text-2xl text-white font-semibold capitalize mt-5  leading-none mb-3`}
                  >
                    Top 6 Programming Languages
                  </h3>
                  <p className="text-white">
                    Over the past years, programming languages have transformed
                    the world we live in. From websites to applications, all of
                    them use diverse programming languages to be created.{" "}
                    <strong>Read More...</strong>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
