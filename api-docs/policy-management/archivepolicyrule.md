
## ArchivePolicyRule
`RESTful Endpoint: DELETE /policies/policy-rules/{policyRuleId}`

Scopes:
 * as Employee Auth: PolicyRules:ArchivePolicyRule
 * as API Key: PolicyRules:ArchivePolicyRule

Deactivates a specific `PolicyRule` entity by its `PolicyRuleId` and marks its `status` as `Archived`.
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


