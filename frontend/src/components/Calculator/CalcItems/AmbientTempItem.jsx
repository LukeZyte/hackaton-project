import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  AmbientTempTypes,
  InstallationTypes,
  MaterialTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";
import { useTranslation } from "react-i18next";

const AmbientTempItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

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
      <Box
        sx={{
          padding: 2,
          marginBottom: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography>{t("givenParams")}</Typography>
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
          <Typography variant="caption">{`${t("typeOfMaterial")}: ${t(
            calcValCtx.materialType
          )}`}</Typography>
          <Typography variant="caption">{`${t("numberOfCores")}: ${t(
            calcValCtx.numLoadedCores === NumOfCoresTypes.onePhaseTwoCores
              ? "3a"
              : calcValCtx.numLoadedCores === NumOfCoresTypes.threePhasesFour
              ? "3b"
              : calcValCtx.numLoadedCores === NumOfCoresTypes.threePhasesFive
              ? "3d"
              : calcValCtx.numLoadedCores === NumOfCoresTypes.threePhasesSingle
              ? "3c"
              : "3c"
          )}`}</Typography>
          <Typography variant="caption">{`${t("typeOfMaterial")}: ${t(
            calcValCtx.installationType
          )}`}</Typography>
        </Box>
      </Box>
      <Typography fontWeight="bold">{t("ambientTemp")}</Typography>
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
