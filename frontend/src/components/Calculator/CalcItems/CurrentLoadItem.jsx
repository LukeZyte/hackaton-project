import { Box, TextField, Typography, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";
import {
  InstallationTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";

const CurrentLoadItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  useEffect(() => {
    calcValCtx.changeCurrent(1);
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
          <Typography variant="caption">{`${t("numOfWires/circuits")}: ${t(
            calcValCtx.wiresNum
          )}`}</Typography>
        </Box>
      </Box>
      <Typography fontWeight="bold">Wartość prądu obciążenia [A]</Typography>
      <TextField
        value={calcValCtx.current}
        inputProps={{
          style: { color: theme.mode === "dark" ? "white" : "black" },
        }}
        id="current"
        type="number"
        onChange={(e) => calcValCtx.changeCurrent(e.target.value)}
      />
    </Box>
  );
};

export default CurrentLoadItem;
