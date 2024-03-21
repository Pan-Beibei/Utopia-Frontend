import styled from "styled-components";
import { useSelector } from "react-redux";
import { getDrinks } from "../../services/state/homePageSlice";
import SectionTitleProps from "../../components/ui/SectionTitle";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import { DrinkEnum, DrinkType } from "../../types";
import Drink from "../../components/Drink";
import DrinkSeries from "../../components/DrinkSeries";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 0 2rem;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: flex-start;
    gap: 5rem;
    padding: 0 5rem;
  }
`;
const StyledDrinkMenuGroup = styled(BaseColumnFlex)`
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    align-items: start;
    flex-direction: row;
    gap: 5rem;
  }
`;
const StyledDrinksListImg = styled.img`
  border-radius: 0.8rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 52.8rem;
    max-height: 60.5rem;
  }
`;

const StyledDrinksReviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledDrinksReview = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.8rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding: 2.4rem;
`;

function replaceIPWithLocalhost(url: string) {
  return url.replace("8.138.107.174", "localhost:3000");
}

const DrinkList = ({ drinks }: { drinks: DrinkType[] }) => {
  drinks.forEach((drink) => console.log(drink.pictures[0]));

  return (
    <>
      {drinks.map((drink: DrinkType) => (
        <Drink
          key={drink.name}
          name={drink.name}
          price={drink.price}
          description={JSON.parse(drink.description)[0]?.src}
          imgUrl={replaceIPWithLocalhost(drink.pictures[0])}
        />
      ))}
    </>
  );
};

function Drinks() {
  const drinks = useSelector(getDrinks);

  if (Object.keys(drinks).length === 0) return <div>饮料数据错误！！</div>;

  const drinkMenuImg = drinks[DrinkEnum.DRINK_MENU][0].pictures[0];
  const drinkMenuText = JSON.parse(drinks[DrinkEnum.DRINK_MENU][0].description);
  if (drinkMenuImg === undefined || drinkMenuText === undefined)
    return <div>酒水单错误！！</div>;

  const blackcoffee = drinks[DrinkEnum.BLACK_COFFEE];
  if (blackcoffee === undefined) return <div>黑咖啡错误！！</div>;

  const whitecoffee = drinks[DrinkEnum.WHITE_COFFEE];
  if (whitecoffee === undefined) return <div>白咖啡错误！！</div>;

  const greenplumwine = drinks[DrinkEnum.GREEN_PLUM_WINE];
  if (greenplumwine === undefined) return <div>青梅酒错误！！</div>;

  const sweetwater = drinks[DrinkEnum.SWEET_WATER];
  if (sweetwater === undefined) return <div>小甜水错误！！</div>;

  const beer = drinks[DrinkEnum.BEER];
  if (beer === undefined) return <div>啤酒错误！！</div>;

  return (
    <section>
      <StyledContainer>
        <SectionTitleProps>Drink Menu</SectionTitleProps>
        <StyledDrinkMenuGroup>
          <StyledDrinksListImg
            src={replaceIPWithLocalhost(drinkMenuImg)}
            alt="drink list"
          />
          <StyledDrinksReviewList>
            {drinkMenuText.map(({ src }: { src: string }, index: number) => {
              return <StyledDrinksReview key={index}>{src}</StyledDrinksReview>;
            })}
          </StyledDrinksReviewList>
        </StyledDrinkMenuGroup>
        <DrinkSeries seriesName="黑咖啡系列" iconUrl="/icons/blackcoffee.svg">
          <DrinkList drinks={blackcoffee} />
        </DrinkSeries>

        <DrinkSeries seriesName="白咖啡系列" iconUrl="/icons/whitecoffee.svg">
          <DrinkList drinks={whitecoffee} />
        </DrinkSeries>

        <DrinkSeries
          seriesName="青梅酒特调系列"
          iconUrl="/icons/greenplumwine.svg"
        >
          <DrinkList drinks={greenplumwine} />
        </DrinkSeries>

        <DrinkSeries
          seriesName="再见小甜水系列"
          iconUrl="/icons/sweetwater.svg"
        >
          <DrinkList drinks={sweetwater} />
        </DrinkSeries>
        <DrinkSeries seriesName="精酿啤酒系列" iconUrl="/icons/otherwater.svg">
          <DrinkList drinks={beer} />
        </DrinkSeries>
        <DrinkSeries seriesName="懂的都懂" iconUrl="/icons/otherwater.svg">
          <DrinkList drinks={drinks[DrinkEnum.OTHER_WATER]} />
        </DrinkSeries>
        <DrinkSeries seriesName="葱油面" iconUrl="/icons/noodles.svg">
          <DrinkList drinks={drinks[DrinkEnum.NOODLES]} />
        </DrinkSeries>
      </StyledContainer>
    </section>
  );
}

export default Drinks;
