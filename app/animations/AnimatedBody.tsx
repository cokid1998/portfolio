import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text?: string;
  className?: string;
  delay?: number;
  Icon?: React.ReactElement;
  children?: React.ReactElement | React.ReactNode;
};

export default function AnimatedBody({
  text,
  className,
  delay,
  Icon,
  children,
}: AnimatedBodyProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const isColloge = (text: string) => {
    if (
      text ===
      "대학생들이 많이 쓰는 에브리타임 시간표의 아쉬운부분이 있어 직접 대학교 시간표를 만들었습니다."
    )
      return true;
    return false;
  };

  return (
    <motion.div
      aria-label={text}
      role="heading"
      className={className}
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
      {...(isColloge(text!)
        ? {
            "data-blobity-tooltip":
              "시간표 상단에 다음 수업까지 몇분 남았는지와 위치를 알려주는 UI를 만들었습니다.",
          }
        : {})}
    >
      {children}
      {Icon}
      {text}
    </motion.div>
  );
}
