import { Variants } from "framer-motion";

const innerHeight = typeof window !== "undefined" ? window.innerHeight : 0;

export const TypoWrapVariants: Variants = {
  init: {
    y: innerHeight - 0.75 * innerHeight,
    scale: 1.25,
  },
  animate: {
    y: 0,
    scale: 1,
    transition: {
      delay: 3,
      duration: 1.5,
    },
  },
};

export const AnimateTxtVariants: Variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const MyNameTxtVariants: Variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
    },
  },
};

export const IconWrapVariants: Variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 5,
    },
  },
};

export const ImageWrapVariants: Variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 5,
      duration: 1.5,
    },
  },
};

export const ScrollDownWrapVariants: Variants = {
  init: {
    opacity: 0,
    y: -5,
  },
  animate: {
    opacity: 1,
    y: [10, 0, 10],
    transition: {
      delay: 6,
      duration: 1,
    },
  },
};
