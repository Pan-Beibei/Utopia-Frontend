import styled from "styled-components";
import SearchPosts from "./SearchPosts";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import PostList from "../../components/Post/PostList";
import Pagination from "../../components/Pagination";
import { getPostsCount, usePosts } from "../../services/api/post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
  const [postCount, setPostCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = useSelector(
    (state: RootState) => state.global.itemsPerPage
  );
  const buttonsToShow = useSelector(
    (state: RootState) => state.global.paginationButtons
  );

  useEffect(() => {
    getPostsCount()
      .then((res) => {
        console.log(res);
        if (res.code !== "success") {
          console.log(res);
          return;
        }
        setPostCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { isLoading, error, data: posts } = usePosts(currentPage, postsPerPage);
  console.log(isLoading, error, posts);
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <StyledContainer>
      <StyledFlex>
        <SearchPosts />
        <StyledPostButton onClick={setShowCreatePost}>发帖</StyledPostButton>
      </StyledFlex>
      <PostList posts={posts} />
      {postCount > 0 && (
        <Pagination
          postCount={postCount}
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
