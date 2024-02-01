import tw from "tailwind-styled-components";

export const ProjectItemWrap = tw.div`
  flex
  flex-col
  rounded-lg
  p-8
  bg-boxBg
`;

export const ProjectItemTitle = tw.h6`
  text-3xl
  text-white
  mb-8
`;

export const ProjectItemDesc = tw.p`
  text-base
  text-white
`;
