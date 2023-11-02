import { ServerBulletProps } from "./../features/bullet/bulletSlice";

const TOP_MAXIMUM = window.innerHeight / 2;
const TOP_MINIMUM = 10;
const BULLET_SPACE = 20;

function GeneratePosYArray(arr: Array<number>) {
  // sort array
  const sortedArr = arr.slice().sort((a: number, b: number) => a - b);

  //maek sure maximum value <= window.innerHeight / 2 and maximum value >= 10
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] < TOP_MINIMUM) {
      sortedArr[i] = TOP_MINIMUM;
    } else if (sortedArr[i] > TOP_MAXIMUM) {
      sortedArr[i] = TOP_MAXIMUM;
    }
  }

  // Adjust the values in the array to ensure that adjacent values differ by at least 20
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] < BULLET_SPACE) {
      sortedArr[i] = sortedArr[i - 1] + BULLET_SPACE;
    }
  }

  return sortedArr;
}

const COLORS = [
  "gray",
  "red",
  "pink",
  "grape",
  "purple",
  "blue",
  "orange",
  "brown",
];
const FONT_SIZEES = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9];
function randomBullet() {
  const randomNum = Math.random();
  const num = Math.floor(randomNum * COLORS.length);
  const bullet = {
    fontSize: `${FONT_SIZEES[num]}rem`,
    fontColor: COLORS[num],
    speed: Math.round(randomNum * 50),
    text: "",
    posY: 0,
  };

  return bullet;
}

export function generateBulletStyle(bullets: Array<ServerBulletProps>) {
  const dataLen = bullets.length;
  //posY Array
  let posYArr = [];
  for (let i = 0; i < dataLen; i++) {
    const random = Math.random();
    const posY = Math.round(random * (window.innerHeight / 2));
    posYArr.push(posY);
  }
  posYArr = GeneratePosYArray(posYArr);

  //Generate bullet's properties
  const arr = [];
  for (let i = 0; i < dataLen; i++) {
    const bullet = randomBullet();

    arr.push({
      id: bullets[i]._id,
      posY: posYArr[i],
      speed: bullet.speed,
      fontColor: bullet.fontColor,
      fontSize: bullet.fontSize,
      text: bullets[i].bulletText,
    });
  }

  return arr;
}
