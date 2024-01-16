import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "./PostDetailNavigationButtons";
import PostCommentInputBox from "./PostCommentInputBox";
import PostCommentList from "../comment/CommentList";
import { App as Editor } from "beibei-lexical-editor";
import { getPost, PostResponse } from "../../services/api/post";

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
  const [post, setPost] = useState<PostResponse | null>(null);

  useEffect(() => {
    if (postId !== undefined) {
      console.log(postId);
      getPost({ id: postId })
        .then((res) => {
          if (res.code === "success") {
            setPost(res.data);
            console.log(res);
          } else {
            console.error(res.error);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [postId]);

  if (post === null) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <PostDetailNavigationButtons
        lastTitle="锥心追月"
        nextTitle="初级扑街仔"
      />
      <MemoizedEditor editable={false} stringifiedEditorState={post.content} />
      <StyledPostContainer>
        <StyledCommentContainer>
          <PostCommentInputBox />
          <PostCommentList />
        </StyledCommentContainer>
      </StyledPostContainer>
    </StyledContainer>
  );
}

export default PostDetail;
