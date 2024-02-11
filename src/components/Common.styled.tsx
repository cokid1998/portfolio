import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const Container = tw.section`
  min-h-screen
  p-8
  bg-blackBg
  flex
  flex-col
  gap-20
`;

export const Title = tw.h3`
  text-6xl
  text-white
  font-semibold
`;

export const ImageWrap = tw(motion.div)<{ width: string; height: string }>`
  relative
  ${({ width }) => width}
  ${({ height }) => height}
`;
