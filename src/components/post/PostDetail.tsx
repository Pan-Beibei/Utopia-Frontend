import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "./PostDetailNavigationButtons";
import PostCommentInputBox from "./PostCommentInputBox";
import PostCommentList from "../Comment/CommentList";
import { App as Editor } from "beibei-lexical-editor";
import { usePost } from "../../services/api/post";
import { formatDateToChinese } from "../../utils/ConversionTime";

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

const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
`;

const StyledFlexForPostDetails = styled(BaseFlex)`
  gap: 1rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.gray400};
`;

const StyledTop = styled(BaseColumnFlex)``;

const MemoizedEditor = React.memo(Editor);

function PostDetail() {
  const { postId } = useParams();

  const { isError, isLoading, data: post } = usePost(postId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (postId === undefined || post === null)
    return <div>内容为空...{postId}</div>;

  console.log(post);

  return (
    <StyledContainer>
      <PostDetailNavigationButtons
        lastTitle="锥心追月"
        nextTitle="初级扑街仔"
      />
      <StyledTop>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledFlexForPostDetails>
          <p>{post.author.username}</p>
          <p>{formatDateToChinese(post.createdAt)}</p>
        </StyledFlexForPostDetails>
      </StyledTop>

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
