import { useTranslation } from "react-i18next";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme";
import Calculator from "./pages/Calculator";
import { useEffect, useState } from "react";
import Appbar from "./components/UI/Appbar";

const App = () => {
  // States
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Side-effects
  useEffect(() => {
    let isDark = localStorage.getItem("isDarkTheme");
    isDark = isDark === "false" ? false : true;
    setIsDarkTheme(isDark);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Header */}
      <Appbar setIsDarkTheme={setIsDarkTheme} />

      <Calculator />
    </ThemeProvider>
  );
};

export default App;
