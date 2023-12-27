import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPosts } from "../pageSlices/ForumPageSlice";
import { BaseColumnFlex } from "../styles/BaseStyles";
import ForumIntroduction from "../components/forum/ForumIntroduction";
import ForumLayout from "../components/forum/ForumLayout";
import CreatePost from "../components/forum/CreatePost";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  gap: 2rem;
`;

function ForumPage() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const posts = useSelector(getPosts);

  console.log(posts);

  return (
    <StyledContainer>
      <ForumIntroduction />
      {showCreatePost ? (
        <CreatePost />
      ) : (
        <ForumLayout
          setShowCreatePost={() => setShowCreatePost((show) => !show)}
        />
      )}
    </StyledContainer>
  );
}

export default ForumPage;
