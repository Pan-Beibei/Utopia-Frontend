import styled from "styled-components";

interface StyledProductProps {
  $width: string;
  $height: string;
}

const StyledDrink = styled.div<StyledProductProps>`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  min-width: ${(props) => props.$width};
  min-height: ${(props) => props.$height};
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledNameBg = styled.div`
  background-color: #f1f2eb;
  min-height: 2.4rem;
  min-width: 7.1rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 400;
  border-radius: 0.8rem;
  padding: 0.2rem 0.6rem;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.25);

  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledName = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.black};
`;

interface ProductProps {
  name: string;
  imgUrl: string;
  description?: string;
  width: string;
  height: string;
}

function Product({ name, imgUrl, description, width, height }: ProductProps) {
  return (
    <StyledDrink $width={width} $height={height}>
      <StyledImg src={imgUrl} alt={description}></StyledImg>
      <StyledNameBg>
        <StyledName>{name}</StyledName>
      </StyledNameBg>
    </StyledDrink>
  );
}

export default Product;
