const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
const axios = require('axios');
const https = require('https');

app.use(cors());
app.use(express.json());

var pdata = JSON.stringify({
    "dataSource": "realm-test",
    "database": "sample_training",
    "collection": "trips",
    "filter": {
        "tripduration": 379
    }
});

var pheader = {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": process.env.API_KEY
}

var config = {
    method: 'post',
    url: process.env.URI_FIND,
    headers: pheader,
    data: pdata
};

app.listen(port, () => {
    // Sending of POST command
    axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    console.log(`Server is running on port: ${port}`);
});