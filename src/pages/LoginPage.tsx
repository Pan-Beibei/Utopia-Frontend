import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
import { BaseColumnFlex, BaseFlex } from "../styles/BaseStyles";
import LandingTop from "../components/login/LoginTop";
import LoginPromptLabel from "../components/login/LoginPromptLabel";
import LoginBotton from "../components/login/LoginBotton";
import RegisterForm from "../components/login/RegisterForm";
import LoginForm from "../components/login/LoginForm";
import { AuthFieldsProps } from "../components/login/LoginCommon";

const StyledContainer = styled(BaseFlex)`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledDiv = styled(BaseColumnFlex)`
  gap: 2rem;
`;

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AuthFieldsProps>(); //, formState, getValues, reset
  function handleSwitch() {
    setIsLogin((isLogin) => !isLogin);
  }

  function onSubmit(data: AuthFieldsProps) {
    console.log("onSubmit called", data);
    console.log(errors.username?.message);
  }

  return (
    <StyledContainer>
      <StyledDiv>
        <LandingTop />
        {isLogin ? (
          <LoginForm register={register} getValues={getValues} />
        ) : (
          <RegisterForm register={register} getValues={getValues} />
        )}

        <LoginPromptLabel isLogin={isLogin} onSwitch={handleSwitch} />
        <LoginBotton onClick={handleSubmit(onSubmit)}>
          {isLogin ? "登录" : "注册"}
        </LoginBotton>
      </StyledDiv>
    </StyledContainer>
  );
}

export default LoginPage;
