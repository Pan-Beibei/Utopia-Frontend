import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "./PostDetailNavigationButtons";
import PostCommentInputBox from "./PostCommentInputBox";
import PostCommentList from "../Comment/CommentList";
import { App as Editor } from "beibei-lexical-editor";
import { usePost } from "../../services/api/post";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledPostContainer = styled(BaseColumnFlex)`
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

const StyledCommentContainer = styled(BaseColumnFlex)`
  gap: 2rem;
  padding: 1.6rem 1rem;
  width: 100%;
`;

const MemoizedEditor = React.memo(Editor);

function PostDetail() {
  const { postId } = useParams();

  const { isError, isLoading, data: post } = usePost(postId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (postId === undefined || post === null)
    return <div>内容为空...{postId}</div>;

  return (
    <StyledContainer>
      <PostDetailNavigationButtons
        lastTitle="锥心追月"
        nextTitle="初级扑街仔"
      />
      <MemoizedEditor editable={false} stringifiedEditorState={post.content} />
      <StyledPostContainer>
        <StyledCommentContainer>
          <PostCommentInputBox postId={postId} />
          <PostCommentList postId={postId} />
        </StyledCommentContainer>
      </StyledPostContainer>
    </StyledContainer>
  );
}

export default PostDetail;
