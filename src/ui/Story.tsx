import styled from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 1.6rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;

interface StoryProps {
  imgUrl: string;
  title: string;
  content: string;
  date: string;
}

function Story({ imgUrl }: StoryProps) {
  return (
    <StyledStoryContainer>
      <StyledImg src={imgUrl} alt="Story image" />
    </StyledStoryContainer>
  );
}

export default Story;
