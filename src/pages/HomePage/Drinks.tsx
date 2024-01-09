import styled from "styled-components";
import { useSelector } from "react-redux";
import { getDrinks } from "../../services/state/homePageSlice";
import SectionTitleProps from "../../components/ui/SectionTitle";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import { DrinkType } from "../../types";
import Drink from "../../components/ProductCard";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

const StyledFlex = styled(BaseColumnFlex)`
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
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
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function Drinks() {
  const drinks = useSelector(getDrinks);

  if (drinks.length === 0) return null;
  let drinkMenu: DrinkType = { name: "", description: "", pictures: [] };
  drinks.forEach((drink) => {
    if (drink.name === "酒水牌") drinkMenu = drink;
  });

  return (
    <section>
      <StyledContainer>
        <SectionTitleProps>Drink Menu</SectionTitleProps>
        <StyledFlex>
          <div>
            <StyledDrinksListImg src={drinkMenu.pictures[0]} alt="drink list" />
            <StyledContent>
              {JSON.parse(drinkMenu.description)[0].src}
            </StyledContent>
          </div>

          <StyledDrinksListContainer>
            {drinks.map((drink, index) => {
              if (drink.name !== "酒水牌")
                return (
                  <Drink
                    key={index}
                    width="15rem"
                    height="15rem"
                    name={drink.name}
                    description={JSON.parse(drinkMenu.description)[0].src}
                    imgUrl={drink.pictures[0]}
                  />
                );
            })}
            {drinks.map((drink, index) => {
              if (drink.name !== "酒水牌")
                return (
                  <Drink
                    key={index}
                    width="15rem"
                    height="15rem"
                    name={drink.name}
                    description={JSON.parse(drinkMenu.description)[0].src}
                    imgUrl={drink.pictures[0]}
                  />
                );
            })}
          </StyledDrinksListContainer>
        </StyledFlex>
      </StyledContainer>
    </section>
  );
}

export default Drinks;
