import { ReactNode } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const MultiColumnContainer = ({ children }: { children?: ReactNode }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={3}>
      {children}
    </Grid>
  );
};

const ColumnItem = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      // display: "inline-block",
      width: "100%",
      backgroundColor: "#f0f0f0",
      padding: "5px",
      boxSizing: "border-box",
    }}
  >
    {children}
  </Box>
);

function PhotoWall({ photos }: { photos?: string[] }) {
  return (
    <Grid container spacing={2}>
      {photos?.map((photo, index) => (
        <MultiColumnContainer key={index}>
          <ColumnItem>
            <img
              src={photo}
              alt={`Photo ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </ColumnItem>
        </MultiColumnContainer>
      ))}
    </Grid>
  );
}

export default PhotoWall;
