"use client";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { globalPhone, globalEmail } from "./Global";
import { useEffect, useState } from "react";

const FloatingIcons = ({ btnColor }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
  const handleToggle = (e) => {
    e.preventDefault();
    // Execute the Tawk_API.toggle() function
    Tawk_API.toggle();
  };
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
      <a
        className={`cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] ${
          btnColor ? btnColor : "bg-[#0F2847]"
        } fixed top-[25%] right-0 z-50`}
        href="javscript:;"
        onClick={handleToggle}
      >
        <IoChatbubbles className="block text-3xl font-semibold text-white" />
        <span className="block text-lg font-semibold text-white">
          Start Live Chat
        </span>
      </a>
      <Link
        className={`cursor-pointer hidden lg:flex items-center rounded-tl-[50px] rounded-bl-[50px] py-2 px-4 gap-4 translate-x-[75%] hover:translate-x-[1%] ${
          btnColor ? btnColor : "bg-[#0F2847]"
        } fixed top-[35%] right-0 z-50`}
        href={`tel:${globalPhone()}`}
      >
        <FaPhone className="block text-3xl font-semibold text-white" />
        <span className="text-lg font-semibold text-white">
          {globalPhone()}
        </span>
      </Link>
      <div className="cursor-pointer hidden lg:flex items-center translate-x-[100%] hover:translate-x-[1%] fixed top-[45%] right-0 z-50">
        <span
          className={`text-white font-normal text-lg ${
            btnColor ? btnColor : "bg-[#0F2847]"
          } tracking-wide rotate-[-90deg] absolute top-[25.6%] left-[-116px] rounded-tr-[30px] rounded-tl-[30px] py-2 px-3 `}
        >
          Get Free Strategy
        </span>
        <form
          className="w-[400px] p-4 bg-black"
          onSubmit={handleSubmit}
          autoComplete="off"
          // action="/forms/process.php"
          method="post"
          name="contactFormbanner"
          encType="multipart/form-data"
        >
          <div className="mb-2">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                className="peer w-full h-full text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white border-2 focus:border-2 border-t-transparent focus:border-t-transparent bg-[#06050538] text-sm px-3 py-3 rounded-md text-white border-white focus:border-white"
                placeholder=" "
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                Name{" "}
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                className="peer w-full h-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white border-2 focus:border-2 border-t-transparent focus:border-t-transparent bg-[#06050538] text-sm px-3 py-3 rounded-md text-white border-white focus:border-white"
                placeholder=" "
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                Number
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                className="peer w-full h-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white border-2 focus:border-2 border-t-transparent focus:border-t-transparent bg-[#06050538] text-sm px-3 py-3 rounded-md text-white border-white focus:border-white"
                placeholder=" "
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                Email
              </label>
            </div>
          </div>
          <div className="mb-2">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                className="peer w-full h-full  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border-2 placeholder-shown:border-white placeholder-shown:border-t-white border-2 focus:border-2 border-t-transparent focus:border-t-transparent bg-[#06050538] text-sm px-3 py-3 rounded-md text-white border-white focus:border-white"
                placeholder=" "
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t-2 peer-focus:before:border-t-2 before:border-l-2 peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t-2 peer-focus:after:border-t-2 after:border-r-2 peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] !text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
                Introduction about your Idea or Business{" "}
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
                <input type="hidden" name="landing_page" value={currentUrl} />
              </div>
            </div>
          </div>
          <input
            className="cursor-pointer  text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-[#A497F5] w-full text-white hover:bg-[#C165CB]"
            type="submit"
            name="send"
          />
        </form>
      </div>
    </>
  );
};

export default FloatingIcons;
