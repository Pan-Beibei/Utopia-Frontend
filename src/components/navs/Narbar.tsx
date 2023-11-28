import styled from "styled-components";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { ReactNode } from "react";
import Logo from "../../ui/Logo";
import NavLinks from "./NavLinks";
import SwitchThemeButton from "../../themes/ThemeContext";

// import { ComponentPropsWithoutRef } from "react";

const StyledNarbar = ({ children }: { children?: ReactNode }) => (
  <Box
    component="nav"
    display="flex"
    bgcolor="background.default"
    height="10rem"
    alignItems="center"
    justifyContent="space-between"
    padding="0 5rem"
    position="fixed"
    zIndex="10"
    width="100%"
    sx={{ opacity: 0.7 }}
  >
    {children}
  </Box>
);

const StyledNavMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledNavTable = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

function Narbar() {
  return (
    <StyledNarbar>
      <Logo />
      <Grid container alignItems="center" justifyContent="flex-end" gap={2}>
        <SwitchThemeButton />
        <StyledNavMobile>
          <NavLinks>
            <NavLinks.Toggle>
              <NavLinks.NavBg>
                <NavLinks.Links />
              </NavLinks.NavBg>
            </NavLinks.Toggle>
          </NavLinks>
        </StyledNavMobile>
        <StyledNavTable>
          <NavLinks.Links direction="row" />
        </StyledNavTable>
      </Grid>
    </StyledNarbar>
  );
}

export default Narbar;
