import {
  IntroSectionContainer,
  TypoWrap,
  IconWrap,
  AnimateTxt,
  MyNameTxt,
} from "@/components/IntroSection/IntroSection.styled";
import { ImageWrap } from "@/components/Common.styled";
import Image from "next/image";
import Link from "next/link";

import { GITHUB_URL, BLOG_URL } from "@/constants/paths";
import PROFILE_IMAGE from "@/assets/images/PleaseBob.jpeg";
import GITHUB_ICON from "@/assets/icons/Etc/Github.svg";
import BLOG_ICON from "@/assets/icons/Etc/Blog.svg";
import { motion } from "framer-motion";
import {
  TypoWrapVariants,
  AnimateTxtVariants,
  MyNameTxtVariants,
  IconWrapVariants,
  ImageWrapVariants,
  IconLinkHoverVariants,
} from "@/components/IntroSection/IntroSection.ani";

import ScrollDown from "@/components/IntroSection/ScrollDown";
import useIsMobile from "@/hooks/useIsMobile";

export default function IntroSection() {
  const isMobile = useIsMobile();

  return (
    <IntroSectionContainer initial="init" animate="animate">
      <TypoWrap variants={TypoWrapVariants}>
        <AnimateTxt variants={AnimateTxtVariants}>
          Front-End PortFolio
        </AnimateTxt>

        <MyNameTxt variants={MyNameTxtVariants}>
          프론트엔드 개발자 <strong>이태관</strong>입니다.
        </MyNameTxt>

        <IconWrap variants={IconWrapVariants}>
          <motion.div whileHover={IconLinkHoverVariants}>
            <Link href={GITHUB_URL} target="_blank">
              <Image src={GITHUB_ICON} alt="github-icon" width={"32"} />
            </Link>
          </motion.div>
          <motion.div whileHover={IconLinkHoverVariants}>
            <Link href={BLOG_URL} target="_blank">
              <Image src={BLOG_ICON} alt="blog-icon" width={"40"} />
            </Link>
          </motion.div>
        </IconWrap>
      </TypoWrap>

      <ImageWrap
        width={isMobile ? "w-full" : "w-96"}
        height="h-[calc(100vh-40vh)]"
        variants={ImageWrapVariants}
      >
        <Image src={PROFILE_IMAGE} alt={"profile-image"} fill />
      </ImageWrap>

      <ScrollDown />
    </IntroSectionContainer>
  );
}
