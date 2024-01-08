import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import LandingTop from "./LoginTop";
import LoginPromptLabel from "./LoginPromptLabel";
import LoginBotton from "./LoginBotton";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { AuthFieldsProps } from "./LoginCommon";
import { loginUser, registerUser, AuthFunc } from "../../services/api/auth";
import store from "../../store/store";
import { setUser } from "../../services/state/userSlice";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const StyledContainer = styled(BaseFlex)`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledDiv = styled(BaseColumnFlex)`
  gap: 2rem;
`;

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AuthFieldsProps>(); //, formState, getValues, reset
  const { setItem } = useLocalStorage("token");

  function handleSwitch() {
    setIsLogin((isLogin) => !isLogin);
  }

  function handleAuth(
    authFunc: AuthFunc,
    data: AuthFieldsProps,
    errorMessage: string
  ) {
    authFunc(data)
      .then((res) => {
        if (res.code === "success") {
          console.log(res);
          setItem(res.data.token);
          store.dispatch(setUser(res.data.user));
          navigate("/");
        } else {
          console.error(res.error);
          toast.error(errorMessage);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(err);
      });
  }

  function onSubmit(data: AuthFieldsProps) {
    console.log("onSubmit called", data);

    if (isLogin) {
      handleAuth(loginUser, data, "用户名或密码错误");
    } else {
      handleAuth(registerUser, data, "注册失败");
    }
  }

  function onError() {
    console.log("onError called", errors);
    const errorMessage = Object.values(errors)[0]?.message || "请检查输入!!";
    toast.error(errorMessage);
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

        <LoginBotton onClick={handleSubmit(onSubmit, onError)}>
          {isLogin ? "登录" : "注册"}
        </LoginBotton>
      </StyledDiv>
    </StyledContainer>
  );
}

export default LoginPage;
