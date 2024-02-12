import { PropsWithChildren, createContext, useState, Dispatch } from "react";

export type CurrentSectionType =
  | "IntroSection"
  | "AboutMe"
  | "Skill"
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

  return (
    <CurrentSection.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CurrentSection.Provider>
  );
};

export default CurrentSectionProvider;
