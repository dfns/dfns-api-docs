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

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "activityKind": "CreatingSignature",
   "isImmutable": false,
   "description": "Test AlwaysActive",
   "name": "Anti Theft Policy",
   "ruleIds": [
       "pr-nebraska-november-finch-4e10e32a0d"
   ],
   "controlIds": [
       "pc-table-pennsylvania-269c9cfee9"
   ],
   "status": "Enabled",
   "id": "pl-mockingbird-seventeen-c14e223d70",
   "version": "f1d7d94gm",
   "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "dateCreated": "2022-07-19T19:58:21.334Z"
}

```

