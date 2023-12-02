import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  AmbientTempTypes,
  InstallationTypes,
  ThermalResTypes,
} from "../../../utils/enums/calculator-enums";

const ThermalResItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);

  const selectThermalResHandler = (event) => {
    calcValCtx.changeThermalResGround(event.target.value);
    console.log(calcValCtx.ThermalResGround);
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>Rezystywność cieplna gruntu</Typography>
      <Select
        value={calcValCtx.thermalResGround}
        onChange={selectThermalResHandler}
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
        {Object.entries(ThermalResTypes).map(([key, value]) => {
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
                <Typography>{key}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default ThermalResItem;
