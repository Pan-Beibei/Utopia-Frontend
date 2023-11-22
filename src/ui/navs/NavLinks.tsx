import styled from "styled-components";
import { useState, createContext, useContext, ReactNode } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";

type StyledNavLinksProps = {
  direction?: FlexDirectionType;
  children?: React.ReactNode;
};

const StyledNavLinks = ({
  direction = "column",
  children,
}: StyledNavLinksProps) => (
  <Box
    component="ul"
    display="flex"
    flexDirection={direction}
    alignItems="center"
    gap={2.5}
  >
    {children}
  </Box>
);

const StyledNavLink = (props: LinkProps) => (
  <Link
    {...props}
    component={NavLink}
    underline="none"
    sx={{
      textTransform: "uppercase",
      fontSize: "1.2rem",
      fontWeight: "bold",
      letterSpacing: "0.2rem",
    }}
  />
);

const StyledNavBg = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      color: "primary.main",
      width: "25rem",
      height: "20rem",
      position: "absolute",
      top: "4rem",
      right: 0,
    }}
  >
    {children}
  </Box>
);

const StyledToggle = styled.div`
  position: relative;
`;

const StyledImportantSpan = ({ children }: { children?: ReactNode }) => (
  <Box
    component="span"
    sx={{
      color: "#000",
      backgroundColor: "primary.main",
      padding: "0.5rem",
      borderRadius: "0.5rem",
    }}
  >
    {children}
  </Box>
);

type ContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const NavLinkContext = createContext<ContextType | null>(null);

interface NavLinksProps {
  children: React.ReactNode;
}

function NavLinks({ children }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <NavLinkContext.Provider value={{ isOpen, open, close }}>
      {children}
    </NavLinkContext.Provider>
  );
}

interface ToggleProps {
  children: React.ReactNode;
}

function Toggle({ children }: ToggleProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen, open, close } = context;
  function handleClick() {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  return (
    <StyledToggle onClick={handleClick}>
      {isOpen ? (
        <img src="./icons/close.svg" width={25} alt="menu" />
      ) : (
        <img src="./icons/hamburger.svg" width={25} alt="menu" />
      )}

      {children}
    </StyledToggle>
  );
}

interface NavBgProps {
  children: React.ReactNode;
}

function NavBg({ children }: NavBgProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen } = context;
  if (!isOpen) return null;

  return <StyledNavBg>{children}</StyledNavBg>;
}

interface LinksProps {
  direction?: FlexDirectionType;
}

function Links({ direction }: LinksProps) {
  return (
    <StyledNavLinks direction={direction}>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/hotel-info">咖啡馆房间</StyledNavLink>
      <StyledNavLink to="/activity-info">
        <StyledImportantSpan>晚宴</StyledImportantSpan>
      </StyledNavLink>
      <StyledNavLink to="/daily-page">
        <StyledImportantSpan>68克情报处</StyledImportantSpan>
      </StyledNavLink>
      <StyledNavLink to="/message-page">
        <StyledImportantSpan>病友日记</StyledImportantSpan>
      </StyledNavLink>
    </StyledNavLinks>
  );
}

NavLinks.Toggle = Toggle;
NavLinks.NavBg = NavBg;
NavLinks.Links = Links;

export default NavLinks;
