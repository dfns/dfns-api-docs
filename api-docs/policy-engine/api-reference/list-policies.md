# List Policies

`GET /v2/policies`

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Query parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="203">Query param</th><th width="172">Required/Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Positive Integer - Optional</td><td>Maximum number of items to return. Default to 20.</td></tr><tr><td><code>paginationToken</code></td><td>String - Optional</td><td>Opaque token used to retrieve the next page. Returned as <code>nextPageToken</code> from the previous request.</td></tr><tr><td><code>status</code></td><td>String - Optional</td><td>Either <code>Active</code> or <code>Archived</code>.</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### 200 - List of policies <a href="#response-example" id="response-example"></a>

See [Get Policy](get-policy.md) response body for more details on the shape of one policy object

```json
{
  "items": [
    {
      "id": "plc-...1",
      ...
    },
    {
      "id": "plc-...2",
      ...
    }
  ],
  "nextPageToken": "ZxZ..."
}
```
