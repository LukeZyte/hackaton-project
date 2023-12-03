import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";

const PowerLoadItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();
  const [powerInput, setPowerInput] = useState("");
  const [cosphiInput, setCosphiInput] = useState("0.8");

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Box
        sx={{
          padding: 2,
          marginBottom: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography>Wprowdzone parametry:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 1,
            marginTop: 0.5,
          }}
        >
          <Typography variant="caption">{`${t("typeOfMetal")}: ${t(
            calcValCtx.metalType
          )}`}</Typography>
        </Box>
      </Box>
      <Typography fontWeight="bold">Wartość mocy obciążenia</Typography>
      <TextField
        value={calcValCtx.power}
        id="power"
        type="number"
        onChange={(e) => calcValCtx.changePower(e.target.value)}
      />
      <Typography fontWeight="bold">Wartość cos(phi)</Typography>
      <TextField
        value={calcValCtx.cosphi}
        id="cosphi"
        type="number"
        onChange={(e) => calcValCtx.changeCosphi(e.target.value)}
      />
    </Box>
  );
};

export default PowerLoadItem;
