import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
// import { animated, useTransition } from "@react-spring/web";

const StyledMemories = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  // min-height: 100vh;
  overflow-x: hidden;
  background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMyOTE2OTh8&ixlib=rb-4.0.3&q=100&w=3000");
  background-size: cover;
`;

const swing = keyframes`
  from {
   transform: rotate3d(0, 0, 1, calc(-1 * 3deg));
  }

  to {
    transform: rotate3d(0, 0, 1, 3deg);
  }
`;

const swingEnd = keyframes`
  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const StyledGallery = styled.div`
  position: relative;
  left: calc(-1 * var(--adjust-size));
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 100vw;
  padding: 2rem;
  -webkit-perspective: 0;
  perspective: 0;

  &.active figure {
    animation-duration: var(--duration), 1.5s;
    animation-delay: var(--delay),
      calc(var(--delay) + var(--duration) * var(--count));
    animation-timing-function: ease-in-out;
    animation-iteration-count: var(--count), 1;
    animation-direction: var(--direction), normal;
    animation-fill-mode: both;
    animation-name: ${swing}, ${swingEnd};
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

const StyledFigure = styled.figure<{
  $duration: number;
  $pinColor: string;
  $angle?: number;
  $direction?: string;
}>`
  --count: 5;
  --duration: 1s;
  --delay: calc(-0.5 * var(--duration));
  --direction: alternate;
  --pin-color: red;

  ${(props) => css`
    --duration: ${props.$duration}s;
    --pin-color: ${props.$pinColor};
    --angle: ${props.$angle}deg;
    --direction: ${props.$direction};
  `}

  position: relative;
  display: inline-block;
  margin: var(--adjust-size);
  padding: 0.8rem;
  border-radius: 5px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: auto;
  text-align: center;
  background-color: ghostwhite;
  background-image: url("https://images.unsplash.com/photo-1629968417850-3505f5180761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMzMjQ3ODJ8&ixlib=rb-4.0.3&q=80&w=500");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;

  transform-origin: center 0.22rem;
  will-change: transform;
  break-inside: avoid;
  overflow: hidden;
  outline: 1px solid transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  &::after {
    position: absolute;
    top: 0.22rem;
    left: 50%;
    width: 1.12rem;
    height: 1.12rem;
    content: "";
    background: var(--pin-color);
    border-radius: 50%;
    box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
    filter: drop-shadow(0.3rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5));
    transform: translateZ(0);
    z-index: 2;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 1 /1;
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  margin-bottom: 1rem;
  z-index: 1;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 14px;
  font-weight: 400;
  z-index: 1;
`;

// const imgs = [
//   "pic-1",
//   "pic-2",
//   "pic-3",
//   "pic-4",
//   "pic-5",
//   "pic-6",
//   "pic-7",
//   "pic-8",
//   "pic-9",
//   "pic-10",
//   "pic-11",
//   "pic-12",
// ];

const tits = [
  "8 PM, Summer",
  "3 PM, Winter",
  "10 AM, Summer Storm",
  "5 PM, Autumn",
  "7 PM, Spring",
  "6:30 AM, Summer",
  "6 PM, Autumn",
  "5 PM, Summer",
  "11 AM, Summer",
  "2 PM, Spring Rainbow",
  "4 PM, Autumn",
];

const colors = [
  "crimson",
  "hotpink",
  "magenta",
  "orangered",
  "darkorchid",
  "deeppink",
  "mediumvioletred",
  "hotpink",
];

function OurMemories() {
  useEffect(function () {
    window.addEventListener("scroll", handScroll);

    return () => window.removeEventListener("scroll", handScroll);
  });

  const galleryRef = useRef(null);
  const imgs = [];
  for (let i = 1; i < 19; i++) {
    imgs.push("pic-" + i);
  }

  function animEnd() {
    if (!galleryRef.current) {
      return;
    }
    const gallery = galleryRef.current as Element;
    gallery.classList.remove("active");
  }

  function animStart() {
    if (!galleryRef.current) {
      return;
    }
    const gallery = galleryRef.current as Element;
    if (gallery.classList.contains("active")) {
      return;
    }
    // console.log("start animotion");
    gallery.classList.add("active");
    setTimeout(() => {
      animEnd();
    }, 7000);
  }

  function handScroll() {
    if (!galleryRef.current) {
      return;
    }
    animStart();
  }

  return (
    <StyledMemories>
      <StyledGallery className="memorise-gallery" ref={galleryRef}>
        {imgs.map((el, index) => {
          return (
            <StyledFigure
              $duration={1.1}
              $pinColor={colors[index]}
              $direction={index % 2 ? "alternate" : "alternate-reverse"}
              key={el}
            >
              <StyledImg src={"./block3/" + el + ".jpg"} />
              <StyledFigcaption>{tits[index]}</StyledFigcaption>
            </StyledFigure>
          );
        })}
      </StyledGallery>
    </StyledMemories>
  );
}

export default OurMemories;
