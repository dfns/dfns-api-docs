# List Policies

`GET /v2/policies`

Retrieves a list of policies.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
[{
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
      "in": ["wa-..."]
    }
  },
  "activityKind": "Wallets:Sign",
  "approvalGroups": [
    {
      "name": "Admins",
      "quorum": 1,
      "approvers": {
        "userId": {
          "in": ["us-..."],
        },
      },
    }
  ],
  "autoRejectTimeout": 60
  "dateCreated": "2023-12-22T20:57:55.814Z",
  "dateResolved": "2023-12-22T20:57:55.814Z"
}]
```
