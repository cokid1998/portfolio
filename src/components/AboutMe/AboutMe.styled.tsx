import tw from "tailwind-styled-components";

export const ContentWrap = tw.div`
  flex
  justify-between
  gap-44
  mx-auto
`;

export const InfoWrap = tw.div`
  flex
  flex-col
  justify-between
  w-fit
`;

export const InfoBox = tw.div`
  border-2
  border-white
  text-3xl
  text-white
  p-4
  text-center
  rounded-2xl
  min-w-fit
`;

export const MyMindDescBox = tw.div`
  border-2
  border-white
  rounded-2xl
  p-8
  flex-1
  last:*:mb-0
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
