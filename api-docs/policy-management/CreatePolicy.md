
## CreatePolicy
`RESTful Endpoint: POST /policies`

Scopes:
 * as API Key: policies:write
 * as Employee Auth: policies:write

Creates new policy. This binds a list of `PolicyRule` entities and `PolicyControl` entities to a given `ActivityKind`.



### Input Body Parameters
* activityKind: 
* isImmutable: 
* description: 
* name: 
* controlIds: 
* ruleIds: 
* status: 
* filter: 

_Please consult OpenAPI file full breakdown and including nested properties._

### Successful Response
* id: `EntityId`. 
* version: `String`. 
* activityKind: `PolicyActivityKind`. 
* tags: `Tag[]`. 
* dateCreated: `IsoDatetime`. 
* isImmutable: `Bool`. 
* orgId: `EntityId`. 
* description: `String`. 
* author: `Username`. 
* name: `String`. 
* status: `PolicyStatus`. 
* controlIds: `EntityId[]`. 
* ruleIds: `EntityId[]`. 
* filter: `PolicyObjectFilter`. 

### Error Responses
#### `400` **invalidPolicyPayload** 
Payload is invalid. Please see `causes` field to see details and reasons.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
