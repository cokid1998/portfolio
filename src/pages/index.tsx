import RotationCircle from "@/src/Section1/RotationCircle";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <main>
      <FirstSection>
        <div
          className={`w-96 h-96 border-circleBorderGreen border-4 rounded-full absolute`}
        />
        <div className={`text-6xl`}>LEE TAE GWAN</div>
        <div className={`text-5xl`}>PORTFOLIO</div>
        <div className={`text-lg`}>cokid98@gmail.com</div>
      </FirstSection>
    </main>
  );
}

const FirstSection = tw.section`
  flex
  flex-col
  gap-5
  justify-center
  items-center
  min-h-screen
  bg-grayBg
  font-semibold
  relative
`;
