
## ListPolicyControlExecutions
`RESTful Endpoint: GET /policies/policy-control-executions`

Scopes:
 * as Employee Auth: PolicyControlExecutions:ListPolicyControlExecutions
 * as API Key: PolicyControlExecutions:ListPolicyControlExecutions




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



