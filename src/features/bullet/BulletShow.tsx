import { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Bullet from "./Bullet";
import { getBullets } from "./bulletSlice";

const StyledBulletContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 10rem;
  overflow: hidden;
`;

function BulletShow() {
  const bullets = useSelector(getBullets);
  const containerRef = useRef(null);

  return (
    <StyledBulletContainer ref={containerRef}>
      {bullets.map((el, index) => {
        return <Bullet bulletProps={el} key={index} />;
      })}
    </StyledBulletContainer>
  );
}

export default BulletShow;
