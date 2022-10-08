
## GetPolicyControlExecutionById
`RESTful Endpoint: GET /policies/policy-control-executions/{policyControlExecutionId}`

Scopes:
 * as API Key: PolicyControlExecutions:GetPolicyControlExecution
 * as Employee Auth: PolicyControlExecutions:GetPolicyControlExecution


### Input Query Parameters
* Path parameter `policyControlExecutionId`: undefined

### Successful Response
* id: `EntityId`. 
* status: `ExecutionStatus`. 
* controlId: `EntityId`. 
* dateExecuted: `IsoDatetime`. 
* dateFullfiled: `IsoDatetime`. 
* policyExecutionId: `EntityId`. 
* approvals: `String[]`. 
* documentedActivity: `DocumentSnapshot`. 
* controlKind: `PolicyControlKind`. 
* author: `EntityId`. 
* approverUsernames: `String[]`. 
* activityKind: `PolicyActivityKind`. 
* numApprovals: `Integer`.
### Error Responses
#### `404` **policyControlExecutionNotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


