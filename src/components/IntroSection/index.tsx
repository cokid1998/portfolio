import {
  FirstSectionContainer,
  TypoWrapper,
  IconWrap,
  AnimateTxt,
  MyNameTxt,
} from "@/components/IntroSection/IntroSection.styled";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL, BLOG_URL } from "@/constants/paths";
import PROFILE_IMAGE from "@/assets/images/PleaseBob.jpeg";
import GITHUB_ICON from "@/assets/icons/Etc/Github.svg";
import BLOG_ICON from "@/assets/icons/Etc/Blog.svg";

import { OPACITY_0, OPACITY_1 } from "@/components/animation/Common";

export default function IntroSection() {
  const isMobile = useIsMobile();

  return (
    <FirstSectionContainer>
      <TypoWrapper>
        <AnimateTxt initial={OPACITY_0} animate={OPACITY_1}>
          Front-End PortFolio
        </AnimateTxt>
        <MyNameTxt>
          프론트엔드 개발자 <strong>이태관</strong>입니다.
        </MyNameTxt>
        <IconWrap>
          <Link href={GITHUB_URL} target="_blank">
            <Image src={GITHUB_ICON} alt="github-icon" width={"40"} />
          </Link>
          <Link href={BLOG_URL} target="_blank">
            <Image src={BLOG_ICON} alt="blog-icon" width={"40"} />
          </Link>
        </IconWrap>
      </TypoWrapper>

      <Image src={PROFILE_IMAGE} alt={"profile-image"} width={400} />
    </FirstSectionContainer>
  );
}
