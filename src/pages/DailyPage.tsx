// import DailyCard from "../components/daily/DailyCard";
import { Box, Grid } from "@mui/material";
import ImageCard from "../ui/ImageCard";
import { useFetchAndInitData } from "../hooks/customHooks";
import { HTTPS } from "../utils/APIRoutes";
import { getDailies, initDailyPage } from "../pageSlices/dailyPageSlice";
import { useSelector } from "react-redux";

const DailyPageContainer = ({ children }: { children?: React.ReactNode }) => (
  <Box
    sx={{
      paddingTop: "10rem",
    }}
  >
    {children}
  </Box>
);

function DailyPage() {
  const dailies = useSelector(getDailies);
  useFetchAndInitData(HTTPS.DAILY_PAGE, initDailyPage);

  console.log(dailies);

  return (
    <DailyPageContainer>
      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2.5}>
          {dailies.map((daily, index: number) => (
            <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
              <ImageCard
                image={daily.pictures[0]}
                title={daily.title}
                content={daily.content}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </DailyPageContainer>
  );
}

export default DailyPage;
