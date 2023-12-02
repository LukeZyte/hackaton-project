import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  AmbientTempTypes,
  InstallationTypes,
  MaterialTypes,
} from "../../../utils/enums/calculator-enums";

const AmbientTempItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);

  const selectAmbientTempHandler = (event) => {
    calcValCtx.changeAmbientTemp(AmbientTempTypes[event.target.value]);
  };

  useEffect(() => {
    if (
      calcValCtx.installationType === InstallationTypes.D1 ||
      calcValCtx.installationType === InstallationTypes.D2
    ) {
      calcValCtx.changeAmbientTemp(AmbientTempTypes[20]);
    } else {
      calcValCtx.changeAmbientTemp(AmbientTempTypes[30]);
    }
  }, []);

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>Temperatura otoczenia</Typography>
      <Select
        value={calcValCtx.ambientTemp}
        onChange={selectAmbientTempHandler}
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
        {Object.entries(AmbientTempTypes).map(([key, value]) => {
          if (calcValCtx.materialType === MaterialTypes.PVC) {
            if (value <= AmbientTempTypes[70]) {
              return (
                <MenuItem key={key} value={AmbientTempTypes[key]}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography>{AmbientTempTypes[key]}</Typography>
                  </Box>
                </MenuItem>
              );
            }
          } else {
            return (
              <MenuItem key={key} value={AmbientTempTypes[key]}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography>{AmbientTempTypes[key]}</Typography>
                </Box>
              </MenuItem>
            );
          }
        })}
      </Select>
    </Box>
  );
};

export default AmbientTempItem;
