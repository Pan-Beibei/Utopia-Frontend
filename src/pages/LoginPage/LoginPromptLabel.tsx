import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SwitchAccountPrompt = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.black};
`;

const StyledLoginLink = styled.span`
  color: ${(props) => props.theme.colors.primary};
  padding-left: 1rem;
  cursor: pointer;
`;

interface LoginPromptLabelProps {
  isLogin: boolean;
  onSwitch: () => void;
}

function LoginPromptLabel({ isLogin, onSwitch }: LoginPromptLabelProps) {
  const { t } = useTranslation();

  return (
    <SwitchAccountPrompt>
      {isLogin ? t("loginPage.noAccount") : t("loginPage.hasAccount")}
      <StyledLoginLink onClick={onSwitch}>
        {isLogin
          ? t("loginPage.clickToRegister")
          : t("loginPage.returnToLogin")}
      </StyledLoginLink>
    </SwitchAccountPrompt>
  );
}

export default LoginPromptLabel;
