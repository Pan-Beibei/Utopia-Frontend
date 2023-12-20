import styled from "styled-components";
import Hero from "../components/home/Hero";
import Drinks from "../components/home/Drinks";
import Stories from "../components/home/Stories";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding-top: 5.6rem;
`;

const StyleFlexColumn = styled.div`
  gap: 2rem;
  width: 100%;
`;

function HomePage() {
  return (
    <StyledHome>
      <StyleFlexColumn>
        <Hero />
      </StyleFlexColumn>

      <Drinks />
      <Stories />
    </StyledHome>
  );
}

export default HomePage;
