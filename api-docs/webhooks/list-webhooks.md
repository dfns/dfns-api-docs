# List Webhooks

**`GET /webhooks`**

Lists all existing webhooks.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Permissions Required

* `Webhooks:Read`

## Request Params

The following query parameters can be appended to the url

<table data-full-width="true"><thead><tr><th width="169.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>limit</td><td>Number - Optional</td><td>Maximum number of items included in response</td></tr><tr><td>paginationToken</td><td>String - Optional</td><td>Page cursor used (taken from the previous response <code>nextPageToken</code>).</td></tr></tbody></table>

## Response

```json
{
  "items": [
    {
      "id": "wh-xxx-xxxxxxx",
      "url": "https://example.com/my/webhook/endpoint",
      "events": [
        "wallet.transfer.initiated",
        "wallet.transfer.executed",
        "wallet.transfer.confirmed",
      ],
      "description": "My awesome webhook, it's so great",
      "status": "Enabled",
      "dateCreated": "2023-11-01T08:52:01.186Z",
      "dateUpdated": "2023-11-01T08:52:01.186Z",
    },
    ...
  ],
  "nextPageToken": "eJxNy8...." // optional
}
```

<table data-full-width="true"><thead><tr><th width="169.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>items</td><td>List of Objects</td><td>List of Webhook Objects, as described in the <a href="get-webhook.md#response">Get Webhook</a> endpoint.</td></tr><tr><td>nextPageToken</td><td>String - Optional</td><td>If <code>nextPageToken</code> is passed, can be used to query next page. Will not be set if this is last page.</td></tr></tbody></table>
