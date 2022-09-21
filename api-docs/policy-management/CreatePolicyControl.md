
## CreatePolicyControl
`RESTful Endpoint: POST /policies/policy-controls`

Scopes:
 * as Employee Auth: policy_controls:write
 * as API Key: policy_controls:write

Creates new `PolicyControl` entity. 



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
Payload is invalid. Please see `causes` field to see details and reasons.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
