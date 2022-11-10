import Head from "next/head";
import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Waitlist() {
  return (
    <section className="w-full h-screen bg-white flex flex-col">
      <Head>
        <title>Subshare - Join Waitlist</title>
        <meta
          name="description"
          content="Management tool for group subscription plans, connect and split costs with your family, friends and co-workers!"
        />
      </Head>

      <Navbar />

      <div className="m-auto px-5">
        <h3 className="text-center font-semibold text-darkBG">
          Be the first to get updates straight to your email address.
        </h3>

        <Form />
      </div>
    </section>
  );
}
