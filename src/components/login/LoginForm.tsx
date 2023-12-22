import { StyledLoginInput, StyledLoginForm } from "./LoginStyle";

const placeholders = ["请输入用户名...", "请输入密码..."];

function LoginForm() {
  return (
    <StyledLoginForm>
      {placeholders.map((placeholder, index) => (
        <StyledLoginInput placeholder={placeholder} key={index} />
      ))}
    </StyledLoginForm>
  );
}

export default LoginForm;
