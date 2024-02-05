import { useEffect, useRef, memo, useCallback } from "react";
import styled, { css } from "styled-components";
import { BulletProps } from "../../services/state/bulletSlice";

interface BulletStyleProps {
  $from: string;
  $to: string;
  $speed: number;
  $posY: number;
}

const constantStyles = css`
  background-color: ${(props) => props.theme.colors.gray500};
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
    font-size: ${(props) => props.theme.fontSize.medium};
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

const fromA = `from { transform: translateX(${window.innerWidth}px); }`;
const toA = `to { transform: translateX(-100%); }`;

const Bullet = memo(function Bullet({
  bulletProps,
  animationend,
}: BulletComProps) {
  const bulletRef = useRef(null);
  const { id, msg, track } = bulletProps;

  const handleAnimationEnd = useCallback(() => {
    animationend(id, track);
  }, [id, track, animationend]);

  useEffect(() => {
    const element = bulletRef.current as Element | null;
    if (!element) return;
    element.addEventListener("animationend", handleAnimationEnd);
    return () => {
      element.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [handleAnimationEnd]);

  const speed = 12 + Math.random() * 5;

  return (
    <StyledBullet
      $from={fromA}
      $to={toA}
      $posY={track * 30}
      $speed={speed}
      ref={bulletRef}
    >
      {msg}
    </StyledBullet>
  );
});

export default Bullet;
