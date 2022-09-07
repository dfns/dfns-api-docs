
## UpdatePolicyControl
`RESTful Endpoint: PUT /policies/policy-controls/{policyControlId}`

Scopes:
 * as Employee Auth: policy_controls:write
 * as API Key: policy_controls:write

Updates existing policy control, creating a new policy control with same `id` but different `version`. Old policy control is marked as `Archived` and no longer available for execution, but can be reviewed and audited.

### Input Query Parameters
* Path parameter `policyControlId`: undefined  
  

### Input Body Parameters
* description: 
* name: 
* configuration: 

_Please consult OpenAPI file full breakdown and including nested properties._

### Successful Response
* id: `EntityId`. 
* version: `String`. 
* kind: `PolicyControlKind`. 
* tags: `Tag[]`. 
* dateCreated: `IsoDatetime`. 
* isImmutable: `Bool`. 
* orgId: `EntityId`. 
* author: `Username`. 
* description: `String`. 
* name: `String`. 
* shouldMergeWithSameControl: `Bool`. Indicates whether control should merge with same one (compared by values).
This property should not be set to true, unless outcomes are understood. For example: Let's say we have 3 policies: 

1. policy to require approval for payments over €5000
1. policy to require approval for payments done out of office hours
1. policy to require approval for payments done out of Geofence. 

In this case policies will require 3 approvals combined, which might not be an intent, and only one approval is required.
* configuration: `PolicyControlConfiguration`. 
* status: `PolicyControlStatus`. 

### Error Responses
#### `400` **invalidPolicyPayload** 

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

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
