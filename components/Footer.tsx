import Link from "next/link";
import Image from "next/image";
import React from "react";
import SubshareLogo from "../data/Icons";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkBG w-full py-20 px-5 md:px-10 lg:px-20 dark:bg-darkBG flex flex-col lg:flex-row gap-10">
      {/* Logo */}
      <div className="md:w-[35%] w-full flex justify-start items-center">
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
      <div className="lg:w-[65%] w-full flex flex-col lg:flex-row gap-10 text-white md:justify-between md:items-center">
        {/* Legal */}
        <div className="lg:w-1/3 w-full">
          <h1 className="font-bold text-[1rem] text-main mb-8">Legal</h1>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/terms-of-service"}>Terms Of Service</Link>
          </div>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </div>
        </div>

        {/* Subshare */}
        <div className="lg:w-1/3 w-full">
          <h1 className="font-bold text-[1rem] text-main mb-8">Subshare</h1>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/faqs"}>Faqs</Link>
          </div>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/"}>About Us</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="lg:w-1/3 w-full">
          <h1 className="font-bold text-[1rem] text-main mb-8">Contact</h1>
          <div className="text-[0.85rem] font-medium my-4">
            <Link href={"/#faqs"}>support@usesubshare.com</Link>
          </div>
          <div className="text-[0.85rem] font-medium my-4 flex gap-10 text-main">
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
