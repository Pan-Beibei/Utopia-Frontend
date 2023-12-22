import { useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../styles/BaseStyles";
import LandingTop from "../components/login/LoginTop";
import LoginPromptLabel from "../components/login/LoginPromptLabel";
import LoginBotton from "../components/login/LoginBotton";
import RegisterForm from "../components/login/RegisterForm";
import LoginForm from "../components/login/LoginForm";

const StyledContainer = styled(BaseFlex)`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledDiv = styled(BaseColumnFlex)`
  gap: 2rem;
`;

// const Styled

// const PHONE_REG = /^1[3456789]\d{9}$/;
// const PASSWORD_REG = /^[A-Za-z0-9]+$/;

function LoginPage() {
  // const [isLogin, setIsLogin] = useState(true);
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const [accountError, setAccountError] = useState(false);
  // const [accountHelperText, setAccountHelperText] = useState("");
  // const [passwordError, setPasswordError] = useState(false);
  // const [passwordHelperText, setPasswordHelperText] = useState("");
  // const [passwordConfirmError, setConfirmPasswordError] = useState(false);
  // const [passwordConfirmHelperText, setConfirmPasswordHelperText] =
  //   useState("");

  // const validate = useCallback(() => {
  //   if (!PHONE_REG.test(phone)) {
  //     setAccountError(true);
  //     setAccountHelperText("请输入正确的手机号");
  //     return false;
  //   }
  //   setAccountError(false);
  //   setAccountHelperText("");

  //   if (password.length < 6 || !PASSWORD_REG.test(password)) {
  //     setPasswordError(true);
  //     setPasswordHelperText("密码必须是6位以上的字母或数字");
  //     return false;
  //   }
  //   setPasswordError(false);
  //   setPasswordHelperText("");

  //   if (!isLogin && password !== confirmPassword) {
  //     setConfirmPasswordError(true);
  //     setConfirmPasswordHelperText("两次输入的密码不一致");
  //     return false;
  //   }
  //   return true;
  // }, [phone, password, confirmPassword, isLogin]);

  // function handleLogin() {
  //   if (!validate()) {
  //     return;
  //   }
  //   // 执行登录操作
  // }

  // function handleToggleLogin() {
  //   setIsLogin(!isLogin);
  // }

  const [isLogin, setIsLogin] = useState(true);

  function handleSwitch() {
    setIsLogin((isLogin) => !isLogin);
  }

  return (
    <StyledContainer>
      <StyledDiv>
        <LandingTop />
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <LoginPromptLabel isLogin={isLogin} onSwitch={handleSwitch} />
        <LoginBotton>{isLogin ? "登录" : "注册"}</LoginBotton>
      </StyledDiv>
    </StyledContainer>
  );
}

export default LoginPage;
