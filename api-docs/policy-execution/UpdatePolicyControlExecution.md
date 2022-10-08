
## UpdatePolicyControlExecution
`RESTful Endpoint: PUT /policies/policy-control-executions/{policyControlExecutionId}`

Scopes:
 * as Employee Auth: PolicyControlExecutions:UpdatePolicyControlExecution
 * as API Key: PolicyControlExecutions:UpdatePolicyControlExecution


### Input Query Parameters
* Path parameter `policyControlExecutionId`: undefined
### Input Body Parameters
* status: 

_Please consult OpenAPI file full breakdown and including nested properties._
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


