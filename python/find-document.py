# Data API for find document

import os
import requests
import json

data_api_endpoint = os.environ.get('data_api_url')
data_api_name = os.environ.get('data_api_name')
data_api_key = os.environ.get('data_api_key')

# Action
findOne = data_api_endpoint + '/action/findOne'

pheader = {
    "api-key": 'data_api_key',
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*"
}

pload = json.dumps({
    "data": {
        "dataSource": "shared-tier-tf",
        "database": "sample_training",
        "collection": "grades",
        "filter": {
            "student_id": 4
        }
    }
})

# HTTP Requests
r = requests.request("POST", findOne, headers=pheader, data=pload)
print(r.json())
print(r.status_code)