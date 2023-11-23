import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Grid } from "@mui/material";
import { getPictures } from "../pageSlices/homePageSlice";
import { useSelector } from "react-redux";

function OurMemories() {
  const pics = useSelector(getPictures);

  return (
    <Box marginLeft={2} marginRight={2}>
      <Grid container spacing={1.5}>
        {pics.slice(0, 18).map((image: string, index: number) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
            <LazyLoadImage src={image} placeholder={<div>Loading...</div>} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurMemories;
