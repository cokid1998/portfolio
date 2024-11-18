import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <ContactBackground />
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords
            title={"contact"}
            style={
              "flex max-w-[250px] flex-col items-start text-left text-[100px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[150px] md:text-[150px] lg:text-center lg:text-[120px] xl:text-[250px]"
            }
          />
        </div>

        <div className="mx-auto mt-20 w-full flex-col gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex justify-center gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/cokid1998"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedBody Icon={<IoLogoGithub size="50px" />} />
            </Link>
            <Link
              href="mailto:cokid98@gmail.com?subject=Lets%20work%20together!&amp;body=이메일을 보내주세요!"
              target="_blank"
              aria-label="Email"
            >
              <AnimatedBody Icon={<MdEmail size="50px" />} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
