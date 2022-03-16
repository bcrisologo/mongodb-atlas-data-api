# MongoDB Atlas Data API using Python

## Summary
The [request library](https://docs.python-requests.org/en/latest/) and [JSON library](https://docs.python.org/3/library/json.html) were used to send HTTP requests to the connected MongoDB Atlas cluster.

Three sample commands have been separated into the following methods:
* [findOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/find-document.py)
* [insertOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/insert-document.py)
* [deleteOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/delete-document.py)

Each file would return the JSON response content `r.json()` and the HTTP status code `r.status_code`.

Please visit the official MongoDB Atlas [Read and Write with Data API](https://docs.atlas.mongodb.com/api/data-api/#read-and-write-with-the-data-api--preview-) documentation for more information on how to use Data API.

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

Install the packages (`pip` for non-python3 versions):
```
pip3 install -r requirements.txt
```

Run any of the scripts included:
```
python3 <name_of_file>.py
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

Running the `findOne` script would lead to the result:

```bash
{'document': {'_id': '572bb8222b288919b68abf5a', 'tripduration': 379, 'start station id': 476, 'start station name': 'E 31 St & 3 Ave', 'end station id': 498, 'end station name': 'Broadway & W 32 St', 'bikeid': 17827, 'usertype': 'Subscriber', 'birth year': 1969, 'gender': 1, 'start station location': {'type': 'Point', 'coordinates': [-73.97966069, 40.74394314]}, 'end station location': {'type': 'Point', 'coordinates': [-73.98808416, 40.74854862]}, 'start time': '2016-01-01T00:00:45.000Z', 'stop time': '2016-01-01T00:07:04.000Z'}}
200
```
