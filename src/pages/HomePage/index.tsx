import styled from "styled-components";
import Hero from "./Hero";
import Drinks from "./Drinks";
// import Stories from "./Stories";

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
      {/* <Stories /> */}
    </StyledHome>
  );
}

export default HomePage;
