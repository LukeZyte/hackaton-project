import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import {
  MaterialTypes,
  MetalTypes,
} from "../../../utils/enums/calculator-enums";
import { CalculatorValuesContext } from "../../../store/calculatorValues";
import { useTranslation } from "react-i18next";

const MaterialTypeItem = () => {
  const theme = useTheme();
  const calcValCtx = useContext(CalculatorValuesContext);
  const { t } = useTranslation();

  const selectMaterialHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === MaterialTypes.BZCA) {
      calcValCtx.changeMaterialType(MaterialTypes.BZCA);
    } else if (event.target.value === MaterialTypes.PVC) {
      calcValCtx.changeMaterialType(MaterialTypes.PVC);
    } else if (event.target.value === MaterialTypes.XLPE) {
      calcValCtx.changeMaterialType(MaterialTypes.XLPE);
    }
  };

  return (
    <Box sx={{ padding: 4, paddingTop: 2 }}>
      <Typography>{t("typeOfMaterial")}</Typography>
      {calcValCtx.metalType === MetalTypes.aluminum ? (
        <Select
          value={calcValCtx.materialType}
          onChange={(e) => {
            console.log("WYKONUJE");
            selectMaterialHandler(e);
          }}
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
          <MenuItem value={MaterialTypes.XLPE}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography>{t("xlpe")}</Typography>
            </Box>
          </MenuItem>
        </Select>
      ) : (
        <Select
          value={calcValCtx.materialType}
          onChange={(e) => {
            console.log("WYKONUJE");
            selectMaterialHandler(e);
          }}
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
          <MenuItem value={MaterialTypes.XLPE}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography>{t("xlpe")}</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={MaterialTypes.PVC}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography>{t("pvc")}</Typography>
            </Box>
          </MenuItem>
          <MenuItem value={MaterialTypes.BZCA}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography>{t("b2ca")}</Typography>
            </Box>
          </MenuItem>
        </Select>
      )}
    </Box>
  );
};

export default MaterialTypeItem;
