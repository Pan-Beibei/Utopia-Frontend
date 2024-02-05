import { useRef, useState, useEffect } from "react";
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

function rondomSpeed() {
  return 12 + Math.random() * 5;
}

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

        return { ...bullet, track: i + 1, speed: rondomSpeed() };
      });

      setData(newBullets); // 取出前5条弹幕数据
      setInitialized(true); // 设置已经初始化过
    }
  }, [bullets, initialized]);

  const animationend = (id: string, track: number) => {
    // 从bullets中删除已经播放完的弹幕
    dispatch(removeBullet(id));

    // 从bullets中获取新的弹幕数据下标
    const newBullet = bullets.find(
      (bullet) => !bulletIdsRef.current.has(bullet.id)
    );
    if (newBullet) {
      console.log("new bullet: ", newBullet.msg);
      bulletIdsRef.current.add(newBullet.id);
    }

    console.log("new bullet: ", newBullet);

    if (newBullet) {
      setData((prevData) => [
        ...prevData.filter((bullet) => bullet.id !== id),
        { ...newBullet, track, speed: rondomSpeed() },
      ]);
    } else {
      setData((prevData) => prevData.filter((bullet) => bullet.id !== id));
    }
  };

  // const renderedBullets = useMemo(
  //   () =>
  //     data.map((el) => (
  //       <Bullet bulletProps={el} key={el.id} animationend={animationend} />
  //     )),
  //   [data, animationend]
  // );

  return (
    <StyledBulletContainer>
      {data.map((el) => (
        <Bullet bulletProps={el} key={el.id} animationend={animationend} />
      ))}
    </StyledBulletContainer>
  );
}

export default BulletDisplay;
