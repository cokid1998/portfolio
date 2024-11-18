import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { FaUser, FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { GiNewBorn } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"ABOUT ME"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col justify-center lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 grid w-[100%] grid-cols-2 gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:grid-cols-3 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <FaUser className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">이름</div>
                  <div className="text-[16px]">이태관</div>
                </div>
              </div>
            </AnimatedBody>
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <GiNewBorn className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">생년월일</div>
                  <div className="text-[16px]">98.09.03</div>
                </div>
              </div>
            </AnimatedBody>
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <FaLocationDot className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">거주지</div>
                  <div className="text-[16px]">광주광역시 동구</div>
                </div>
              </div>
            </AnimatedBody>
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <FaMobileAlt className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">연락처</div>
                  <div className="text-[16px]">010-7707-5801</div>
                </div>
              </div>
            </AnimatedBody>
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <MdEmail className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">이메일</div>
                  <div className="text-[16px]">cokid98@gmail.com</div>
                </div>
              </div>
            </AnimatedBody>
            <AnimatedBody>
              <div className="flex items-start gap-[10px]">
                <FaGraduationCap className="text-[28px] lg:text-[32px]" />
                <div>
                  <div className="text-[18px] font-bold">학력</div>
                  <div className="break-keep text-[16px]">
                    조선대학교 (경영학과, 컴퓨터공확과)
                  </div>
                  <div className="text-[16px]">2025년도 졸업예정</div>
                </div>
              </div>
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
