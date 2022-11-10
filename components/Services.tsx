import React from "react";
import Image from "next/image";
import subCategory from "../data/SubCategory";
import Link from "next/link";

export default function Services() {
  return (
    <section className="w-full lg:h-screen flex flex-col px-5 md:px-10 lg:px-20 py-14">
      <div className="text-center m-auto">
        <h1 className="text-darkBG text-[1.5rem] font-extrabold">
          Services That Offer Group Subscription
        </h1>

        {/* Sub Categories */}
        <div className="flex flex-col md:flex-row w-full gap-20 justify-center my-14">
          {subCategory.map((category) => (
            <div
              className="text-center flex flex-col justify-center items-center"
              key={category.id}
            >
              <div className="my-5">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={85}
                  height={85}
                />
              </div>

              <h4 className="font-bold text-darkBG">{category.title}</h4>
            </div>
          ))}
        </div>

        {/* Paragraph text */}
        <p className="font-medium lg:px-40 md:px-15 px-5">
          Plus other digital products and services such as Google Drive,
          Showmax, Steam, and so much more can be shared among family, friends,
          housemates and co-workers!
        </p>

        {/* Button */}
        <Link href={"/waitlist"}>
          <button className="bg-darkBG text-white font-semibold text-[0.85rem] px-14 py-2 rounded-md my-10 hover:bg-main hover:text-darkBG">
            Join Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
}
