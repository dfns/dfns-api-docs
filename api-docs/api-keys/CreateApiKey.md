
## CreateApiKey
`RESTful Endpoint: post /api-keys`


## CreateApiKey

Instantiates a JWT token for a machine/service account, which must be securely persisted and passed in the request headers as a bearer token. The token is subject to policy engine controls, and you must provide scopes for it.





### Input Body Parameters
* scopes: `String[]` 
* externalId: `String` [_Optional_] 
* name: `String` 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/api-keys" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
