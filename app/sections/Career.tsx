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
          text={"CAREER"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col justify-center lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 grid w-[100%] grid-cols-1 gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:grid-cols-2 lg:text-[24px]">
            <div className="group relative overflow-hidden rounded bg-[#373737] p-[20px]">
              <span className="text-sm text-[#A6A6A6]">2022.07 - 2023.05</span>
              <div className="flex flex-col text-2xl font-bold">
                <span className="mb-[2px]">SSVT</span>
                <span className="mb-[10px] text-sm">
                  @ 해양산업과 관련된 솔루션을 개발하는 정부 과제와 관련하여
                  개발을 수행했습니다.
                </span>

                <ul className="flex flex-col gap-[4px] text-base text-[#A6A6A6]">
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    개발팀 프론트엔드 개발자를 담당했습니다.
                  </div>
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    React를 중심으로 기존 프로젝트를 유지/보수와 새로운
                    프로젝트를 진행했습니다.
                  </div>
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    기존 아임웹 템플릿으로 제작된 회사 홈페이지의 리뉴얼을
                    진행했습니다.
                  </div>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded bg-[#373737] p-[20px]">
              <span className="text-sm text-[#A6A6A6]">
                2021. 07 - 2022. 01
              </span>
              <div className="flex flex-col text-2xl font-bold">
                <span className="mb-[2px]">코드스테이츠 부트캠프</span>
                <span className="mb-[10px] text-sm">
                  @ Software engineering 34기 수료
                </span>

                <ul className="flex flex-col gap-[4px] text-base text-[#A6A6A6]">
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    Javascript기반 Full Stack 과정
                  </div>
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
                    프론트엔드 React와 관련 라이브러리 사용법 학습
                  </div>
                  <div className="relative pl-2.5 font-normal before:absolute before:left-0 before:top-[0.625rem] before:block before:h-1 before:w-1 before:rounded-full before:bg-[#A6A6A6]">
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
