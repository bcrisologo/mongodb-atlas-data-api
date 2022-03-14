# Data API for find document

import os
import requests

data_api_endpoint = os.environ.get('data_api_url')
data_api_name = os.environ.get('data_api_name')
data_api_key = os.environ.get('data_api_key')

r = requests.get(data_api_endpoint)
print(r.status_code)

# Action
data_api_endpoint_crud = data_api_endpoint + '/action/'
findOne = data_api_endpoint_crud + 'findOne'

print(findOne)

pload = {
    "url": findOne,
    "headers": {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": data_api_key
    },
    "data": {
        
    }
}