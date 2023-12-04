# List Callback Subscriptions

`GET /callback-subscriptions/`

Retrieves all `CallbackSubscriptions` in the org.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                         | Conditions      |
| ---------------------------- | --------------- |
| `CallbackSubscriptions:Read` | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
     "externalId": "New Callback",
     "eventKind": "PaymentInitiated",
     "url": "https://webhook.site/e36cd6aa-e4f3-4da4-b904-e210048325bb",
     "orgId": "cu-purple-pip-1b417b958500",
     "status": "Enabled",
     "id": "cs-arizona-table-3fd134d2ab",
     "dateCreated": "2022-08-12T16:33:40.354Z"
  },
  ...
  ]
}
```
