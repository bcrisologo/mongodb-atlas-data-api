const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// setup connection
//const dbo = require("./db/conn");

app.listen(port, () => {
    // perform the DB connection when server starts
    
    /*
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    */

    // setup GET request with AXIOS
    axios
    .get(`process.env.DATA_API_URI`)
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
    console.log(`Server is running on port: ${port}`);
});