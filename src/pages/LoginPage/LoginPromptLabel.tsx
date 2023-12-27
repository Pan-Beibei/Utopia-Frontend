import styled from "styled-components";

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
  return (
    <SwitchAccountPrompt>
      {isLogin ? "还没有账号" : "已有帐号"},
      <StyledLoginLink onClick={onSwitch}>
        {isLogin ? "点击注册" : "返回登录"}
      </StyledLoginLink>
    </SwitchAccountPrompt>
  );
}

export default LoginPromptLabel;
