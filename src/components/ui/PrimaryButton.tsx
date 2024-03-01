import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import { ButtonTypes } from "../../enum/ButtonTypes";

const StyledPrimaryButton = styled.button<{
  $type: ButtonTypes;
  $padding?: string;
  $fontSize?: string;
}>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.$fontSize};
  padding: ${(props) => props.$padding};
  border: none;
`;

interface PrimaryButtonProps {
  type: ButtonTypes;
  children?: ReactNode;
  onClick?: () => void;
}

function PrimaryButton({ children, onClick, type }: PrimaryButtonProps) {
  const theme = useTheme();
  const padding =
    type === ButtonTypes.LOGIN_BUTTON
      ? `${theme.padding.tiny} ${theme.padding.small}`
      : `${theme.padding.medium} ${theme.padding.big}`;

  const fontSize = type === ButtonTypes.LOGIN_BUTTON ? "1rem" : "1.4rem";

  return (
    <StyledPrimaryButton
      $type={type}
      $padding={padding}
      $fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledPrimaryButton>
  );
}

export default PrimaryButton;
