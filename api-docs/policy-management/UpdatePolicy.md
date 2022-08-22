
## UpdatePolicy
`RESTful Endpoint: put /policies/{policyId}`

Updates existing policy, creating a new policy with same `id` but different `version`. Old policy is marked as `Archived` and no longer available for execution, but can be reviewed and audited.


### Input Query Parameters
* Path parameter `policyId`: `String`.  
  

### Input Body Parameters
* description: `String` [_Optional_] 
* controlIds: `EntityId[]` [_Optional_] 
* ruleIds: `EntityId[]` [_Optional_] 
* status: `PolicyStatus` [_Optional_] 
* filter: `PolicyObjectFilter` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/{policyId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
