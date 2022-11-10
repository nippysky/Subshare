import React from "react";
import Image from "next/image";
import OnboardCard from "./OnboardCard";
import onboard from "../data/Onboarding";
import { HappyMan } from "../data/Icons";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full min-h-screen flex flex-col bg-darkBG px-5 md:px-10 lg:px-20 pt-20">
      <h1 className="text-white text-[1.5rem] font-extrabold text-center">
        How It works
      </h1>

      {/* Gird Tiles */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full grid lg:grid-cols-2 gap-5 lg:gap-10 py-20"
      >
        {onboard.map((card) => (
          <OnboardCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="hidden md:relative md:bottom-0 md:right-10 md:flex md:justify-center"
      >
        <Image
          src={HappyMan}
          alt={"Happy Man"}
          width={600}
          height={600}
          priority
          quality={100}
        />
      </motion.div>
    </section>
  );
}
