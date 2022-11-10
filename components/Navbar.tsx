import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SubshareLogo from "../data/Icons";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  if (mobileMenu === true) {
    // Disable Scroll
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    // Enable Scroll
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="w-full flex justify-between items-center bg-darkBG px-5 md:px-10 lg:px-20 py-3"
    >
      {/* Logo */}
      <div className="w-1/2 flex justify-start">
        <Link href={"/"}>
          <Image
            src={SubshareLogo}
            alt={"Sunshare Logo"}
            width={155}
            height={42}
            priority
          />
        </Link>
      </div>

      {/* Nav Links */}
      <nav className=" hidden w-1/2 md:flex gap-10 justify-end items-center font-semibold text-main text-[0.85rem]">
        <div className="hover:text-white">
          <Link href={"/#how-it-works"}>How It Works</Link>
        </div>

        <div className="hover:text-white">
          <Link href={"/#faqs"}>Faqs</Link>
        </div>

        <div>
          <Link href={"/waitlist"}>
            <button className="bg-main text-darkBG px-4 py-2 hover:bg-white hover:text-darkBG rounded-md">
              Join Waitlist
            </button>
          </Link>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div className="flex md:hidden text-main">
        <button onClick={() => setMobileMenu(true)}>
          <RiMenu3Fill size={28} />
        </button>
      </div>
      {/* End Of Hamburger Menu */}

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="fixed top-0 right-0 w-[50%] bg-main h-screen z-50 px-5 py-1 overflow-hidden"
          onClick={() => setMobileMenu(false)}
        >
          {/* close button */}
          <div className="flex justify-end">
            <button onClick={() => setMobileMenu(false)}>
              <RiCloseLine size={30} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-10 mt-10 font-semibold">
            <div className="hover:text-white">
              <Link href={"/#how-it-works"}>How It Works</Link>
            </div>

            <div className="hover:text-white">
              <Link href={"/#faqs"}>Faqs</Link>
            </div>

            <div>
              <Link href={"/waitlist"}>
                <button className="w-full bg-darkBG text-white px-4 py-2 hover:bg-white hover:text-darkBG rounded-md">
                  Join Waitlist
                </button>
              </Link>
            </div>
          </nav>
        </motion.section>
      )}
    </motion.header>
  );
}
