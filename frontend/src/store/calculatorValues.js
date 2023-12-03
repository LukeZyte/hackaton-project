import { createContext, useState } from "react";
import {
  AmbientTempTypes,
  InstallationTypes,
  LoadTypes,
  MaterialTypes,
  MetalTypes,
  NumOfCoresTypes,
  ThermalResTypes,
  WiresNumTypes,
} from "../utils/enums/calculator-enums";

export const CalculatorValuesContext = createContext({
  metalType: null,
  materialType: null,
  numLoadedCores: null,
  installationType: null,
  ambientTemp: null,
  thermalResGround: null,
  wiresNum: null,
  loadType: null,
  current: null,
  power: null,
  cosphi: null,
  changeMetalType: () => {},
  changeMaterialType: () => {},
  changeNumLoadedCores: () => {},
  changeInstallationType: () => {},
  changeAmbientTemp: () => {},
  changeThermalResGround: () => {},
  changeWiresNum: () => {},
  changeLoadType: () => {},
  changeCurrent: () => {},
  changePower: () => {},
  changeCosphi: () => {},
});

export const CalculatorValuesProvider = ({ children }) => {
  const [metalType, setMetalType] = useState(MetalTypes.aluminum);
  const [materialType, setMaterialType] = useState(MaterialTypes.XLPE);
  const [numLoadedCores, setNumLoadedCores] = useState(
    NumOfCoresTypes.onePhaseTwoCores
  );
  const [installationType, setInstallationType] = useState(
    InstallationTypes.A1
  );
  const [ambientTemp, setAmbientTemp] = useState(AmbientTempTypes[30]);
  const [thermalResGround, setThermalResGround] = useState(ThermalResTypes[1]);
  const [wiresNum, setWiresNum] = useState(WiresNumTypes[1]);
  const [loadType, setLoadType] = useState(LoadTypes.current);
  const [current, setCurrent] = useState("");
  const [power, setPower] = useState("");
  const [cosphi, setCosphi] = useState("0.8");

  const changeMetalType = (value) => {
    setMetalType(value);
  };
  const changeMaterialType = (value) => {
    setMaterialType(value);
  };
  const changeNumLoadedCores = (value) => {
    setNumLoadedCores(value);
  };
  const changeInstallationType = (value) => {
    setInstallationType(value);
  };
  const changeAmbientTemp = (value) => {
    setAmbientTemp(value);
  };
  const changeThermalResGround = (value) => {
    setThermalResGround(value);
  };
  const changeWiresNum = (value) => {
    setWiresNum(value);
  };
  const changeLoadType = (value) => {
    setLoadType(value);
  };
  const changeCurrent = (value) => {
    setCurrent(value);
  };
  const changePower = (value) => {
    setPower(value);
  };
  const changeCosphi = (value) => {
    setCosphi(value);
  };

  const value = {
    metalType: metalType,
    materialType: materialType,
    numLoadedCores: numLoadedCores,
    installationType: installationType,
    ambientTemp: ambientTemp,
    thermalResGround: thermalResGround,
    wiresNum: wiresNum,
    loadType: loadType,
    current: current,
    power: power,
    cosphi: cosphi,
    changeMetalType: changeMetalType,
    changeMaterialType: changeMaterialType,
    changeNumLoadedCores: changeNumLoadedCores,
    changeInstallationType: changeInstallationType,
    changeAmbientTemp: changeAmbientTemp,
    changeThermalResGround: changeThermalResGround,
    changeWiresNum: changeWiresNum,
    changeLoadType: changeLoadType,
    changeCurrent: changeCurrent,
    changePower: changePower,
    changeCosphi: changeCosphi,
  };
  return (
    <CalculatorValuesContext.Provider value={value}>
      {children}
    </CalculatorValuesContext.Provider>
  );
};
