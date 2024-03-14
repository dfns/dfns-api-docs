# List Approvals

`GET /v2/policy-approvals`

Retrieves a list of approvals.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                      | Conditions      |
| ------------------------- | --------------- |
| `Policies:Approvals:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Query parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="215">Query string parameter</th><th width="179">Required/Optional</th><th width="216">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Optional</td><td>Maximum number of items to return. Default to 20.</td><td>Positive Integer</td></tr><tr><td><code>paginationToken</code></td><td>Optional</td><td>Opaque token used to retrieve the next page. Returned as <code>nextPageToken</code> from the previous request.</td><td>String</td></tr><tr><td><code>status</code></td><td>Optional</td><td>Either <code>Pending</code>, <code>Approved</code>, <code>Denied, AutoApproved</code> or <code>Expired</code>.</td><td>Enumerated Type</td></tr><tr><td><code>triggerStatus</code></td><td>Optional</td><td><code>Triggered</code> or <code>Skipped</code>.</td><td>Enumerated Type</td></tr><tr><td><code>initiatorId</code></td><td>Optional</td><td>The user ID of the activity initiator.</td><td>String</td></tr><tr><td><code>approverId</code></td><td>Optional</td><td>The user ID of a potential approver.</td><td>String</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

Note: `TriggerStatus` of `Skipped` means the rule did not trigger for the given activity.

```json
{
  "items":[
    {
      "id":"evl-...",
      "orgId":"or-...",
      "initiatorId":"us-...",
      "activityId":"xfr-...",
      "activityKind":"Wallets:Sign",
      "activity":{
        ...
      },
      "status":"Pending",
      "expirationDate":"2023-12-22T21:16:16.659Z",
      "dateCreated":"2023-12-22T20:56:16.662Z",
      "dateUpdated":"2023-12-22T20:56:16.662Z",
      "decisions":[
        {
          "userId":"us-...",
          "dateActioned":"2023-12-22T20:56:16.662Z",
          "value":"Approved"
        }
      ],
      "evaluatedPolicies":[
        {
          "policyId":"plc-...",
          "triggerStatus":"Triggered",
          "reason":"Number of transactions (2) is above limit (2)."
        },
        {
          "policyId":"plc-...",
          "triggerStatus":"Triggered",
          "reason":"Cumulative transfer amount (EUR 20) is above limit (EUR 2)."
        }
      ]
    }
  ],
  "nextPageToken":"ZxZ..."
}
```
