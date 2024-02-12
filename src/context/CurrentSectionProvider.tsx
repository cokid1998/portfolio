import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  useEffect,
} from "react";

type CurrentSectionType =
  | "IntroSection"
  | "AboutMe"
  | "Project"
  | "Education"
  | "Career";

interface CurrentSectionObjType {
  currentSection: CurrentSectionType;
  setCurrentSection: Dispatch<CurrentSectionType>;
}

export const CurrentSection = createContext<CurrentSectionObjType>({
  currentSection: "IntroSection",
  setCurrentSection: () => {},
});

const CurrentSectionProvider = ({ children }: PropsWithChildren) => {
  const [currentSection, setCurrentSection] =
    useState<CurrentSectionType>("IntroSection");

  useEffect(() => {
    console;
  }, [currentSection]);

  return (
    <CurrentSection.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CurrentSection.Provider>
  );
};

export default CurrentSectionProvider;
