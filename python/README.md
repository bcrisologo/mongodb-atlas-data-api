# MongoDB Atlas Data API using Python

## Summary
The [request library](https://docs.python-requests.org/en/latest/) and [JSON library](https://docs.python.org/3/library/json.html) were used to send HTTP requests to the connected MongoDB Atlas cluster.

Three sample commands have been separated into the following methods:
* [findOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/find-document.py)
* [insertOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/insert-document.py)
* [deleteOne](https://github.com/bcrisologo/mongodb-atlas-data-api/blob/python/python/delete-document.py)

Please visit the official MongoDB Atlas [Read and Write with Data API](https://docs.atlas.mongodb.com/api/data-api/#read-and-write-with-the-data-api--preview-) documentation for more information on how to use Data API.

## Prerequisites

Update the following variables on each script:

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
