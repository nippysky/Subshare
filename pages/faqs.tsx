import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Head>
        <title>Subshare | FAQS</title>
        <meta
          name="description"
          content="Subshare's Frequwntly Asked Questions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Navbar />
      </section>

      <Faqs />
      <section className="px-5 lg:px-40 pb-10">
        <h1 className="text-darkBG text-[1.5rem] font-extrabold text-center px-5">
          More FAQS
        </h1>

        {/* 1 */}
        <div>
          <h1 className="text-darkBG text-[1.5rem] font-bold my-5">
            1. About Subshare
          </h1>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How do I register to Subshare?
          </h5>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">Using your email address</li>
            </ul>
          </div>

          <p className=" text-[0.85rem] my-5">
            If you choose to sign up with your email, you just need to enter
            your email and choose a password.
          </p>

          <p className=" text-[0.85rem] my-5">
            Your Subshare account name and surname must be the same as the ones
            on your identification document, not a nickname or fictitious name.
            If they don't match, you won't be able to transfer funds from your
            Wallet. Subshare won't share your personal data with third parties.
          </p>

          <p className=" text-[0.85rem] my-5">
            To finalise your registration, you must accept the Terms and
            Conditions.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Is registration free?
          </h5>

          <p className=" text-[0.85rem] my-5">
            Yes, creating a Subshare account is totally free.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            I forgot my password. What can I do?
          </h5>
          <p className=" text-[0.85rem] my-5">
            If you forgot your password, please follow a simple procedure to
            reset it. Enter the email address with which you signed up for
            Subshare
          </p>

          <p className=" text-[0.85rem] my-5">Click on “Reset”</p>

          <p className=" text-[0.85rem] my-5">
            You will receive an email with a temporary password to login,you set
            a new password and confirm the new password. We advise you to choose
            one that you can later remember easily!
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How do I delete my Subshare account?
          </h5>
          <p className=" text-[0.85rem] my-5">
            We are sorry to see you go! We’re here to listen to you and improve
            our platform together. Please contact us to give us feedback and
            suggestions!
          </p>

          <p className=" text-[0.85rem] my-5">
            Here’s how to delete the account:
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
              <li className="my-2">Log in to Subshare</li>
              <li className="my-2">Click on your profile image</li>
              <li className="my-2">Click on “Deactivate Account”</li>
              <li className="my-2">Click on “Confirm”</li>
              <li className="my-2">
                Before deleting your account make sure that you’ve closed all
                the groups you created and exited all the groups you joined.
                Finally, make sure you don’t have any money left in your Wallet.
              </li>
            </ul>
          </div>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How Does Subshare Work?
          </h5>
          <p className=" text-[0.85rem] my-5">
            You can use Subshare in two ways:
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
                as an admin if you are sharing a subscription, making a service
                or product available to others.
              </li>
              <li className="my-2">
                as a member, by being part of a sharing group.
              </li>
            </ul>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h1 className="text-darkBG text-[1.5rem] font-bold my-5">
            2. How to share
          </h1>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Who can I share my subscription with?
          </h5>

          <p className=" text-[0.85rem] my-5">
            Before sharing, you should check the terms and conditions of the
            service or product you want to share and make sure that they allow
            sharing and the type of relationship that is allowed. On Subshare,
            there are four categories that correspond to different types of
            relationships: family, household, friends, and co-workers. Some
            services may only allow sharing with members of the same household,
            others may only allow sharing with family members, and others may
            only allow sharing with work colleagues.
          </p>

          <p className=" text-[0.85rem] my-5">
            After you determine the sharing requirements, you can create a group
            and decide whether to make it public or private. If the group is
            public, you will receive requests from users who see your post on
            the Subshare network. These requests will be accepted automatically
            if they meet the requirements. If the group is private, it will be
            hidden and only visible to those who receive an invitation from you
            directly.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How can I create a sharing group as an Admin?
          </h5>
          <p className=" text-[0.85rem] my-5">Here’s how to create a group:</p>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">Click on Create Button </li>
              <li className="my-2">Choose Category and Service </li>
              <li className="my-2">
                Enter Service Details, available spaces, amount paid
              </li>
              <li className="my-2">Click on “Confirm”</li>
            </ul>
          </div>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Why do I need to provide my BVN to create a group?
          </h5>
          <p className=" text-[0.85rem] my-5">
            The validation of a user requires providing your BVN to verify your
            details and it is mandatory to transfer your funds from the Wallet
            to your personal bank account.
          </p>

          <p className=" text-[0.85rem] my-5">
            In order to increase the security of our payment system and reduce
            fraud, we follow international requirements for online payment
            authentication.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How much does Subshare charge for an Admin?
          </h5>
          <p className=" text-[0.85rem] my-5">
            Subshare provides its service for free and there are no fees for
            managing a sharing group. It's like collecting money by hand, but
            with the convenience of having a service that automatically handles
            payments from group members every month. You won't have to do
            anything and the money will be promptly deposited in your Wallet.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            What to do if a Member doesn’t want to be part of a group anymore?
          </h5>
          <p className=" text-[0.85rem] my-5">
            If a group member decides to leave the sharing group, they can leave
            the group at the end of their subscription for the group.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How do I delete a group I have created?
          </h5>
          <p className=" text-[0.85rem] my-5">
            Before deleting a sharing group you must ensure that there are no
            members in your group. To delete a sharing group:
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
              <li className="my-2">Log in to Subshare</li>
              <li className="my-2">Click on “My Groups” </li>
              <li className="my-2">Click on “Owned”</li>
              <li className="my-2">
                Click on the group which you want to delete
              </li>
              <li className="my-2">
                Scroll down and then Click on “Delete Group”
              </li>
            </ul>
          </div>
          <p className=" text-[0.85rem] my-5">
            The group will be suspended and you will have to grant access to the
            shared service until the closing date, which corresponds to the
            expiry of the last payment you received.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h1 className="text-darkBG text-[1.5rem] font-bold my-5">
            3. How to Join a Sharing Group
          </h1>

          <p className=" text-[0.85rem] my-5">
            To join a sharing group, you must be invited by the admin of the
            group. Searching for Sharing Groups created by your contacts on any
            social media account that you link to the Subshare Service and
            submitting a request to join a particular Sharing Group to the Group
            Admin User.
          </p>

          <p className=" text-[0.85rem] my-5">
            Accepting an invite from the user that created the Sharing Group (a
            “ Group Admin User “); You will also need to confirm your
            relationship with the Group Admin User in order to join a Sharing
            Group. By joining a sharing group, you agree to pay your share of
            the subscription costs in a timely manner. If you do not pay your
            share of the subscription costs within the designated time period,
            you may be removed from the group by the admin.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How much does Subshare cost for an Admin?
          </h5>
          <p className=" text-[0.85rem] my-5">
            You do not have to pay a fee to create an account or browse sharing
            groups on the Subshare service. However, when you join a sharing
            group through the service and make payments towards shared online
            services, an administration fee will be charged for your use of the
            service (the "Admin Fee").
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How much does Subshare cost for a Joiner?
          </h5>
          <p className=" text-[0.85rem] my-5">
            If you join a group, Subshare charges an Admin fee fee that ranges
            from 10-20% of the share. In most cases the (the "Admin Fee")
            charged towards the use of subshare is (NGN 50).
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How can I cancel a pending request to join a Group?
          </h5>
          <p className=" text-[0.85rem] my-5">To cancel a pending request:</p>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">Click on “Groups” </li>
              <li className="my-2">Click on ”Pending” </li>
              <li className="my-2">Click on your desired group</li>
              <li className="my-2">
                Scroll down and then Click on “Cancel Request”
              </li>
              <li className="my-2">Click on ”Confirm” </li>
            </ul>
          </div>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How does the Share renewal work?
          </h5>
          <p className=" text-[0.85rem] my-5">
            The share renewal is automatically charged to your Subshare wallet.
            If the Share renewal does not go through correctly, follow this
            process in order not to lose your space in the sharing group.
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
              <li className="my-2">Login to Subshare </li>
              <li className="my-2">Click on Wallet </li>
              <li className="my-2">Click on Deposit to fund your wallet</li>
            </ul>
          </div>
        </div>

        {/* 4 */}
        <div>
          <h1 className="text-darkBG text-[1.5rem] font-bold my-5">
            4. Payments and Security
          </h1>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How can I enter a payment method to send my payments?
          </h5>

          <div className="px-10">
            <ul
              className=" text-[0.85rem]"
              style={{
                listStyle: "unset",
                listStyleType: "inherit",
                display: "inline",
              }}
            >
              <li className="my-2">Click on your profile icon </li>
              <li className="my-2">Click on “Wallet” </li>
              <li className="my-2">Click “deposit”</li>
              <li className="my-2">Enter all required fields</li>
              <li className="my-2">Click on ”Confirm” </li>
            </ul>
          </div>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            What is the Wallet?
          </h5>

          <p className=" text-[0.85rem] my-5">
            The Wallet is the section of Subshare where you can keep track of
            your payments, both sent and received. Here you will see when you
            are able to withdraw your funds.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            How can I withdraw money from my Wallet?
          </h5>
          <p className=" text-[0.85rem] my-5">
            To transfer the funds collected in your Wallet:
          </p>

          <p className=" text-[0.85rem] my-5">
            Click “Wallet” and then click on the button “Withdraw”. If you
            haven’t yet, complete the account verification process. To verify
            your account:
          </p>

          <p className=" text-[0.85rem] my-5">
            Visit your Wallet and click on “Withdraw”.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Why do I need to provide my BVN to withdraw my money?
          </h5>

          <p className=" text-[0.85rem] my-5">
            The validation of a user requires providing your BVN to verify your
            details and it is mandatory to transfer your funds from the Wallet
            to your personal bank account. In order to increase the security of
            our payment system and reduce fraud, we follow international
            requirements for online payment authentication.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            What is the validation period?
          </h5>

          <p className=" text-[0.85rem] my-5">
            The validation period is a protection established by Subshare to
            grant the joiner a warranty of full refund in case of problems.
          </p>

          <p className=" text-[0.85rem] my-5">
            As admin you can view the amount received on your Wallet “Pot”
            balance in real-time, but you can only have it available in your
            Withdrawable” balance after 14 days. This is a validation time
            needed to protect the joiner.
          </p>

          <p className=" text-[0.85rem] my-5">
            As a joiner, you have 14 days from the moment you send the fee to
            request a refund of the fee you sent only if the admin has
            compromised access to the shared service.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h1 className="text-darkBG text-[1.5rem] font-bold my-5">
            5. Refunds
          </h1>

          <p className=" text-[0.85rem] my-5">
            You can request a refund within 14 days of sending the fee. To
            request a refund, follow the procedure below:
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
              <li className="my-2">Click on the profile icon </li>
              <li className="my-2">
                Scroll Down and then Click on “Contact us”
              </li>
              <li className="my-2">Follow the procedure</li>
            </ul>
          </div>

          <p className=" text-[0.85rem] my-5">
            We remind you that the refund MUST contain a reason. Be as accurate
            as possible describing your situation.
          </p>

          <p className=" text-[0.85rem] my-5">
            A refund is accepted if it falls into one of the following cases:
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
                Inability to access the service due to technical problems
              </li>
              <li className="my-2">Failure to communicate by the admin</li>
              <li className="my-2">The shared subscription has expired</li>
            </ul>
          </div>

          <p className=" text-[0.85rem] my-5">
            Refund requests are declined in the following cases:
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
                The joiner did not respect the Terms of Use of the shared
                service
              </li>
              <li className="my-2">
                The joiner requests a refund before 24 hours have passed since
                the sending of the payment
              </li>
              <li className="my-2">
                Personal reasons of the joiner that do not depend on the admin
              </li>
              <li className="my-2">
                The joiner is no longer interested in shared service
              </li>
            </ul>
          </div>

          <p className=" text-[0.85rem] my-5">
            Refund requests are accepted or unquestionably declined by the
            Subshare support team, which within 5 working days verifies the
            reasons behind the dispute.
          </p>

          <h5 className="text-passengerWhite text-[1rem] font-medium my-5 uppercase">
            Where do I receive the refund?
          </h5>

          <p className=" text-[0.85rem] my-5">
            If the refund request is accepted, you will receive a refund in your
            Subshare wallet. The transaction costs of Subshare will be credited
            to your Wallet. You will be able to use them for your next
            transaction.
          </p>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
