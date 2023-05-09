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
  const grundStück = req.body.grundStück;
  const nutzfläche = req.body.nutzfläche;
  const ausbaustand = req.body.ausbaustand;
  const zustand = req.body.zustandReq;
  const nr = req.body.nr;
  const bezeichnung = req.body.bezeichnung;
  const baujahr = req.body.Baujahr;
  const zusatz = req.body.Zusatz;
  const typ = req.body.typ;

  db.query(
    "Insert into TLiegenschaften where LiegNr=? and LiegTyp=? and LiegBezeichnung=? and LiegBaujahr=? and LiegGrundstückfläche=? and LiegNutzfläche=? and LiegAusbaustandart=? and LiegZustand=?and LiegZusatz=?",
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
