import { useTranslation } from "react-i18next";
import {
  StyledLoginInput,
  StyledLoginForm,
  AuthFormProps,
  authFieldsConfig,
} from "./LoginCommon";

function LoginForm({ register, getValues }: AuthFormProps) {
  const { t } = useTranslation();

  const authFields = authFieldsConfig
    .filter(({ id }) => id === "password" || id === "phone")
    .sort(({ id: idA }) => (idA === "phone" ? -1 : 1));

  return (
    <StyledLoginForm data-testid="LoginForm">
      {authFields.map(({ id, validation, placeholder }, index) => (
        <StyledLoginInput
          {...register(id, validation(getValues))}
          placeholder={t(placeholder ? placeholder : "")}
          key={index}
          data-testid={id}
        />
      ))}
    </StyledLoginForm>
  );
}

export default LoginForm;
