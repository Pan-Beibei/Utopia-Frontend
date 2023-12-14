import { useEffect, useRef, memo, useCallback } from "react";
import styled, { css } from "styled-components";
import { BulletProps } from "./bulletSlice";

interface BulletStyleProps {
  $fontSize: number;
  $fontColor: string;
  $speed: number;
  $from: string;
  $to: string;
  $posY: number;
}

const constantStyles = css`
  background-color: ${(props) => props.theme.colors.gray};
  white-space: nowrap;
  opacity: 0.8;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  position: absolute;
  left: 0;
  will-change: transform;
`;

const StyledBullet = styled.div<BulletStyleProps>`
  ${constantStyles}

  ${(props) => css`
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.white};
    top: ${props.$posY}px;

    animation: rightToLeft ${props.$speed}s linear;
    animation-fill-mode: forwards;

    @keyframes rightToLeft {
      ${props.$from}
      ${props.$to}
    }
  `}
`;

interface BulletComProps {
  bulletProps: BulletProps;
  animationend: (id: string, track: number) => void;
}

const Bullet = memo(function Bullet({
  bulletProps,
  animationend,
}: BulletComProps) {
  const bulletRef = useRef(null);
  const { id, fontSize, fontColor, speed, track, text } = bulletProps;

  const handleAnimationEnd = useCallback(() => {
    // console.log("animation end: ", id);
    animationend(id, track);
  }, [id, track, animationend]);

  useEffect(() => {
    if (!bulletRef.current) return;
    const element = bulletRef.current as Element;
    if (element) {
      element.addEventListener("animationend", handleAnimationEnd);
      return () => {
        element.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [handleAnimationEnd]);

  return (
    <StyledBullet
      $fontSize={fontSize}
      $fontColor={fontColor}
      $speed={speed}
      $from={`from { transform: translateX(${window.innerWidth}px); }`}
      $to={`to { transform: translateX(-100%); }`}
      $posY={track * 30}
      ref={bulletRef}
    >
      {text}
    </StyledBullet>
  );
});

export default Bullet;
