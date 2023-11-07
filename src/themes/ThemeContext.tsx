import React, { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { warmTheme } from "./themes";
import { IconButton } from "@mui/material";

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  theme: {},
});

function SwitchThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {warmTheme === theme ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default SwitchThemeButton;
