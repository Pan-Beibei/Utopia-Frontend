import styled from "styled-components";
import Post from ".";
import { PostResponse } from "../../services/api/post";
import { useNavigate } from "react-router-dom";

const StyledList = styled.ul`
  padding: 0 1rem;
  list-style: none;
  letter-spacing: 0.7px;
  width: 100%;
`;

interface PostListProps {
  posts: PostResponse[];
}

function PostList({ posts }: PostListProps) {
  const navigate = useNavigate();

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
    </StyledList>
  );
}

export default PostList;
