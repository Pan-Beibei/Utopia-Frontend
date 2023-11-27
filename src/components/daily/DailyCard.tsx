import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface DailyCardProps {
  daily: {
    title: string;
    description: string;
    image: string;
  };
}

function DailyCard({ daily }: DailyCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={daily.image}
          alt={daily.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {daily.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {daily.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default DailyCard;
