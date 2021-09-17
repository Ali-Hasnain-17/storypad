import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="main"></div>
    </ThemeProvider>
  );
};

export default App;
