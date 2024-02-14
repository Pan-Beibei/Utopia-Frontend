import styled from "styled-components";

import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostList from "../../components/Post/PostList";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { usePosts } from "../../hooks/usePostsHooks";
import PostControlPanel from "../../components/Post/PostControlPanel";
import { useState } from "react";

const StyledContainer = styled(BaseColumnFlex)`
  padding: 2rem 1rem;
  gap: 1rem;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.white};
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
  if (posts === undefined || posts.length === 0)
    return (
      <StyledContainer>
        <PostControlPanel setShowCreatePost={setShowCreatePost} />
        <div>暂无帖子</div>
      </StyledContainer>
    );

  return (
    <StyledContainer>
      <PostControlPanel setShowCreatePost={setShowCreatePost} />
      <PostList posts={posts} />
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
    </StyledContainer>
  );
}

export default ForumLayout;
