import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  InstallationTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";

const FinalItem = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const calcValCtx = useContext(CalculatorValuesContext);

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
          {calcValCtx.current && (
            <Typography variant="caption">{`Prąd: ${t(
              calcValCtx.current
            )} [A]`}</Typography>
          )}
          {calcValCtx.power && (
            <>
              <Typography variant="caption">{`Moc: ${t(
                calcValCtx.power
              )} [W]`}</Typography>
              <Typography variant="caption">{`Cos(phi): ${t(
                calcValCtx.cosphi
              )}`}</Typography>
            </>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ padding: 2, fontSize: 16, paddingLeft: 8, paddingRight: 8 }}
          variant="contained"
          color="secondary"
          onClick={() => {
            const body = {
              metal: calcValCtx.metalType,
              izolacja: calcValCtx.materialType,
              zyly_obj: calcValCtx.numLoadedCores,
              sposob_instalacji: calcValCtx.installationType,
              temperatura: calcValCtx.ambientTemp,
              rezystancja_cieplna: calcValCtx.thermalResGround,
              ilosc_przewodow: calcValCtx.wiresNum,
              moc: calcValCtx.power,
              prad: calcValCtx.current,
              cosphi: calcValCtx.cosphi,
            };
            console.log(body);

            fetch(
              `http://localhost:3001/logic?metal=${body.metal}&izolacja=${body.izolacja}&zyly_obj=${body.zyly_obj}&sposob_instalacji=${body.sposob_instalacji}&temperatura=${body.temperatura}&rezystancja_cieplna=${body.rezystancja_cieplna}&ilosc_przewodow=${body.ilosc_przewodow}&mod=${body.moc}&prad=${body.prad}&cosphi=${body.cosphi}`,
              {
                method: "GET",
              }
            )
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }}
        >
          Zatwiedź
        </Button>
      </Box>
    </Box>
  );
};

export default FinalItem;