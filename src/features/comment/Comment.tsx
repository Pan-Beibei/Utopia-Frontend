import styled from "styled-components";
import { BaseColumnFlex } from "../../styles/BaseStyles";
import {
  StyledFlexForNameAndDate,
  StyledUserName,
  StyledDate,
  StyledContent,
  StyledFlexForContentAndReplyBtn,
} from "./CommentCommon";
import CommentReplyButton from "./CommentReplyButton";
import CommentReplyList from "./CommentReplyList";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 0.07rem;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray400};
  padding-bottom: 0.8rem;
`;

function Comment() {
  const con =
    "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和";
  return (
    <StyledContainer>
      <StyledFlexForNameAndDate>
        <StyledUserName>{"yanyan"}</StyledUserName>
        <StyledDate>{"10分钟前"}</StyledDate>
      </StyledFlexForNameAndDate>
      <StyledFlexForContentAndReplyBtn>
        <StyledContent>{con}</StyledContent>
        <CommentReplyButton />
      </StyledFlexForContentAndReplyBtn>

      <CommentReplyList />
    </StyledContainer>
  );
}

export default Comment;
