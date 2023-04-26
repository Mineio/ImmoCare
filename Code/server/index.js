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
/*
app.get("/getNewProperties", (req, res) => {
  db.query(
    "SELECT * FROM TLiegenschaften WHERE  LiegBaujahr >= ${baujahrVon} AND LiegBaujahr <= ${Baujahrbis} AND LiegGrundstückfläche <= ${grundStückB} AND LiegNutzfläche <= ${nutzFlB} AND LiegAusbaustandart = '${ausbauSt}' AND LiegZustand = '${zustand}' AND    LiegTyp = '${Liegenschaftstyp}' AND LiegPreis >= ${chfVon} AND LiegPreis <= ${chfBis}",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
*/
app.listen(3001, () => {
  console.log("Server is running");
});
