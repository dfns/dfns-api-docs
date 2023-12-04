---
description: Send a test event to your webhook url
---

# Ping Webhook

**`POST /webhooks/:webhookId/ping`**

This endpoint is meant for webhook setup and troubleshooting. Calling the endpoint will trigger a fake test event that will be pushed to the webhook url. The fake event will not be saved and not appear in further requests to Webhook Events.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Permissions Required

* `Webhooks:Ping`

### Request Body

```json
{}
```

## Response

```json
{
  "status": "500",
  "error": "Internal Server Serror", // optional, may not be there if status is "200"
}
```



<table data-full-width="true"><thead><tr><th width="149.33333333333331">Property</th><th width="193">Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>Resulting status of the webhook request when test event was pushed to it. Can be a http status code (eg "200" or "500") if your server responded, or another error code otherwise. This can be helpful to troubleshoot your webhook endpoint.</td></tr><tr><td>error</td><td>String - Optional</td><td>Will show an error message if <code>status</code> was not <code>"200"</code></td></tr></tbody></table>
