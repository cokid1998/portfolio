import tw from "tailwind-styled-components";
import { inView, motion } from "framer-motion";
import { PropsWithChildren, useContext, useEffect, useRef } from "react";
import {
  CurrentSection,
  CurrentSectionType,
} from "@/context/CurrentSectionProvider";

interface ContainerPropsType {
  navTitle: CurrentSectionType;
}

export const Container = ({
  children,
  navTitle,
}: ContainerPropsType & PropsWithChildren) => {
  const ContainerRef = useRef(null);
  const { currentSection, setCurrentSection } = useContext(CurrentSection);

  useEffect(() => {
    if (ContainerRef.current === null) return;

    inView(
      ContainerRef.current,
      (info) => {
        if (info.isIntersecting) {
          setCurrentSection(navTitle);
        }
      },
      { margin: "-50%" }
    );
  }, [ContainerRef, currentSection, navTitle, setCurrentSection]);

  return <StyledContainer ref={ContainerRef}>{children}</StyledContainer>;
};

const StyledContainer = tw.section`
  flex
  flex-col
  gap-20
  relative
  min-h-screen
  justify-center
`;

export const Title = tw.button<{ isvisible: boolean }>`
  w-fit
  text-6xl
  font-semibold
  sm:text-lg
  text-left
  text-white
  ${({ isvisible }) =>
    isvisible ? "text-navVisible" : "text-navInVisible hover:text-navHover"};
  
`;

export const ImageWrap = tw(motion.div)<{ width: string; height: string }>`
  relative
  ${({ width }) => width}
  ${({ height }) => height}
`;
