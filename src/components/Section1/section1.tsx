import tw from "tailwind-styled-components";

export default function Section1() {
  return (
    <FirstSectionContainer>
      <TypoWrapper>
        <RotationCircle />
        <div className={`text-6xl z-1 relative`}>Front-End PortFolio</div>
        <div className={`text-5xl z-1 relative`}>
          프론트엔드 개발자 <strong>이태관</strong>입니다.
        </div>
        <div className={`text-2xl text-center relative`}>
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit error.
        </div>
      </TypoWrapper>

      <div className={`w-96 h-96 border-blackBg border-2`}>사진</div>
    </FirstSectionContainer>
  );
}

const FirstSectionContainer = tw.section`
  min-h-screen
  bg-grayBg
  flex
  justify-center
  items-center
  flex-col
  gap-28
`;

const TypoWrapper = tw.div`
  relative
  flex
  flex-col
  gap-5
  justify-center
  items-center
`;

const RotationCircle = tw.div`
  w-96
  h-96
  border-borderGreen
  border-4
  rounded-full
  absolute
  z-0
`;
