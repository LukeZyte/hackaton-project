import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme";
import Calculator from "./pages/Calculator";
import { useEffect, useState } from "react";
import Appbar from "./components/UI/Appbar";

const Routes = {
  calculator: "calculator",
  history: "history",
};

const App = () => {
  // States
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [route, setRoute] = useState(Routes.calculator);

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
      <Appbar setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      {route === Routes.calculator && <Calculator />}
    </ThemeProvider>
  );
};

export default App;
