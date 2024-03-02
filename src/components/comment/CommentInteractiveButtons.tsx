import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledReplyButton = styled(BaseFlex)`
  color: ${(props) => props.theme.colors.primary};
  min-width: 6rem;
  align-self: flex-start;
`;

function CommentInteractiveButtons({
  handleReply,
}: {
  handleReply: () => void;
}) {
  //在fill属性里填充#B05F25，表示已点赞
  return (
    <BaseFlex>
      <StyledReplyButton>
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
        点赞
      </StyledReplyButton>
      <StyledReplyButton onClick={handleReply}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C17.5228 20 22 16.1944 22 11.5C22 6.80558 17.5228 3 12 3C6.47715 3 2 6.80558 2 11.5C2 14.0364 3.307 16.3133 5.37976 17.8707L5.07766 20.4696C5.04577 20.7439 5.24229 20.9921 5.51658 21.024C5.61038 21.0349 5.70535 21.019 5.7905 20.9782L8.77345 19.5478C9.78573 19.841 10.871 20 12 20Z"
            stroke="#B05F25"
          />
        </svg>
        回复
      </StyledReplyButton>
    </BaseFlex>
  );
}

export default CommentInteractiveButtons;
