import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const IntroSectionContainer = tw(motion.section)`
  bg-main
  flex
  flex-col
  lg:min-h-screen
  lg:justify-between
  lg:items-center
  lg:w-full
  sm:gap-0
  sm:text-center
  sm:justify-between
  sm:items-center
  sm:p-5
  sm:pt-10
  sm:h-svh
  sticky
  top-0
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
  sm:text-[2rem]
  sm:leading-none
`;

export const MyNameTxt = tw(motion.div)`
  z-1
  relative
  font-light
  lg:text-4xl
  sm:text-xl
`;

export const IconWrap = tw(motion.div)`
  flex
  gap-10
`;
