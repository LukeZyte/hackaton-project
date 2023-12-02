import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { InstallationTypes } from "../../../utils/enums/calculator-enums";

const InstallationTypeItem = () => {
  const calcValCtx = useContext(CalculatorValuesContext);
  const theme = useTheme();

  const selectInstallationTypeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === InstallationTypes.A1) {
      calcValCtx.changeInstallationType(InstallationTypes.A1);
    } else if (event.target.value === InstallationTypes.A2) {
      calcValCtx.changeInstallationType(InstallationTypes.A2);
    } else if (event.target.value === InstallationTypes.B1) {
      calcValCtx.changeInstallationType(InstallationTypes.B1);
    } else if (event.target.value === InstallationTypes.B2) {
      calcValCtx.changeInstallationType(InstallationTypes.B2);
    } else if (event.target.value === InstallationTypes.E) {
      calcValCtx.changeInstallationType(InstallationTypes.E);
    } else if (event.target.value === InstallationTypes.F) {
      calcValCtx.changeInstallationType(InstallationTypes.F);
    } else if (event.target.value === InstallationTypes.D1) {
      calcValCtx.changeInstallationType(InstallationTypes.D1);
    } else if (event.target.value === InstallationTypes.D2) {
      calcValCtx.changeInstallationType(InstallationTypes.D2);
    }
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>Sposób instalacji</Typography>

      <Select
        value={calcValCtx.installationType}
        onChange={selectInstallationTypeHandler}
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
        defaultValue={InstallationTypes.A1}
      >
        <MenuItem value={InstallationTypes.A1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.A1}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.A2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.A2}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.B1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.B1}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.B2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.B2}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.E}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.E}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.F}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.F}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.D1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.D1}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={InstallationTypes.D2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{InstallationTypes.D2}</Typography>
          </Box>
        </MenuItem>
      </Select>
    </Box>
  );
};

export default InstallationTypeItem;
