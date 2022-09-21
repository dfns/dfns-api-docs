
## ListPolicyControlExecutions
`RESTful Endpoint: GET /policies/policy-control-executions`

Scopes:
 * as Employee Auth: policy_control_executions:read
 * as API Key: policy_control_executions:read




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


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-control-executions" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
