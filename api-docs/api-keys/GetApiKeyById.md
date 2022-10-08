
## GetApiKeyById
`RESTful Endpoint: GET /api-keys/{apiKeyId}`

Scopes:
 * as Employee Auth: ApiKeys:GetApiKey
 * as API Key: ApiKeys:GetApiKey

# GetApiKeyById

Retrieves `ApiKey` by its `ApiKeyId`.

<!-- ## Notes

The `500 Internal Server Error` with the message `Invalid KeyConditionExpression: An expression attribute value used in expression is not defined; attribute value: :cId` may occur when  -->
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



