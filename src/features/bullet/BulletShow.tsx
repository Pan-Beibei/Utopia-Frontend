import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Bullet from "./Bullet";
import { BulletProps, getBullets, removeBullet } from "./bulletSlice";
import store from "../../store/store";

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
  const [data, setData] = useState<BulletProps[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bulletIdsRef = useRef<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

  //只做初始化使用
  useEffect(() => {
    if (!initialized && bullets.length > 0) {
      const newBullets: BulletProps[] = bullets.slice(0, 5).map((bullet, i) => {
        bulletIdsRef.current.add(bullet.id);
        return { ...bullet, track: i + 1 };
      });

      setData(newBullets); // 取出前10条弹幕数据
      setInitialized(true); // 设置已经初始化过
      // console.log("InitBullets: ", newBullets);
    }
  }, [bullets, initialized]);

  const animationend = (id: string, track: number) => {
    // 从bullets中删除已经播放完的弹幕
    store.dispatch(removeBullet(id));

    // 从bullets中获取新的弹幕数据下标
    let index = 0;
    for (index = 0; index < bullets.length; index++) {
      if (!bulletIdsRef.current.has(bullets[index].id)) {
        bulletIdsRef.current.add(bullets[index].id);
        break;
      }
    }

    const newBullet = bullets[index];

    if (newBullet) {
      setData((prevData) => [
        ...prevData.filter((bullet) => bullet.id !== id),
        { ...newBullet, track },
      ]);

      // console.log("获取新弹幕: ", newBullet);
      // console.log("idSet: ", bulletIdsRef.current, newBullet.id);
    } else {
      setData((prevData) => prevData.filter((bullet) => bullet.id !== id));
    }
  };

  return (
    <StyledBulletContainer ref={containerRef}>
      {data.map((el) => {
        return (
          <Bullet bulletProps={el} key={el.id} animationend={animationend} />
        );
      })}
    </StyledBulletContainer>
  );
}

export default BulletShow;
