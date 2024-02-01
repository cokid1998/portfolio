import tw from "tailwind-styled-components";
import Image from "next/image";

export const StackBox = tw.div`
  w-full
  border-2
  border-white
  rounded-lg
  p-4
  grid
  grid-cols-4
  gap-4
`;

export const StackItem = tw.div`
  rounded-lg
  p-2
  flex
  flex-col
  gap-3
  text-center
  items-center
`;

export const StackImage = tw(Image)`
  
`;

export const StackName = tw.span`
  text-white
`;

export const SkillWrap = tw.div`
  flex
  flex-col
  gap-24
  min-w-screen-md
  mx-auto
  lg:w-10/12
`;

export const SkillBox = tw.div<{ job: string }>`
  flex
  gap-5
  items-center
  ${(props) => (props.job === "Back-End" ? "flex-row-reverse" : null)}
`;

export const HorizontalHr = tw.hr`
  border-t-2
  border-blue-900
  w-1/2
  border-white
`;

export const JobTxt = tw.h3`
  min-w-36
  text-3xl
  text-white
`;
