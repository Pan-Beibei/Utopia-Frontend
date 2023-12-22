import {
  StyledLoginInput,
  StyledLoginForm,
  StyledGetVerificationCodeButton,
  AuthFormProps,
  authFieldsConfig,
} from "./LoginCommon";

function RegisterForm({ register, getValues }: AuthFormProps) {
  return (
    <StyledLoginForm>
      {authFieldsConfig.map(({ id, validation, placeholder }, index) => (
        <StyledLoginInput
          {...register(id, validation(getValues))}
          id={id}
          placeholder={placeholder}
          key={index}
        />
      ))}
      <StyledGetVerificationCodeButton>
        获取验证码
      </StyledGetVerificationCodeButton>
    </StyledLoginForm>
  );
}

export default RegisterForm;
