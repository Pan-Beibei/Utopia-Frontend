import {
  StyledLoginInput,
  StyledLoginForm,
  AuthFormProps,
  authFieldsConfig,
} from "./LoginCommon";

function LoginForm({ register, getValues }: AuthFormProps) {
  return (
    <StyledLoginForm>
      {authFieldsConfig
        .filter(({ id }) => id === "password" || id === "phone")
        .sort(({ id: idA }) => (idA === "phone" ? -1 : 1))
        .map(({ id, validation, placeholder }, index) => (
          <StyledLoginInput
            {...register(id, validation(getValues))}
            placeholder={placeholder}
            key={index}
          />
        ))}
    </StyledLoginForm>
  );
}

export default LoginForm;
