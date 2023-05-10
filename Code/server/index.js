const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  // using testDatabase
  user: "SC_ICaro",
  host: "i-kf.ch",
  password: "9eZt?7aK",
  database: "SC_ImmoCareDB",
});

app.get("/getProperties", (req, res) => {
  db.query("SELECT * FROM TLiegenschaften", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/insert", (req, res) => {
  const grundStück = req.body.Grundstückfläche;
  const nutzfläche = req.body.Nutzfläche;
  const ausbaustand = req.body.ausbauSt;
  const zustand = req.body.zustand;
  const nr = req.body.liegNr;
  const bezeichnung = req.body.Bezeichnung;
  const baujahr = req.body.Baujahr;
  const zusatz = req.body.zusatz;
  const typ = req.body.Liegenschaftstyp;

  db.query(
    "INSERT INTO TLiegenschaften(LiegNR, LiegTyp, LiegBezeichnung, LiegBaujahr, LiegGrundstückfläche, LiegNutzfläche, LiegAusbaustandart, LiegZustand, LiegZusatz) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      nr,
      typ,
      bezeichnung,
      baujahr,
      grundStück,
      nutzfläche,
      ausbaustand,
      zustand,
      zusatz,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Liegenschaft erfolgreich eingefügt" });
      }
    }
  );
});
app.listen(3001, () => {
  console.log("Server is running");
});
