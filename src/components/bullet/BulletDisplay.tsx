import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Bullet from ".";
import {
  BulletProps,
  getBullets,
  removeBullet,
} from "../../services/state/bulletSlice";

const StyledBulletContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  overflow: hidden;
`;

function BulletDisplay() {
  const bullets = useSelector(getBullets);
  const [data, setData] = useState<BulletProps[]>([]);
  const [initialized, setInitialized] = useState(false);
  const bulletIdsRef = useRef<Set<string>>(new Set());
  const dispatch = useDispatch();

  //只做初始化使用
  useEffect(() => {
    if (!initialized && bullets.length > 0) {
      const newBullets: BulletProps[] = bullets.slice(0, 5).map((bullet, i) => {
        bulletIdsRef.current.add(bullet.id);
        return { ...bullet, track: i + 1 };
      });

      setData(newBullets); // 取出前5条弹幕数据
      setInitialized(true); // 设置已经初始化过
    }
  }, [bullets, initialized]);

  const animationend = useCallback(
    (id: string, track: number) => {
      // 从bullets中删除已经播放完的弹幕
      dispatch(removeBullet(id));

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
      } else {
        setData((prevData) => prevData.filter((bullet) => bullet.id !== id));
      }
    },
    [dispatch, bullets]
  );

  const renderedBullets = useMemo(
    () =>
      data.map((el) => (
        <Bullet bulletProps={el} key={el.id} animationend={animationend} />
      )),
    [data, animationend]
  );

  return <StyledBulletContainer>{renderedBullets}</StyledBulletContainer>;
}

export default BulletDisplay;
