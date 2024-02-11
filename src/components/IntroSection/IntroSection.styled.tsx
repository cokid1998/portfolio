import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const FirstSectionContainer = tw(motion.section)`
  bg-main
  min-h-screen
  flex
  flex-col
  lg:justify-between
  lg:items-center
  sm:gap-0
  sm:text-center
  sm:justify-between
  sm:items-center
  relative
`;

export const TypoWrap = tw(motion.div)`
  relative
  flex
  flex-col
  gap-5
  justify-center
  items-center
`;

export const AnimateTxt = tw(motion.p)`
  z-1
  relative
  lg:text-[6rem]
  min-sm:text-[3rem]
  max-sm:leading-none
`;

export const MyNameTxt = tw(motion.div)`
  z-1
  relative
  font-light
  lg:text-4xl
  max-sm:text-xl
`;

export const IconWrap = tw(motion.div)`
  flex
  gap-10
`;
