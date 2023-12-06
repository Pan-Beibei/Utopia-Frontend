import { useState, useCallback } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

const PHONE_REG = /^1[3456789]\d{9}$/;
const PASSWORD_REG = /^[A-Za-z0-9]+$/;

function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [accountError, setAccountError] = useState(false);
  const [accountHelperText, setAccountHelperText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [passwordConfirmError, setConfirmPasswordError] = useState(false);
  const [passwordConfirmHelperText, setConfirmPasswordHelperText] =
    useState("");

  const validate = useCallback(() => {
    if (!PHONE_REG.test(phone)) {
      setAccountError(true);
      setAccountHelperText("请输入正确的手机号");
      return false;
    }
    setAccountError(false);
    setAccountHelperText("");

    if (password.length < 6 || !PASSWORD_REG.test(password)) {
      setPasswordError(true);
      setPasswordHelperText("密码必须是6位以上的字母或数字");
      return false;
    }
    setPasswordError(false);
    setPasswordHelperText("");

    if (!isLogin && password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("两次输入的密码不一致");
      return false;
    }
    return true;
  }, [phone, password, confirmPassword, isLogin]);

  function handleLogin() {
    if (!validate()) {
      return;
    }
    // 执行登录操作
  }

  function handleToggleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: isMobile ? "1rem" : "2rem",
          bgcolor: "background.default",
          p: isMobile ? 2 : 3,
        }}
      >
        <TextField
          label="账号"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={accountError}
          helperText={accountHelperText}
        />
        <TextField
          label="密码"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordHelperText}
        />
        {!isLogin && (
          <TextField
            label="确认密码"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={passwordConfirmError}
            helperText={[passwordConfirmHelperText]}
          />
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleLogin}
        >
          {isLogin ? "登录" : "注册"}
        </Button>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: "1.2rem" }}
        >
          {isLogin ? "没有账号？" : "已有账号？"}
          <Button
            color="primary"
            size="small"
            sx={{ p: 0, ml: -1, color: "red", fontSize: "1.3rem" }}
            onClick={handleToggleLogin}
          >
            {!isLogin ? "登录" : "注册"}
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginPage;
