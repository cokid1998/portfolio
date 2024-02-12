import { Container } from "@/components/Common.styled";
import {
  AboutMeWrap,
  InfoWrap,
  InfoBox,
  MyMindDescBox,
  MindTitle,
  MindSubTitle,
  MindTxt,
} from "@/components/AboutMe/AboutMe.styled";

export default function AboutMe() {
  return (
    <Container navTitle="AboutMe">
      <AboutMeWrap>
        <InfoWrap>
          <InfoBox>이태관</InfoBox>
          <InfoBox>010-7707-5801</InfoBox>
          <InfoBox>
            <a href="https://github.com/cokid1998">Github</a>
          </InfoBox>
          <InfoBox>
            <a href="https://cokidblog.tistory.com/">Blog</a>
          </InfoBox>
        </InfoWrap>

        <MyMindDescBox>
          <MindTitle>Lorem Ipsum is simply dummy</MindTitle>
          <MindSubTitle>SubTitle</MindSubTitle>
          <MindTxt>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.typesetting industry.typesetting industry.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.typesetting industry.typesetting industry.
          </MindTxt>

          <MindSubTitle>SubTitle</MindSubTitle>
          <MindTxt>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.typesetting industry.typesetting industry.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.typesetting industry.typesetting industry.
          </MindTxt>
        </MyMindDescBox>
      </AboutMeWrap>
    </Container>
  );
}
