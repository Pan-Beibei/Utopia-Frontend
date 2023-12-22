import styled from "styled-components";
import {
  UseFormRegister,
  RegisterOptions,
  UseFormGetValues,
} from "react-hook-form";

export const StyledLoginForm = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};

  max-width: 31rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.medium};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 50rem;
  }
`;

export const StyledLoginInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(104, 104, 104, 0.6);
  &:focus {
    outline: none;
  }
`;

export const StyledGetVerificationCodeButton = styled.button`
  padding: 0.5rem 1.6rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  right: 0;
  bottom: 0;
`;

export interface AuthFieldsProps {
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  verificationCode: string;
}

type AuthFieldConfig = {
  id: keyof AuthFieldsProps;
  placeholder: string;
  validation: (getValues: () => AuthFieldsProps) => RegisterOptions;
};

export const authFieldsConfig: AuthFieldConfig[] = [
  {
    id: "username",
    placeholder: "请输入用户名...",
    validation: () => ({
      required: "This field is required",
      minLength: {
        value: 6,
        message: "Password should be at least 6 characters",
      },
    }),
  },
  {
    id: "password",
    placeholder: "请输入密码...",
    validation: () => ({
      required: "This field is required",
      minLength: {
        value: 6,
        message: "Password should be at least 6 characters",
      },
      pattern: {
        value: /^[A-Za-z0-9]+$/,
        message: "Password can only contain numbers and letters",
      },
    }),
  },
  {
    id: "confirmPassword",
    placeholder: "请再次输入密码确认...",
    validation: (getValues) => ({
      required: "This field is required",
      validate: (value) =>
        getValues().password === value || "Passwords need to match",
    }),
  },
  {
    id: "phone",
    placeholder: "请输入手机号...",
    validation: () => ({
      required: "This field is required",
      pattern: {
        value: /^1[3456789]\d{9}$/,
        message: "Invalid phone number",
      },
    }),
  },
  {
    id: "verificationCode",
    placeholder: "请输入验证码...",
    validation: () => ({
      required: "This field is required",
      pattern: {
        value: /^\d{6}$/,
        message: "Verification code should be 6 digits",
      },
    }),
  },
];

export interface AuthFormProps {
  register: UseFormRegister<AuthFieldsProps>;
  getValues: UseFormGetValues<AuthFieldsProps>;
}
