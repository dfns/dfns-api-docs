
## RevokeApiKey
`RESTful Endpoint: delete /api-keys/{apiKeyId}`


## RevokeApiKey

Deactivates a specific `ApiKey` entity by its `ApiKeyId` and marks its `status` as `Archived`.

### Input Query Parameters
* Path parameter `apiKeyId`: `String`.  
  


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys/{apiKeyId}" method="delete" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
