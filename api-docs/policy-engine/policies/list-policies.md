# List Policies

`GET /v2/policies`

Retrieves a list of policies.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Parameters <a href="#response" id="response"></a>

### Query parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="215">Query string parameter</th><th width="179">Required/Optional</th><th width="216">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Optional</td><td>Maximum number of items to return. Default to 20.</td><td>Positive Integer</td></tr><tr><td><code>paginationToken</code></td><td>Optional</td><td>Opaque token used to retrieve the next page. Returned as <code>nextPageToken</code> from the previous request.</td><td>String</td></tr><tr><td><code>status</code></td><td>Optional</td><td>Either <code>Active</code> or <code>Archived</code>.</td><td>Enumerated Type</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
      "id": "plc-...",
      "name": "Transfer Limit",
      "rule": {
        "kind": "TransactionAmountLimit",
        "configuration": {
          "currency": "EUR",
          "limit": "1000"
        }
      },
      "status": "Active",
      "filters": {
        "id": {
          "in": [
            "wa-..."
          ]
        }
      },
      "activityKind": "Wallets:Sign",
      "action": {
        "kind": "RequestApproval",
        "approvalGroups": [
          {
            "name": "Admins",
            "quorum": 1,
            "approvers": {
              "userId": {
                "in": [
                  "us-..."
                ]
              }
            }
          }
        ],
        "autoRejectTimeout": 60
      },
      "dateCreated": "2023-12-22T20:57:55.814Z",
      "dateResolved": "2023-12-22T20:57:55.814Z"
    }
  ],
  "nextPageToken": "ZxZ..."
}
```
