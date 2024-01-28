import tw from "tailwind-styled-components";
import { Container, Title } from "@/components/StyledComponents";
const Skill = () => {
  return (
    <Container>
      <Title>Skill</Title>

      <SkillWrap>
        <SkillBox>
          <SkillTypeTxt>Front-End</SkillTypeTxt>
          <HorizontalHr />
          <StackBox>asdf</StackBox>
        </SkillBox>
      </SkillWrap>
    </Container>
  );
};

const SkillWrap = tw.div``;

const SkillBox = tw.div`
  flex
  gap-5
  items-center
`;

const HorizontalHr = tw.hr`
  border-t-2
  border-blue-900
  w-96
  border-white
`;

const StackBox = tw.div`
  border-2
  border-white
  rounded-lg
`;

const SkillTypeTxt = tw.h3`
  text-3xl
  text-white
`;

export default Skill;
