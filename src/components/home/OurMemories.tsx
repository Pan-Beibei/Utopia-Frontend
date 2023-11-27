import { LazyLoadImage } from "react-lazy-load-image-component";
import { getPictures } from "../../pageSlices/homePageSlice";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grow,
} from "@mui/material";

function OurMemories() {
  const pics = useSelector(getPictures);

  return (
    <Box sx={{ margin: 2 }}>
      <Grid container spacing={1.5}>
        {pics.slice(0, 18).map((image: string, index: number) => (
          <Grow in timeout={1000 * index} key={index}>
            <Grid item xs={6} sm={4} md={3} lg={3}>
              <Card>
                <CardActionArea>
                  <LazyLoadImage
                    alt={`Image ${index}`}
                    height="100%"
                    width="100%"
                    src={image}
                    effect="blur"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Image {index}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description for Image {index}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
}

export default OurMemories;
