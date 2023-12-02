import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { WiresNumTypes } from "../../../utils/enums/calculator-enums";
import { useTranslation } from "react-i18next";

const WiresNumItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  const selectWiresNumHandler = (event) => {
    calcValCtx.changeWiresNum(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>{t("numOfWires/circuits")}</Typography>
      <Select
        value={calcValCtx.wiresNum}
        onChange={selectWiresNumHandler}
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
      >
        {Object.entries(WiresNumTypes).map(([key, value]) => {
          return (
            <MenuItem key={key} value={value}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography>{value}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default WiresNumItem;
