import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPictures, getTextContents } from "../../pageSlices/homePageSlice";
import Drink from "../../ui/ProductCard";
import SectionTitleProps from "../../ui/SectionTitle";
import { BaseColumnFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
`;

const StyledFlex = styled(BaseColumnFlex)`
  gap: 2rem;
  @media (min-width: 834px) {
    align-items: start;
    flex-direction: row;
  }
`;

const StyledContent = styled.p`
  margin-top: 1rem;
  padding: 0 1rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.8px;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
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
  @media (min-width: 834px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function Drinks() {
  const pictures = useSelector(getPictures);
  const textContents = useSelector(getTextContents);

  if (textContents.length === 0) return null;
  const des = textContents[0] as string;

  return (
    <section>
      <StyledContainer>
        <SectionTitleProps>Drink Menu</SectionTitleProps>
        <StyledFlex>
          <div>
            <StyledDrinksListImg src={pictures[18]} alt="drink list" />
            <StyledContent>{des}</StyledContent>
          </div>

          <StyledDrinksListContainer>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Drink key={index} width="15rem" height="15rem" imgUrl="" />
              ))}
          </StyledDrinksListContainer>
        </StyledFlex>
      </StyledContainer>
    </section>
  );
}

export default Drinks;
