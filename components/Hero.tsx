import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { AppStore, GooglePlay } from "../data/Icons";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Hero() {
  function notifications() {
    // Notify user with a toast message of pending sending of message
    toast.success("Coming Soon...App In Development", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  }

  return (
    <section className="w-full h-screen flex flex-col bg-darkBG">
      {/* Navabr */}
      <Navbar />

      {/* Header Text & Call To Action */}
      <div className="m-auto w-full text-center lg:px-52 md:px-10 px-5">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-main font-black text-[1.65rem] md:text-[2.1rem]"
        >
          Join A Sharing Network And Save On Premium Subscriptions.
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-white font-semibold lg:text-[1.1rem] px-5 lg:px-14 my-7"
        >
          Management tool for group subscription plans, connect and split costs
          with your family, friends and co-workers!
        </motion.h3>

        {/* Download App Buttons */}
        <div className=" flex gap-5 justify-center my-5">
          {/* App store */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div onClick={notifications}>
              <Image
                src={AppStore}
                alt={"App Store"}
                width={130}
                height={130}
              />
            </div>
          </motion.div>

          {/* Google Play */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div onClick={notifications}>
              <Image
                src={GooglePlay}
                alt={"Google Play"}
                width={130}
                height={130}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
