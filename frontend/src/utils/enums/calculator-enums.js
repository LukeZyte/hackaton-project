export const MetalTypes = {
  copper: "miedź",
  aluminum: "aluminium",
};

export const MaterialTypes = {
  PVC: "pvc",
  XLPE: "xlpe",
  BZCA: "b2ca",
};

export const NumOfCoresTypes = {
  onePhaseTwoCores: { faza: 1, zyly: 3, zyly_obc: 2 },
  threePhasesFour: { faza: 3, zyly: 4, zyly_obc: 3 },
  threePhasesFive: { faza: 3, zyly: 5, zyly_obc: 3 },
  threePhasesSingle: { faza: 3, zyly: 1, zyly_obc: 3 },
};

export const InstallationTypes = {
  A1: "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  E: "E",
  F: "F",
  D1: "D1",
  D2: "D2",
};

export const AmbientTempTypes = {
  10: 10,
  15: 15,
  20: 20,
  25: 25,
  30: 30,
  35: 35,
  40: 40,
  45: 45,
  50: 50,
  55: 55,
  60: 60,
  65: 65,
  70: 70,
  75: 75,
  80: 80,
  // 85: 85,
  // 90: 90,
};

export const ThermalResTypes = {
  0.5: "0_5",
  0.7: "0_7",
  1.0: "1",
  1.5: "1_5",
  2.0: "2",
  2.5: "2_5",
  3.0: "3",
};

export const WiresNumTypes = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

export const LoadTypes = {
  current: "currentLoad",
  power: "powerLoad",
};
