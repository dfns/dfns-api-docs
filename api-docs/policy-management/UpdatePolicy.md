
## UpdatePolicy
`RESTful Endpoint: PUT /policies/{policyId}`

Scopes:
 * as API Key: policies:write
 * as Employee Auth: policies:write

Updates existing policy, creating a new policy with same `id` but different `version`. Old policy is marked as `Archived` and no longer available for execution, but can be reviewed and audited.


### Input Query Parameters
* Path parameter `policyId`: undefined  
  

### Input Body Parameters
* description: 
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

#### `404` **policyNotFound** 
Policy with provided Id doesn't exist. Please see `causes` for additional information.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/{policyId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
