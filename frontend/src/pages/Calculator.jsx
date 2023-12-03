import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/UI/Footer";
import CalculatorView from "../components/Calculator/CalculatorView";
import Instruction from "../components/Calculator/Instruction";

const Calculator = () => {
  return (
    <Container>
      <Instruction />
      <CalculatorView />
      <Footer />
    </Container>
  );
};

export default Calculator;
