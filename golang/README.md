# MongoDB Atlas Data API using Golang

## Summary
The `send-post.go` file was created for a simple set of `findOne`, `insertOne`, and `deleteOne` commands that communicates with a Data Source in MongoDB Atlas Data API.

## Prerequisites
1. [Enable Data API](https://docs.atlas.mongodb.com/api/data-api/#1.-enable-the-data-api) for your Atlas Project.

1. Create the [Data API Key](https://docs.atlas.mongodb.com/api/data-api/#2.-create-a-data-api-key).

1. Update the following variables on each script:

`'data_api_url'` = [Base URL Endpoint](https://docs.atlas.mongodb.com/api/data-api-resources/#base-url)

`'data_api_key'` = [Data API Key](https://docs.atlas.mongodb.com/api/data-api/#2.-create-a-data-api-key)

`"cluste_name"` = target cluster

`"database_name"` = target database

`"collection_name"` = target collection

`"field": "value"` = target `field` and `value` to perform operations on


## Procedure

Make sure to update to update the `findOne_jsonStr` variable (*line 55*) to the request you wish to use.  Once done, you can simply run the following:
```
go run send-post.go
```

## Sample Results

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

Running the `findOne_jsonStr` load would lead to the result:
```
response Status:  200 OK

response Headers:  map[Content-Type:[application/json] Date:[Sat, 02 Apr 2022 00:04:35 GMT] Server:[envoy] Vary:[Origin] X-Envoy-Upstream-Service-Time:[2454] X-Frame-Options:[DENY]]

response Body:  {"document":{"_id":"572bb8222b288919b68abf5a","tripduration":379,"start station id":476,"start station name":"E 31 St \u0026 3 Ave","end station id":498,"end station name":"Broadway \u0026 W 32 St","bikeid":17827,"usertype":"Subscriber","birth year":1969,"gender":1,"start station location":{"type":"Point","coordinates":[-73.97966069,40.74394314]},"end station location":{"type":"Point","coordinates":[-73.98808416,40.74854862]},"start time":"2016-01-01T00:00:45.000Z","stop time":"2016-01-01T00:07:04.000Z"}}
```
