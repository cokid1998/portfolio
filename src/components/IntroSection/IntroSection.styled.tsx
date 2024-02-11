import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const FirstSectionContainer = tw(motion.section)`
  bg-main
  flex
  flex-col
  lg:min-h-screen
  lg:justify-between
  lg:items-center
  max-sm:gap-0
  max-sm:text-center
  max-sm:justify-between
  max-sm:items-center
  max-sm:p-5
  max-sm:pt-10
  max-sm:h-svh
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
  max-sm:text-[2rem]
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
