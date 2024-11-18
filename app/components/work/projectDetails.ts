import React from "react";
import {
  SiCplusplus,
  SiFramer,
  SiGithub,
  SiNeovim,
  SiNextdotjs,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWebgl,
  SiZig,
  SiMui,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
  auth?: React.ReactNode;
};

export const projects = [
  {
    id: 0,
    name: "MARKHADA",
    description:
      "현재 서비스중인 온라인 상표등록 자동화 서비스의 프론트앤드 개발을 담당했습니다.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiMui, SiFramer],
    techNames: ["TypeScript", "React", "Next.js", "MUI", "Framer-Motion"],
    github: "https://github.com/karthikmudunuri/eldoraui",
    demo: "https://www.markhada.com/",
    image: "/projects/MARKHADA.png",
    available: true,
    auth: React.createElement(
      "div",
      null, // props는 null로 설정
      "로그인을해서 더 자세히 프로젝트를 확인해보세요!", // 첫 번째 자식 텍스트
      React.createElement("br"), // <br /> 태그 추가
      "ID: freshman1998@naver.com", // 두 번째 자식 텍스트
      React.createElement("br"), // <br /> 태그 추가
      "P/W: 1q2w3e4r!" // 두 번째 자식 텍스트
    ),
  },
  {
    id: 1,
    name: "VR MALL",
    description: "Developed an virtual mall by using Three.js and Typescript..",
    technologies: [SiWebgl, SiTypescript, SiReact],
    techNames: ["WebGL", "Typescript", "React"],
    techLinks: [
      "https://get.webgl.org/",
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
    ],
    github: "https://github.com/karthikmudunuri/VRMALL",
    demo: "https://vrmalldemo.netlify.app/",
    image: "/projects/vrmall.png",
    available: true,
  },
];
