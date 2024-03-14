# Delete Webhook

**`DELETE /webhooks/:webhookId`**

Deletes an existing webhook registration.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Permissions Required

* `Webhooks:Delete`

### Request Body

```json
{}
```

## Response

```json
{
  "deleted": true
}
```
