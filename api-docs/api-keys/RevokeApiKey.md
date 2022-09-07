
## RevokeApiKey
`RESTful Endpoint: DELETE /api-keys/{apiKeyId}`

Scopes:
 * as Employee Auth: api_keys:revoke
 * as API Key: api_keys:revoke


## RevokeApiKey

Deactivates a specific `ApiKey` entity by its `ApiKeyId` and marks its `status` as `Archived`.

### Input Query Parameters
* Path parameter `apiKeyId`: undefined  
  

### Successful Response
* id: `EntityId`. 
* status: `ApiKeyStatus`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* dateCreated: `IsoDatetime`. 
* name: `String`. 
* authorId: `EntityId`. 
* scopes: `String[]`. 

### Error Responses
#### `403` **NotAllowed** 

* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys/{apiKeyId}" method="delete" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
