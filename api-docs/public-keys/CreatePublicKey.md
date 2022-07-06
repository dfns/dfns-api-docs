
## CreatePublicKey
`RESTful Endpoint: post /mpc/public-keys`


## CreatePublicKey
`/mpc/public-keys`



{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/mpc/public-keys" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}



### Input Body Parameters
* externalId: `String` [_Optional_] 
* assetAccountId: `EntityId` 
* groupThreshold: `Integer` 
* groupSize: `Integer` 
* isEddsa: `Bool` 
* tags: `Tag[]` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/mpc/public-keys" method="post" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
