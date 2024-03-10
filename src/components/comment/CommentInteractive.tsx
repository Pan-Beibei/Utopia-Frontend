import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import { timeAgo } from "../../utils/conversionTime";
import { StyledDate } from "./Common";

const StyledForBottom = styled(BaseFlex)`
  justify-content: space-between;
  width: 100%;
`;
const StyledBottomFlex = styled(BaseFlex)`
  gap: 1.5rem;
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border: none;
  background-color: transparent;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledReplyButton = styled(StyledButton)``;
const StyledDeleteButton = styled(StyledButton)``;

// const StyledLikeFlex = styled(BaseFlex)`
//   gap: 0.5rem;
//   color: ${({ theme }) => theme.colors.primary};
// `;

interface CommentInteractiveProps {
  isMe: boolean;
  createdAt: string;
  handleReply: () => void;
  handleDelete: () => void;
}

function CommentInteractive({
  isMe,
  createdAt,
  handleReply,
  handleDelete,
}: CommentInteractiveProps) {
  //在fill属性里填充#B05F25，表示已点赞
  return (
    <StyledForBottom>
      <StyledBottomFlex>
        <StyledDate>{timeAgo(createdAt)}</StyledDate>
        <StyledReplyButton onClick={() => handleReply()}>
          回复
        </StyledReplyButton>
        {isMe && (
          <StyledDeleteButton onClick={() => handleDelete()}>
            删除
          </StyledDeleteButton>
        )}
      </StyledBottomFlex>

      {/* <StyledLikeFlex>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8866 19.6603L10.8859 19.6596C8.30104 17.3157 6.19578 15.4033 4.73088 13.6111C3.27148 11.8256 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08885 3.5 10.6221 4.24223 11.6206 5.40564L12 5.84771L12.3794 5.40564C13.3779 4.24223 14.9112 3.5 16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7285 11.8256 19.2691 13.6111C17.8042 15.4033 15.699 17.3157 13.1141 19.6596L13.1134 19.6603L12 20.6738L10.8866 19.6603Z"
            fill="white"
            stroke="#B05F25"
          />
        </svg>
        30
      </StyledLikeFlex> */}
    </StyledForBottom>
  );
}

export default CommentInteractive;
