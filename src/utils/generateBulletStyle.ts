// import { ServerBulletProps } from "../services/state/bulletSlice";

// const COLORS = [
//   "gray",
//   "red",
//   "pink",
//   "grape",
//   "purple",
//   "blue",
//   "orange",
//   "brown",
// ];
// const FONT_SIZEES = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9];
// const SPEEDS = [0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5];

// function randomBullet() {
//   const randomNum = Math.random();
//   const colorNum = Math.floor(randomNum * COLORS.length);
//   const bullet = {
//     fontSize: FONT_SIZEES[colorNum],
//     fontColor: COLORS[colorNum],
//     speed: SPEEDS[colorNum] * 15,
//     text: "",
//     posY: 0,
//   };

//   return bullet;
// }

// export function generateBulletStyle(bullets: Array<ServerBulletProps>) {
//   const arr = bullets.map((bullet) => {
//     const randomBulletProps = randomBullet();
//     return {
//       id: bullet._id,
//       track: -1,
//       speed: randomBulletProps.speed,
//       fontColor: randomBulletProps.fontColor,
//       fontSize: randomBulletProps.fontSize,
//       text: bullet.bulletText,
//     };
//   });

//   return arr;
// }
