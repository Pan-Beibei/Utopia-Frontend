import { useEffect, useRef, memo } from "react";
import styled, { css } from "styled-components";
// import { animated } from "@react-spring/web";
import { BulletProps } from "./bulletSlice";

// import { deleteBullet } from "./BulletSlice";
// import store from "../../store";

interface BulletStyleProps {
  $fontSize: string;
  $fontColor: string;
  $speed: number;
  $from: string;
  $to: string;
  $posY: number;
}

// animation: ${(rightToLeft.rules = `${props.$from} ${props.$to}`)};
const StyledBullet = styled.div<BulletStyleProps>`
  ${(props) => css`
    font-size: ${props.$fontSize};
    color: ${props.$fontColor};
    top: ${props.$posY}px;

    animation: rightToLeft ${props.$speed}s linear;
    // animation-direction: reverse;
    animation-fill-mode: forwards;

    @keyframes rightToLeft {
      ${props.$from} ${props.$to}
    }
  `}

  background-color: #fff;
  opacity: 0.8;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  position: absolute;
  left: 0;

  will-change: transform;
`;

interface BulletComProps {
  bulletProps: BulletProps;
}

const Bullet = memo(function Bullet({ bulletProps }: BulletComProps) {
  // console.log("bulletProps: ", bulletProps);

  const bulletRef = useRef(null);
  useEffect(function () {
    if (bulletRef.current) {
      const element = bulletRef.current as Element;

      // element.animate(
      //   [
      //     {
      //       transform: `translate3d(-100%, 0, 0)`,
      //     },
      //     {
      //       transform: `translate3d(${window.innerWidth}px, 0, 0)`,
      //     },
      //   ],
      //   {
      //     duration: 10000,
      //     fill: "forwards",
      //     direction: "reverse",
      //   }
      // );

      element.addEventListener("animationend", function (e: Event) {
        const node = e.target as HTMLDivElement;
        node.style.visibility = "hidden"; // 隐藏元素
      });
    }
  }, []);

  return (
    <StyledBullet
      $fontSize={bulletProps.fontSize}
      $fontColor={bulletProps.fontColor}
      $speed={bulletProps.speed > 15 ? bulletProps.speed : 15}
      $from={`from {
        transform: translateX(${window.innerWidth}px);
      }`}
      $to={`to {

        transform: translateX(-100%);
      }`}
      $posY={bulletProps.posY}
      ref={bulletRef}
    >
      {bulletProps.text}
    </StyledBullet>
  );
});

export default Bullet;
