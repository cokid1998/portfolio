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
};

export const projects = [
  {
    id: 0,
    name: "MARKHADA",
    description:
      "현재 서비스중인 온라인 상표등록 자동화 서비스의 프론트앤드 개발을 담당했습니다.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiMui, SiFramer],
    techNames: ["TypeScript", "React", "Next.js", "MUI", "Framer Motion"],
    github: "https://github.com/karthikmudunuri/eldoraui",
    demo: "https://www.markhada.com/",
    image: "/projects/MARKHADA.png",
    available: true,
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
