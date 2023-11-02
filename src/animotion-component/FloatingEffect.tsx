import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { useState } from "react";

interface FloatingEffectProps {
  children: React.ReactNode;
}

const StyledFloating = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function FloatingEffect({ children }: FloatingEffectProps) {
  const [open] = useState(true);

  const springProps = useSpring({
    from: { transform: "translate3d(-50%, -90%, 0)" },
    to: async (next) => {
      while (open) {
        await next({ transform: "translate3d(-49.5%, -85%, 0)" });
        await next({ transform: "translate3d(-50%, -95%, 0)" });
        await next({ transform: "translate3d(-50%, -87%, 0)" });
        await next({ transform: "translate3d(-50%, -90%, 0)" });
        await next({ transform: "translate3d(-50%, -95%, 0)" });
      }
    },
  });

  return <StyledFloating style={springProps}>{children}</StyledFloating>;
}

export default FloatingEffect;
