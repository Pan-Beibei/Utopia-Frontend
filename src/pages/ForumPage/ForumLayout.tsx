import styled from "styled-components";
import SearchPosts from "./SearchPosts";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import PostList from "../../components/post/PostList";
import Pagination from "../../components/Pagination";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 2rem 1rem;
  gap: 1rem;
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
  width: 100%;
  gap: 1rem;
`;

interface ForumLayoutProps {
  setShowCreatePost: () => void;
}

function ForumLayout({ setShowCreatePost }: ForumLayoutProps) {
  return (
    <StyledContainer>
      <StyledFlex>
        <SearchPosts />
        <StyledPostButton onClick={setShowCreatePost}>发帖</StyledPostButton>
      </StyledFlex>
      <PostList />
      <Pagination pageCount={30}>
        <Pagination.PreviousButton />
        <Pagination.PageList />
        <Pagination.PageIndicator />
        <Pagination.NextButton />
      </Pagination>
    </StyledContainer>
  );
}

export default ForumLayout;
