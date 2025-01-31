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
  SiGatsby,
  SiJavascript,
  SiReactquery
} from "react-icons/si";
import { RxStitchesLogo } from "react-icons/rx";

import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  github?: string;
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
    demo: "https://www.markhada.com/",
    image: "/projects/MARKHADA.png",
    available: false,
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
    name: "SSVT 홈페이지",
    description: "퇴직전 SSVT의 공식 웹사이트 제작을 담당했습니다.",
    technologies: [SiTypescript, SiReact, SiGatsby, SiFramer, RxStitchesLogo],
    techNames: ["TypeScript", "React", "Gatsby", "Framer-Motion", "Stitches"],
    demo: "https://ssvt-co-kr-client.vercel.app/",
    image: "/projects/SSVT.png",
    available: false,
  },
  {
    id: 2,
    name: "포켓몬 도감",
    description:
      "PokeApi에서 제공하는 공식 포켓몬 API를 통해서 포켓몬 도감 프로젝트를 구현했습니다.",
    technologies: [SiJavascript,SiReact, SiTailwindcss,SiReactquery],
    techNames: ["JavaScript","React","Tailwind","REACT-QUERY"],
    demo: "https://pokebook-ruby.vercel.app/",
    image: "/projects/POKEBOOK.png",
    available: false,
  },
  {
    id: 3,
    name: "대학교 시간표",
    description:
      "대학생들이 많이 쓰는 에브리타임 시간표의 아쉬운부분이 있어 직접 대학교 시간표를 만들었습니다.",
    technologies: [SiTypescript, SiReact],
    techNames: ["TypeScript", "React"],
    github: "https://github.com/cokid1998/college-timetable",
    demo: "https://cokid1998.github.io/college-timetable/",
    image: "/projects/TIMETABLE.png",
    available: true,
  },
];
