import Link from "next/link";
import Image from "next/image";
import React from "react";
import SubshareLogo from "../data/Icons";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkBG w-full py-20 px-5 md:px-10 lg:px-20 dark:bg-darkBG flex flex-col md:flex-row gap-10">
      {/* Logo */}
      <div className="md:w-[30%] w-full flex justify-start items-center">
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

      {/* Foot Links */}
      <div className="md:w-[40%] w-full flex flex-col md:flex-row gap-5 text-white md:justify-between md:items-center">
        {/* Legal */}
        <div className="w-1/2 md:w-full">
          <h1 className="font-bold text-[1rem] text-main mb-8">Legal</h1>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/"}>Terms Of Service</Link>
          </div>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>

        {/* Subshare */}
        <div className="md:w-1/2 w-full">
          <h1 className="font-bold text-[1rem] text-main mb-8">Subshare</h1>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/#faqs"}>Faqs</Link>
          </div>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Others */}
      <div className="md:w-[30%] w-full flex md:justify-end md:items-center">
        <div className="text-white font-semibold">
          <Link href={"/"}>support@usesubshare.com</Link>

          {/* Social Icons */}
          <div className="flex gap-7 my-7 text-main">
            {/* LinkedIn */}
            <div className="hover:text-white">
              <Link href={"/"}>
                <FaLinkedinIn size={25} />
              </Link>
            </div>

            {/* Twitter */}
            <div className="hover:text-white">
              <Link href={"/"}>
                <FaTwitter size={25} />
              </Link>
            </div>

            {/* Instragram */}
            <div className="hover:text-white">
              <Link href={"/"}>
                <FaInstagram size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
