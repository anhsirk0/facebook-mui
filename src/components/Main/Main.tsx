import { Box, Container, Grid, Stack } from "@mui/material";
import {
  ChatList,
  Post,
  RightSideContent,
  SideContent,
} from "../../components";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid
          item
          md={3}
          lg={2}
          xl={2}
          sx={{
            display: { xs: "none", md: "block" },
            minHeight: "80vh",
            mt: 3,
          }}
        >
          <Box sx={{ position: "fixed" }}>
            <SideContent />
          </Box>
        </Grid>
        <Grid item md={7} lg={6} xl={7} sx={{ minHeight: "90vh" }}>
          <Stack p={3} spacing={4}>
            <Post />
            <Post />
          </Stack>
        </Grid>
        <Grid
          item
          md={2}
          lg={3}
          xl={3}
          sx={{ mt: 3, display: { xs: "none", lg: "block" } }}
        >
          {/* Need better way to fix position */}
          <Box sx={{ position: "sticky", top: 90 }}>
            <RightSideContent />
          </Box>
        </Grid>
        <Grid
          item
          xs={1}
          xl={0}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        {/* Chat icons area */}
        <Box
          flex={1}
          sx={{
            paddingTop: "16px",
            height: "inherit",
            display: { xs: "none", md: "block" },
            position: { md: "fixed" },
            bottom: 4,
            right: { md: 0 },
            width: { md: 72 },
          }}
        >
          <ChatList />
        </Box>
      </Grid>
    </Container>
  );
};

export default Main;
