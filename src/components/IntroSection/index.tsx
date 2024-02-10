import {
  FirstSectionContainer,
  TypoWrapper,
  IconWrap,
  AnimateTxt,
  MyNameTxt,
} from "@/components/IntroSection/IntroSection.styled";
import { ProfileImageWrap } from "@/components/IntroSection/IntroSection.styled";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

import PROFILE_IMAGE from "@/assets/images/PleaseBob.jpeg";
import GITHUB_ICON from "@/assets/icons/Etc/Github.svg";
import BLOG_ICON from "@/assets/icons/Etc/Blog.svg";

export default function IntroSection() {
  const isMobile = useIsMobile();

  return (
    <FirstSectionContainer>
      <TypoWrapper>
        <AnimateTxt>Front-End PortFolio</AnimateTxt>
        <MyNameTxt className={`text-5xl z-1`}>
          프론트엔드 개발자 <strong>이태관</strong>입니다.
        </MyNameTxt>
        <IconWrap>
          <Image src={GITHUB_ICON} alt="github-icon" width={"40"} />
          <Image src={BLOG_ICON} alt="blog-icon" width={"40"} />
        </IconWrap>
      </TypoWrapper>

      <Image src={PROFILE_IMAGE} alt={"profile-image"} width={400} />
    </FirstSectionContainer>
  );
}
