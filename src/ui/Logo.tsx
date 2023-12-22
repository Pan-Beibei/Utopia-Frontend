import styled from "styled-components";

const StyledLogo = styled.img`
  width: 3.5rem;
  height: 3.8rem;
`;

function Logo() {
  return (
    <div>
      <StyledLogo src="./icons/logo.svg" alt="Logo" />
    </div>
  );
}

export default Logo;
