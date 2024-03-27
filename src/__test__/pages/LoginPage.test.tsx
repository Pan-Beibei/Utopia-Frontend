import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "@jest/globals";
import { MemoryRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import RegisterForm from "@/pages/LoginPage/RegisterForm";
import LoginForm from "@/pages/LoginPage/LoginForm";
import LoginPage from "@/pages/LoginPage";
import GlobalStyles from "@/styles/GlobalStyles";

import { baseTheme, warmTheme } from "@/themes/themes";
import { loginUser, registerUser } from "@/services/api/auth";

test("RegisterForm component should render five textboxes and two radio buttons", () => {
  const mock = jest.fn();
  const theme = { ...warmTheme, ...baseTheme };

  render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RegisterForm register={mock} getValues={mock} />
    </ThemeProvider>
  );

  const inputs = screen.getAllByRole("textbox");
  const radio = screen.getAllByRole("radio");

  expect(inputs).toHaveLength(5);
  expect(radio).toHaveLength(2);
});

test("LoginForm component should render two textboxes", () => {
  const mock = jest.fn();
  const theme = { ...warmTheme, ...baseTheme };

  render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LoginForm register={mock} getValues={mock} />
    </ThemeProvider>
  );

  const inputs = screen.getAllByRole("textbox");

  expect(inputs).toHaveLength(2);
});

//测试登录表单提交数据
jest.mock("@/services/api/auth", () => ({
  loginUser: jest.fn(() => Promise.resolve({ id: "1" })),
  registerUser: jest.fn(() => Promise.resolve({ id: "1" })),
}));

test("LoginForm submits data correctly", async () => {
  const theme = { ...warmTheme, ...baseTheme };

  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoginPage />
      </ThemeProvider>
    </MemoryRouter>
  );

  const phoneInput = screen.getByTestId("phone");
  const passwordInput = screen.getByTestId("password");

  // Simulate typing in a phone number
  await user.click(phoneInput);
  await user.keyboard("13795317819");

  // Simulate typing in a password
  await user.click(passwordInput);
  await user.keyboard("pw123456");

  const submitButton = screen.getByRole("button", {
    name: /登录/,
  });

  await user.click(submitButton);

  expect(loginUser).toHaveBeenCalledWith({
    phone: "13795317819",
    password: "pw123456",
    verificationCode: "123456",
  });
});

//测试注册表单提交数据
test("RegisterForm submits data correctly", async () => {
  const theme = { ...warmTheme, ...baseTheme };

  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoginPage />
      </ThemeProvider>
    </MemoryRouter>
  );

  const button = screen.getByText(/点击注册/i);
  user.click(button);
  await waitFor(() => {
    expect(screen.queryByText(/点击注册/i)).toBeNull();
  });

  const usernameInput = screen.getByTestId("username");
  const passwordInput = screen.getByTestId("password");
  const passwordConfirmInput = screen.getByTestId("passwordConfirm");
  const birthdayInput = screen.getByTestId("birthday");
  const phoneInput = screen.getByTestId("phone");

  await user.click(usernameInput);
  await user.keyboard("testUser");

  // Simulate typing in a password
  await user.click(passwordInput);
  await user.keyboard("pw123456");

  // Simulate typing in a passwordConfirm
  await user.click(passwordConfirmInput);
  await user.keyboard("pw123456");

  // Simulate typing in a birthday
  await user.click(birthdayInput);
  await user.keyboard("1990-01-01");

  // Simulate typing in a phone number
  await user.click(phoneInput);
  await user.keyboard("13795317819");

  const submitButton = screen.getByRole("button", {
    name: /注册/,
  });

  await user.click(submitButton);

  expect(registerUser).toHaveBeenCalledWith({
    username: "testUser",
    password: "pw123456",
    passwordConfirm: "pw123456",
    birthday: "1990-01-01",
    gender: "0",
    phone: "13795317819",
    verificationCode: "123456",
  });
});
