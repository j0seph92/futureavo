"use client";
import React from "react";
import PreFooter from "../Components/PreFooter";
import InnerBanner from "../Components/InnerBanner";
import HeadingMain from "../Components/HeadingMain";
import FloatingIcons from "../Components/FloatingIcons";
import { useEffect, useState } from "react";

const page = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    const fetchCurrentUrl = async () => {
      try {
        // You can use window.location.href to get the current URL in the browser
        const url = window.location.href;
        setCurrentUrl(url);
      } catch (error) {
        console.error("Error fetching current URL:", error);
      }
    };

    fetchCurrentUrl();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  // const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const [mySubject, setMySubject] = useState();

  const handleChange2 = (event) => {
    setMySubject(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("/api/send-email", formData);
  //     if (response.data.success) {
  //       alert("Email sent successfully!");
  //       window.location.replace("/thank-you");
  //     } else {
  //       console.error("Error:", error);
  //       alert("Failed to send email. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ecf39167-c233-4f34-9139-420c494f3a13");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      // console.log(result);
      window.location.replace("/thank-you");
    }
  }

  return (
    <>
      <InnerBanner
        image="cont-img.webp"
        bgColor="__gradientseo"
        subheading="Top Web Designers"
        heading="Let's Work Together for a Brilliant Digital Future"
        cont="At Future Avo, we're here to lead you down the road to success. From website design to logo design to SEO and more, call us for quality that sets the mark."
        point1="Custom Logo Design"
        point2="Website Design"
        point3="Website Development"
        point4="Digital Marketing"
      />
      <section id="contsec">
        <div className="bg-[#F5F5F5]">
          <div className="container relative py-10 md:py-20">
            <div className="flex">
              <div className="text-center basis-full lg:basis-8/12 lg:text-left">
                <HeadingMain
                  txt="Schedule a Consultation with Us Whenever You're Ready"
                  extclassName="text-left"
                />
                <p className="mb-10 text-base font-normal text-black">
                  We understand you may not have sufficient time to communicate
                  with us, which is why we're available round the clock. Let's
                  get in touch when you're free.
                </p>
                <div className="flex items-center justify-center">
                  <form
                    onSubmit={handleSubmit}
                    className="w-full"
                    // action="/forms/process.php"
                    // method="post"
                    name="contactFormbanner"
                    encType="multipart/form-data"
                  >
                    <div className="flex flex-wrap gap-5 md:flex-nowrap">
                      <div className="flex flex-col space-y-6 basis-full md:basis-6/12 lg:basis-5/12 xl:basis-6/12">
                        <div>
                          <div className="relative w-full min-w-[200px] h-11">
                            <input
                              className="w-full h-full px-3 py-3 font-sans text-sm font-normal text-black transition-all bg-transparent border border-black rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:border-black"
                              placeholder=" "
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-black peer-focus:text-black before:border-black peer-focus:before:!border-black after:border-black peer-focus:after:!border-black">
                              Name{" "}
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="relative w-full min-w-[200px] h-11">
                            <input
                              className="w-full h-full px-3 py-3 font-sans text-sm font-normal text-black transition-all bg-transparent border border-black rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:border-black"
                              placeholder=" "
                              type="tel"
                              name="phone_number"
                              id=" phone"
                              value={formData.phone_number}
                              onChange={handleChange}
                              required
                            />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-black peer-focus:text-black before:border-black peer-focus:before:!border-black after:border-black peer-focus:after:!border-black">
                              Telephone Number{" "}
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="relative w-full min-w-[200px] h-11">
                            <input
                              className="w-full h-full px-3 py-3 font-sans text-sm font-normal text-black transition-all bg-transparent border border-black rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:border-black"
                              placeholder=" "
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-black peer-focus:text-black before:border-black peer-focus:before:!border-black after:border-black peer-focus:after:!border-black">
                              Email{" "}
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="relative inline-block w-full">
                            <select
                              className="w-full h-full px-3 py-3 font-sans text-sm font-normal text-black transition-all bg-transparent border border-black rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:border-black"
                              name="mySubject"
                              value={formData.mySubject}
                              onChange={handleChange2}
                            >
                              <option value="">You're Interested in</option>
                              <option value="SEO">SEO</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Social Media Management">
                                Social Media Management
                              </option>
                              <option value="Reputation Management">
                                Reputation Management
                              </option>
                              <option value="Content Marketing">
                                Content Marketing
                              </option>
                              <option value="Design Development">
                                Design Development
                              </option>
                            </select>
                          </div>
                        </div>
                        <input
                          className="text-sm sm:text-lg font-medium w-max pr-8 pl-8 h-10 rounded-md bg-[#a200ff] text-white hover:bg-black hidden md:block cursor-pointer"
                          type="submit"
                          name="send"
                        />
                      </div>
                      <div className="basis-full md:basis-6/12 lg:basis-5/12 xl:basis-6/12">
                        <div className="relative w-full min-w-[200px]">
                          <textarea
                            id=""
                            rows="11"
                            name="message"
                            className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-3 rounded-md border-black focus:border-black text-black md:h-full"
                            placeholder=""
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-black peer-focus:black before:border-black peer-focus:before:border-black after:border-black peer-focus:after:border-black">
                            leave your message
                          </label>
                          <div className="ip2locfields d-none">
                            <input
                              type="hidden"
                              name="ip2loc_ip"
                              value={formData.ip2loc_ip}
                              className="ip2loc_ip"
                            />
                            <input
                              type="hidden"
                              name="ip2loc_isp"
                              value={formData.ip2loc_isp}
                              className="ip2loc_isp"
                            />
                            <input
                              type="hidden"
                              name="ip2loc_org"
                              value={formData.ip2loc_org}
                              className="ip2loc_org"
                            />
                            <input
                              type="hidden"
                              name="ip2loc_country"
                              value={formData.ip2loc_country}
                              className="ip2loc_country"
                            />
                            <input
                              type="hidden"
                              name="ip2loc_region"
                              value={formData.ip2loc_region}
                              className="ip2loc_region"
                            />
                            <input
                              type="hidden"
                              name="ip2loc_city"
                              value={formData.ip2loc_city}
                              className="ip2loc_city"
                            />
                            <input
                              type="hidden"
                              name="landing_page"
                              value={currentUrl}
                            />
                          </div>
                        </div>
                        <input
                          className="text-sm sm:text-lg font-medium w-max pr-8 pl-8 h-10 rounded-md bg-[#0F2847] text-white hover:bg-black block md:hidden mt-3 cursor-pointer"
                          type="submit"
                          name="send"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                alt="Contact Girl"
                loading="lazy"
                width="413"
                height="600"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/media/beautiful-curly-girl-pointing-finger-contact.webp"
              />
            </div>
          </div>
        </div>
      </section>
      <PreFooter />

      <FloatingIcons btnColor="bg-[#a200ff]" />
    </>
  );
};

export default page;
