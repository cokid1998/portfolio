import { Container, Title } from "@/components/Common.styled";
import { EducationWrap } from "@/components/Education/Education.styled";
import EducationItem from "@/components/Education/EducationItem";

const EDUCATION_DATA = [
  {
    title: "조선대학교 경영학과",
    during: "2017.03 ~ 2025.09",
    detail: "~~~졸업",
    studyInfo: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptate iure eveniet!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptate iure eveniet",
    ],
  },
  {
    title: "코드스테이츠",
    during: "2021.07 ~ 2022.01",
    detail: "소프트웨어 엔지니어링 코스 34기 수료",
    studyInfo: [
      "Javascript, react, nodeJS등 기초 웹개발 지식 학습",
      "팀 프로젝트 2회 경험",
    ],
  },
];

const Education = () => {
  return (
    <Container navTitle="Education">
      <EducationWrap>
        {EDUCATION_DATA.map((item) => {
          return <EducationItem key={item.title} educationData={item} />;
        })}
      </EducationWrap>
    </Container>
  );
};

export default Education;
