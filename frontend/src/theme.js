import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: green,
  },
  typography: {
    fontFamily: "poppins",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
});
