import styled from "styled-components";
import {
  StyledContent,
  StyledUserName,
  StyledReplyText,
  StyledDate,
  StyledFlexForNameAndDate,
} from "./CommentCommon";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import CommentReplyButton from "./CommentReplyButton";

const StyledContainer = styled(BaseColumnFlex)`
  gap: 0.3rem;
  align-items: flex-start;
`;

const StyledFlexForleft = styled(BaseFlex)`
  gap: 0.2rem;
  align-items: flex-start;
`;

const StyledFlex = styled(BaseFlex)`
  justify-content: space-between;
`;

function CommentReply() {
  return (
    <StyledContainer>
      <StyledFlexForNameAndDate>
        <StyledUserName>{"mureun"}</StyledUserName>
        <StyledReplyText>{"回复了"}</StyledReplyText>
        <StyledUserName>{"yanyan:"}</StyledUserName>
        <StyledDate>{"8分钟前"}</StyledDate>
      </StyledFlexForNameAndDate>

      <StyledFlex>
        <StyledFlexForleft>
          <StyledContent>
            {
              "内容地方v快来救命呢在路上看到均可i简直是的女孩子女孩子的是利空打击和你看i速度和"
            }
          </StyledContent>
        </StyledFlexForleft>
        <CommentReplyButton />
      </StyledFlex>
    </StyledContainer>
  );
}

export default CommentReply;
