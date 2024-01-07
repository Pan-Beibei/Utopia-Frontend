import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPosts } from "../../services/state/ForumPageSlice";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ForumIntroduction from "./ForumIntroduction";
import ForumLayout from "./ForumLayout";
import CreatePost from "./CreatePost";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  gap: 2rem;
  border-radius: 0.8rem;
`;

function ForumPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const posts = useSelector(getPosts);

  console.log(posts);

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
        />
      )}
    </StyledContainer>
  );
}

export default ForumPage;
