import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import ProjectGrid from "../components/work/ProjectGrid";

const Career = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="career"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"CARRER"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col justify-center lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 grid w-[100%] grid-cols-1 gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:grid-cols-2 lg:text-[24px]">
            <div className="group relative overflow-hidden rounded bg-[#373737] p-[20px]">
              <span className="text-sm text-[#A6A6A6]">
                2017.03 - 2025.03(졸업예정)
              </span>
              <div className="flex flex-col text-2xl font-bold">
                <span className="mb-[2px]">
                  조선대학교 경영학과, 컴퓨터공학과
                </span>
                <span className="mb-[10px] text-sm">
                  @ 컴퓨터공학과 복수전공 졸업예정
                </span>

                <ul className="text-base text-[#A6A6A6]">
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    운영체제, 자료구조, 데이터구조 등 컴퓨터과학 수업 수강
                  </div>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded bg-[#373737] p-[20px]">
              <span className="text-sm text-[#A6A6A6]">
                2021. 12 - 2022. 01
              </span>
              <div className="flex flex-col text-2xl font-bold">
                <span className="mb-[2px]">코드스테이츠 부트캠프</span>
                <span className="mb-[10px] text-sm">
                  @ Software engineering 34기 수료
                </span>

                <ul className="text-base text-[#A6A6A6]">
                  <div className="relative pl-2.5 before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    Javascript기반 Full Stack 과정
                  </div>
                  <div className="relative pl-2.5 before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    프론트엔드 React와 관련 라이브러리 사용법 학습
                  </div>
                  <div className="relative pl-2.5 before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    백엔드 Node.js 중심 학습
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
