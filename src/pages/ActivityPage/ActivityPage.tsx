import styled from "styled-components";
import ActivityList from "./ActivityList";

const StyledContainer = styled.div`
  padding-top: 7.6rem;
`;

function ActivityPage() {
  return (
    <StyledContainer>
      <ActivityList />
    </StyledContainer>
  );
}

export default ActivityPage;
