import styled from "styled-components";

import { getPictures } from "../../services/state/homePageSlice";
import { useSelector } from "react-redux";
import SectionTitleProps from "../../components/ui/SectionTitle";
import Story from "../../components/Story";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import StoryNavigationButton from "./StoryNavigationButton";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

const StyledArrowFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;
const StyledFlex = styled(BaseColumnFlex)`
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const StyledRight = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

const StyledLeft = styled(StyledRight)``;

function OurMemories() {
  const pics = useSelector(getPictures).slice(0, 18);

  const titleStr =
    "哈佛学霸公开私生活，引900万人围观：空闲时间，决定你的人生上限";
  const contentStr =
    "还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。";

  return (
    <section>
      <StyledContainer>
        <SectionTitleProps>Story about us</SectionTitleProps>
        <StyledArrowFlex>
          <StoryNavigationButton leftOrRight="right" />
          <StoryNavigationButton leftOrRight="left" />
        </StyledArrowFlex>
        <StyledFlex>
          <StyledRight>
            <StoryNavigationButton leftOrRight="right" />
          </StyledRight>
          {pics.slice(0, 3).map((pic, index) => (
            <Story
              imgUrl={pic}
              title={titleStr}
              content={contentStr}
              date="2020年12月23日"
              key={index}
            />
          ))}
          <StyledLeft>
            <StoryNavigationButton leftOrRight="left" />
          </StyledLeft>
        </StyledFlex>
      </StyledContainer>
    </section>
  );
}

export default OurMemories;
