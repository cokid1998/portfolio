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
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text="안녕하세요! 저는 프론트엔드 개발자 이태관입니다. 저는 개발을 통해 새로운 가치를 창출하고, 사용자가 진정으로 원하는 경험을 제공하는 것을 무엇보다 중요하게 생각합니다."
              className="break-keep"
            />

            <AnimatedBody
              delay={0.1}
              className="break-keep"
              text="React와 Tailwind CSS와 같은 모던 웹 기술을 활용해 직관적이고 효율적인 UI를 설계하고, 프로젝트가 사용자에게 긍정적인 변화를 줄 수 있도록 최선을 다합니다. 사용자의 요구를 깊이 이해하고, 이를 해결하는 혁신적인 방법을 찾는 과정에서 큰 보람을 느낍니다."
            />

            <AnimatedBody
              delay={0.2}
              className="break-keep"
              text="제 개발 목표는 단순한 기능을 넘어, 사용자에게 가치 있는 경험을 제공하고, 웹을 통해 긍정적인 영향을 끼치는 것입니다."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
