import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPosts } from "../pageSlices/ForumPageSlice";
import { BaseColumnFlex } from "../styles/BaseStyles";
import ForumTop from "../components/forum/ForumIntroduction";
import ForumLayout from "../components/forum/ForumLayout";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  gap: 2rem;
`;

function ForumPage() {
  const posts = useSelector(getPosts);

  console.log(posts);

  return (
    <StyledContainer>
      <ForumTop />
      <ForumLayout></ForumLayout>
    </StyledContainer>
  );
}

export default ForumPage;
