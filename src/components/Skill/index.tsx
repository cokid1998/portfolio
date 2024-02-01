import tw from "tailwind-styled-components";
import { Container, Title } from "@/components/StyledComponents";
import {
  StackBox,
  StackItem,
  StackImage,
  StackImageWrap,
  StackName,
} from "@/components/Skill/Skill.styled";
import { ImageWrap } from "@/components/StyledComponents";

// Front-End Icon
import HTML_ICON from "@/assets/icons/FrontEndStackIcon/HTML.svg";
import CSS_ICON from "@/assets/icons/FrontEndStackIcon/CSS.svg";
import JS_ICON from "@/assets/icons/FrontEndStackIcon/JS.svg";
import TS_ICON from "@/assets/icons/FrontEndStackIcon/TS.svg";
import React_ICON from "@/assets/icons/FrontEndStackIcon/React.svg";
import MUI_ICON from "@/assets/icons/FrontEndStackIcon/MUI.svg";
import ReactQuery_ICON from "@/assets/icons/FrontEndStackIcon/ReactQuery.svg";
import NextJS_ICON from "@/assets/icons/FrontEndStackIcon/Next.svg";
import TailwindCSS_ICON from "@/assets/icons/FrontEndStackIcon/TailwindCSS.svg";
import Redux_ICON from "@/assets/icons/FrontEndStackIcon/Redux.svg";
import ReactHookForm_ICON from "@/assets/icons/FrontEndStackIcon/reacthookform.svg";

// Back-End Icon
import Node_ICON from "@/assets/icons/BackEndStackIcon/Node.svg";
import Nest_ICON from "@/assets/icons/BackEndStackIcon/Nest.svg";
import MySQL_ICON from "@/assets/icons/BackEndStackIcon/MySQL.svg";

// Deploy Icon
import AWS_ICON from "@/assets/icons/Deploy/AWS.svg";
import Dokcer_ICON from "@/assets/icons/Deploy/Doker.svg";

const STACK_DATA = {
  "Front-End": [
    { name: "HTML", icon: HTML_ICON },
    { name: "CSS", icon: CSS_ICON },
    { name: "JS", icon: JS_ICON },
    { name: "TS", icon: TS_ICON },
    { name: "React", icon: React_ICON },
    { name: "Next", icon: NextJS_ICON },
    { name: "MUI", icon: MUI_ICON },
    { name: "React-Query", icon: ReactQuery_ICON },
    // { name: "Redux", icon: Redux_ICON },
    // { name: "React-hook-form", icon: ReactHookForm_ICON },
    // { name: "Tailwind", icon: TailwindCSS_ICON },
  ],
  "Back-End": [
    { name: "Node", icon: Node_ICON },
    { name: "Nest", icon: Nest_ICON },
    { name: "MySQL", icon: MySQL_ICON },
  ],
  Deploy: [
    { name: "AWS", icon: AWS_ICON },
    { name: "Docker", icon: Dokcer_ICON },
  ],
};

const Skill = () => {
  return (
    <Container>
      <Title>Skill</Title>

      <SkillWrap>
        {Object.entries(STACK_DATA).map(([job, stack]) => {
          return (
            <SkillBox key={job} job={job}>
              <JobTxt>{job}</JobTxt>
              <HorizontalHr />
              <StackBox>
                {stack.map((stackItem) => {
                  return (
                    <StackItem key={stackItem.name}>
                      <ImageWrap width="w-12" height="h-12">
                        <StackImage
                          src={stackItem.icon}
                          alt={`${stackItem.name}-icon`}
                          fill
                        />
                      </ImageWrap>
                      <StackName>{stackItem.name}</StackName>
                    </StackItem>
                  );
                })}
              </StackBox>
            </SkillBox>
          );
        })}
      </SkillWrap>
    </Container>
  );
};

const SkillWrap = tw.div`
  flex
  flex-col
  gap-24
  min-w-screen-md
  mx-auto
  lg:w-10/12
`;

const SkillBox = tw.div<{ job: string }>`
  flex
  gap-5
  items-center
  ${(props) => (props.job === "Back-End" ? "flex-row-reverse" : null)}
`;

const HorizontalHr = tw.hr`
  border-t-2
  border-blue-900
  w-1/2
  border-white
`;

const JobTxt = tw.h3`
  min-w-36
  text-3xl
  text-white
`;

export default Skill;
