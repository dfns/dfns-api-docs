# Get Policy Control Execution By ID

`GET /policies/policy-control-executions/{policyControlExecutionId}`

Retrieves a `PolicyControlExecution` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PolicyControlExecutions:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="298">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyControlExecutionId</code></td><td>Unique identifier of the policy control execution like:<br><br><code>pce-fanta-twelve-333cb3fe31</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a status indicating whether the policy control execution has been Approved, Rejected, or is still Awaiting approval. `documentedActivity` contains an escaped JSON object of the transaction data which initiated the policy execution.

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
    "status": "Awaiting"
}


```
