import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Calculator = () => {
  const { t } = useTranslation();

  return <Typography>{t("test")}</Typography>;
};

export default Calculator;
