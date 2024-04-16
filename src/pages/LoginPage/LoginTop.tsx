import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import Logo from "../../components/ui/Logo";

const StyledFlex = styled(BaseFlex)`
  gap: 1rem;
  align-self: flex-start;
`;

const StyledColumnFlex = styled(BaseColumnFlex)`
  align-items: flex-start;
`;

const StyledTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.black};
`;

const StyledP = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.gray400};
`;

function LandingTop() {
  const { t } = useTranslation();

  return (
    <StyledFlex>
      <Logo />
      <StyledColumnFlex>
        <StyledTitle>{t("loginPage.mainTitle")}</StyledTitle>
        <StyledP>{t("loginPage.subTitle")}</StyledP>
      </StyledColumnFlex>
    </StyledFlex>
  );
}

export default LandingTop;
