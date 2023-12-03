import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    if (calcValCtx.metalType === MetalTypes.aluminum) {
      calcValCtx.changeMaterialType(MaterialTypes.XLPE);
    }
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
        <Typography fontWeight="bold">Wprowdzone parametry:</Typography>
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
        </Box>
      </Box>
      <Typography fontWeight="bold">{t("typeOfMaterial")}</Typography>
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
          <MenuItem value={MaterialTypes.XLPE} style={{ whiteSpace: "normal" }}>
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
          <MenuItem value={MaterialTypes.XLPE} style={{ whiteSpace: "normal" }}>
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
          <MenuItem value={MaterialTypes.PVC} style={{ whiteSpace: "normal" }}>
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
          <MenuItem value={MaterialTypes.BZCA} style={{ whiteSpace: "normal" }}>
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
