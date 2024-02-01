import {
  CareerDuringTxt,
  CareerItemWrap,
  CareerTitle,
  CareerRoleTxt,
  CareerJobDetailTxt,
} from "@/components/Career/CareerItem/CareerItem.styled";

interface CareerItemProps {
  title: string;
  during: string;
  role: string;
  jobDetail: string[];
}

const CareerItem = ({
  careerData: { title, during, role, jobDetail },
}: {
  careerData: CareerItemProps;
}) => {
  return (
    <CareerItemWrap>
      <CareerTitle>{title}</CareerTitle>

      <CareerDuringTxt>{during}</CareerDuringTxt>

      <CareerRoleTxt>{role}</CareerRoleTxt>

      <ul className={`list-disc pl-4`}>
        {jobDetail.map((jobDetailItem) => {
          return (
            <CareerJobDetailTxt key={jobDetailItem}>
              {jobDetail}
            </CareerJobDetailTxt>
          );
        })}
      </ul>
    </CareerItemWrap>
  );
};

export default CareerItem;
