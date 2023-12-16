import styled from "styled-components";

import { getPictures } from "../../pageSlices/homePageSlice";
import { useSelector } from "react-redux";
import SectionTitleProps from "../../ui/SectionTitle";
import Story from "../../ui/Story";

const StyledContainer = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledArrowFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
`;

function OurMemories() {
  const pics = useSelector(getPictures).slice(0, 18);

  const titleStr =
    "哈佛学霸公开私生活，引900万人围观：空闲时间，决定你的人生上限";
  const contentStr =
    "还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。";

  return (
    <StyledContainer>
      <SectionTitleProps>Story about us</SectionTitleProps>
      <StyledArrowFlex>
        <img src="./icons/right-arrow.svg" alt="right-arrow" />
        <img src="./icons/left-arrow.svg" alt="left-arrow" />
      </StyledArrowFlex>
      {pics.slice(0, 3).map((pic, index) => (
        <Story
          imgUrl={pic}
          title={titleStr}
          content={contentStr}
          date="2020年12月23日"
          key={index}
        />
      ))}
    </StyledContainer>
  );
}

export default OurMemories;
