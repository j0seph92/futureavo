import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";
import { globalPhone, globalEmail } from "../Components/Global";

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
              <h3>
                <strong>
                  <span>Privacy Policy&nbsp;</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Future Avo is dedicated to keeping the personal information and
                data of clients safe and secure. Any information we collect is
                solely protected and used for appropriate reasons. By no means
                shall we share your information without consent to individuals
                outside the organization.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Information Collection</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Any information we collect will be done via Email, Contact Us,
                Order Form, etc., and abides by the Privacy Policy. Information
                obtained will not be disclosed or sold to third-party websites
                unless in the following cases:
              </p>
              <br></br>
              <ul className="text-base font-normal text-black list-disc">
                <li>If mandatory by law</li>
                <li>If necessary for legal proceedings</li>
                <li>To protect our rights</li>
              </ul>
              <br></br>

              <p className="text-base font-normal text-black">
                Generally, we collect the following information:
              </p>
              <br></br>
              <ul className="text-base font-normal text-black list-disc">
                <li>Full Name</li>
                <li>Contact Number</li>
                <li>Email Address</li>
                <li>Service Needed</li>
                <li>Payment and card details</li>
                <li>
                  Any information that can be of value for the website.&nbsp;
                </li>
              </ul>
              <br></br>
              <h3>
                <strong>
                  <span>Authorization to Share Information</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                By using and visiting this website, users agree to the terms of
                data collection, maintenance, usage, and disclosure as outlined
                in our policy. In addition, they provide our website with an
                unrestricted right to collect, retain, and use data, including
                personal information.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>No Warranties or Guarantees</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                As per the policy, the website will store, maintain, and utilize
                personal data and information at various locations, including
                backups. Users agree that Future Avo and anyone associated with
                it, executives, directors, sponsors, business partners,
                advisors, consultants, etc., shall not be liable in any way if
                data or personal information is leaked, distributed, stolen,
                hacked, or misused.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Payment and Data Protection</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                To employ effective methods to secure payments, the firm
                provides various protected options. Further, we opt for reliable
                browser encryption and utilize secure servers to store data.
                While the risk prevails, we take necessary precautions to
                safeguard data and payments.&nbsp;
              </p>
              <br></br>
              <p className="text-base font-normal text-black">
                To learn more about our data collection process, including usage
                and amendments, feel free to contact our representatives at the
                provided contact information.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Amendments</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Future Avo may modify the Privacy Policy with time to comply
                with the laws when required. Therefore, we advise visitors to
                continue visiting our website to review any changes in policies
                <span>.</span>
              </p>
              <br></br>
              <p className="text-base font-normal text-black">
                In case of any queries or concerns, reach out to us through the
                details mentioned below:
              </p>
              <br></br>
              <p className="text-base font-normal text-black">
                <strong>Phone Number:</strong> {globalPhone()} - Toll Free
                Number
              </p>
              <br></br>
              <p className="text-base font-normal text-black">
                <strong>Email:</strong> {globalEmail()}
              </p>
              <br></br>
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
