# GetCallbackSubscriptionById

`GET /callback-subscriptions/{callbackSubscriptionId}`

Retrieves a `CallbackSubscription` by its `id`.

### Required Permissions

CallbackSubscriptions:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter           | Description                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `callbackSubscriptionId` | <p>Unique identifier of the <code>CallbackSubscription</code> like:<br><br><code>cs-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/callback-subscriptions/cs-orange-magnesium-a0606d08b2/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

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
