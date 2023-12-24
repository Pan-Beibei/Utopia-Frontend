import styled from "styled-components";
import { BaseFlex } from "../../styles/BaseStyles";

export const StyledUserName = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const StyledDate = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.gray400};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const StyledReplyText = styled(StyledDate)`
  white-space: nowrap;
`;

export const StyledFlexForNameAndDate = styled(BaseFlex)`
  gap: 0.5rem;
`;

export const StyledContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.normal};
`;

export const StyledFlexForContentAndReplyBtn = styled(BaseFlex)`
  justify-content: space-between;
  gap: 2rem;
`;
