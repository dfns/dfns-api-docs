# Get Policy

`GET /v2/policies/{policyId}`

Retrieves a policy.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyId</code></td><td>Unique identifier of the policy</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "plc-...",
  "name": "Transfer Limit",
  "rule": {
    "kind": "TransactionAmountLimit",
    "configuration": {
      "currency": "EUR",
      "limit": "1000",
    },
  },
  "status": "Active",
  "filters": {
    "id": {
      "oneOf": ["wa-..."]
    }
  },
  "activityKind": "Wallets:Sign",
  "approvalGroups": [
    {
      "name": "Admins",
      "quorum": 1,
      "approvers": {
        "userId": {
          "oneOf": ["us-..."],
        },
      },
    }
  ],
  "autoRejectTimeout": 60
  "dateCreated": "2023-12-22T20:57:55.814Z",
  "dateResolved": "2023-12-22T20:57:55.814Z"
}
```
