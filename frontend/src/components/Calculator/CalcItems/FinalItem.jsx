import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
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
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      {fetchedData && (
        <>
          {fetchedData.length === 1 && (
            <Typography>{fetchedData[0]}</Typography>
          )}
          {fetchedData.length > 1 && (
            <Box sx={{ marginBottom: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: 1 }}
              >
                {fetchedData.length > 1 ? "Wyniki" : "Wynik"}
              </Typography>
              {fetchedData[0] && (
                <Typography>{`Typ kabla: ${fetchedData[0]}`}</Typography>
              )}
              {fetchedData[3] && (
                <>
                  <a
                    href={fetchedData[3]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    [Link] Nota katalogowa
                  </a>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                </>
              )}
              {fetchedData[1] && (
                <Typography>{`Typ kabla: ${fetchedData[1]}`}</Typography>
              )}
              {fetchedData[4] && (
                <>
                  <a
                    href={fetchedData[4]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    [Link] Nota katalogowa
                  </a>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                </>
              )}
              {fetchedData[2] && (
                <Typography>{`Typ kabla: ${fetchedData[2]}`}</Typography>
              )}
              {fetchedData[5] && (
                <>
                  <a
                    href={fetchedData[5]}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: theme.palette.secondary.main }}
                  >
                    [Link] Nota katalogowa
                  </a>
                  <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                </>
              )}
            </Box>
          )}
        </>
      )}
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

            setIsLoading(true);
            fetch(
              `https://cablestooltip.lm.r.appspot.com/logic?metal=${body.metal}&izolacja=${body.izolacja}&zyly_obc=${body.zyly_obj["zyly_obc"]}&zyly=${body.zyly_obj["zyly"]}&faza=${body.zyly_obj["faza"]}&sposob_instalacji=${body.sposob_instalacji}&temperatura=${body.temperatura}&rezystancja_cieplna=${body.rezystancja_cieplna}&ilosc_przewodow=${body.ilosc_przewodow}&moc=${body.moc}&prad=${body.prad}&cosphi=${body.cosphi}`,
              {
                method: "GET",
                mode: "no-cors",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                setFetchedData(data);
                localStorage.setItem(
                  "lastCalc",
                  JSON.stringify([
                    ...calcValCtx.getAll(),
                    data[0],
                    data[1],
                    data[2],
                    data[3],
                    data[4],
                    data[5],
                  ])
                );
              })
              .catch((err) => {
                setFetchedData("Nie udało się załadować wyniku :(");
                console.log(err);
              })
              .finally(() => {
                setIsLoading(false);
                console.log("Saved calculations as a last entry");
              });
          }}
        >
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            "Zatwiedź"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default FinalItem;
