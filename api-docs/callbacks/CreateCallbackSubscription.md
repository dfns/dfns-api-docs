# CreateCallbackSubscription

`POST /callback-subscriptions/`

This creates a callback subscription for the specific `eventKind`.   `eventKind` takes the following enumerated type values:

* `PaymentInitiated`: A payment request has been made via the InitiatePayment endpoint.&#x20;
* `PaymentExecuted`: A payment request has been successfully broadcasted to the target chain via the InitiatePayment endpoint.&#x20;
* `TransactionBroadcasted`: A transaction has been successfully broadcasted to the target chain via the BroadcastTransaction endpoint.
* `WalletCreated`: An AssetAccount or Wallet has been successfully created.
* `PolicyActivated`: A new Policy has been successfully activated.

### Required Permissions <a href="#scopes" id="scopes"></a>

CallbackSubscriptions:Create

### Parameters <a href="#request-body" id="request-body"></a>

### Request body <a href="#request-example.1" id="request-example.1"></a>

| Request body fields | Required/Optional | Description                                                 | Type            |
| ------------------- | ----------------- | ----------------------------------------------------------- | --------------- |
| `eventKind`         | Required          | The type of subscription to listen for from the list above. | Enumerated Type |
| `url`               | Required          | The URL the callback will POST data to                      | String          |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/callback-subscriptions/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"eventKind": "PaymentInitiated", "url", "https://mycallback.com"}'
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
