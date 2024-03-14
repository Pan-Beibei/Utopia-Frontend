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
  min-width: 20rem;
  width: 100%;
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
  &:focus {
    outline: none;
  }
`;

export interface AuthFieldsProps {
  username: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  birthday: string;
  phone: string;
  verificationCode: string;
}

export type AuthFieldConfigProps = {
  id: keyof AuthFieldsProps;
  type: string;
  label: string;
  options?: string[];
  placeholder?: string;
  validation: (getValues: () => AuthFieldsProps) => RegisterOptions;
};

export const authFieldsConfig: AuthFieldConfigProps[] = [
  {
    id: "username",
    type: "text",
    label: "用户名",
    placeholder: "请输入用户名...",
    validation: () => ({
      required: "This field is required",
      minLength: {
        value: 2,
        message: "用户名请至少输入2个字符",
      },
    }),
  },
  {
    id: "password",
    type: "text",
    label: "密码",
    placeholder: "请输入密码...",
    validation: () => ({
      required: "This field is required",
      minLength: {
        value: 6,
        message: "用户密码请至少输入6个字符",
      },
      pattern: {
        value: /^[A-Za-z0-9]+$/,
        message: "密码只能包含数字或者字母",
      },
    }),
  },
  {
    id: "passwordConfirm",
    type: "text",
    label: "确认密码",
    placeholder: "请再次输入密码确认...",
    validation: (getValues) => ({
      required: "This field is required",
      validate: (value) => getValues().password === value || "密码不匹配",
    }),
  },
  {
    id: "gender",
    type: "radio",
    label: "性别",
    options: ["0", "1"],
    validation: () => ({
      required: "This field is required",
    }),
  },
  {
    id: "birthday",
    type: "text",
    label: "生日",
    placeholder: "例:1990-02-03",
    validation: () => ({
      required: "This field is required",
      pattern: {
        value: /^\d{4}(-\d{2}-\d{2}|\d{4})$/,
        message: "生日格式不正确",
      },
    }),
  },
  {
    id: "phone",
    type: "text",
    label: "手机号",
    placeholder: "请输入手机号...",
    validation: () => ({
      required: "This field is required",
      pattern: {
        value: /^1[3-9]\d{9}$/,
        message: "无效的手机号码",
      },
    }),
  },
  // {
  //   id: "verificationCode",
  //   type: "text",
  //   label: "验证码",
  //   placeholder: "请输入验证码...",
  //   validation: () => ({
  //     required: "This field is required",
  //     pattern: {
  //       value: /^\d{6}$/,
  //       message: "验证码必须是6位数字",
  //     },
  //   }),
  // },
];

export interface AuthFormProps {
  register: UseFormRegister<AuthFieldsProps>;
  getValues: UseFormGetValues<AuthFieldsProps>;
}
