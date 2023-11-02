import styled from "styled-components";
import { BsWechat, BsBookFill } from "react-icons/bs";
import { FaBilibili } from "react-icons/fa6";

const StyledFooter = styled.div`
  padding: 5rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  background-color: #ffe8cc;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.div`
  display: flex;
  gap: 3rem;
`;

const StyledSpan = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 1rem;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledP> 一个几乎24小时营业的灵魂寄居所 六元咖啡馆</StyledP>
      <StyledLink>
        <StyledSpan>
          村长微信
          <BsWechat fontSize="2.5em" />
        </StyledSpan>

        <StyledSpan>
          村长B站
          <FaBilibili fontSize="2.5em" />
        </StyledSpan>

        <StyledSpan>
          村长小红书
          <BsBookFill fontSize="2.5em" />
        </StyledSpan>
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;
