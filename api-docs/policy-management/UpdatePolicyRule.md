
## UpdatePolicyRule
`RESTful Endpoint: put /policies/policy-rules/{policyRuleId}`

Updates existing policy rule, creating a new policy rule with same `id` but different `version`. Old policy rule is marked as `Archived` and no longer available for execution, but can be reviewed and audited.

### Input Query Parameters
* Path parameter `policyRuleId`: `String`.  
  

### Input Body Parameters
* description: `String` [_Optional_] 
* controlIds: `EntityId[]` [_Optional_] 
* ruleIds: `EntityId[]` [_Optional_] 
* status: `PolicyStatus` [_Optional_] 
* filter: `PolicyObjectFilter` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
