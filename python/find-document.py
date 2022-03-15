# Data API for find document

import requests
import json

data_api_endpoint = 'data_api_url'
data_api_key = 'data_api_key'

# Action
findOne = data_api_endpoint + '/action/findOne'

pheader = {
    "api-key": data_api_key,
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*"
}

pload = json.dumps({
  "dataSource": "cluste_name",
  "database": "database_name",
  "collection": "collection_name",
  "filter": {
    "field": "value"
  }
})

# HTTP Requests
r = requests.request("POST", findOne, headers=pheader, data=pload)
print(r.json())
print(r.status_code)
