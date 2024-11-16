import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiReactquery,
  SiShadcnui,
  SiFigma,
} from "react-icons/si";
import { CgFramer } from "react-icons/cg";
import AnimatedTools from "../animations/AnimatedTools.tsx";

declare module "react-icons" {
  interface IconBaseProps {
    hovercolor?: string;
  }
}

enum LibColor {
  JS = "#F7DF1E",
  TS = "#3178C6",
  REACT = "#61DAFB",
  MUI = "#007FFF",
  FRAMER = "#0055FF",
  TAILWIND = "#06B6D4",
  REACT_QUERY = "#FF4154",
  GIT = "#F05032",
  FIGMA = "#F24E1E",
  // SHADCN = "#000001",
  // GITHUB = "#181717",
  // NEXTJS = "#000000",
}

const Skills = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="skills"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"SKILLS"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Frontend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <SiJavascript
                  size={50}
                  hovercolor={LibColor.JS}
                  data-blobity-tooltip={"JavaScript"}
                />
                <SiTypescript
                  size={50}
                  hovercolor={LibColor.TS}
                  data-blobity-tooltip={"TypeScript"}
                />
                <SiReact
                  size={50}
                  hovercolor={LibColor.REACT}
                  data-blobity-tooltip={"React"}
                />
                <SiNextdotjs size={50} data-blobity-tooltip={"Next"} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.3} text="Library" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <SiMui
                  size={50}
                  hovercolor={LibColor.MUI}
                  data-blobity-tooltip={"MUI"}
                />
                <CgFramer
                  size={50}
                  hovercolor={LibColor.FRAMER}
                  data-blobity-tooltip={"Framer-Motion"}
                />
                <SiTailwindcss
                  size={50}
                  hovercolor={LibColor.TAILWIND}
                  data-blobity-tooltip={"TailwindCSS"}
                />
                <SiReactquery
                  size={50}
                  hovercolor={LibColor.REACT_QUERY}
                  data-blobity-tooltip={"React_Query"}
                />
                <SiShadcnui size={50} data-blobity-tooltip={"Shadcn"} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiGithub size={50} data-blobity-tooltip={"Github"} />
                <SiGit
                  size={50}
                  hovercolor={LibColor.GIT}
                  data-blobity-tooltip={"GIT"}
                />
                <SiFigma
                  size={50}
                  hovercolor={LibColor.FIGMA}
                  data-blobity-tooltip={"Figma"}
                />
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
