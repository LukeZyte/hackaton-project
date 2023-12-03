import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import {
  InstallationTypes,
  LoadTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";
import { useContext, useEffect } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";

const LoadTypeItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  const selectLoadTypeHandler = (event) => {
    calcValCtx.changeLoadType(event.target.value);
  };

  useEffect(() => {
    calcValCtx.changeCurrent("");
    calcValCtx.changeCosphi("0.8");
    calcValCtx.changePower("");
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
      <Typography fontWeight="bold">{t("load")}</Typography>
      <Select
        value={calcValCtx.loadType}
        onChange={selectLoadTypeHandler}
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
        {Object.entries(LoadTypes).map(([key, value]) => {
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
                <Typography>{t(value)}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

export default LoadTypeItem;
