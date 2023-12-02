import { createContext, useState } from "react";
import {
  InstallationTypes,
  MaterialTypes,
  MetalTypes,
  NumOfCoresTypes,
} from "../utils/enums/calculator-enums";

export const CalculatorValuesContext = createContext({
  metalType: null,
  materialType: null,
  numLoadedVeins: null,
  installationType: null,
  ambientTemp: null,
  thermalResGround: null,
  loadCurrent: null,
  changeMetalType: () => {},
  changeMaterialType: () => {},
  changeNumLoadedVeins: () => {},
  changeInstallationType: () => {},
  changeAmbientTemp: () => {},
  changeThermalResGround: () => {},
  changeLoadCurrent: () => {},
});

export const CalculatorValuesProvider = ({ children }) => {
  const [metalType, setMetalType] = useState(MetalTypes.aluminum);
  const [materialType, setMaterialType] = useState(MaterialTypes.PVC);
  const [numLoadedCores, setNumLoadedCores] = useState(
    NumOfCoresTypes.onePhaseTwoCores
  );
  const [installationType, setInstallationType] = useState(
    InstallationTypes.A1
  );
  const [ambientTemp, setAmbientTemp] = useState(null);
  const [thermalResGround, setThermalResGround] = useState(null);
  const [loadCurrent, setLoadCurrent] = useState(null);

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
  const changeLoadCurrent = (value) => {
    setLoadCurrent(value);
  };

  const value = {
    metalType: metalType,
    materialType: materialType,
    numLoadedCores: numLoadedCores,
    installationType: installationType,
    ambientTemp: ambientTemp,
    thermalResGround: thermalResGround,
    loadCurrent: loadCurrent,
    changeMetalType: changeMetalType,
    changeMaterialType: changeMaterialType,
    changeNumLoadedCores: changeNumLoadedCores,
    changeInstallationType: changeInstallationType,
    changeAmbientTemp: changeAmbientTemp,
    changeThermalResGround: changeThermalResGround,
    changeLoadCurrent: changeLoadCurrent,
  };
  return (
    <CalculatorValuesContext.Provider value={value}>
      {children}
    </CalculatorValuesContext.Provider>
  );
};
