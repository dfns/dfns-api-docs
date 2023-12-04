# Get Callback Subscription By ID

`GET /callback-subscriptions/{callbackSubscriptionId}`

Retrieves a `CallbackSubscription` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                         | Conditions      |
| ---------------------------- | --------------- |
| `CallbackSubscriptions:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="283">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>callbackSubscriptionId</code></td><td>Unique identifier of the <code>CallbackSubscription</code> like:<br><br><code>cs-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
   "externalId": "New Callback",
   "eventKind": "PaymentInitiated",
   "url": "https://webhook.site/e36cd6aa-e4f3-4da4-b904-e210048325bb",
   "orgId": "cu-purple-pip-1b417b958500",
   "status": "Enabled",
   "id": "cs-arizona-table-3fd134d2ab",
   "dateCreated": "2022-08-12T16:33:40.354Z"
}
```
