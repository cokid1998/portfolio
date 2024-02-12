import tw from "tailwind-styled-components";

export const AboutMeWrap = tw.div`
  flex
  justify-between
  gap-20
`;

export const InfoWrap = tw.div`
  flex
  flex-col
  justify-between
  w-fit
`;

export const InfoBox = tw.div`
  border-2
  bg-boxBg
  text-3xl
  text-white
  p-4
  text-center
  rounded-2xl
  min-w-fit
`;

export const MyMindDescBox = tw.div`
  rounded-2xl
  p-8
  flex-1
  last:*:mb-0
  bg-boxBg
`;

export const MindTitle = tw.h3`
  text-4xl
  font-semibold
  pb-[3rem]
  text-white
  text-center
`;

export const MindSubTitle = tw.h4`
  text-2xl
  font-semibold
  pb-[0.8rem]
  text-white
`;

export const MindTxt = tw.p`
  text-lg
  mb-10
  text-white
`;
