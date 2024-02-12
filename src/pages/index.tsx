import IntroSection from "@/components/IntroSection";
import Nav from "@/components/Nav";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Education from "@/components/Education";
import Career from "@/components/Career";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <main>
      <IntroSection />

      <NavWrap>
        <Nav />
        <ContentWrap>
          <AboutMe />
          <Skill />
          <Project />
          <Education />
          <Career />
        </ContentWrap>
      </NavWrap>
    </main>
  );
}

const NavWrap = tw.div`
  bg-blackBg
  flex
  relative
  h-full
  p-10
  gap-[3.5rem]
  sm:flex-col
`;

const ContentWrap = tw.div`
  flex
  flex-col
  relative
  gap-[15rem]
`;
