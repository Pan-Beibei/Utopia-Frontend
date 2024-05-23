import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <StyledContainer $currentPath={currentPath}>
      <StyledCard $currentPath={currentPath}>
        <StyledTitle>{t("footer.title")}</StyledTitle>
        <StyledCardText>{t("footer.text")}</StyledCardText>
      </StyledCard>
      <StyledContactContainer>
        <StyledTitle> {t("footer.ContactUs")}</StyledTitle>
        <StyledContactList>
          <StyledContactItem>
            {t("footer.Xiaohongshu")}: 六元咖啡馆长
          </StyledContactItem>
          <StyledContactItem>
            {t("footer.Bilibili")}: 953168205
          </StyledContactItem>
          <StyledContactItem>{t("footer.TikTok")}: 190627081</StyledContactItem>
          <StyledContactItem>
            {t("footer.Wechat")}: sixyuancoffee
          </StyledContactItem>
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
