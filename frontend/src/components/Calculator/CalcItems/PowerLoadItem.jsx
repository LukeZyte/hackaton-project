import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";
import {
  InstallationTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";

const PowerLoadItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  useEffect(() => {
    calcValCtx.changePower(1);
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
          <Typography variant="caption">{`${t("numOfWires/circuits")}: ${t(
            calcValCtx.wiresNum
          )}`}</Typography>
        </Box>
      </Box>
      <Typography fontWeight="bold">{t("lpv")} [W]</Typography>
      <TextField
        inputProps={{
          style: { color: theme.mode === "dark" ? "white" : "black" },
        }}
        value={calcValCtx.power}
        id="power"
        type="number"
        onChange={(e) => calcValCtx.changePower(e.target.value)}
      />
      <Typography fontWeight="bold">{t("valueOfCosPhi")}(phi)</Typography>
      <TextField
        inputProps={{
          style: { color: theme.mode === "dark" ? "white" : "black" },
        }}
        value={calcValCtx.cosphi}
        id="cosphi"
        type="number"
        onChange={(e) => calcValCtx.changeCosphi(e.target.value)}
      />
    </Box>
  );
};

export default PowerLoadItem;
