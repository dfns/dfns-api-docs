
## UpdatePolicyRule
`RESTful Endpoint: PUT /policies/policy-rules/{policyRuleId}`

Scopes:
 * as API Key: policy_rules:write
 * as Employee Auth: policy_rules:write

Updates existing policy rule, creating a new policy rule with same `id` but different `version`. Old policy rule is marked as `Archived` and no longer available for execution, but can be reviewed and audited.

### Input Query Parameters
* Path parameter `policyRuleId`: undefined  
  

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

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
