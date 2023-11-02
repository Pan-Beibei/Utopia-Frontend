import React, { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { warmTheme } from "./themes";

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  theme: {},
});

function SwitchThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {warmTheme === theme ? <Brightness7Icon /> : <Brightness4Icon />}
    </button>
  );
}

export default SwitchThemeButton;
