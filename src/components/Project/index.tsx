import { Container, Title } from "@/components/Common.styled";
import { ProjectWrap } from "@/components/Project/Project.styled";
import ProjectItem from "@/components/Project/ProjectItem";

import SSVT_IMAGE from "@/assets/images/SSVT.png";
import MARKHADA_IMAGE from "@/assets/images/MARKHADA.png";
import PORTFOLIO_IMAGE from "@/assets/images/Portfolio.png";

const PROJECT_DATA = [
  {
    thumbnailURL: SSVT_IMAGE,
    title: "SSVT 홈페이지",
    desc: "SSVT 재직 당시 회사 홈페이지 개발",
  },
  {
    thumbnailURL: MARKHADA_IMAGE,
    title: "마크하다 상표등록 자동화 서비스",
    desc: "마크하다 상표등록 자동화 서비스 페이지 반응형 퍼블리싱 작업",
  },
  {
    thumbnailURL: PORTFOLIO_IMAGE,
    title: "포트폴리오 홈페이지",
    desc: "포트폴리오 홈페이지 기획 및 개발",
  },
];

const Project = () => {
  return (
    <Container>
      <Title>Project</Title>

      <ProjectWrap>
        {PROJECT_DATA.map((projectItem) => (
          <ProjectItem key={projectItem.title} projectItem={projectItem} />
        ))}
      </ProjectWrap>
    </Container>
  );
};

export default Project;
