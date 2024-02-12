"use client";
import React from "react";
import { useEffect, useState } from "react";

const GeneralForm = () => {
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
      <form
        onSubmit={handleSubmit}
        className="w-full"
        // action="/forms/process.php"
        // method="post"
        name="contactFormbanner"
        encType="multipart/form-data"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jon Don"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@mail.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="(123) 123-4567"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I am Looking For......"
                  rows={3}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
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
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button
            type="submit"
            name="send"
            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default GeneralForm;
