const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

global.fetch = require("node-fetch");

const api_key = "data_api_key";     // Data API
const url = "url_endpoint";         // Base URL Endpoint

// ========= Payload body =========

var pdata_findOne = JSON.stringify({
    "dataSource": "shared-tier-tf",
    "database": "sample_training",
    "collection": "trips",
    "filter": {
        "tripduration": 379
    }
});

var pdata_insertOne = JSON.stringify({
    "dataSource": "shared-tier-tf",
    "database": "unpause",
    "collection": "resuming",
    "document": {
        "resume": "truee"
    }
});

var pdata_deleteOne = JSON.stringify({
    "dataSource": "shared-tier-tf",
    "database": "unpause",
    "collection": "resuming",
    "filter": {
        "resume": "truee"
    }
});

// ========= Payload header =========

var pheader = {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": api_key
};

// ========= Consolidated params =========

var config = {
    "method": "post",
    "headers": pheader,
    "body": pdata_findOne
};

// ========= Calling node-fetch =========

app.listen(port, () => {
    // Sending of POST command
    fetch(url,config)   
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        process.exit(0)
    })
    .catch(err => console.error(err))
});