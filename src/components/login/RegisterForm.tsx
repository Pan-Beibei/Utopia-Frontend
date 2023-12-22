import {
  StyledLoginInput,
  StyledLoginForm,
  StyledGetVerificationCodeButton,
} from "./LoginStyle";

const placeholders = [
  "请输入用户名...",
  "请输入密码...",
  "请再次输入密码确认...",
  "请输入手机号...",
  "请输入验证码...",
];

function RegisterForm() {
  return (
    <StyledLoginForm>
      {placeholders.map((placeholder, index) => (
        <StyledLoginInput placeholder={placeholder} key={index} />
      ))}
      <StyledGetVerificationCodeButton>
        获取验证码
      </StyledGetVerificationCodeButton>
    </StyledLoginForm>
  );
}

export default RegisterForm;
