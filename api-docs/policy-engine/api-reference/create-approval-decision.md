# Create Approval Decision

`POST /v2/policy-approvals/{approvalId}/decisions`

Creates an approval decision (either approves or rejects)

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                         | Conditions      |
| ---------------------------- | --------------- |
| `Policies:Approvals:Approve` | Always Required |

## Body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="134">property</th><th width="181">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code><mark style="color:red;">*</mark></td><td>String - Required</td><td><code>Approved</code> or <code>Denied</code></td></tr><tr><td><code>reason</code></td><td>String - Optional</td><td>Reason for decision.</td></tr></tbody></table>

```json
{
  "value": "Approved",
  "reason": "This is exactly what we need",
}
```

## Response <a href="#response" id="response"></a>

### 200 - Approval object <a href="#response-example" id="response-example"></a>

Same as the [Get Approval](list-approvals.md) response
