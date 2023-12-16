import styled from "styled-components";
import { useState, createContext, useContext } from "react";
import { NavLink } from "react-router-dom";

type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";

type StyledNavLinksProps = {
  direction?: FlexDirectionType;
  children?: React.ReactNode;
};

const StyledNavLinks = styled.ul<StyledNavLinksProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: center;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
`;

const StyledNavBg = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.default};
  width: 9.3rem;
  height: 15rem;
  position: absolute;
  top: 4rem;
  right: 0;
`;

const StyledToggle = styled.div`
  position: relative;
`;

// const StyledImportantSpan = styled.span<{ bgColor?: string }>`
//   background-color: ${(props) =>
//     props.bgColor
//       ? props.theme.colors[props.bgColor]
//       : props.theme.colors.primary.main};
//   padding: 0.2rem 0.5rem;
//   border-radius: 0.5rem;
//   color: ${(props) => props.theme.colors.primary};
// `;

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
        <img src="./icons/menu.svg" alt="menu" />
      ) : (
        <img src="./icons/menu.svg" alt="menu" />
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

function Links() {
  return (
    <StyledNavLinks>
      <StyledNavLink to="/">主页</StyledNavLink>
      <StyledNavLink to="/forum-page">68克情报处</StyledNavLink>
      <StyledNavLink to="/activity-info">最近活动</StyledNavLink>
      <StyledNavLink to="/hotel-info">民宿房间</StyledNavLink>
      <StyledNavLink to="/user-profile-page">我的主页</StyledNavLink>
    </StyledNavLinks>
  );
}

NavLinks.Toggle = Toggle;
NavLinks.NavBg = NavBg;
NavLinks.Links = Links;

export default NavLinks;
