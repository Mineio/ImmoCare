const express = require('express');
const app = express();

const db = mysql.createConnection({})
/*
Database connection...
*/

app.listen(3001, () => {
    console.log("Server is running")
});
