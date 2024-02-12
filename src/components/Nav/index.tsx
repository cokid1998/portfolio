import tw from "tailwind-styled-components";
import { Title } from "@/components/Common.styled";
import { useContext } from "react";
import { CurrentSection } from "@/context/CurrentSectionProvider";
import { CurrentSectionType } from "@/context/CurrentSectionProvider";

const NAV_ITEMS: CurrentSectionType[] = [
  "AboutMe",
  "Skill",
  "Project",
  "Education",
  "Career",
];

const Nav = () => {
  const { currentSection } = useContext(CurrentSection);

  const navAndCurrentSection = (navTitle: CurrentSectionType) => {
    if (navTitle === currentSection) return true;
    return false;
  };

  return (
    <NavContainer>
      {NAV_ITEMS.map((navTitle) => (
        <Title isvisible={navAndCurrentSection(navTitle)} key={navTitle}>
          {navTitle}
        </Title>
      ))}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = tw.nav`
  pt-5
  sticky
  top-0
  flex
  flex-col
  gap-3
  h-screen
  sm:flex-row
  sm:h-auto
  sm:p-3
`;
