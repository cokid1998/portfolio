import {
  EducationItemWrap,
  EducationTitle,
  EducationDuringTxt,
  EducationDetailTxt,
  EducationStudyInfo,
} from "@/components/Education/EducationItem/EducationItem.styled";

interface EducationItemProps {
  title: string;
  during: string;
  detail: string;
  studyInfo: string[];
}

const EducationItem = ({
  educationData: { title, during, detail, studyInfo },
}: {
  educationData: EducationItemProps;
}) => {
  return (
    <EducationItemWrap>
      <EducationTitle>{title}</EducationTitle>
      <EducationDuringTxt>{during}</EducationDuringTxt>
      <EducationDetailTxt>{detail}</EducationDetailTxt>

      <ul className={`list-disc pl-4`}>
        {studyInfo.map((studyInfoItem) => {
          return (
            <EducationStudyInfo key={studyInfoItem}>
              {studyInfoItem}
            </EducationStudyInfo>
          );
        })}
      </ul>
    </EducationItemWrap>
  );
};

export default EducationItem;
