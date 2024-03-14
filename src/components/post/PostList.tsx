import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePosts } from "../../hooks/usePostsHooks";

import { getFilter } from "../../services/state/ForumSlice";
import { PostResponse } from "../../services/api/post";
import { useInView } from "react-intersection-observer";
import Post from ".";
import { useNavigate } from "react-router-dom";

const StyledList = styled.ul`
  padding: 0 1rem;
  list-style: none;
  letter-spacing: 0.7px;
  width: 100%;

  justify-content: flex-start;
  overflow: hidden;
  overflow-y: auto;
  max-height: 55rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Webkit browsers in WeChat */
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
`;

function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const filter = useSelector(getFilter);
  const { ref, inView } = useInView();

  const {
    isError,
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts(filter);

  useEffect(() => {
    if (data) {
      setPosts(data.pages.flatMap((page) => page.posts));
    }
  }, [data]);

  useEffect(() => {
    console.log("inView: ", inView, hasNextPage);

    if (inView && hasNextPage) {
      console.log("inView");
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error</div>;
  if (posts.length === 0) return <div>暂无帖子</div>;

  function handleClick(e: React.MouseEvent<HTMLUListElement>) {
    const target = (e.target as Element).closest(".post");
    if (!target) return;

    const postId = (target as HTMLDivElement).dataset.postId;
    if (!postId) return;

    console.log(`Post ${postId} was clicked.`);
    navigate(`/post-detail/${postId}`);
  }

  return (
    <StyledList onClick={handleClick}>
      {posts.map((data) => {
        return <Post post={data} key={data.id} />;
      })}
      <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
    </StyledList>
  );
}

export default PostList;
