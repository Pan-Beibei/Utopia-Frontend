import { getPictures } from "../../pageSlices/homePageSlice";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import ImageCard from "../../ui/ImageCard";

function OurMemories() {
  const pics = useSelector(getPictures).slice(0, 18);
  return (
    <Box sx={{ margin: 2 }}>
      <Grid container spacing={1.5}>
        {pics.map((image: string, index: number) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
            <ImageCard
              title="标题"
              content="内容"
              image={image}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurMemories;
