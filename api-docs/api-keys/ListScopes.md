
## ListScopes
`RESTful Endpoint: GET /api-keys/scopes`

Scopes:
 * as Employee Auth: scopes:read
 * as API Key: scopes:read


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

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys/scopes" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
