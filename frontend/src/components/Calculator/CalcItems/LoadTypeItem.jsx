import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadTypes } from "../../../utils/enums/calculator-enums";
import { useContext } from "react";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";

const LoadTypeItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  const selectLoadTypeHandler = (event) => {
    calcValCtx.changeLoadType(event.target.value);
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>{t("load")}</Typography>
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
      <Button
        variant="contained"
        onClick={() => {
          console.log({
            metalType: calcValCtx.metalType,
            materialType: calcValCtx.materialType,
            numLoadedCores: calcValCtx.numLoadedCores,
            installationType: calcValCtx.installationType,
            ambientTemp: calcValCtx.ambientTemp,
            thermalResGround: calcValCtx.thermalResGround,
            wiresNum: calcValCtx.wiresNum,
            loadType: calcValCtx.loadType,
          });
        }}
      >
        Pokaz wynik wysylany do bazy danych
      </Button>
    </Box>
  );
};

export default LoadTypeItem;
