# Get Webhook Event

**`GET /webhooks/:webhookId/events/:webhookEventId`**

Gets a specific webhook event.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Permissions Required

* `Webhooks:Events:Read`

## Response

```json
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
}
```

<table data-full-width="true"><thead><tr><th width="169.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Webhook Event ID</td></tr><tr><td>kind</td><td>String</td><td>Event kind (see <a href="./#supported-webhook-events">supported events</a>)</td></tr><tr><td>date</td><td>String</td><td>ISO-8601 date string when the event happened in our system.</td></tr><tr><td>data</td><td>Object</td><td>Object containing data related to the event kind.</td></tr><tr><td>status</td><td>String</td><td>Resulting status of the webhook request when event was pushed to it. Can be a http status code (eg "200" or "500") if your server responded, or another error code otherwise. This can be helpful to troubleshoot your webhook endpoint.</td></tr><tr><td>error</td><td>String - Optional</td><td>If an error happened upon pushing the event to the webhook endpoint, the <code>error</code> will be set with the corresponsing error string.</td></tr><tr><td>timestampSent</td><td>Number</td><td>Unix timestamp (seconds) when the webhook request was signed and performed by our server. Will be useful to validate the timestamp of the signature, to protect against replay attacks (read more here).</td></tr></tbody></table>

