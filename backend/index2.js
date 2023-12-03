const express = require("express");
const app = express();
const port = 3001;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db = require("better-sqlite3")("mydb.db");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(port, () => {
  console.log("hejka");
});

app.get("/logic", (req, res) => {
  console.log("hello");
  let kabel = "";
  let kabel2 = "";
  let kabel3 = "";

  let metal = req.query.metal;

  let izolacja = req.query.izolacja;
  let ilosc_zyl = req.query.zyly;
  let ilosc_zyl_obciazonych = req.query.zyly_obc;
  let ilosc_faz = req.query.faza;
  let sposob_instalacji = req.query.sposob_instalacji;
  let temperatura = req.query.temperatura;
  let rezystancja_cieplna = req.query.rezystancja_cieplna;
  let prad_obciazenia = req.query.prad;
  let prad_od_luke = prad_obciazenia;
  let moc = req.query.moc;
  let cosphi = req.query.cosphi;
  let ilosc_przewodow = req.query.ilosc_przewodow;
  let wsp_liczba_wiazek = "1";
  let wsp_temp = "1";
  let wsp_rez = "1";
  console.log(prad_obciazenia);

  if (metal == "miedź") {
    if (izolacja == "pvc") {
      if (
        sposob_instalacji == "A2" ||
        sposob_instalacji == "A1" ||
        sposob_instalacji == "E" ||
        sposob_instalacji == "B2"
      ) {
        kabel = "ydy";
        kabel2 = "yky";
      } else if (
        sposob_instalacji == "D2" ||
        sposob_instalacji == "D1" ||
        sposob_instalacji == "F"
      ) {
        kabel = "yky";
      }
    } else if (izolacja == "b2ca") {
      kabel = "N2XH";
    } else if (izolacja == "xlpe") {
      kabel = "YKXS";
    }
  } else {
    kabel = "yakxs";
  }
  if (prad_obciazenia == "") {
    if (ilosc_faz == "3") {
      prad_obciazenia = moc / (Math.sqrt(3) * 400 * cosphi);
    } else if (ilosc_faz == "1") {
      prad_obciazenia = moc / (240 * cosphi);
    }
  }
  console.log(prad_obciazenia);
  if (sposob_instalacji == "E") {
    let temp = "liczba_przew_" + ilosc_przewodow;
    const wynik = db
      .prepare(
        "SELECT " + temp + " FROM liczba_obwodow WHERE kolumna LIKE 'kolumna B'"
      )
      .get();
    wsp_liczba_wiazek = wynik[temp].replace(",", ".");
  }
  if (
    sposob_instalacji == "F" ||
    sposob_instalacji == "B2" ||
    sposob_instalacji == "B1" ||
    sposob_instalacji == "A2" ||
    sposob_instalacji == "A1"
  ) {
    let temp = "liczba_przew_" + ilosc_przewodow;
    const wynik = db
      .prepare(
        "SELECT " +
          temp +
          " FROM liczba_obwodow WHERE kolumna LIKE 'kolumna A '"
      )
      .get();
    wsp_liczba_wiazek = wynik[temp].replace(",", ".");
  }
  if (
    sposob_instalacji == "F" ||
    sposob_instalacji == "B2" ||
    sposob_instalacji == "B1" ||
    sposob_instalacji == "A2" ||
    sposob_instalacji == "A1" ||
    sposob_instalacji == "E"
  ) {
    let temp = "temp_" + temperatura;
    const wynik = db
      .prepare(
        "SELECT " + temp + " FROM temp_air WHERE kabel LIKE '" + kabel + "'"
      )
      .get();
    wsp_temp = wynik[temp].replace(",", ".");
  }
  if (sposob_instalacji == "D1" || sposob_instalacji == "D2") {
    let temp = "temp_" + temperatura;
    const wynik = db
      .prepare(
        "SELECT " + temp + " FROM temp_grunt WHERE kabel LIKE '" + kabel + "'"
      )
      .get();
    wsp_temp = wynik[temp].replace(",", ".");
  }
  if (sposob_instalacji == "D1" || sposob_instalacji == "D2") {
    let sposób = "";
    if (sposob_instalacji == "D1") {
      sposób = "0";
    } else {
      sposób = "1";
    }
    let temp = "rez_" + rezystancja_cieplna;
    const wynik = db
      .prepare(
        "SELECT " + temp + " FROM rez_cieplna WHERE kabel LIKE '" + kabel + "'"
      )
      .all();
    wsp_rez = wynik[sposób][temp].replace(",", ".");
  }
  console.log(prad_obciazenia);
  prad_obciazenia =
    prad_obciazenia / (wsp_liczba_wiazek * wsp_rez * wsp_temp * 0.85);

  const wynik = db
    .prepare(
      "SELECT obwód, liczba_żył, liczba_żył_obciążonych_prądowo, sposób_instalacji, metoda_referencyjna, przekrój_żyły, CASE WHEN CAST(żyła_1_5 AS REAL) > ? AND CAST(żyła_1_5 AS REAL) < CAST(żyła_2_5 AS REAL) THEN 'żyła_1_5' WHEN CAST(żyła_2_5 AS REAL) > ? AND CAST(żyła_2_5 AS REAL) < CAST(żyła_4 AS REAL) THEN 'żyła_2_5' WHEN CAST(żyła_4 AS REAL) > ? AND CAST(żyła_4 AS REAL) < CAST(żyła_6 AS REAL) THEN 'żyła_4' WHEN CAST(żyła_6 AS REAL) > ? AND CAST(żyła_6 AS REAL) < CAST(żyła_10 AS REAL) THEN 'żyła_6' WHEN CAST(żyła_10 AS REAL) > ? AND CAST(żyła_10 AS REAL) < CAST(żyła_16 AS REAL) THEN 'żyła_10' WHEN CAST(żyła_16 AS REAL) > ? AND CAST(żyła_16 AS REAL) < CAST(żyła_25 AS REAL) THEN 'żyła_16' WHEN CAST(żyła_25 AS REAL) > ? AND CAST(żyła_25 AS REAL) < CAST(żyła_35 AS REAL) THEN 'żyła_25' WHEN CAST(żyła_35 AS REAL) > ? AND CAST(żyła_35 AS REAL) < CAST(żyła_50 AS REAL) THEN 'żyła_35' WHEN CAST(żyła_50 AS REAL) > ? AND CAST(żyła_50 AS REAL) < CAST(żyła_70 AS REAL) THEN 'żyła_50' WHEN CAST(żyła_70 AS REAL) > ? AND CAST(żyła_70 AS REAL) < CAST(żyła_95 AS REAL) THEN 'żyła_70' WHEN CAST(żyła_95 AS REAL) > ? AND CAST(żyła_95 AS REAL) < CAST(żyła_120 AS REAL) THEN 'żyła_95' WHEN CAST(żyła_120 AS REAL) > ? AND CAST(żyła_120 AS REAL) < CAST(żyła_150 AS REAL) THEN 'żyła_120' WHEN CAST(żyła_150 AS REAL) > ? AND CAST(żyła_150 AS REAL) < CAST(żyła_185 AS REAL) THEN 'żyła_150' WHEN CAST(żyła_185 AS REAL) > ? AND CAST(żyła_185 AS REAL) < CAST(żyła_240 AS REAL) THEN 'żyła_185' WHEN CAST(żyła_240 AS REAL) > ? AND CAST(żyła_240 AS REAL) < CAST(żyła_300 AS REAL) THEN 'żyła_240' WHEN CAST(żyła_300 AS REAL) > ? THEN 'żyła_300' ELSE NULL END AS kolumna_z_wartoscia FROM " +
        kabel +
        " WHERE liczba_żył=" +
        ilosc_zyl +
        " AND metoda_referencyjna=?"
    )
    .all(
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      prad_obciazenia,
      sposob_instalacji
    );
  let przekrój_żył = wynik[0]["kolumna_z_wartoscia"];

  const result = przekrój_żył.substring(5, 9);

  let result2 = "";
  if (kabel2 != "") {
    const wynik = db
      .prepare(
        "SELECT obwód, liczba_żył, liczba_żył_obciążonych_prądowo, sposób_instalacji, metoda_referencyjna, przekrój_żyły, CASE WHEN CAST(żyła_1_5 AS REAL) > ? AND CAST(żyła_1_5 AS REAL) < CAST(żyła_2_5 AS REAL) THEN 'żyła_1_5' WHEN CAST(żyła_2_5 AS REAL) > ? AND CAST(żyła_2_5 AS REAL) < CAST(żyła_4 AS REAL) THEN 'żyła_2_5' WHEN CAST(żyła_4 AS REAL) > ? AND CAST(żyła_4 AS REAL) < CAST(żyła_6 AS REAL) THEN 'żyła_4' WHEN CAST(żyła_6 AS REAL) > ? AND CAST(żyła_6 AS REAL) < CAST(żyła_10 AS REAL) THEN 'żyła_6' WHEN CAST(żyła_10 AS REAL) > ? AND CAST(żyła_10 AS REAL) < CAST(żyła_16 AS REAL) THEN 'żyła_10' WHEN CAST(żyła_16 AS REAL) > ? AND CAST(żyła_16 AS REAL) < CAST(żyła_25 AS REAL) THEN 'żyła_16' WHEN CAST(żyła_25 AS REAL) > ? AND CAST(żyła_25 AS REAL) < CAST(żyła_35 AS REAL) THEN 'żyła_25' WHEN CAST(żyła_35 AS REAL) > ? AND CAST(żyła_35 AS REAL) < CAST(żyła_50 AS REAL) THEN 'żyła_35' WHEN CAST(żyła_50 AS REAL) > ? AND CAST(żyła_50 AS REAL) < CAST(żyła_70 AS REAL) THEN 'żyła_50' WHEN CAST(żyła_70 AS REAL) > ? AND CAST(żyła_70 AS REAL) < CAST(żyła_95 AS REAL) THEN 'żyła_70' WHEN CAST(żyła_95 AS REAL) > ? AND CAST(żyła_95 AS REAL) < CAST(żyła_120 AS REAL) THEN 'żyła_95' WHEN CAST(żyła_120 AS REAL) > ? AND CAST(żyła_120 AS REAL) < CAST(żyła_150 AS REAL) THEN 'żyła_120' WHEN CAST(żyła_150 AS REAL) > ? AND CAST(żyła_150 AS REAL) < CAST(żyła_185 AS REAL) THEN 'żyła_150' WHEN CAST(żyła_185 AS REAL) > ? AND CAST(żyła_185 AS REAL) < CAST(żyła_240 AS REAL) THEN 'żyła_185' WHEN CAST(żyła_240 AS REAL) > ? AND CAST(żyła_240 AS REAL) < CAST(żyła_300 AS REAL) THEN 'żyła_240' WHEN CAST(żyła_300 AS REAL) > ? THEN 'żyła_300' ELSE NULL END AS kolumna_z_wartoscia FROM " +
          kabel2 +
          " WHERE liczba_żył=" +
          ilosc_zyl +
          " AND metoda_referencyjna=?"
      )
      .all(
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        prad_obciazenia,
        sposob_instalacji
      );
    let przekrój_żył2 = wynik[0]["kolumna_z_wartoscia"];

    result2 = przekrój_żył2.substring(5, 9);
  }
  let koniec2 = "";
  if (kabel2 != "") {
    kabel2 = kabel2.toUpperCase();
    koniec2 = kabel2 + ilosc_zyl + "x" + result2;
  }
  let koniec3 = "";
  if (kabel == "ydy") {
    koniec3 = "YDYp" + ilosc_zyl + "x" + result;
    kabel3 = "YDYp";
  }
  kabel = kabel.toUpperCase();
  let koniec = kabel + " " + ilosc_zyl + "x" + result;
  let nota1 = "";
  let nota2 = "";
  let nota3 = "";

  switch (kabel) {
    case "YDY":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/ydy-450-750-v";
      break;
    case "YDYp":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/nkt-instal-ydyp-450-750-v";
      break;
    case "YKY":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yky-0-6-1-kv";
      break;
    case "YKXS":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/ykxs-0-6-1-kv";
      break;
    case "YAKXS":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yakxs-0-6-1-kv";
      break;
    case "N2XH":
      nota1 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/nopovic-n2xh-0-6-1-kv";
      break;
    default:
      nota1 = "";
  }
  switch (kabel2) {
    case "YDY":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/ydy-450-750-v";
      break;
    case "YDYp":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/nkt-instal-ydyp-450-750-v";
      break;
    case "YKY":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yky-0-6-1-kv";
      break;
    case "YKXS":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/ykxs-0-6-1-kv";
      break;
    case "YAKXS":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yakxs-0-6-1-kv";
      break;
    case "N2XH":
      nota2 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/nopovic-n2xh-0-6-1-kv";
      break;
    default:
      nota2 = "";
  }
  switch (kabel3) {
    case "YDY":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/ydy-450-750-v";
      break;
    case "YDYp":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/nkt-instal-ydyp-450-750-v";
      break;
    case "YKY":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yky-0-6-1-kv";
      break;
    case "YKXS":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/ykxs-0-6-1-kv";
      break;
    case "YAKXS":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yakxs-0-6-1-kv";
      break;
    case "N2XH":
      nota3 =
        "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/nopovic-n2xh-0-6-1-kv";
      break;
    default:
      nota3 = "";
  }
  console.log(nota1);
  console.log(nota2);
  console.log(nota3);
  let tab = [
    koniec,
    koniec2,
    koniec3,
    nota1,
    nota2,
    nota3,
    metal,
    izolacja,
    ilosc_zyl,
    ilosc_zyl_obciazonych,
    ilosc_faz,
    sposob_instalacji,
    temperatura,
    rezystancja_cieplna,
    prad_od_luke,
    moc,
    cosphi,
    ilosc_przewodow,
  ];
  res.json(tab);
  console.log(koniec);
});
app.get("/logic", (res, req) => {
  console.log("hej");
});
