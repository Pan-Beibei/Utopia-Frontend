import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { PostProps } from "./postSlice";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  padding: 1.6rem 1rem;
  border-bottom: 1px solid rgba(225, 225, 225, 0.25);
  box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.25) inset;
`;

const StyledTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledTag = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.primary};
  background-color: rgba(204, 153, 90, 0.34);
  padding: 0.2rem 0.4rem;
  border-radius: 3.4rem;
`;

const StyledText = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

const StyledFlexForPostDetails = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  color: rgba(104, 104, 104, 0.6);
`;

const StyledFlexMobile = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  @media (min-width: 834px) {
    flex-direction: row;
  }
`;

const StyledFlexForCommentsAndTime = styled(BaseFlex)`
  gap: 2rem;
`;
const StyledFlexForTags = styled(BaseFlex)`
  gap: 1rem;
`;

function Post({ post }: { post: PostProps }) {
  return (
    <StyledContainer>
      <StyledFlexMobile>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledFlexForTags>
          {post.tags.map((tag, index) => {
            return <StyledTag key={index}>{tag}</StyledTag>;
          })}
        </StyledFlexForTags>
      </StyledFlexMobile>

      <StyledText>{post.content}</StyledText>
      <StyledFlexForPostDetails>
        <span>{post.author}</span>
        <StyledFlexForCommentsAndTime>
          <span>{post.commentCount}条评论</span>
          <span>{post.createdAt}</span>
        </StyledFlexForCommentsAndTime>
      </StyledFlexForPostDetails>
    </StyledContainer>
  );
}

export default Post;
