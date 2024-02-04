import React, { useContext } from "react";
import styled from "styled-components";
import { warmTheme } from "../../themes/themes";

const StyledLightBtn = styled.button`
  background-color: black;
`;

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  theme: {},
});

function SwitchThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <StyledLightBtn color="inherit" onClick={toggleTheme}>
      {warmTheme === theme ? (
        <StyledLightBtn>亮</StyledLightBtn>
      ) : (
        <StyledLightBtn>暗</StyledLightBtn>
      )}
    </StyledLightBtn>
  );
}

export default SwitchThemeButton;
