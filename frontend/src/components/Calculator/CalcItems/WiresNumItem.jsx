import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  InstallationTypes,
  NumOfCoresTypes,
  WiresNumTypes,
} from "../../../utils/enums/calculator-enums";
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
          <Typography variant="caption">{`${t("installationMethod")}: ${t(
            calcValCtx.installationType
          )}`}</Typography>
          <Typography variant="caption">{`${t("ambientTemp")}: ${t(
            calcValCtx.ambientTemp
          )}`}</Typography>
          {(calcValCtx.installationType === InstallationTypes.D1 ||
            calcValCtx.installationType === InstallationTypes.D2) && (
            <Typography variant="caption">{`${t("groundResistivity")}: ${t(
              String(calcValCtx.thermalResGround).replace("_", ".")
            )}`}</Typography>
          )}
        </Box>
      </Box>
      <Typography fontWeight="bold">{t("numOfWires/circuits")}</Typography>
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
