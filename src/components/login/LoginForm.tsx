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
        .slice(0, 2)
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
