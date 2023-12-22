# Approve / Reject Policy Control Execution

`PUT /policies/policy-control-executions/{policyControlExecutionId}`

Update the status of a policy control execution to approve or reject. Like a multi-sig wallet, if multiple approvers are required based on `numApprovals` in the corresponding `PolicyControl`, the execution status will not update until all required approvals are received.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                             | Conditions      |
| -------------------------------- | --------------- |
| `PolicyControlExecutions:Update` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="217">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the rule</td><td>String</td></tr><tr><td><code>status</code></td><td>Required</td><td>"Passed" OR "Failed"</td><td>Enumerated Type (String)</td></tr></tbody></table>

### Request Example <a href="#request-example.1" id="request-example.1"></a>

```json
{
     "status": "Passed"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a status indicating whether the policy control execution has Passed, Failed, or is still Awaiting approval. `documentedActivity` contains an escaped JSON object of the transaction data which initiated the policy execution.

```json
{
    "policyExecutionId": "pole-maryland-uranus-5aabe7932c",
    "author": "ce-early-violet-703a68145bca",
    "versionedId": "pce-oven-arizona-40f0948dc9@f1d694k08",
    "controlId": "pc-ack-king-84df80db48",
    "documentedActivity": "{\"receiver\":{\"kind\":\"BlockchainWalletAddress\",\"address\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\"},\"assetSymbol\":\"SOL\",\"amount\":\"0.1\",\"note\":\"TEST-amount-3-1658251350817\",\"assetAccountId\":\"aa-muppet-crazy-b2fa6ab7a8\",\"initiator\":{\"kind\":\"Employee\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"employeeId\":\"ce-early-violet-703a68145bca\"},\"status\":\"Initiated\",\"dateCreated\":\"2022-07-19T17:22:30.962Z\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"receiverAddress\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\",\"id\":\"pa-black-island-56a129c84f\"}",
    "version": "f1d694k08",
    "dateExecuted": "2022-07-19T17:22:31.304Z",
    "controlKind": "RequestApproval",
    "orgId": "cu-purple-pip-1b417b958500",
    "approverUsernames": ["bob@example.com"],
    "dateFullfiled": null,
    "id": "pce-oven-arizona-40f0948dc9",
    "status": "Passed"
}
```
