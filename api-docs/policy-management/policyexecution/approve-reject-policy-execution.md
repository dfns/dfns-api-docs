# Approve / Reject PolicyControlExecution

`PUT /policies/policy-control-executions/{policyControlExecutionId}`

Update the status of a policy control execution to approve or reject.  Like a multi-sig wallet, if multiple approvers are required based on `numApprovals` in the corresponding `PolicyControl`,  the execution status will not update until all required approvals are received.

### Required Permissions <a href="#scopes" id="scopes"></a>

PolicyControlExecutions:UpdatePolicyControlExecution

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description          | Type                     |
| ------------------- | ----------------- | -------------------- | ------------------------ |
| `name`              | Required          | A name for the rule  | String                   |
| `status`            | Required          | "Passed" OR "Failed" | Enumerated Type (String) |

Example Body:

```json
{
     "status": "Passed"
}
```

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X PUT "/policies/policy-control-executions/pce-fanta-twelve-333cb3fe31" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{"status": "Passed"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>



```json
TODO: Getting 401s...
```
