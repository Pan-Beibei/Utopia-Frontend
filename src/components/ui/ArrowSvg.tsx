import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ $bgColor: string; $boxShadow?: string }>`
  ${(props) => css`
    background-color: ${props.$bgColor};
    box-shadow: ${props.$boxShadow};
  `}
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
`;

interface ArrowSvgProps {
  leftOrRight: "left" | "right";
  bgColor: string;
  boxShadow?: string;
  fillColor?: string;
}

function ArrowSvg({
  leftOrRight,
  bgColor,
  boxShadow,
  fillColor,
}: ArrowSvgProps) {
  return (
    <StyledContainer $bgColor={bgColor} $boxShadow={boxShadow}>
      {leftOrRight === "left" && (
        <svg
          width="36"
          height="38"
          viewBox="0 0 36 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M21.0997 18L12.8501 10.045L14.5 8.45401L23.5746 17.2045C24.0302 17.6438 24.0302 18.3561 23.5746 18.7955L14.5 27.5459L12.8501 25.9549L21.0997 18Z"
            fill={fillColor ? fillColor : "black"}
          />
        </svg>
      )}
      {leftOrRight === "right" && (
        <svg
          width="36"
          height="38"
          viewBox="0 0 36 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14.9003 18L23.1499 25.955L21.5 27.546L12.4254 18.7955C11.9698 18.3562 11.9698 17.6439 12.4254 17.2045L21.5 8.4541L23.1499 10.0451L14.9003 18Z"
            fill={fillColor ? fillColor : "black"}
          />
        </svg>
      )}
    </StyledContainer>
  );
}

export default ArrowSvg;
