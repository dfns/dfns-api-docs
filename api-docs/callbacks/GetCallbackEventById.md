# GetCallbackEventById

`GET /callback-events/{callbackEventId}`

Retrieves a `CallbackEvent` by it `id`.  A callback event is a record of a specific callback that was triggered.&#x20;

### Required Permissions

Callbacks:GetCallbackEvent

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter    | Description                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `callbackEventId` | <p>Unique identifier of the <code>CallbackEvent</code> like:<br><br><code>ce-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/callback-events/ce-tennis-london-1333ca3647" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

The `documentSnapshot` contains an escaped JSON object of callback event data.&#x20;

```json
 {
  "dateCreated": "2022-07-06T12:53:28.176Z",
  "kind": "PaymentInitiated",
  "documentSnapshot": "{\"receiverAddress\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\",\"note\":\"TEST-amount-5-1657112007850\",\"amount\":\"0.0011\",\"assetSymbol\":\"SOL\",\"dateCreated\":\"2022-07-06T12:53:27.891Z\",\"receiver\":{\"kind\":\"BlockchainWalletAddress\",\"address\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\"},\"initiator\":{\"kind\":\"Employee\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"employeeId\":\"ce-early-violet-703a68145bca\"},\"assetAccountId\":\"aa-muppet-crazy-b2fa6ab7a8\",\"id\":\"pa-saturn-lion-bfc5b80210\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"status\":\"Initiated\"}",
  "externalId": "123",
  "id": "ce-tennis-london-1333ca3647",
  "orgId": "cu-purple-pip-1b417b958500",
  "callbackSubscriptionId": "cs-apart-sierra-e7b287d46a",
  "status": "Sent"
 }
```
