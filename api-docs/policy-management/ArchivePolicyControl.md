
## ArchivePolicyControl
`RESTful Endpoint: DELETE /policies/policy-controls/{policyControlId}`

Scopes:
 * as API Key: policy_controls:archive
 * as Employee Auth: policy_controls:archive

Deactivates a specific `PolicyControl` entity by its `PolicyControlId` and marks its `status` as `Archived`.

### Input Query Parameters
* Path parameter `policyControlId`: undefined  
  

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
#### `404` **policyNotFound** 
Policy with provided Id doesn't exist. Please see `causes` for additional information.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="delete" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
