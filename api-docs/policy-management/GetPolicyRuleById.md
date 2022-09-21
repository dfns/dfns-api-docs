
## GetPolicyRuleById
`RESTful Endpoint: GET /policies/policy-rules/{policyRuleId}`

Scopes:
 * as API Key: policy_rules:read
 * as Employee Auth: policy_rules:read

Retrieves single `Policy` item by its `id`.

### Input Query Parameters
* Path parameter `policyRuleId`: undefined  
  

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
#### `404` **policyNotFound** 
Policy with provided Id doesn't exist. Please see `causes` for additional information.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
