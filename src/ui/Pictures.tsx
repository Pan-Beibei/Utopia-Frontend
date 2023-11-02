import styled from "styled-components";

interface PicturesProps {
  imgs: Array<string>;
  altstr: string;
}

const StyledPicture = styled.picture`
  width: 100%;
  display: block;
`;

function Pictures({ imgs, altstr }: PicturesProps) {
  if (imgs.length < 2) return;

  return (
    <StyledPicture>
      <source media="(max-width: 768px)" srcSet={imgs[0]} />
      <source media="(min-width: 768px)" srcSet={imgs[1]} />
      <img src={imgs[0]} alt={altstr} />
    </StyledPicture>
  );
}

export default Pictures;
