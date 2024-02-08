# Create Approval Decision

`POST /v2/policy-approvals/{approvalId}/decisions`

Creates an approval decision.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                         | Conditions      |
| ---------------------------- | --------------- |
| `Policies:Approvals:Approve` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>approvalId</code></td><td>Unique identifier of the approval.</td></tr></tbody></table>

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="217">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>value</code></td><td>Required</td><td><code>Approved</code> or <code>Denied</code>.</td><td>Enumerated Type</td></tr><tr><td><code>reason</code></td><td>Optional</td><td>Reason for decision.</td><td>String</td></tr></tbody></table>

### Request Example <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "value": "Approved",
  "reason": "This is exactly what we need",
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "evl-...",
  "orgId": "or-...",
  "initiatorId": "us-...",
  "activityId": "xfr-...",
  "activityKind": "Wallets:Sign",
  "activity": {...},
  "status": "Pending",
  "expirationDate": "2023-12-22T21:16:16.659Z",
  "dateCreated": "2023-12-22T20:56:16.662Z",
  "dateUpdated": "2023-12-22T20:56:16.662Z",
  "decisions": [
    {
      "userId": "us-...",
      "dateActioned": "2023-12-22T20:56:16.662Z",
      "value": "Approved",
    },
  ],
  "evaluatedPolicies": [
    {
      "policyId": "plc-...",
      "triggerStatus": "Triggered",
      "reason": "Number of transactions (2) is above limit (2)."
    },
    {
      "policyId": "plc-...",
      "triggerStatus": "Triggered",
      "reason": "Cumulative transfer amount (EUR 20) is above limit (EUR 2)."
    }
  ]
}
```
