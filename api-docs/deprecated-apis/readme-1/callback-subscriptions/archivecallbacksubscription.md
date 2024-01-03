# Archive Callback Subscription

&#x20;&#x20;

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Webhooks](../../../webhooks/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}

&#x20;

`DELETE /callback-subscriptions/{callbackSubscriptionId}`

Archives a `CallbackSubscription` by its `id`.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                            | Conditions      |
| ------------------------------- | --------------- |
| `CallbackSubscriptions:Archive` | Always Required |

## Parameters <a href="#request-body" id="request-body"></a>

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
   "status": "Archived",
   "id": "cs-arizona-table-3fd134d2ab",
   "dateCreated": "2022-08-12T16:33:40.354Z"
}
```
