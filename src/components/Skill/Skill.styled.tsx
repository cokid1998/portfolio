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
