import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
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

const CalculatorView = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [calcStage, setCalcStage] = useState(0);
  const calcValCtx = useContext(CalculatorValuesContext);

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
          }}
        >
          <Typography variant="h5" fontWeight="700" color={"white"}>
            NKT instal
          </Typography>
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
        {calcStage === 9 && (
          <Button
            variant="contained"
            onClick={() => {
              console.log({
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
              });
            }}
          >
            Pokaz wynik wysylany do bazy danych
          </Button>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            gap: 2,
          }}
        >
          {calcStage > 0 && (
            <Button
              variant="text"
              color="secondary"
              startIcon={<ChevronLeftIcon />}
              onClick={handleBack}
            >
              {t("common:back")}
            </Button>
          )}
          {calcStage < 9 && (
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ChevronRightIcon />}
              onClick={handleClick}
            >
              {t("common:next")}
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CalculatorView;
