import { Box, Container, Stack } from "@mui/material";
import { ChatList, RightSideContent, SideContent } from "../../components";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row">
        <Box
          flex={{ md: 3, xl: 2 }}
          sx={{
            display: { xs: "none", md: "block" },
            minHeight: "80vh",
            padding: "16px 16px 16px 0",
          }}
        >
          <SideContent />
        </Box>
        <Box flex={8} sx={{ minHeight: "90vh" }} />
        <Box flex={3} p={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <RightSideContent />
        </Box>
        {/* Chat icons area */}
        <Box
          flex={1}
          sx={{
            paddingTop: "16px",
            height: "100%",
            minHeight: "90vh",
            display: { xl: "block" },
            position: { xl: "fixed" },
            right: { xl: 0 },
            width: { xl: 72 },
          }}
        >
          <ChatList />
        </Box>
      </Stack>
    </Container>
  );
};

export default Main;
