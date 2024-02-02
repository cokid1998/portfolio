import {
  FirstSectionContainer,
  TypoWrapper,
} from "@/components/IntroSection/IntroSection.styled";
import { ProfileImageWrap } from "@/components/IntroSection/IntroSection.styled";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

// import PROFILE_IMAGE from "@/assets/images/ProfileImage.webp";

export default function IntroSection() {
  const isMobile = useIsMobile();
  return (
    <FirstSectionContainer>
      <TypoWrapper>
        <div className={`text-7xl z-1 relative`}>Front-End PortFolio</div>
        <div className={`text-5xl z-1 relative`}>
          프론트엔드 개발자 <strong>이태관</strong>입니다.
        </div>
        <div className={`text-2xl text-center relative`}>
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit error.
        </div>
      </TypoWrapper>

      <ProfileImageWrap isMobile={isMobile}>
        {/* <Image src={PROFILE_IMAGE} alt={""} fill></Image> */}
      </ProfileImageWrap>
    </FirstSectionContainer>
  );
}
