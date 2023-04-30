import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Subshare | Privacy Policy</title>
        <meta name="description" content="Subshare's Privacy Policy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Navbar />
      </section>

      <section className="px-5 lg:px-40 py-10">
        <h4 className=" text-[2rem] font-black uppercase">
          SUBSHARE'S PRIVACY POLICY
        </h4>

        <p className=" text-[0.85rem] my-5">Last updated: [05/05/2023]</p>

        <p className=" text-[0.85rem] my-5">
          Thank you for choosing our application (the "Subshare"). Your privacy
          is important to us, and we are committed to protecting it. This
          privacy policy (the "Privacy Policy") explains how we collect, use,
          and share information about you when you use the Application.
        </p>

        <p className=" text-[0.85rem] my-5">
          By using the Application, you agree to the collection, use, and
          sharing of your information as described in this Privacy Policy. If
          you disagree with our policies and practices, do not use the
          Application.
        </p>

        <p className=" text-[0.85rem] my-5">
          We may change our Privacy Policy from time to time. We encourage you
          to review the Privacy Policy whenever you access the Application to
          stay informed about our information practices and the choices
          available to you.
        </p>

        <div>
          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Information We Collect
          </h5>

          <p className=" text-[0.85rem] my-5">
            We collect information about you when you use the Application. The
            types of information we collect include:
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Personal information:</span> This
            information can be used to identify you, such as your name, email
            address, phone number, and BVN.
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Media:</span> If you upload images to
            the application, those images will be stored in the same manner as
            your personal information
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Financial information:</span> This is
            information about your financial accounts and transactions, such as
            account numbers and transaction history.
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Device information:</span> This is
            information about the device you use to access the Application, such
            as the device's model, IP address, and operating system.
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Location information:</span> This is
            information about your location, such as your IP address or GPS
            data..
          </p>

          <p className=" text-[0.85rem] my-5">
            <span className="font-bold">Usage information:</span> This is
            information about how you use the Application, such as the features
            you access and the actions you take.
          </p>

          <p className=" text-[0.85rem] my-5">
            We collect this information in various ways, including when you
            provide it to us directly, when you use the Application, and when
            you interact with our advertising and marketing efforts.
          </p>
        </div>

        {/* HOW WE USE YOUR INFORMATION */}
        <div>
          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How We Use Your Information
          </h5>

          <p className=" text-[0.85rem] my-5">
            We use the information we collect about you to:
          </p>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">
                Provide, maintain, and improve the Application
              </li>
              <li className="my-2">
                Communicate with you about the Application and your accounts
              </li>
              <li className="my-2">
                Conduct research and analytics to understand how the Application
                is used
              </li>
              <li className="my-2">
                Personalize your experience by providing customized content and
                recommendations
              </li>
              <li className="my-2">
                Protect against and prevent fraud, unauthorized transactions,
                claims, and other liabilities
              </li>
              <li className="my-2">
                Comply with legal and regulatory obligations
              </li>
            </ul>
          </div>
        </div>

        {/* SHARING YOUR INFORMATION */}
        <div>
          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Sharing Your Information
          </h5>

          <p className=" text-[0.85rem] my-5">
            We may share your information with third parties in the following
            circumstances:
          </p>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">
                With service providers and partners who perform services on our
                behalf, such as payment processors and hosting providers, in
                accordance with our terms and conditions. This information may
                also be stored in our contact relationship management system to
                help us provide the required information about your account
                status.
              </li>
              <li className="my-2">
                With law enforcement or other government agencies, as required
                by law or in response to a legal request
              </li>
              <li className="my-2">
                With third parties in connection with a merger, acquisition, or
                sale of all or part of our business
              </li>
              <li className="my-2">
                We may also share aggregated or de-identified information with
                third parties for various purposes, including research and
                analytics.
              </li>
            </ul>
          </div>
        </div>

        {/* CHOICE AND RIGHT */}
        <div>
          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Your Choices and Rights
          </h5>

          <p className=" text-[0.85rem] my-5">
            You have the following choices and rights with respect to your
            information:
          </p>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">
                Opting out of marketing communications: You may opt-out of
                receiving marketing communications from us by following the
                opt-out instructions in the communication or by contacting us.
              </li>
              <li className="my-2">
                Accessing and updating your information: You may access and
                update your personal information by logging into your account
                and making the necessary changes.
              </li>
              <li className="my-2">
                Deleting your information: You may delete your account by
                contacting us, please email us at{" "}
                <span className="font-bold underline text-blue-600">
                  <a href="mailto:support@usesubshare.com">
                    support@usesubshare.com
                  </a>
                </span>{" "}
                using the same email address you used in your account, with the
                subject line “delete my account”. Your account will then be
                deleted within 30 days. Please note that some information may
                remain in our records after you delete your account, for
                administrative, legal, or security purposes.
              </li>
              <li className="my-2">
                Data protection rights: Depending on your location, you may have
                the right to request access to the personal information we hold
                about you, request that we rectify or erase your personal
                information, object to the processing of your personal
                information, or request that we restrict the processing of your
                personal information. You have the right to review and edit some
                of the personal information that you have submitted to us
                through the Subshare Service. To protect the confidentiality of
                data processing, we may ask you to provide proof of identity
                when exercising this right. This can be done by submitting a
                scanned copy or a signed photocopy of a valid identification
                document.
              </li>

              <li className="my-2">
                Data protection rights: Depending on your location, you may have
                We will aim to respond to any requests regarding your rights
                within one month of receiving the request. If we are unable to
                meet this deadline due to the complexity or volume of requests,
                we will inform you of the extended deadline. The extension will
                not exceed two months from the date that we notify you of the
                need for an extension. If we do not follow up on your request,
                we will inform you within one month of the reasons for our
                decision and of your right to file a complaint with your
                national data protection authority
              </li>
            </ul>
          </div>

          <p className=" text-[0.85rem] my-5">
            If you would like to contact us regarding this privacy policy,
            please email{" "}
            <span className="font-bold underline text-blue-600">
              <a href="mailto:support@usesubshare.com">
                support@usesubshare.com
              </a>
            </span>
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
