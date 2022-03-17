const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
const axios = require('axios');
const https = require('https');

app.use(cors());
app.use(express.json());

const api_key = "data_api_key";     // Data API
const url = "url_endpoint";         // Base URL Endpoint

var pdata_findOne = JSON.stringify({
    "dataSource": "cluster_name",
    "database": "database_name",
    "collection": "collection_name",
    "filter": {
        "field": "value"
    }
});

var pdata_insertOne = JSON.stringify({
    "dataSource": "cluster_name",
    "database": "database_name",
    "collection": "collection_name",
    "document": {
        "field": "value"
    }
});

var pdata_deleteOne = JSON.stringify({
    "dataSource": "cluster_name",
    "database": "database_name",
    "collection": "collection_name",
    "filter": {
        "field": "value"
    }
});

var pheader = {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": api_key
}

var config = {
    method: 'post',
    url: url,
    headers: pheader,
    data: pdata_findOne
};

app.listen(port, () => {
    // Sending of POST command
    axios(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log('Process completed');
        process.exit(0);
    })
});