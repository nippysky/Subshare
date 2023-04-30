import React, { useState } from "react";
import faqS from "../data/faqs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Faqs() {
  const [accordion, setActiveAccordion] = useState(0);

  function toggleAccordion(index: React.SetStateAction<number>) {
    if (index === accordion) {
      setActiveAccordion(0);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="w-full min-h-screen flex flex-col"
    >
      <div className="m-auto pt-14">
        <h1 className="text-darkBG text-[1.5rem] font-extrabold text-center px-5">
          Common Frequently Asked Questions
        </h1>

        {/* Faqs Accordion */}
        <div className="w-full pt-0 px-5 lg:px-40 pb-[5rem] my-[2rem] mx-0">
          {faqS.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="w-full border-[1px] border-darkBG text-darkBG mb-[20px] py-0 px-4 rounded-md cursor-pointer"
            >
              <div className="w-full flex py-1 px-[2rem] justify-between items-center">
                <h3
                  className={`${
                    accordion === index && "flex"
                  } text-darkBG font-semibold`}
                >
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <div className="py-4 px-0">
                      <FiChevronUp size={30} />
                    </div>
                  ) : (
                    <div className="py-4 px-0">
                      <FiChevronDown size={30} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p
                  className={`${
                    accordion === index ? "text-darkBG" : "hidden"
                  } m-0 pt-0 px-8 pb-8 text-justify`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
