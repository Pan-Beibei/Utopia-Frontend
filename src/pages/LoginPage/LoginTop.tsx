import styled from "styled-components";
import { BaseFlex, BaseColumnFlex } from "../../styles/BaseStyles";
import Logo from "../../components/ui/Logo";

const StyledFlex = styled(BaseFlex)`
  gap: 1rem;
  align-self: flex-start;
`;

const StyledColumnFlex = styled(BaseColumnFlex)`
  align-items: flex-start;
`;

const StyledTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.black};
`;

const StyledP = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.gray400};
`;

function LandingTop() {
  return (
    <StyledFlex>
      <Logo />
      <StyledColumnFlex>
        <StyledTitle>进入六元咖啡馆</StyledTitle>
        <StyledP>自在的空间</StyledP>
      </StyledColumnFlex>
    </StyledFlex>
  );
}

export default LandingTop;
