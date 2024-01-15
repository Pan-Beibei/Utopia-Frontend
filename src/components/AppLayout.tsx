import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
`;

const StyledFooter = styled.footer`
  padding-top: 5rem;
`;

function AppLayout() {
  return (
    <StyledContainer>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledContainer>
  );
}

export default AppLayout;
