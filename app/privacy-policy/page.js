import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  return (
    <>
      <section className="pt-40 pb-20 __gradientill">
        <div className="container m-auto">
          <div className="flex">
            <div className="text-center basis-full">
              <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container m-auto">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="basis-full">
              <p className="text-base font-normal text-black">
                Future Avo is dedicated to keeping the personal information and
                data of clients safe and secure. Any information we collect is
                solely protected and used for appropriate reasons. By no means
                shall we share your information without consent to individuals
                outside the organization.
              </p>
              <br></br>
              <h3>
                <strong>Information Collection</strong>
              </h3>
              <p className="text-base font-normal text-black">
                Any information we collect will be done via Email, Contact Us,
                Order Form, etc., and abides by the Privacy Policy. Information
                obtained will not be disclosed or sold to third-party websites
                unless in the following cases:
              </p>
              <ul className="text-base font-normal text-black">
                <li>If mandatory by law</li>
                <li>If necessary for legal proceedings</li>
                <li>To protect our rights</li>
              </ul>
              <p className="text-base font-normal text-black">
                Generally, we collect the following information:
              </p>
              <ul className="text-base font-normal text-black">
                <li>Full Name</li>
                <li>Contact Number</li>
                <li>Email Address</li>
                <li>Service Needed</li>
                <li>Additional Requirements</li>
              </ul>
              <br></br>
              <h3>
                <strong>Usage Of Collected Information</strong>
              </h3>
              <p className="text-base font-normal text-black">
                Future Avo collects information for seamless processes and to
                deliver quality services effectively. As a result, this
                information is utilized for purposes specified in this Privacy
                Policy.
              </p>
              <br></br>
              <h3>
                <strong>Payment and Data Protection</strong>
              </h3>
              <p className="text-base font-normal text-black">
                To employ effective methods to secure payments, we firm provide
                various payment options that are protected. Further, we opt for
                reliable browser encryption and utilize secure servers to store
                data. While the risk prevails, we take necessary precautions to
                safeguard data and payments. To learn more about our data
                collection process, including usage and amendments, feel free to
                contact our representatives at the provided contact information.
              </p>
              <br></br>
              <h3>
                <strong>Amendments</strong>
              </h3>
              <p className="text-base font-normal text-black">
                Future Avo may modify the Privacy Policy with time to comply
                with the laws when required. Therefore, we advise visitors to
                continue visiting our website to review any changes in policies.
                In case of any queries or concerns, reach out to us through the
                details mentioned below:
              </p>
            </div>
          </div>
        </div>
      </section>
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
};

export default page;
