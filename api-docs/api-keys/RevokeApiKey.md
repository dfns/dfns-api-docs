
## RevokeApiKey
`RESTful Endpoint: DELETE /api-keys/{apiKeyId}`

Scopes:
 * as Employee Auth: ApiKeys:RevokeApiKey
 * as API Key: ApiKeys:RevokeApiKey

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


