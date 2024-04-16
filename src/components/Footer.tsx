import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ $currentPath: string }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
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
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
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

const StyledRecordNumber = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
`;

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledContainer $currentPath={currentPath}>
      <StyledCard $currentPath={currentPath}>
        <StyledTitle>六元咖啡馆</StyledTitle>
        <StyledCardText>
          我们只是一个普通人，我们总要面对可能此生再也不会赚到非常多钱的事实，但是我们依然需要认清这个世界的真相，并且热爱生活，所以我做了这个咖啡馆，店里的猫猫狗狗男生宿舍里的人，喝咖啡的朋友，院子里的柿子树，我们一起寄居在这个咖啡馆里，相互取暖，温暖着彼此。
        </StyledCardText>
      </StyledCard>
      <StyledContactContainer>
        <StyledTitle>联系馆长</StyledTitle>
        <StyledContactList>
          <StyledContactItem>小红书: 六元咖啡馆长</StyledContactItem>
          <StyledContactItem>B站: 953168205</StyledContactItem>
          <StyledContactItem>抖音: 190627081</StyledContactItem>
          <StyledContactItem>微信: sixyuancoffee</StyledContactItem>
        </StyledContactList>
      </StyledContactContainer>
      <StyledRecordNumber>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          苏ICP备2024087589号
        </a>
      </StyledRecordNumber>
    </StyledContainer>
  );
}

export default Footer;
