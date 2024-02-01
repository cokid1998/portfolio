import { ImageWrap } from "@/components/Common.styled";
import {
  ProjectItemWrap,
  ProjectItemTitle,
  ProjectItemDesc,
} from "@/components/Project/ProjectItem/ProjectItem.styled";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  thumbnailURL: StaticImageData;
  title: string;
  desc: string;
}

const ProjectItem = ({
  projectItem: { thumbnailURL, title, desc },
}: {
  projectItem: ProjectItemProps;
}) => {
  return (
    <ProjectItemWrap>
      <ImageWrap
        width="w-full"
        height="h-32"
        className={`rounded-lg overflow-hidden mb-10`}
      >
        <Image
          src={thumbnailURL}
          alt={`${title}-Project-Image`}
          fill
          objectFit="cover"
        />
      </ImageWrap>

      <ProjectItemTitle>{title}</ProjectItemTitle>

      <ProjectItemDesc>{desc}</ProjectItemDesc>
    </ProjectItemWrap>
  );
};

export default ProjectItem;
