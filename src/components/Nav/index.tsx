import tw from "tailwind-styled-components";
import { Title } from "@/components/Common.styled";

const Nav = () => {
  return (
    <NavContainer>
      <Title>AboutMe</Title>
      <Title>Project</Title>
      <Title>Education</Title>
      <Title>Career</Title>
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
