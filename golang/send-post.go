//package main

package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
)

// Associating URI link
var url = "url_endpoint"
var api_key = "data_api_key"

// ==================== Body parameter ====================
var findOne_jsonStr = []byte(`{
	"dataSource": "cluster_name",
	"database": "database_name",
	"collection": "collection_name",
	"filter": {
		"field": value
	}
}`)

var insertOne_jsonStr = []byte(`{
	"dataSource": "cluster_name",
    "database": "database_name",
    "collection": "collection_name",
    "document": {
        "field": "value"
    }
}`)

var deleteOne_jsonStr = []byte(`{
	"dataSource": "cluster_name",
	"database": "database_name",
	"collection": "collection_name",
	"filter": {
		"field": value
	}
}`)

func main() {

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(findOne_jsonStr))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Access-Control-Request-Headers", "*")
	req.Header.Set("api-key", api_key)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	
	fmt.Println("\nresponse Status: ", resp.Status)
	fmt.Println("\nresponse Headers: ", resp.Header)
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println("\nresponse Body: ", string(body))

}