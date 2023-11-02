import { createTheme } from "@mui/material/styles";

const warmColors = {
  backgroundColor: "#FFFAF0",
  primaryTextColor: "#8B4513",
  secondaryTextColor: "#D2691E",
  primaryButtonColor: "#CD853F",
  secondaryButtonColor: "#F4A460",
  hoverColor: "#FFD700",
};

const coolColors = {
  backgroundColor: "#F0F8FF",
  primaryTextColor: "#4682B4",
  secondaryTextColor: "#5F9EA0",
  primaryButtonColor: "#7B68EE",
  secondaryButtonColor: "#6A5ACD",
  hoverColor: "#1E90FF",
};

const warmTheme = createTheme({
  palette: {
    background: {
      default: warmColors.backgroundColor,
    },
    text: {
      primary: warmColors.primaryTextColor,
      secondary: warmColors.secondaryTextColor,
    },
    action: {
      hover: warmColors.hoverColor,
    },
    primary: {
      main: warmColors.primaryButtonColor,
    },
    secondary: {
      main: warmColors.secondaryButtonColor,
    },
  },
});

const coolTheme = createTheme({
  palette: {
    background: {
      default: coolColors.backgroundColor,
    },
    text: {
      primary: coolColors.primaryTextColor,
      secondary: coolColors.secondaryTextColor,
    },
    action: {
      hover: coolColors.hoverColor,
    },
    primary: {
      main: coolColors.primaryButtonColor,
    },
    secondary: {
      main: coolColors.secondaryButtonColor,
    },
  },
});

export { warmTheme, coolTheme };
