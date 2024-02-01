import IntroSection from "@/components/IntroSection";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutMe />
      <Skill />
      <Project />
      <Education />
    </main>
  );
}
