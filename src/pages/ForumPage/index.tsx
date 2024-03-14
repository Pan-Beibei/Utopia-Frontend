import styled from "styled-components";
import { useSelector } from "react-redux";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import ForumIntroduction from "./ForumIntroduction";
import ForumLayout from "./ForumLayout";
import CreatePost from "../../components/Post/PostCreate";
import { getIsCreatePostVisible } from "../../services/state/ForumSlice";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  gap: 2rem;
  border-radius: 0.8rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function ForumPage() {
  const isCreatePostVisible = useSelector(getIsCreatePostVisible);

  return (
    <StyledContainer>
      <ForumIntroduction />
      {isCreatePostVisible ? <CreatePost /> : <ForumLayout />}
    </StyledContainer>
  );
}

export default ForumPage;
