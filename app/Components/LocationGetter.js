"use client";
import { useEffect } from "react";
import axios from "axios";

const LocationGetter = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ipwhois.app/json/");
        const data = response.data;

        if (data) {
          // You can access the DOM using React Refs
          const ipInput = document.querySelector("input[name=ip2loc_ip]");
          const ispInput = document.querySelector("input[name=ip2loc_isp]");
          const orgInput = document.querySelector("input[name=ip2loc_org]");
          const countryInput = document.querySelector(
            "input[name=ip2loc_country]"
          );
          const regionInput = document.querySelector(
            "input[name=ip2loc_region]"
          );
          const cityInput = document.querySelector("input[name=ip2loc_city]");

          // Set values in the inputs
          if (ipInput) ipInput.value = data.ip;
          if (ispInput) ispInput.value = data.isp;
          if (orgInput) orgInput.value = data.org;
          if (countryInput) countryInput.value = data.country;
          if (regionInput) regionInput.value = data.region;
          if (cityInput) cityInput.value = data.city;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return <div></div>;
};

export default LocationGetter;
