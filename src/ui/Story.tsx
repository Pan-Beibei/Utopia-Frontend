import styled from "styled-components";

const StyledStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 35rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
`;

const StyledTextContainer = styled.div`
  padding: 1.6rem 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.8px;
  margin-bottom: 0.2rem;
`;

const StyledContent = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: 0.8px;
`;

const StyledDate = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.8px;
  color: #686868;
`;

interface StoryProps {
  imgUrl: string;
  title: string;
  content: string;
  date: string;
}

function Story({ imgUrl, title, content, date }: StoryProps) {
  return (
    <StyledStoryContainer>
      <StyledImg src={imgUrl} alt="Story image" />
      <StyledTextContainer>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledContent>{content}</StyledContent>
        </div>
        <StyledDate>{date}</StyledDate>
      </StyledTextContainer>
    </StyledStoryContainer>
  );
}

export default Story;
