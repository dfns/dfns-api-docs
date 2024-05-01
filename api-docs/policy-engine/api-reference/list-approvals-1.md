# List Approvals

`GET /v2/policy-approvals`

List [Approval](../policies.md#approval) objects (created if a policy triggered requiring an Approval process action).

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                      | Conditions      |
| ------------------------- | --------------- |
| `Policies:Approvals:Read` | Always Required |

## Query parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="204">Query param</th><th width="165">Required/Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Positive Integer -Optional</td><td>Maximum number of items to return. Default to 20.</td></tr><tr><td><code>paginationToken</code></td><td>String - Optional</td><td>Opaque token used to retrieve the next page. Returned as <code>nextPageToken</code> from the previous request.</td></tr><tr><td><code>status</code></td><td>String - Optional</td><td>Either <code>Pending</code>, <code>Approved</code>, <code>Denied, AutoApproved</code> or <code>Expired</code>.</td></tr><tr><td><code>triggerStatus</code></td><td>String - Optional</td><td><code>Triggered</code> or <code>Skipped</code>.</td></tr><tr><td><code>initiatorId</code></td><td>String - Optional</td><td>The user ID of the activity initiator.</td></tr><tr><td><code>approverId</code></td><td>String - Optional</td><td>The user ID of a potential approver.</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### 200 - List of Approval Objects <a href="#response-example" id="response-example"></a>

See Get Approval response for the details of a single approval object&#x20;

```json
{
  "items":[
    {
      "id":"evl-...",
      ...
    }
  ],
  "nextPageToken":"ZxZ..."
}
```
