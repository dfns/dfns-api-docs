# CreatePolicyControl

`POST /policies/policy-controls`

Policy Controls determine how Policy Executions are handled.   The type of policy control applied is determined by the `kind` field in the nested `configuration` object.  These are the supported kinds:

* `RequestApproval`: Require a specified number of approvals from a list of `Users`.
* More control kinds coming soon...

### Required Permissions <a href="#scopes" id="scopes"></a>

PolicyControls:CreatePolicyControl

### Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Controls:

| Request body fields | Required/Optional | Description                                           | Type   |
| ------------------- | ----------------- | ----------------------------------------------------- | ------ |
| `name`              | Required          | A name for the rule                                   | String |
| `description`       | Required          | A description for the rule                            | String |
| `configuration`     | Required          | A nested object specifying details of the Policy Rule | Object |

#### Approval Control

Use the following fields in the nested `configuration` object to create a Policy Control which requires a specified number of approvals from a list of `Users:`

| Request body fields   | Required/Optional | Description                                                                                              | Type                     |
| --------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------ |
| `kind`                | Required          | Specify: "RequestApproval"                                                                               | Enumerated Type (String) |
| `approverUsernames`   | Required          | The email addresses of the designated approvers as specified in their User records.                      | Array of Strings         |
| `timeoutInMinutes`    | Required          | The amount of time in minutes after which the policy execution can no longer be approved.                | Integer                  |
| `numApprovals`        | Required          | The number of required approvals.  Must be less than or equal to the `approverUsernames array length.`   | Integer                  |
| `canInitiatorApprove` | Optional          | Flag designating whether the requestor of the transaction can approve in the `approverUsernames array.`  | Boolean                  |



Example Body:

```json
{
    "description": "My policy control",
    "name": "policy-control-back-office-01",
    "configuration": {
        "kind": "RequestApproval",
        "approverUsernames": ["bob@example.com", "dan@example.com"],
        "timeoutInMinutes": 60,
        "canInitiatorApprove": true,
        "numApprovals": 1
    }
}
```

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/policies/policy-controls" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{     "description": "My policy control",     "name": "policy-control-back-office-01",     "configuration": {  "kind": "RequestApproval",  "approverUsernames": ["bob@example.com", "dan@example.com"],  "timeoutInMinutes": 60,  "canInitiatorApprove": true,  "numApprovals": 1     } }'

```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "id": "pc-foxtrot-harry-ae42882af3",
   "version": "f1b2121lm",
   "kind": "RequestApproval",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "description": "Test policy control",
   "name": "Test 1",
   "configuration": {
       "kind": "RequestApproval",
       "approverUsernames": [],
       "timeoutInMinutes": 10,
       "canInitiatorApprove": true,
       "numApprovals": 1
   },
   "dateCreated": "2022-07-14T21:36:42.574Z",
   "tags": [],
   "shouldMergeWithSameControl": false,
   "isImmutable": false,
   "status": "Enabled"
}
```

