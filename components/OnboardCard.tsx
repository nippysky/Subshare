import React from "react";
import Image from "next/image";

export default function OnboardCard(props: {
  icon: any;
  title: string;
  desc: string;
}) {
  const { icon, title, desc } = props;
  return (
    <div className="w-full px-5 py-5 bg-darkBG border boreder-[1px] rounded-lg border-white flex gap-7 items-center">
      <div className="w-[20%]">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          priority
          quality={100}
        />
      </div>

      <div className="w-[80%] flex flex-col gap-3">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="font-normal text-white text-[0.85rem]">{desc}</p>
      </div>
    </div>
  );
}
