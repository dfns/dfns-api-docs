
## CreateApiKey
`RESTful Endpoint: POST /api-keys`

Scopes:
 * as Employee Auth: api_keys:write
 * as API Key: api_keys:write


## CreateApiKey

Instantiates a JWT token for a machine/service account, which must be securely persisted and passed in the request headers as a bearer token. The token is subject to policy engine controls, and you must provide scopes for it.





### Input Body Parameters
* scopes: 
* externalId: 
* name: 

_Please consult OpenAPI file full breakdown and including nested properties._

### Successful Response
* id: `EntityId`. 
* status: `ApiKeyStatus`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* dateCreated: `IsoDatetime`. 
* name: `String`. 
* authorId: `EntityId`. 
* scopes: `String[]`. 
* token: `ApiKeyValue`. 

### Error Responses
#### `403` **NotAllowed** 

* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
