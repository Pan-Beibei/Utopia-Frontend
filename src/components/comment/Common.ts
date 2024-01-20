import { useContext } from "react";
import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";
import { CommentContext } from ".";

export function useCommentContext() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useCommentContext must be used within CommentContext");
  }
  return context;
}

export const StyledFlexForHeader = styled(BaseFlex)`
  gap: 0.5rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  align-items: flex-start;
`;

export const StyledFlexForMainContent = styled(BaseFlex)`
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const StyledUserName = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const StyledDate = styled.span`
  color: ${(props) => props.theme.colors.gray400};
  white-space: nowrap;
`;

export const StyledCommentContent = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;
