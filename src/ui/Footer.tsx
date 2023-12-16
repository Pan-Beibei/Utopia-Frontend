// import { useState, useCallback } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { getTextContents } from "../../pageSlices/homePageSlice";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  @media (min-width: 834px) {
    gap: 0;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledCard = styled.div`
  display: flex;
  margin: 0 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 0.8rem;
  padding: 1.6rem;
  @media (min-width: 834px) {
    color: ${(props) => props.theme.colors.white};
    background-color: transparent;
    width: 100%;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 2.56px;
`;

const StyledCardText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledContactContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.6rem;
`;

const StyledContactList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledContactItem = styled.li`
  font-size: 1.4rem;
  font-weight: 500;
`;

function Footer() {
  // const textContents = useSelector(getTextContents);
  // const [open, setOpen] = useState(false);

  // const handleClick = useCallback(
  //   (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //     const target = event.target as Element;
  //     const spanElement = target.closest(".social");
  //     if (spanElement) {
  //       navigator.clipboard
  //         .writeText(spanElement.getAttribute("data-value") || "")
  //         .then(() => {
  //           console.log("Text copied to clipboard");
  //           setOpen(true); // 显示 Snackbar
  //         })
  //         .catch((err) => {
  //           console.log("Something went wrong", err);
  //         });
  //     }
  //   },
  //   []
  // );

  return (
    <StyledContainer>
      <StyledCard>
        <StyledTitle>六元咖啡馆</StyledTitle>
        <StyledCardText>
          咖啡店的初衷只是想做一杯咖啡，不图收益，简简单单，能够给所有来来往往的人幸福感。能够让所有来大理的人能够暂时停下脚步，不用想太多，只要简单的喝一杯咖啡来缓解一下。
        </StyledCardText>
      </StyledCard>
      <StyledContactContainer>
        <StyledTitle>联系我们</StyledTitle>
        <StyledContactList>
          <StyledContactItem>小红书: 6元咖啡</StyledContactItem>
          <StyledContactItem>B站: 6元咖啡</StyledContactItem>
          <StyledContactItem>抖音: 6元咖啡</StyledContactItem>
          <StyledContactItem>微信: 6元咖啡</StyledContactItem>
        </StyledContactList>
      </StyledContactContainer>
    </StyledContainer>
  );
}

export default Footer;
