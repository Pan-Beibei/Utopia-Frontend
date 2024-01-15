import styled from "styled-components";
import { BaseColumnFlex, BaseFlex } from "../../styles/BaseStyles";
import { PostListResponse } from "../../services/api/post";
import { postTags } from "../../types";
import { convertTime } from "../../utils/ConversionTime";

const StyledContainer = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  padding: 1.6rem 1rem;
  border-bottom: 1px solid rgba(225, 225, 225, 0.25);
  box-shadow: 0px -0.5px 0px 0px rgba(0, 0, 0, 0.25) inset;
  width: 100%;
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

// const StyledText = styled.p`
//   font-size: ${(props) => props.theme.fontSize.small};
//   font-weight: ${(props) => props.theme.fontWeight.normal};
//   word-wrap: break-word;
//   overflow-wrap: break-word;
//   max-width: 100%;
// `;

const StyledFlexForPostDetails = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  color: ${(props) => props.theme.colors.gray400};
`;

const StyledFlexMobile = styled(BaseColumnFlex)`
  align-items: flex-start;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledFlexForCommentsAndTime = styled(BaseFlex)`
  gap: 2rem;
`;
const StyledFlexForTags = styled(BaseFlex)`
  gap: 1rem;
`;

function Post({ post }: { post: PostListResponse }) {
  const tags = postTags.filter((tag) => {
    return post.tags.includes(tag.id);
  });

  return (
    <StyledContainer data-post-id={post._id} className="post">
      <StyledFlexMobile>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledFlexForTags>
          {tags.map((tag, index) => {
            return <StyledTag key={index}>{tag.name}</StyledTag>;
          })}
        </StyledFlexForTags>
      </StyledFlexMobile>

      {/* <StyledText>{post.content}</StyledText> */}
      <StyledFlexForPostDetails>
        <span>{post.author.username}</span>
        <StyledFlexForCommentsAndTime>
          <span>{post.commentsCount}条评论</span>
          <span>{convertTime(post.createdAt)}</span>
        </StyledFlexForCommentsAndTime>
      </StyledFlexForPostDetails>
    </StyledContainer>
  );
}

export default Post;
