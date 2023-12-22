import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 3.2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border: none;
`;

function LoginBotton({ children }: { children: ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}

export default LoginBotton;
