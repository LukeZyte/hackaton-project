import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Appbar = ({ setIsDarkTheme }) => {
  const { t, i18n } = useTranslation();

  const changeLangHandler = () => {
    if (i18n.language === "pl-PL") {
      i18n.changeLanguage("pl");
    }
    if (i18n.language === "en-EN") {
      i18n.changeLanguage("en");
    }

    if (i18n.language === "pl") {
      i18n.changeLanguage("en");
    } else if (i18n.language === "en") {
      i18n.changeLanguage("pl");
    }
  };

  const changeThemeHandler = () => {
    setIsDarkTheme((prev) => {
      localStorage.setItem("isDarkTheme", !prev);
      return !prev;
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NKT
        </Typography>
        <Button variant="contained" onClick={changeThemeHandler}>
          THEME
        </Button>
        <Button variant="contained" onClick={() => changeLangHandler()}>
          LANG
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
