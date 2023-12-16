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
`;

function OurMemories() {
  const pics = useSelector(getPictures).slice(0, 18);
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
          title="1111"
          content="222222"
          date="2020年12月23日"
          key={index}
        />
      ))}
    </StyledContainer>
  );
}

export default OurMemories;
