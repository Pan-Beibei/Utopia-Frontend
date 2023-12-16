import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPictures, getTextContents } from "../../pageSlices/homePageSlice";
import Drink from "../../ui/Drink";
import SectionTitleProps from "../../ui/SectionTitle";

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

const StyledContent = styled.p`
  padding: 0 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: ${(props) => props.theme.colors.text};
`;

const StyledDrinksListImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;

const StyledDrinksListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`;

function Drinks() {
  const pictures = useSelector(getPictures);
  const textContents = useSelector(getTextContents);

  if (textContents.length === 0) return null;
  const des = textContents[0] as string;

  return (
    <StyledContainer>
      <SectionTitleProps>Drink Menu</SectionTitleProps>
      <StyledDrinksListImg src={pictures[18]} alt="drink list" />
      <StyledContent>{des}</StyledContent>
      <StyledDrinksListContainer>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Drink key={index} width="15rem" height="15rem" imgUrl="" />
          ))}
      </StyledDrinksListContainer>
    </StyledContainer>
  );
}

export default Drinks;
