import { useEffect } from "react";

import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

interface FedaInTextProps {
  children: React.ReactNode;
}

const StyledDiv = styled.div`
  width: 70rem;
`;

const StyledP = styled(animated.p)`
  white-space: nowrap;
  overflow: hidden;

  font-size: 3rem;
  color: #fff;
`;

function FedaInText({ children }: FedaInTextProps) {
  const [props, api] = useSpring(() => ({
    from: {
      width: 0,
    },
    config: {
      duration: 2000,
    },
  }));

  useEffect(
    function () {
      api.start({
        from: {
          width: 0,
        },
        to: {
          width: 700,
        },
      });
    },
    [api]
  );

  return (
    <StyledDiv>
      <StyledP style={props}>{children}</StyledP>
    </StyledDiv>
  );
}

export default FedaInText;
