import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadTypes } from "../../../utils/enums/calculator-enums";
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
    </Box>
  );
};

export default LoadTypeItem;
