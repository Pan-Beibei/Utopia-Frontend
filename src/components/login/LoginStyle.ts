import styled from "styled-components";

export const StyledLoginForm = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};

  max-width: 31rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.medium};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 50rem;
  }
`;

export const StyledLoginInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(104, 104, 104, 0.6);
`;

export const StyledGetVerificationCodeButton = styled.button`
  padding: 0.5rem 1.6rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  right: 0;
  bottom: 0;
`;
