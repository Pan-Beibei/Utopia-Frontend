import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";

const StyledContainer = styled(BaseFlex)`
  color: ${(props) => props.theme.colors.primary};
  min-width: 6rem;
  align-self: flex-start;
`;

function CommentReplyButton() {
  return (
    <StyledContainer>
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
          fill="#B05F25"
        />
      </svg>
      回复
    </StyledContainer>
  );
}

export default CommentReplyButton;
