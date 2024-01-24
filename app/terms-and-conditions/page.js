import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";

const page = () => {
  return (
    <>
      <section className="pt-40 pb-20 __gradientmc">
        <div className="container m-auto">
          <div className="flex">
            <div className="text-center basis-full">
              <h1 className="mb-2 text-4xl font-semibold leading-none text-white capitalize sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container m-auto">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="basis-full">
              <p className="text-base font-light text-black">
                These Terms and Conditions apply to the Future Avo website.
                Please carefully read these Terms and Conditions and then
                proceed.
                <strong>
                  By using the site, you consent to be bound by these Terms and
                  Conditions.
                </strong>
              </p>
              <br></br>
              <h3>
                <strong>Revision Policy</strong>
              </h3>
              <p className="text-base font-light text-black">
                The number of revisions depends on the package a client selects,
                and as per the package, you can avail as many revisions as
                required. As per our revision policy, clients aren’t liable to
                pay additional fees for revisions. Any modifications or
                alterations needed following the final product will be
                considered a new order and will incur separate charges.
              </p>
              <br></br>
              <h3>
                <strong>Refund Policy</strong>
              </h3>
              <p className="text-base font-light text-black">
                Future Avo’s refund policy will result in no reimbursement in
                the following cases:
              </p>
              <br></br>
              <ul className="text-base font-light text-black">
                <li>You’ve requested revisions.</li>
                <li>The initial draft/ concept has been approved.</li>
                <li>The policies have been violated.</li>
                <li>A complete alteration is requested.</li>
                <li>
                  The request for a refund after the specified period has been
                  exceeded.
                </li>
                <li>
                  If the reasons aren’t related to our services or company.
                </li>
                <li>
                  In cases where a client avails a service bundle and is
                  unsatisfied with any one of the services, the refund will only
                  be applicable to that particular service and not to the entire
                  bundle.
                </li>
                <li>
                  Refunds are not available to the customer after 15 days from
                  the date of purchase.
                </li>
                <li>
                  Under no circumstances are services such as social media, SEO,
                  domain registration, and web hosting eligible for refunds.
                </li>
                <li>
                  Refunds for websites will not be accepted after the client has
                  given their approval to the design and the website is sent to
                  be developed.
                </li>
              </ul>
              <p className="text-base font-light text-black">
                <strong>Please note: </strong>We possess the right to cancel the
                contract or reject the project whenever necessary. Once the
                refund is processed, you will not possess the right to use the
                property as it belongs solely to Future Avo.
              </p>
              <br></br>
              <h3>
                <strong>Claim Your Refund</strong>
              </h3>
              <p className="text-base font-light text-black">
                To claim your refund, you can avail one of the following
                options:
              </p>
              <ul className="text-base font-light text-black">
                <li>Give us a call.</li>
                <li>Start a live chat with us.</li>
                <li>Drop us an email.</li>
              </ul>
              <p className="text-base font-light text-black">
                As soon as our representatives receive the request, they’ll get
                back to you as soon as possible, and the process will begin.
              </p>
              <br></br>
              <h3>
                <strong>Quality Assurance Policy</strong>
              </h3>
              <p className="text-base font-light text-black">
                We go above and beyond to meet client requirements and fulfill
                their expectations. We conduct effective QA before forwarding
                deliverables.
              </p>
              <br></br>
              <h3>
                <strong>100% Satisfaction Guarantee</strong>
              </h3>
              <ul className="text-base font-light text-black">
                <li>
                  We offer unlimited revisions to ensure utmost client
                  satisfaction.
                </li>
                <li>
                  We strive to surpass expectations and work dedicatedly to
                  accomplish that.
                </li>
                <li>
                  Until clients are satisfied with the result, we will continue
                  providing revisions (the number of revisions will depend on
                  your package).
                </li>
              </ul>
              <br></br>
              <h3>
                <strong>Customer Support</strong>
              </h3>
              <p className="text-base font-light text-black">
                Our representatives are here to assist clients 24/7 and are
                available to cater to concerns and queries all around the clock.
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
