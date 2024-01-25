import tw from "tailwind-styled-components";
import { Container, Title } from "@/components/StyledComponents/index";

export default function AboutMe() {
  return (
    <Container>
      <Title>AboutMe</Title>

      <ContentWrap>
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
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.typesetting industry.typesetting industry.
          </MindTxt>
        </MyMindDescBox>
      </ContentWrap>
    </Container>
  );
}

const ContentWrap = tw.div`
  flex
  justify-between
  gap-44
  mx-auto
`;

const InfoWrap = tw.div`
  flex
  flex-col
  gap-16
  w-fit
`;

const InfoBox = tw.div`
  border-2
  border-white
  text-3xl
  text-white
  p-4
  text-center
  rounded-2xl
  min-w-fit
  hover:text-borderGreen
`;

const MyMindDescBox = tw.div`
  border-2
  border-white
  rounded-2xl
  p-8
  flex-1
  last:*:mb-0
`;

const MindTitle = tw.h3`
  text-4xl
  font-semibold
  pb-[3rem]
  text-white
  text-center
`;

const MindSubTitle = tw.h4`
  text-2xl
  font-semibold
  pb-[0.8rem]
  text-white
`;

const MindTxt = tw.p`
  text-lg
  mb-10
  text-white
`;
