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
                Refund Policy
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
                At Future Avo, we are dedicated to providing premium quality
                services. If any client is not satisfied with the services we
                offer, we cater to them via a refund policy.&nbsp;
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Refund Eligibility</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Our refund policy is applicable in the following cases:
              </p>
              <br></br>
              <ul className="text-base font-normal text-black list-disc">
                <li>
                  If there are issues with timely deliveries due to technical
                  issues.
                </li>
                <li>
                  In case we are unable to provide services due to unforeseen
                  circumstances that are not within our control.
                </li>
                <li>If you are dissatisfied with our services.</li>
              </ul>
              <br></br>

              <p className="text-base font-normal text-black">
                Please be aware that the following situations will not result in
                refunds:
              </p>
              <br></br>
              <ul className="text-base font-normal text-black list-disc">
                <li>
                  If you decide to change your mind after availing our services.
                </li>
                <li>
                  If you deny us access or enough information to complete our
                  amenities.
                </li>
                <li>In case our terms of service are violated.&nbsp;</li>
              </ul>
              <br></br>

              <h3>
                <strong>
                  <span>Refund Process</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                Please get in touch with us via email (
                <a href="mailto:support@futureavo.com" className="text-red-900">
                  support@futureavo.com
                </a>
                ) to request a refund within the given period, and our
                representatives will review the request and respond accordingly.
                If we approve the request, the refund will be reimbursed.&nbsp;
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Subscription Cancellation&nbsp;</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                You have the option to cancel your recurring subscription at any
                moment. Kindly be aware that terminating your subscription will
                not grant you a reimbursement for any previous or upcoming
                payments. However, after the subscription is canceled, we
                won&apos;t be charging you further.&nbsp;
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Chargebacks</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                We reserve the right to terminate your account and take legal
                action to recover any unpaid costs if you start a chargeback
                with your credit card company or payment provider.
              </p>
              <br></br>
              <h3>
                <strong>
                  <span>Modifications to Refund Policy</span>
                </strong>
              </h3>
              <p className="text-base font-normal text-black">
                We reserve the right to alter this Refund Policy at any time. If
                any adjustments are made, we shall notify the users via email or
                by sharing an update on our website.
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
