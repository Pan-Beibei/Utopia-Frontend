import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../styles/BaseStyles";

const StyledDrink = styled(BaseColumnFlex)`
  gap: 1rem;
  align-items: flex-start;
`;

const StyledForNameAndPrice = styled(BaseFlex)`
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledImg = styled.img`
  border-radius: 0.8rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    // width: 15rem;
    // height: 15rem;
  }
`;

const StyledDescription = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledSeriesTitle = styled(BaseFlex)`
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

interface DrinkProps {
  children?: React.ReactNode;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

function Drink({ children, name, price, imgUrl, description }: DrinkProps) {
  return (
    <StyledDrink>
      <StyledSeriesTitle>{children}</StyledSeriesTitle>
      <StyledImg src={imgUrl} alt="drink image" />
      <StyledForNameAndPrice>
        <span>{name}</span>
        <span>{price}￥</span>
      </StyledForNameAndPrice>
      <StyledDescription>{description}</StyledDescription>
    </StyledDrink>
  );
}

export default Drink;
