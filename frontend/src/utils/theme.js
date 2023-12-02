import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  mode: "light",
  palette: {
    type: "light",
    primary: {
      main: "rgb(0,33,95)",
    },
    secondary: {
      main: "rgb(255,141,7)",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "black",
      },
    },
  },
});

export const darkTheme = createTheme({
  mode: "dark",
  palette: {
    type: "dark",
    primary: {
      main: "rgb(129, 162, 223)",
    },
    secondary: {
      main: "rgb(255,141,7)",
    },
    background: {
      default: "#000000",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "white",
      },
    },
  },
});
