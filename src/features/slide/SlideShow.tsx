import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import {
  SlideIndexType,
  nextSlide,
  previousSlide,
  getSlideIndexByName,
} from "./slideSlice";
import store from "../../store/store";

const StyleSlideContainer = styled.div`
  padding: 2rem 0;
  text-align: center;
`;

const StyledRoomPic = styled.div<{ $img: string }>`
  ${(props) => css`
    background-image: url("${props.$img}");
  `}
  width: 100%;
  min-height: 35rem;
  background-size: cover;
  // object-fit: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 50rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    min-height: 80rem;
  }
`;

const StyledBtn = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleTitle = styled.h2`
  font-size: 3rem;
`;

interface SlideShowProps {
  slideName: SlideIndexType;
}

const titles = {
  one: "一号院",
  two: "二号院",
  three: "三号院",
  five: "四号院",
};

function SlideShow({ slideName }: SlideShowProps = { slideName: "one" }) {
  const slideIndex = useSelector((state) =>
    getSlideIndexByName(state, slideName)
  );

  function slideMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const node = (e.target as Element).closest(".slide");

    console.log(e.target);

    if (node) {
      if (node.classList.contains("previous")) {
        console.log("previous", slideIndex);
        if (slideIndex === 1) return;
        store.dispatch(previousSlide(slideName));
      }
      if (node.classList.contains("next")) {
        console.log("next", slideIndex);
        if (slideIndex === 8) return;
        store.dispatch(nextSlide(slideName));
      }
    }
  }

  return (
    <StyleSlideContainer>
      <StyleTitle>{titles[slideName as SlideIndexType]}</StyleTitle>
      <StyledRoomPic
        $img={`./hotel/${slideName}/pic-${slideIndex}.jpg`}
        onClick={slideMove}
      >
        <StyledBtn className="slide previous">
          <img src="./icons/icon-previous.svg" alt="previous" />
        </StyledBtn>
        <StyledBtn className="slide next">
          <img src="./icons/icon-next.svg" alt="next" />
        </StyledBtn>
      </StyledRoomPic>
    </StyleSlideContainer>
  );
}

export default SlideShow;
