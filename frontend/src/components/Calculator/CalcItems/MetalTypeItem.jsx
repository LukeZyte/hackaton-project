import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { MetalTypes } from "../../../utils/enums/calculator-enums";

const MetalTypeItem = () => {
  const calcValCtx = useContext(CalculatorValuesContext);
  const theme = useTheme();

  const selectMetalHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === MetalTypes.aluminum) {
      calcValCtx.changeMetalType(MetalTypes.aluminum);
    } else if (event.target.value === MetalTypes.copper) {
      calcValCtx.changeMetalType(MetalTypes.copper);
    }
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>Rodzaj metalu</Typography>

      <Select
        value={calcValCtx.metalType}
        onChange={selectMetalHandler}
        rows={1}
        placeholder="Wybierz rodzaj metalu"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
          },
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
        }}
        defaultValue={MetalTypes.aluminum}
      >
        <MenuItem value={MetalTypes.aluminum}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{MetalTypes.aluminum}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={MetalTypes.copper}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{MetalTypes.copper}</Typography>
          </Box>
        </MenuItem>
      </Select>
    </Box>
  );
};

export default MetalTypeItem;
