import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

const footerFontSize = 14;
const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:500px)");

  return (
    <Box
      sx={{
        display: "flex",
        height: 70,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: isDesktop ? "row" : "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Box
          sx={{
            paddingRight: 3,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 2,
            borderRight: 1,
            borderColor: theme.palette.text.disabled,
          }}
        >
          <img
            src={
              theme.mode === "dark"
                ? "NKT_logo_biale.png"
                : "NKT_logo_czarne.png"
            }
            height={"24px"}
            style={{ opacity: 0.5 }}
          />
        </Box>
        <Box>
          <Typography
            fontSize={footerFontSize}
            sx={{ color: theme.palette.text.disabled }}
          >
            Adam Kruczkowski
          </Typography>
          <Typography
            fontSize={footerFontSize}
            sx={{ color: theme.palette.text.disabled }}
          >
            Łukasz Jarząb
          </Typography>
          <Typography
            fontSize={footerFontSize}
            sx={{ color: theme.palette.text.disabled }}
          >
            Bartosz Ziarnik
          </Typography>
          <Typography
            fontSize={footerFontSize}
            sx={{ color: theme.palette.text.disabled }}
          >
            Dawid Wolny
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 1,
          marginRight: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: isDesktop ? "flex-end" : "center",
        }}
      >
        <Typography
          fontSize={footerFontSize}
          sx={{ color: theme.palette.text.disabled }}
        >
          CablesTooltip
        </Typography>
        <Typography
          fontSize={footerFontSize}
          sx={{ color: theme.palette.text.disabled }}
        >
          Hackathon 2023
        </Typography>
        <Typography
          fontSize={footerFontSize}
          sx={{ color: theme.palette.text.disabled }}
        >
          BIT Festival
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
