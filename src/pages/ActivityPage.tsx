import styled from "styled-components";

import CommentLayout from "../features/review/ReviewLayout";

// import Video from "../ui/Video";

const ActivityContainer = styled.div`
  padding: 1rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  background-color: var(--primary-color);
`;

const WaterfallContainer = styled.div`
  column-count: 2; /* 列数 */
  column-gap: 10px; /* 列间距 */
  @media (min-width: 768px) {
    column-count: 3;
  }
  @media (min-width: 1024px) {
    column-count: 4;
  }
`;

const WaterfallItem = styled.div`
  display: inline-block;
  width: 100%;
  background-color: #f0f0f0;
  padding: 5px;
  box-sizing: border-box;
`;

const VideoDiv = styled.div`
  position: relative;
  width: 100%;
  padding-top: calc(100% * ${window.innerHeight} / ${window.innerWidth});
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

function ActivityPage() {
  const imgs = [];
  for (let i = 1; i < 11; i++) {
    imgs.push("pic-" + i);
  }

  // console.log(imgs);

  return (
    <ActivityContainer>
      <WaterfallContainer>
        {imgs.map((el, index) => (
          <WaterfallItem key={index}>
            <img src={"./activity/" + el + ".jpg"} alt="" />
          </WaterfallItem>
        ))}
      </WaterfallContainer>
      <VideoDiv>
        <StyledIframe
          id="video"
          allowFullScreen={true}
          src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&controls=0&showinfo=0"
        ></StyledIframe>
      </VideoDiv>
      <CommentLayout />
    </ActivityContainer>
  );
}

export default ActivityPage;
