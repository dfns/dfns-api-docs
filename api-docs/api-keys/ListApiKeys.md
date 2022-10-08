
## ListApiKeys
`RESTful Endpoint: GET /api-keys`

Scopes:
 * as Employee Auth: ApiKeys:ListApiKeys
 * as API Key: ApiKeys:ListApiKeys

## ListApiKeys

Lists all `ApiKey` entities belonging to the same organization as the caller. Additional filters can be provided; see list of parameters for the operation.


### Successful Response
* id: `EntityId`. 
* status: `ApiKeyStatus`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* dateCreated: `IsoDatetime`. 
* name: `String`. 
* authorId: `EntityId`. 
* scopes: `String[]`.



