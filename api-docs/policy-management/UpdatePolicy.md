
## UpdatePolicy
`RESTful Endpoint: put /policies/policies/{policyId}`

Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.


### Input Query Parameters
* Path parameter `policyId`: `String`.  
  

### Input Body Parameters
* description: `String` [_Optional_] 
* controlIds: `EntityId[]` [_Optional_] 
* ruleIds: `EntityId[]` [_Optional_] 
* status: `PolicyStatus` [_Optional_] 
* filter: `PolicyObjectFilter` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/policies/policies/{policyId}" method="put" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
