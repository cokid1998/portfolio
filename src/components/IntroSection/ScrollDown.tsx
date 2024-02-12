import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import ARROW_BOTTOM_ICON from "@/assets/icons/Etc/ArrowBottom.svg";

import { ScrollDownWrapVariants } from "@/components/IntroSection/IntroSection.ani";

const ScrollDown = () => {
  return (
    <ScrollDownWrap
      initial="init"
      animate="animate"
      variants={ScrollDownWrapVariants}
    >
      <Image src={ARROW_BOTTOM_ICON} alt="scroll-down" />
    </ScrollDownWrap>
  );
};

const ScrollDownWrap = tw(motion.div)`
  absolute
  bottom-10
  animate-bounce
`;

export default ScrollDown;
