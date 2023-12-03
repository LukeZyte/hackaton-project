import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";
import { NumOfCoresTypes } from "../../../utils/enums/calculator-enums";

const NumLoadedCoresItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  const selectNumLoadedCoresHandler = (event) => {
    if (event.target.value === NumOfCoresTypes.onePhaseTwoCores) {
      calcValCtx.changeNumLoadedCores(NumOfCoresTypes.onePhaseTwoCores);
    } else if (event.target.value === NumOfCoresTypes.threePhasesFour) {
      calcValCtx.changeNumLoadedCores(NumOfCoresTypes.threePhasesFour);
    } else if (event.target.value === NumOfCoresTypes.threePhasesFive) {
      calcValCtx.changeNumLoadedCores(NumOfCoresTypes.threePhasesFive);
    } else if (event.target.value === NumOfCoresTypes.threePhasesSingle) {
      calcValCtx.changeNumLoadedCores(NumOfCoresTypes.threePhasesSingle);
    }
    console.log(event.target.value);
  };

  const fullValue = (result) => {
    if (result === NumOfCoresTypes.onePhaseTwoCores) {
      return "Układ jednofazowy (2 żyły obciążone)";
    } else if (result === NumOfCoresTypes.threePhasesFour) {
      return "Układ trójfazowy wielożyłowy (4 żyły, 3 żyły obciążone)";
    } else if (result === NumOfCoresTypes.threePhasesSingle) {
      return "Układ trójfazowy jednożyłowy (3 żyły obciążone)";
    } else if (result === NumOfCoresTypes.threePhasesFive) {
      return "Układ trójfazowy wielożyłowy (5 żył, 3 żyły obciążone)";
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
        </Box>
      </Box>
      <Typography>{t("typeOfMaterial")}</Typography>
      <Select
        value={calcValCtx.numLoadedCores}
        onChange={selectNumLoadedCoresHandler}
        rows={1}
        placeholder="Wybierz rodzaj układu"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
          },
          "& .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
        }}
        defaultValue={NumOfCoresTypes.onePhaseTwoCores}
      >
        <MenuItem value={NumOfCoresTypes.threePhasesSingle}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{t("3c")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={NumOfCoresTypes.onePhaseTwoCores}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{t("3a")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={NumOfCoresTypes.threePhasesFour}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{t("3b")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={NumOfCoresTypes.threePhasesFive}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{t("3d")}</Typography>
          </Box>
        </MenuItem>
      </Select>
    </Box>
  );
};

export default NumLoadedCoresItem;
