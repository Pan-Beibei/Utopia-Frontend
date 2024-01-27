import styled from "styled-components";
import SearchPosts from "./SearchPosts";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import PostList from "../../components/Post/PostList";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { usePosts } from "../../hooks/usePostsHooks";
import { useState } from "react";

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
  postsCount: number;
}

function ForumLayout({ setShowCreatePost, postsCount }: ForumLayoutProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useSelector(
    (state: RootState) => state.global.itemsPerPage
  );
  const buttonsToShow = useSelector(
    (state: RootState) => state.global.paginationButtons
  );

  const { isLoading, error, data: posts } = usePosts(currentPage, postsPerPage);
  console.log(isLoading, error, posts);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (posts === undefined || posts.length === 0) return <div>暂无帖子</div>;

  return (
    <StyledContainer>
      <StyledFlex>
        <SearchPosts />
        <StyledPostButton onClick={setShowCreatePost}>发帖</StyledPostButton>
      </StyledFlex>
      <PostList posts={posts} />
      {postsCount > 0 && (
        <Pagination
          postCount={postsCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          postsPerPage={postsPerPage}
          buttonsToShow={buttonsToShow}
        >
          <Pagination.PreviousButton />
          <Pagination.PageList />
          <Pagination.PageIndicator />
          <Pagination.NextButton />
        </Pagination>
      )}
    </StyledContainer>
  );
}

export default ForumLayout;
