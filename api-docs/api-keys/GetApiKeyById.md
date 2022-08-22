
## GetApiKeyById
`RESTful Endpoint: get /api-keys/{apiKeyId}`

# GetApiKeyById

Retrieves `ApiKey` by its `ApiKeyId`.

<!-- ## Notes

The `500 Internal Server Error` with the message `Invalid KeyConditionExpression: An expression attribute value used in expression is not defined; attribute value: :cId` may occur when  -->

### Input Query Parameters
* Path parameter `apiKeyId`: `String`.  
  


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys/{apiKeyId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
