import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/UI/Footer";
import CalculatorView from "../components/Calculator/CalculatorView";

const Calculator = () => {
  return (
    <Container>
      <CalculatorView />
      <Footer />
    </Container>
  );
};

export default Calculator;
