# MongoDB Atlas Data API with Node.js

## Summary

Inside the `server` folder contains the following file:
* `server-axios.js` - sends POST requests using [axios](https://www.npmjs.com/package/axios) 



## Pre-requirements

1. [Enable Data API](https://docs.atlas.mongodb.com/api/data-api/#1.-enable-the-data-api) for your Atlas Project.

1. Create the [Data API Key](https://docs.atlas.mongodb.com/api/data-api/#2.-create-a-data-api-key).

1. Install the following packages on the `server` folder with the command:
```
npm install express axios cors https
```

On the JS file, update the following variables:

`'url_endpoint'` = [Base URL Endpoint](https://docs.atlas.mongodb.com/api/data-api-resources/#base-url)

`'data_api_key'` = [Data API Key](https://docs.atlas.mongodb.com/api/data-api/#2.-create-a-data-api-key)

`"cluste_name"` = target cluster

`"database_name"` = target database

`"collection_name"` = target collection

`"field": "value"` = target `field` and `value` to perform operations on

## Procedure

You can initiate the node server by running the following:
```
node <file-name>.js
```

## Results

For the [sample training dataset](https://docs.atlas.mongodb.com/sample-data/sample-training/) with the payload:

```json
{
  "dataSource": "cluster_name",
  "database": "sample_training",
  "collection": "trips",
  "filter": {
    "tripduration": 379
  }
}
```

Using the `pdata_findOne` body parameters would lead to the output:

```bash
{"document":{"_id":"572bb8222b288919b68abf5a","tripduration":379,"start station id":476,"start station name":"E 31 St & 3 Ave","end station id":498,"end station name":"Broadway & W 32 St","bikeid":17827,"usertype":"Subscriber","birth year":1969,"gender":1,"start station location":{"type":"Point","coordinates":[-73.97966069,40.74394314]},"end station location":{"type":"Point","coordinates":[-73.98808416,40.74854862]},"start time":"2016-01-01T00:00:45.000Z","stop time":"2016-01-01T00:07:04.000Z"}}
Process completed
```
