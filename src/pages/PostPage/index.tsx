import React, { Suspense } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "../../components/Post/PostDetailNavigationButtons";
import PostCommentInputBox from "../../components/Post/PostCommentInputBox";
import PostCommentList from "../../components/Comment/CommentList";
// import { App as Editor } from "beibei-lexical-editor";
import { formatDateToChinese } from "../../utils/conversionTime";
import { usePost } from "../../hooks/usePostsHooks";
import { getUserName } from "../../utils/helper";
import LazyEditor from "../../lazyComponents/LazyEditor";

const StyledContainer = styled(BaseColumnFlex)`
  padding-top: 7.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1200px;
  margin: 0 auto;
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

const MemoizedEditor = React.memo(LazyEditor);

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();

  const { isError, isLoading, data: post } = usePost(postId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if (postId === undefined || post === undefined)
    return <div>暂无内容。。。{postId}</div>;

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
          <p>{getUserName(post.author)}</p>
          <p>{formatDateToChinese(post.createdAt)}</p>
        </StyledFlexForPostDetails>
      </StyledTop>

      <Suspense fallback={<div>Loading editor...</div>}>
        <MemoizedEditor
          editable={false}
          stringifiedEditorState={post.content}
        />
      </Suspense>

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
