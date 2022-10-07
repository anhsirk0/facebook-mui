import { Navbar, Main } from "./components";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
