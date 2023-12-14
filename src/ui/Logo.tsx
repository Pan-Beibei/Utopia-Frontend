import styled from "styled-components";

const StyledLogo = styled.img`
  width: 4rem;
`;

function Logo() {
  return (
    <div>
      <StyledLogo src="./icons/logo.svg" alt="Logo" />
    </div>
  );
}

export default Logo;
