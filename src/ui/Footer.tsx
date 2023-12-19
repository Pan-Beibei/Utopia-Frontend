import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ $currentPath: string }>`
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
  ${(props) =>
    props.$currentPath !== "/"
      ? css`
          gap: 0;
          background-color: ${(props) => props.theme.colors.primary};
        `
      : ""}
`;

const StyledCard = styled.div<{ $currentPath: string }>`
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
  ${(props) =>
    props.$currentPath !== "/"
      ? css`
          color: ${props.theme.colors.white};
          background-color: transparent;
          width: 100%;
        `
      : ""}
`;

const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 2.56px;
`;

const StyledCardText = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledContactContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 1.6rem 1.6rem;
`;

const StyledContactList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledContactItem = styled.li`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledContainer $currentPath={currentPath}>
      <StyledCard $currentPath={currentPath}>
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
