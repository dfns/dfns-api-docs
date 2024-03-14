# Get Webhook

**`GET /webhooks/:webhookId`**

Returns an existing webhook.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Permissions Required

* `Webhooks:Read`

## Response

```json
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
}
```

<table data-full-width="true"><thead><tr><th width="149.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>ID of the webhook</td></tr><tr><td>url</td><td>String</td><td>The webhook endpoint url where events will be pushed. The url needs to be a valid http / https url.</td></tr><tr><td>description</td><td>String - Optional</td><td>Description of what the endpoint is for. May be unset.</td></tr><tr><td>status</td><td>String</td><td>Possible values: <code>Enabled</code> | <code>Disabled</code>. If webhook status is <code>Disabled</code>, no event will be pushed to the webhook endpoint. If <code>status</code> is not specified, default status is <code>Enabled</code>.</td></tr><tr><td>events</td><td>String List</td><td>List of <a href="./#supported-webhook-events">supported events</a> the webhook subscribes to. You can also subscribe to all events by passing  <code>events: ["*"]</code>.</td></tr><tr><td>dateCreated</td><td>String</td><td>ISO 8601 string representing date of creation of the webhook</td></tr><tr><td>dateUpdated</td><td>String</td><td>ISO 8601 string representing date of update of the webhook</td></tr></tbody></table>
