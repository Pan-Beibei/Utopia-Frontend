import React, { Suspense } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "../../components/Post/PostDetailNavigationButtons";
import PostCommentTopInputBox from "../../components/Post/PostCommentTopInputBox";
import PostCommentList from "../../components/Comment/CommentList";
import { formatDateToChinese } from "../../utils/conversionTime";
import { usePost } from "../../hooks/usePostsHooks";
import { getUserName } from "../../utils/helper";
import LazyEditor from "../../lazyComponents/LazyEditor";
import { StyledLoading } from "@/components/ui/Loading";

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
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const StyledFlexForPostDetails = styled(BaseFlex)`
  gap: 1rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.gray400};
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

const StyledTop = styled(BaseColumnFlex)``;

const MemoizedEditor = React.memo(LazyEditor);

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();

  const { isError, isLoading, data: post } = usePost(postId);

  if (isLoading) return <StyledLoading>Loading...</StyledLoading>;
  if (isError) return <div>Error</div>;

  if (postId === undefined || post === undefined)
    return <div>暂无内容。。。{postId}</div>;

  console.log(post);

  return (
    <StyledContainer>
      <PostDetailNavigationButtons />
      <StyledTop>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledFlexForPostDetails>
          <p>{getUserName(post.author)}</p>
          <p>{formatDateToChinese(post.createdAt)}</p>
        </StyledFlexForPostDetails>
      </StyledTop>

      <Suspense fallback={<StyledLoading>Loading editor...</StyledLoading>}>
        <MemoizedEditor
          editable={false}
          stringifiedEditorState={post.content}
        />
      </Suspense>

      <StyledPostContainer>
        <StyledCommentContainer>
          <PostCommentTopInputBox postId={postId} />
          <PostCommentList postId={postId} />
        </StyledCommentContainer>
      </StyledPostContainer>
    </StyledContainer>
  );
}

export default PostDetail;
