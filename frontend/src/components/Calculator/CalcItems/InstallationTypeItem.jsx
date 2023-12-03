import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import {
  InstallationTypes,
  NumOfCoresTypes,
} from "../../../utils/enums/calculator-enums";
import { useTranslation } from "react-i18next";

const InstallationTypeItem = () => {
  const calcValCtx = useContext(CalculatorValuesContext);
  const theme = useTheme();
  const { t } = useTranslation();

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
        </Box>
      </Box>
      <Typography>{t("installationMethod")}</Typography>

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
            <Typography>{t("4a1")}</Typography>
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
            <Typography>{t("4a2")}</Typography>
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
            <Typography>{t("4b1")}</Typography>
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
            <Typography>{t("4b2")}</Typography>
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
            <Typography>{t("4e")}</Typography>
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
            <Typography>{t("4f")}</Typography>
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
            <Typography>{t("4d1")}</Typography>
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
            <Typography>{t("4d2")}</Typography>
          </Box>
        </MenuItem>
      </Select>
    </Box>
  );
};

export default InstallationTypeItem;
