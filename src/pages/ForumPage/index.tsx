import { useState } from "react";
import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ForumIntroduction from "./ForumIntroduction";
import ForumLayout from "./ForumLayout";
import CreatePost from "./CreatePost";
import { useLoaderData } from "react-router-dom";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  gap: 2rem;
  border-radius: 0.8rem;
`;

function ForumPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const postsCount = useLoaderData() as number;

  return (
    <StyledContainer>
      <ForumIntroduction />
      {showCreatePost ? (
        <CreatePost
          setShowCreatePost={() => setShowCreatePost((show) => !show)}
        />
      ) : (
        <ForumLayout
          setShowCreatePost={() => setShowCreatePost((show) => !show)}
          postsCount={postsCount}
        />
      )}
    </StyledContainer>
  );
}

export default ForumPage;
