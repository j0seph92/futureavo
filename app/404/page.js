import React from "react";
import PreFooter from "../Components/PreFooter";
import InnerBanner from "../Components/InnerBanner";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  return (
    <>
      <InnerBanner
        image="wd-1.webp"
        bgColor="__gradientBg3"
        subheading="FutureAVo"
        heading="404"
        cont="Sorry, the page you were looking for was not found."
        showpoints="hide"
      />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
