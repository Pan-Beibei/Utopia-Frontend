import styled from "styled-components";

interface StyledDrinkProps {
  $width: string;
  $height: string;
}

const StyledDrink = styled.div<StyledDrinkProps>`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledNameBg = styled.div`
  background-color: #f1f2eb;
  min-height: 2.4rem;
  min-width: 7.1rem;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.8rem;
  padding: 0.2rem 0.6rem;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.25);

  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledName = styled.div`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.black};
`;

interface DrinkProps {
  imgUrl: string;
  width: string;
  height: string;
}

function Drink({ imgUrl, width, height }: DrinkProps) {
  console.log(imgUrl);

  return (
    <StyledDrink $width={width} $height={height}>
      <StyledImg src="./block3/pic-1.jpg" alt="drink image"></StyledImg>
      <StyledNameBg>
        <StyledName>卡布奇诺</StyledName>
      </StyledNameBg>
    </StyledDrink>
  );
}

export default Drink;
