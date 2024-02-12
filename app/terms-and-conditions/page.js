import React from "react";
import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";
import { globalPhone, globalEmail } from "../Components/Global";

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
              <p className="text-base font-normal text-black">
                These Terms and Conditions are applicable to our website
                &ldquo;Futureavo.com.&rdquo; By using the site, you consent to
                these Terms and Conditions.<strong>&nbsp;</strong>If you do not
                agree to these Terms, refrain from proceeding. Besides these
                terms, you are bound to abide by general terms and conditions,
                including terms of third-party applications that are used to
                access services provided by the website.&nbsp;
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Modification to Terms and Conditions</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                The Website may change these Terms at any time and without
                notice. If these terms are revised, the most recent version will
                be available on the website along with the amendment date. You
                are solely responsible for staying informed about any
                modifications to these Terms. You will be considered to have
                read, understood, and consented to all applicable Terms at that
                time if you continue to use the Website after any modifications
                to the Terms go into effect.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Permitted Use</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                You may use the service offered via the Website only if you
                comply with these Terms. However, you may only use the Website
                to purchase content, design, software, and marketing services in
                agreement with the Terms &amp; Conditions and Policies.&nbsp;
              </p>

              <br></br>
              <p className="text-base font-normal text-black">
                By using the Website or any software/hardware associated with
                it, you automatically consent that you will not participate in
                any activities or submit any information or material that
                disrupts or interferes with the Website or that is intended to
                do so.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Website Use &amp; Services Offered</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Future Avo&rsquo;s website is available for any individual for
                personal and professional usage. In case any user violates any
                policy or Terms &amp; Conditions, we reserve the right to
                modify, suspend, or terminate any account or website access.
                Having said that, if a user fails to abide by the post-sale
                terms, we may suspend or terminate access to our services and
                website.&nbsp;
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Indemnity &amp; Liability</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                The website explicitly disclaims all liability for losses or
                damages of any kind, including consequential, compensatory,
                actual, punitive, special, incidental. Moreover, the website
                disclaims all liability for any loss of business opportunity or
                other losses that you may incur with usage of the website.
              </p>

              <br></br>
              <p className="text-base font-normal text-black">
                By using this website, you consent to defend and hold Future
                Avo&rsquo;s executives, directors, sponsors, business partners,
                advisors, consultants, or anyone affiliated with our firm from
                any claims or charges made by any third party regarding:
              </p>
              <br></br>
              <ul className="text-base font-normal text-black list-disc">
                <li>Violating these terms.</li>
                <li>Misusing this website.</li>
                <li>Violation of any law.</li>
              </ul>

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
