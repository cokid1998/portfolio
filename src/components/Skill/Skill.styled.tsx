import tw from "tailwind-styled-components";
import Image from "next/image";

export const StackBox = tw.div`
  border-2
  border-white
  rounded-lg
  p-4
  flex
  flex-1
  flex-wrap
  justify-center
  gap-5
`;

export const StackItem = tw.div`
  flex
  flex-col
  border-2
  border-white
  rounded-lg
  p-2
  gap-3
  text-center
  items-center
  w-1/5
`;

export const StackImageWrap = tw.div`
  w-12
  h-12
  relative
`;

export const StackImage = tw(Image)`
  
`;

export const StackName = tw.span`
  text-white
`;
