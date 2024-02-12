import { Container } from "@/components/Common.styled";
import { CareerWrap } from "@/components/Career/Career.styled";
import CareerItem from "@/components/Career/CareerItem";

const CAREER_DATA = [
  {
    title: "SSVT",
    during: "2022.07 ~ 2023.06",
    role: "개발팀 프론트엔드 개발자",
    jobDetail: ["사내 프로젝트 프론트엔드 담당", "자사 홈페이지 개발 담당"],
  },
];

const Career = () => {
  return (
    <Container navTitle="Career">
      <CareerWrap>
        {CAREER_DATA.map((careerItem) => {
          return <CareerItem key={careerItem.title} careerData={careerItem} />;
        })}
      </CareerWrap>
    </Container>
  );
};

export default Career;
