import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
  Drawer,
  Container,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import ReactCountryFlag from "react-country-flag";

const Langs = {
  pl: "pl",
  en: "en",
};

const Appbar = ({ setIsDarkTheme, isDarkTheme }) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState();

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

  const selectLangHandler = (event) => {
    if (i18n.language === "pl-PL") {
      i18n.changeLanguage("pl");
    }
    if (i18n.language === "en-EN") {
      i18n.changeLanguage("en");
    }

    if (event.target.value === Langs.pl) {
      i18n.changeLanguage(Langs.pl);
      setSelectedLang(Langs.pl);
    } else if (event.target.value === Langs.en) {
      i18n.changeLanguage(Langs.en);
      setSelectedLang(Langs.en);
    }
  };

  // Side-effects
  useEffect(() => {
    setSelectedLang(i18n.language);
    console.log(i18n.language);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ zIndex: theme.zIndex.drawer + 1, position: "relative" }}
    >
      <Toolbar variant="regular">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src="NKT_logo_biale.png" height="32px" />
          <IconButton onClick={() => setIsMenuOpen((prev) => !prev)}>
            <MenuIcon sx={{ color: theme.palette.background.default }} />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={isMenuOpen}
            onClose={() => setIsMenuOpen((prev) => !prev)}
          >
            <Container maxWidth="sm" sx={{ paddingTop: 10, paddingBottom: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Ciemny motyw strony:</Typography>
                <Switch value={!isDarkTheme} onChange={changeThemeHandler} />
              </Box>
              <Box>
                <Typography>Język strony</Typography>
                <Select
                  value={selectedLang}
                  onChange={selectLangHandler}
                  rows={1}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.text.secondary,
                    },
                    "& .MuiSvgIcon-root": {
                      color: theme.palette.primary.main,
                    },
                  }}
                  defaultValue={Langs.pl}
                >
                  <MenuItem value={Langs.pl}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ReactCountryFlag
                        countryCode="PL"
                        svg
                        style={{
                          width: "2em",
                          height: "2em",
                        }}
                        title="PL"
                      />
                      <Typography>Polski</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={Langs.en}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                          width: "2em",
                          height: "2em",
                        }}
                        title="US"
                      />
                      <Typography>Angielski</Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </Box>
            </Container>
          </Drawer>
          {/* <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={changeThemeHandler}>
              THEME
            </Button>
            <Button variant="contained" onClick={() => changeLangHandler()}>
              LANG
            </Button>
          </Box> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
