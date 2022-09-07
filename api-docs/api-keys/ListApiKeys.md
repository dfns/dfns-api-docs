
## ListApiKeys
`RESTful Endpoint: GET /api-keys`

Scopes:
 * as Employee Auth: api_keys:read
 * as API Key: api_keys:read


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

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
