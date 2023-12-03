import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const Instruction = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ marginBottom: 1, marginTop: 3 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: theme.palette.background.default }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h5" color={"white"} fontWeight="700">
                {t("formula")}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ marginLeft: 2, marginTop: 1 }}>
              <Typography>{t("formulasUsedTo")}</Typography>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <img
                  src={
                    theme.mode === "dark"
                      ? "jednofazowa_biala.png"
                      : "jednofazowa.png"
                  }
                  height={36}
                />
                <Box sx={{ marginTop: 0.5 }}>
                  <Typography>
                    {"(1-fazowa: przewody i kable 1-, 3- lub 4- żyłowe)"}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: 1, gap: 1 }}>
                <img
                  src={
                    theme.mode === "dark"
                      ? "wielofazowa_biala.png"
                      : "wielofazowa.png"
                  }
                  height={36}
                />
                <Box sx={{ marginTop: 0.5 }}>
                  <Typography>
                    {"(3-fazowa: przewody i kable 1- lub 4-/5- żyłowe)"}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: 1.5 }}>
                <Typography>{t("formulasForFinalCurrent")}</Typography>
                <Box sx={{ marginTop: 1 }}>
                  <img
                    src={
                      theme.mode === "dark"
                        ? "prad_ostateczny_bialy.png"
                        : "prad_ostateczny.png"
                    }
                    height={36}
                  />
                </Box>
              </Box>
              <Box sx={{ marginTop: 1.5 }}>
                <Typography fontWeight="700">{t("permissibleTemp")}</Typography>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>{t("forPVC")}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={
                        i18n.language === "pl"
                          ? { marginLeft: 16 }
                          : { marginLeft: 21 }
                      }
                    >
                      {"70°C"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>{t("common:forXLPE")}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={
                        i18n.language === "pl"
                          ? { marginLeft: 13.5 }
                          : { marginLeft: 6.7 }
                      }
                    >
                      {"90°C"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginTop: 1.5 }}>
                <Typography fontWeight="700">{t("permissibleCon")}</Typography>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>{t("common:forPVC")} ≤ 300mm²</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={
                        i18n.language === "pl"
                          ? { marginLeft: 6 }
                          : { marginLeft: 11 }
                      }
                    >
                      {"160°C"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>
                      {t("common:forPVC")} {" >"} 300mm²
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={
                        i18n.language === "pl"
                          ? { marginLeft: 6 }
                          : { marginLeft: 11 }
                      }
                    >
                      {"140°C"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography>{t("common:forXLPE")}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={
                        i18n.language === "pl"
                          ? { marginLeft: 13.5 }
                          : { marginLeft: 6.7 }
                      }
                    >
                      {"250°C"}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: 1.5 }}>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("groundTemp")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 20 }
                            : { marginLeft: 21.3 }
                        }
                      >
                        {"20°C"}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("groundRes")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 23 }
                            : { marginLeft: 23 }
                        }
                      >
                        {"1,0K∙m/W"}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("lfc")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 14 }
                            : { marginLeft: 17.6 }
                        }
                      >
                        0,7
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("depth")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 24.3 }
                            : { marginLeft: 18.6 }
                        }
                      >
                        0,7m
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("spacing")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 12 }
                            : { marginLeft: 20 }
                        }
                      >
                        70mm
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography>{t("moisture")}</Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={
                          i18n.language === "pl"
                            ? { marginLeft: 22 }
                            : { marginLeft: 18.3 }
                        }
                      >
                        {t("no")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Instruction;
