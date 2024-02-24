import {
  StyledLoginInput,
  StyledLoginForm,
  AuthFormProps,
  authFieldsConfig,
} from "./LoginCommon";

function LoginForm({ register, getValues }: AuthFormProps) {
  const authFields = authFieldsConfig
    .filter(({ id }) => id === "password" || id === "phone")
    .sort(({ id: idA }) => (idA === "phone" ? -1 : 1));

  return (
    <StyledLoginForm>
      {authFields.map(({ id, validation, placeholder }, index) => (
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
