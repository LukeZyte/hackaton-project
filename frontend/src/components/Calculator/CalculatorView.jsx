import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MetalTypeItem from "./CalcItems/MetalTypeItem";
import { useTranslation } from "react-i18next";
import MaterialTypeItem from "./CalcItems/MaterialTypeItem";
import NumLoadedCoresItem from "./CalcItems/NumLoadedCoresItem";
import InstallationTypeItem from "./CalcItems/InstallationTypeItem";

const CalculatorView = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [calcStage, setCalcStage] = useState(0);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ChevronRightIcon />}
            onClick={nextStage}
          >
            {t("common:next")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CalculatorView;
