# List Webhook Events

**`GET /webhooks/:webhookId/events`**

Lists all events for a given webhook.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

{% hint style="warning" %}
We only keep a trace of those Webhook Events in our system for a **retention period of 31 days**. Past that, they are discarded, so you cannot see them using [List Webhook Events](list-webhook-events.md) or [Get Webhook Event](get-webhook-event.md) endpoints.
{% endhint %}

### Permissions Required

* `Webhooks:Events:Read`

## Request Params

The following query parameters can be appended to the url

<table data-full-width="true"><thead><tr><th width="169.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>limit</td><td>Number - Optional</td><td>Maximum number of items included in response</td></tr><tr><td>paginationToken</td><td>String - Optional</td><td>Page cursor used (taken from the previous response <code>nextPageToken</code>).</td></tr></tbody></table>

## Response

```json
{
  "items": [
    {
      "id": "wh-xxx-xxxxxxx",
      "kind": "wallet.transfer.confirmed",
      "date": "2023-12-04T10:02:22.280Z",
      "data": {
        "transferRequest": {
          "id": "xfr-xxxx-xxxxxxx",
          ...
        }
      },
      "status": "200",
      "timestampSent": 1701684144,
    },
    ...
  ],
  "nextPageToken": "eJxNy8...."
}
```

<table data-full-width="true"><thead><tr><th width="177.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>items</td><td>List of Objects</td><td>List of Webhook Event objects as described in the <a href="get-webhook-event.md#response">Get Webhook Event</a> endpoint.</td></tr><tr><td>nextPageToken</td><td>String - Optional</td><td>Page cursor used (taken from the previous response <code>nextPageToken</code>). Will not be set if this is last page.</td></tr></tbody></table>
