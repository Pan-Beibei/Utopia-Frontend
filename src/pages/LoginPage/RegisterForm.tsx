import styled from "styled-components";
import {
  StyledLoginInput,
  StyledLoginForm,
  AuthFormProps,
  authFieldsConfig,
  AuthFieldConfigProps,
} from "./LoginCommon";

const StyledGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: end;
  gap: 1rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 30%;
`;

const StyledRadioFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const StyledPinkRadio = styled.input`
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 3px solid #ffc0cb; /* 设置外圈颜色 */
  border-radius: 50%; /* 使其成为圆形 */
  &:checked {
    background-color: #ff69b4;
  }
`;

const StyledBlueRadio = styled.input`
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 3px solid #007bff; /* 设置外圈颜色 */
  border-radius: 50%; /* 使其成为圆形 */
  &:checked {
    background-color: #66b2ff;
  }
`;

// const StyledGetVerificationCodeButton = styled.button`
//   padding: 0.5rem 1.6rem;
//   background-color: ${(props) => props.theme.colors.primary};
//   color: ${(props) => props.theme.colors.white};
//   border: none;
//   border-radius: ${(props) => props.theme.borderRadius};
//   position: absolute;
//   right: -2rem;
//   bottom: 2.2rem;
// `;

function InputField({
  fieldConfig,
  authForm,
}: {
  fieldConfig: AuthFieldConfigProps;
  authForm: AuthFormProps;
}) {
  const { id, type, validation, placeholder, options } = fieldConfig;
  const { register, getValues } = authForm;

  const validationRules = validation(getValues);

  if (id === "gender" && options && options.length > 0) {
    return options.map((option, i) => {
      const RadioComponent = option === "0" ? StyledPinkRadio : StyledBlueRadio;
      return (
        <StyledRadioFlex key={i}>
          <RadioComponent
            {...register(id, validationRules)}
            id={`${id}-${i}`}
            name={id}
            value={option}
            type={type}
            defaultChecked={i === 0}
          />
          <label htmlFor={`${id}-${i}`}>{option === "0" ? "女" : "男"}</label>
        </StyledRadioFlex>
      );
    });
  }

  return (
    <StyledLoginInput
      {...register(id, validationRules)}
      id={id}
      placeholder={placeholder}
      type={type}
      data-testid={id}
    />
  );
}

function RegisterForm(authForm: AuthFormProps) {
  return (
    <StyledLoginForm data-testid="RegisterForm">
      {authFieldsConfig.map((fieldConfig) => (
        <StyledGroup key={fieldConfig.id}>
          <StyledLabel htmlFor={fieldConfig.id}>
            {fieldConfig.label}
          </StyledLabel>
          <InputField fieldConfig={fieldConfig} authForm={authForm} />
        </StyledGroup>
      ))}
      {/* <StyledGetVerificationCodeButton>
        获取验证码
      </StyledGetVerificationCodeButton> */}
    </StyledLoginForm>
  );
}

export default RegisterForm;
