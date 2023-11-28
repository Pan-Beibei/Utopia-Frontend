import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImageCardProps {
  title: string;
  content: string;
  image: string;
  index: number;
}

function ImageCard({ title, content, image }: ImageCardProps) {
  console.log(image, title, content);

  return (
    <Card>
      <CardActionArea>
        <LazyLoadImage
          alt={`${title}`}
          height="100%"
          width="100%"
          src={image}
          effect="blur"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;
