import styled from "styled-components";

import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostList from "../../components/Post/PostList";
import PostControlPanel from "../../components/Post/PostControlPanel";
// import Pagination from "../../components/Pagination";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 2rem 1rem;
  gap: 1rem;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.white};
`;

interface ForumLayoutProps {
  postsCount: number;
}

function ForumLayout({ postsCount }: ForumLayoutProps) {
  console.log("postsCount: ", postsCount);

  return (
    <StyledContainer>
      <PostControlPanel />
      <PostList />
    </StyledContainer>
  );
}

export default ForumLayout;
