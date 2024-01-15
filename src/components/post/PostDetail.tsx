import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import PostDetailNavigationButtons from "./PostDetailNavigationButtons";
import PostCommentInputBox from "./PostCommentInputBox";
import PostCommentList from "../comment/CommentList";
import { App as Editor } from "beibei-lexical-editor";
// import { EditorState } from "lexical";
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

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<PostResponse | null>(null);

  console.log(postId);
  useEffect(() => {
    if (postId === undefined) return;

    getPost({ id: postId })
      .then((res) => {
        if (res.code === "success") {
          console.log(res.data);

          setPost(res.data);
        } else {
          console.error(res.error);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postId]);

  if (post === null) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <PostDetailNavigationButtons
        lastTitle="锥心追月"
        nextTitle="初级扑街仔"
      />
      {<Editor editable={false} stringifiedEditorState={post.content} />}
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
