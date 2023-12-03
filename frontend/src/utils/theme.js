import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  mode: "light",
  palette: {
    type: "light",
    primary: {
      main: "rgb(0,33,95)",
    },
    secondary: {
      main: "rgb(255,92,7)",
      dark: "rgb(255,141,7)",
    },
    background: {
      default: "#ffffff",
      paper: "rgb(242,248,250)",
    },
    text: {
      disabled: "#9d9d9d",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "black",
      },
    },
    MuiSelect: {
      defaultProps: {
        style: {
          backgroundColor: "white",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        style: {
          backgroundColor: "white",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  mode: "dark",
  palette: {
    type: "dark",
    primary: {
      main: "rgb(79, 127, 216)",
    },
    secondary: {
      main: "rgb(255,92,7)",
      light: "rgb(255,141,7)",
    },
    background: {
      default: "#222222",
      paper: "#333333",
    },
    text: {
      disabled: "#9d9d9d",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "white",
      },
    },
    MuiSelect: {
      defaultProps: {
        style: {
          backgroundColor: "#222222",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        style: {
          backgroundColor: "#222222",
        },
      },
    },
    // MuiTextField: {
    //   defaultProps: {
    //     InputProps: {
    //       color: "white",
    //     },
    //   },
    // },
  },
});
