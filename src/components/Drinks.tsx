import styled, { css } from "styled-components";

import { useText, InfoProps } from "../contexts/TextContext";
import Pictures from "../ui/Pictures";

const StyledDrinks = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledText = styled.div<{ $isMain: boolean }>`
  ${(props) => css`
    font-size: ${props.$isMain ? "1.8rem" : "1.5rem"};
    @media (min-width: 600px) {
      font-size: ${props.$isMain ? "2.8rem" : "2.5rem"};
    }
  `}
  color: var(--second-color);
`;

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

function Drinks() {
  const { getTextByIndex } = useText();

  const info: InfoProps = getTextByIndex(1);
  if (!info) return null;
  // console.log(info);
  const des = info.description as string;
  const desArr = des.split("|");

  return (
    <StyledDrinks>
      <Pictures
        imgs={["./block2/drinks.jpg", "./block2/drinks.webp"]}
        altstr="Drinks Info"
      />
      <StyledFlexRow>
        <StyledText $isMain={true}>{desArr[0]}</StyledText>
        <StyledText $isMain={false}>{"-----" + desArr[1]}</StyledText>
      </StyledFlexRow>
    </StyledDrinks>
  );
}

export default Drinks;
