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

app.put("/updateProperty", (req, res) => {
  const updateProperty = req.body.propertyToUpdate;
  db.query(
    "UPDATE TLiegenschaften SET LiegTyp = ?, LiegBezeichnung = ?, LiegBaujahr = ?, LiegGrundstückfläche = ?, LiegNutzfläche = ?, LiegAusbaustandart = ?, LiegZustand = ?, LiegZusatz = ? where LiegNR = ?",
    [
      updateProperty.LiegTyp,
      updateProperty.LiegBezeichnung,
      updateProperty.LiegBaujahr,
      updateProperty.LiegGrundstückfläche,
      updateProperty.LiegNutzfläche,
      updateProperty.LiegAusbaustandart,
      updateProperty.LiegZustand,
      updateProperty.LiegZusatz,
      updateProperty.LiegNR,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//app.get("/getNewProperties", (req, res) => {

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
    "INSERT INTO TLiegenschaften( LiegTyp, LiegBezeichnung, LiegBaujahr, LiegGrundstückfläche, LiegNutzfläche, LiegAusbaustandart, LiegZustand, LiegZusatz) VALUES (?,?,?,?,?,?,?,?,?)",
    [
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
        alert("Daten konnten nicht eingefügt werden");
      } else {
        res.send({ message: "Liegenschaft erfolgreich eingefügt" });
      }
    }
  );
});
app.listen(3001, () => {
  console.log("Server is running");
});
