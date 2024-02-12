import tw from "tailwind-styled-components";
import { Title } from "@/components/Common.styled";

const NAV_ITEMS = ["AboutMe", "Project", "Education", "Career"];

const Nav = () => {
  return (
    <NavContainer>
      {NAV_ITEMS.map((item) => (
        <Title key={item}>{item}</Title>
      ))}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = tw.nav`
  p-8
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
