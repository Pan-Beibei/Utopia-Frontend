import styled from "styled-components";
import SearchPosts from "./SearchPosts";
import { BaseFlex } from "../../styles/BaseStyles";
import PostList from "../../features/post/PostList";

const StyledContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.white};
`;

const StyledPostButton = styled.button`
  padding: 1.2rem 1.6rem;
  min-width: 6.3rem;
  border: none;

  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledFlex = styled(BaseFlex)`
  justify-content: space-between;
  gap: 1rem;
`;

function ForumLayout() {
  return (
    <StyledContainer>
      <StyledFlex>
        <SearchPosts />
        <StyledPostButton>发帖</StyledPostButton>
      </StyledFlex>
      <PostList />
    </StyledContainer>
  );
}

export default ForumLayout;
