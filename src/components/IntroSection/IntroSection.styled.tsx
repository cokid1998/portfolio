import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const FirstSectionContainer = tw.section`
  bg-main
  min-h-screen
  flex
  flex-col
  lg:justify-center
  lg:items-center
  lg:gap-28
  max-sm:gap-0
  max-sm:text-center
  max-sm:justify-between
  justify-between
`;

export const TypoWrapper = tw.div`
  relative
  flex
  flex-col
  gap-5
  justify-center
  items-center
`;

export const AnimateTxt = tw.p`
  z-1
  relative
  lg:text-[6rem]
  max-sm:text-[3rem]
  max-sm:leading-none
`;

export const MyNameTxt = tw.div`
  z-1
  relative
  lg:text-5xl
  max-sm:text-xl
`;

export const ProfileImageWrap = tw(motion.div)<{ $ismobile: boolean }>`
  relative
  bottom-0
  transition-all
`;

export const IconWrap = tw.div`
  flex
  gap-10
`;
