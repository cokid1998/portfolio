import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const FirstSectionContainer = tw.section`
  bg-main
  min-h-screen
  flex
  justify-center
  items-center
  flex-col
  gap-28
`;

export const TypoWrapper = tw.div`
  relative
  flex
  flex-col
  gap-5
  justify-center
  items-center
`;

export const ProfileImageWrap = tw(motion.div)<{ isMobile: boolean }>`
  relative
  bottom-0
  w-4/5
  h-[calc(100vh-40vh)]
  transition-all
  ${(props) =>
    props.isMobile
      ? "max-sm:h-[calc(100vh-50vh)]"
      : "max-sm:h-[calc(100vh-40vh)]"}
`;
