import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { AppStore, GooglePlay } from "../data/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Link href={"/"}>
              <Image
                src={AppStore}
                alt={"App Store"}
                width={130}
                height={130}
              />
            </Link>
          </motion.div>

          {/* Google Play */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Link href={"/"}>
              <Image
                src={GooglePlay}
                alt={"Google Play"}
                width={130}
                height={130}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
