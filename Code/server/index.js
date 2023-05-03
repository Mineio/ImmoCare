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
app.post("/insert", (req, res) => {
  const grundStück = req.grundStück;
  const nutzfläche = req.body.nutzfläche;
  const ausbaustand = req.body.ausbaustand;
  const zustandReq = req.body.zustandReq;
  const chfmin = req.body.chfmin;
  const chfmax = req.body.chfmax;
  const baujahrmin = req.body.baujahrmin;
  const baujahrmax = req.body.baujahrmax;

  db.query("Insert into TLiegenschaften", (err, result) => {});
});
*/
app.listen(3001, () => {
  console.log("Server is running");
});
