import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MetalTypeItem from "./CalcItems/MetalTypeItem";
import { useTranslation } from "react-i18next";
import MaterialTypeItem from "./CalcItems/MaterialTypeItem";
import NumLoadedCoresItem from "./CalcItems/NumLoadedCoresItem";
import InstallationTypeItem from "./CalcItems/InstallationTypeItem";
import AmbientTempItem from "./CalcItems/AmbientTempItem";
import { CalculatorValuesContext } from "../../store/calculatorValues";
import {
  InstallationTypes,
  LoadTypes,
} from "../../utils/enums/calculator-enums";
import ThermalResItem from "./CalcItems/ThermalResItem";
import WiresNumItem from "./CalcItems/WiresNumItem";
import LoadTypeItem from "./CalcItems/LoadTypeItem";
import CurrentLoadItem from "./CalcItems/CurrentLoadItem";
import PowerLoadItem from "./CalcItems/PowerLoadItem";
import FinalItem from "./CalcItems/FinalItem";
import FirstPageIcon from "@mui/icons-material/FirstPage";

const CalculatorView = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [calcStage, setCalcStage] = useState(0);
  const calcValCtx = useContext(CalculatorValuesContext);
  const [resArray, setResArray] = useState(null);
  const isDesktop = useMediaQuery("(min-width:500px)");

  const handleClick = () => {
    if (
      calcValCtx.installationType !== InstallationTypes.D1 &&
      calcValCtx.installationType !== InstallationTypes.D2 &&
      calcStage === 4
    ) {
      setCalcStage((prev) => prev + 2);
    } else {
      nextStage();
    }
  };

  const handleBack = () => {
    if (
      calcValCtx.installationType !== InstallationTypes.D1 &&
      calcValCtx.installationType !== InstallationTypes.D2 &&
      calcStage === 6
    ) {
      setCalcStage((prev) => prev - 2);
    } else {
      prevStage();
    }
  };

  const handleRestart = () => {
    setCalcStage(0);
  };

  const lastResultHandler = () => {
    if (resArray !== null) {
      calcValCtx.setAll(resArray);
      setCalcStage(9);
    }
  };

  useEffect(() => {
    setResArray(JSON.parse(localStorage.getItem("lastCalc")));
  }, []);

  const nextStage = () => setCalcStage((prev) => prev + 1);
  const prevStage = () => setCalcStage((prev) => prev - 1);

  return (
    <Container maxWidth="md" sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Box
        sx={{
          overflow: "hidden",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            padding: 2,
            paddingLeft: 4,
            paddingRight: 4,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" fontWeight="700" color={"white"}>
            Kalkulator
          </Typography>
          {!!resArray && (
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={lastResultHandler}
            >
              Ostatni wynik
            </Button>
          )}
        </Box>
        {calcStage === 0 && <MetalTypeItem />}
        {calcStage === 1 && <MaterialTypeItem />}
        {calcStage === 2 && <NumLoadedCoresItem />}
        {calcStage === 3 && <InstallationTypeItem />}
        {calcStage === 4 && <AmbientTempItem />}
        {calcStage === 5 && <ThermalResItem />}
        {calcStage === 6 && <WiresNumItem />}
        {calcStage === 7 && <LoadTypeItem />}
        {calcStage === 8 && calcValCtx.loadType === LoadTypes.current && (
          <CurrentLoadItem />
        )}
        {calcStage === 8 && calcValCtx.loadType === LoadTypes.power && (
          <PowerLoadItem />
        )}
        {calcStage === 9 && <FinalItem />}

        <Box
          sx={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            justifyContent: "space-between",
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            gap: 2,
          }}
        >
          <Button
            disabled={calcStage === 0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
            color="secondary"
            startIcon={<FirstPageIcon />}
            onClick={handleRestart}
          >
            Od nowa
          </Button>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              disabled={calcStage === 0}
              variant="text"
              color="secondary"
              startIcon={<ChevronLeftIcon />}
              onClick={handleBack}
            >
              {t("common:back")}
            </Button>
            <Button
              disabled={calcStage === 9}
              variant="contained"
              color="secondary"
              endIcon={<ChevronRightIcon />}
              onClick={handleClick}
            >
              {t("common:next")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CalculatorView;
