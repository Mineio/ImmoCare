const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    // using testDatabase
    user: "root",
    host: "127.0.0.1",
    password: "",
    database: "test",
});

app.get("/getProperties", (req, res) => {
    db.query("SELECT * FROM test",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
})

app.listen(3001, () => {
    console.log("Server is running");
});
