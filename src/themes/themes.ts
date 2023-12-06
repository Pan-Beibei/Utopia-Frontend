import { createTheme } from "@mui/material/styles";

const warmColors = {
  backgroundColor: "#FFFAF0",
  primaryTextColor: "#8B4513",
  secondaryTextColor: "#D2691E",
  primaryButtonColor: "#CD853F",
  secondaryButtonColor: "#F4A460",

  hoverColor: "#FFD700",
  divider: "#E5E5E5", // a light gray color
  shape: {
    borderRadius: 4, // add this line
  },
};

const coolColors = {
  backgroundColor: "#F0F8FF",
  primaryTextColor: "#4682B4",
  secondaryTextColor: "#5F9EA0",
  primaryButtonColor: "#7B68EE",
  secondaryButtonColor: "#6A5ACD",
  hoverColor: "#1E90FF",
  divider: "#D3D3D3", // a light gray color
  shape: {
    borderRadius: 4, // add this line
  },
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
    divider: warmColors.divider,
  },
  shape: {
    borderRadius: warmColors.shape.borderRadius, // add this line
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
    divider: coolColors.divider,
  },
  shape: {
    borderRadius: coolColors.shape.borderRadius, // add this line
  },
});

export { warmTheme, coolTheme };
