import React from "react";
import PreFooter from "../Components/PreFooter";
import InnerBanner from "../Components/InnerBanner";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  return (
    <>
      <InnerBanner
        image="ss-bg.webp"
        bgColor="__gradientBg3"
        subheading="FutureAVo"
        heading="THANK YOU"
        cont="We have received your online inquiry and forwarded your information to our support team who will be in touch with you shortly. We look forward to working with you."
        showpoints="hide"
      />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
