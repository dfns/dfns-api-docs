# Get Webhook Event

**`GET /webhooks/:webhookId/events/:webhookEventId`**

Gets a specific webhook event.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

{% hint style="warning" %}
We only keep a trace of those Webhook Events in our system for a **retention period of 31 days**. Past that, they are discarded, so you cannot see them using [List Webhook Events](list-webhook-events.md) or [Get Webhook Event](get-webhook-event.md) endpoints.
{% endhint %}

### Permissions Required

* `Webhooks:Events:Read`

## Response

For more details on all possible contents in the `data` field, depending on which webhook event `kind` it is, check out [Webhook Event Data](https://docs.dfns.co/d/api-docs/webhooks#event-data).

```json
{
  "id": "whe-123-xxxxxxx",
  "kind": "wallet.transfer.confirmed",
  "date": "2023-12-04T10:02:22.280Z",
  "deliveryFailed": true,
  "deliveryAttempt": 2,
  "timestampSent": 1701684144,
  "status": "500",
  "error": "Internal Server Error",
  "retryOf": "whe-456-xxxxxxx",
  "nextAttemptDate": "2023-12-04T12:02:22.280Z"
  "data": {
    ... // content depending on the kind of events it is
  },
}
```

<table data-full-width="true"><thead><tr><th width="179.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Webhook Event ID</td></tr><tr><td>kind</td><td>String</td><td>Event kind (see <a href="./#supported-webhook-events">supported events</a>)</td></tr><tr><td>date</td><td>String</td><td>ISO-8601 date string when the actual event happened in our system.</td></tr><tr><td>deliveryFailed</td><td>Boolean</td><td>Whether the delivery of this webhook event to your webhook url was successful or not. Any delivery which did not returned a 200 status code is considered failed, and will be retried (read more <a href="./#webhook-event-deliveries-and-retries">here</a>)</td></tr><tr><td>deliveryAttempt</td><td>Number</td><td>Number of the delivery attempt. The first event attempt is 1, and then if it fails, another delivery attempt will be performed later, so <code>deliveryAttempt</code> increases (read more <a href="./#webhook-event-deliveries-and-retries">here</a>)</td></tr><tr><td>timestampSent</td><td>Number</td><td>Unix timestamp (seconds) when the webhook event was signed and tried to deliver to your webhook url from our servers. Will be useful to validate the timestamp of the signature, to protect against replay attacks (more details <a href="./#verify-events-1">here</a>).</td></tr><tr><td>status</td><td>String</td><td>Response status of the webhook delivery attempt. Can be a http status code (eg "200" or "500") if your server responded, or another error code otherwise. This can be helpful to troubleshoot your webhook endpoint.</td></tr><tr><td>error</td><td>String - Optional</td><td>Error detail, if some error happened upon delivery attempt to your webhook endpoint.</td></tr><tr><td>retryOf</td><td>String - Optional</td><td>If this webhook event is a delivery retry from another event which failed delivering to your webhook, <code>retryOf</code> is the ID of the previously failed Webhook Event (more details <a href="./#webhook-event-deliveries-and-retries">here</a>)</td></tr><tr><td>nextAttemptDate</td><td>String - Optional</td><td>If this webhook event has failed delivering, and is set to be retried later (has not reached maximum retries), this indicate the date around when the delivery retry will happen. (more details <a href="./#webhook-event-deliveries-and-retries">here</a>) </td></tr><tr><td>data</td><td>Object</td><td>Object containing data related to the event kind (more details <a href="./#webhook-event-data">here</a>)</td></tr></tbody></table>

