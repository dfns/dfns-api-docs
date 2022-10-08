
## ListScopes
`RESTful Endpoint: GET /api-keys/scopes`

Scopes:
 * as Employee Auth: Scopes:ListScopes
 * as API Key: Scopes:ListScopes

## ListScopes

Lists all available scopes that can be used to restrict access to specific entities and operations.


### Successful Response
* id: `EntityId`. 
* status: `ApiKeyStatus`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* dateCreated: `IsoDatetime`. 
* name: `String`. 
* authorId: `EntityId`. 
* scopes: `String[]`.



