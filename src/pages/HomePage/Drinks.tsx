import styled from "styled-components";
import { useSelector } from "react-redux";
import { getDrinks } from "../../services/state/homePageSlice";
import SectionTitleProps from "../../components/ui/SectionTitle";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { DrinkEnum } from "../../types";
import Drink from "../../components/Drink";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: flex-start;
    gap: 5rem;
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

const StyledSeries = styled(BaseColumnFlex)`
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

const StyledDrinksList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3rem;
  column-gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledSeriesTitle = styled(BaseFlex)`
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledIcon = styled.img`
  width: 2.6rem;
  height: 2.6rem;
`;

function Drinks() {
  const drinks = useSelector(getDrinks);

  console.log(drinks);

  if (Object.keys(drinks).length === 0) return null;

  return (
    <section>
      <StyledContainer>
        <SectionTitleProps>Drink Menu</SectionTitleProps>
        <StyledFlex>
          <div>
            <StyledDrinksListImg
              src={drinks[DrinkEnum.DRINK_MENU][0].pictures[0]}
              alt="drink list"
            />
            <StyledContent>
              {JSON.parse(drinks[DrinkEnum.DRINK_MENU][0].description)[0].src}
            </StyledContent>
          </div>
        </StyledFlex>
        <StyledSeries>
          <StyledSeriesTitle>
            <StyledIcon src="/icons/blackcoffee.svg" alt="" />
            <span>黑咖啡系列</span>
          </StyledSeriesTitle>
          <StyledDrinksList>
            {drinks[DrinkEnum.BLACK_COFFEE].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                />
              );
            })}
          </StyledDrinksList>
        </StyledSeries>
        <StyledSeries>
          <StyledSeriesTitle>
            <StyledIcon src="/icons/whitecoffee.svg" alt="" />
            <span>白咖啡系列</span>
          </StyledSeriesTitle>
          <StyledDrinksList>
            {drinks[DrinkEnum.WHITE_COFFEE].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                />
              );
            })}
          </StyledDrinksList>
        </StyledSeries>
        <StyledSeries>
          <StyledSeriesTitle>
            <StyledIcon src="/icons/greenplumwine.svg" alt="" />
            <span>青梅酒特调系列</span>
          </StyledSeriesTitle>
          <StyledDrinksList>
            {drinks[DrinkEnum.GREEN_PLUM_WINE].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                />
              );
            })}
          </StyledDrinksList>
        </StyledSeries>
        <StyledSeries>
          <StyledSeriesTitle>
            <StyledIcon src="/icons/greenplumwine.svg" alt="" />
            <span>再见小甜水系列</span>
          </StyledSeriesTitle>
          <StyledDrinksList>
            {drinks[DrinkEnum.SWEET_WATER].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                />
              );
            })}
            {drinks[DrinkEnum.OTHER_WATER].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                >
                  <StyledIcon src="/icons/greenplumwine.svg" alt="" />
                  <span>懂的都懂</span>
                </Drink>
              );
            })}
            {drinks[DrinkEnum.NOODLES].map((drink, index) => {
              return (
                <Drink
                  key={index}
                  name={drink.name}
                  price={drink.price}
                  description={JSON.parse(drink.description)[0].src}
                  imgUrl={drink.pictures[0]}
                >
                  <StyledIcon src="/icons/noodles.svg" alt="" />
                  <span>葱油面</span>
                </Drink>
              );
            })}
          </StyledDrinksList>
        </StyledSeries>
        <StyledSeries>
          <StyledDrinksList></StyledDrinksList>
        </StyledSeries>
      </StyledContainer>
    </section>
  );
}

export default Drinks;
