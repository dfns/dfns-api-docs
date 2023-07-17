# Create Callback Subscription

`POST /callback-subscriptions/`

This creates a callback subscription for the specific `eventKind`. `eventKind` takes the following enumerated type values:

* `PaymentInitiated`: A payment request has been made via the InitiatePayment endpoint.
* `PaymentExecuted`: A payment request has been successfully broadcasted to the target chain via the InitiatePayment endpoint.
* `PaymentConfirmed`: The payment was mined as part of a block.
* `PaymentReceived`: An incoming payment was received in your wallet.
* `TransactionBroadcasted`: A transaction has been successfully broadcasted to the target chain via the BroadcastTransaction endpoint.
* `WalletCreated`: An AssetAccount has been successfully created.
* `PolicyActivated`: A new Policy has been successfully activated.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `CallbackSubscriptions:Create` | Always Required |

## Request body <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>eventKind</code></td><td>Required</td><td>The type of subscription to listen for from the list above.</td><td>Enumerated Type</td></tr><tr><td><code>url</code></td><td>Required</td><td>The URL the callback will POST data to</td><td>String</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "eventKind": "PaymentInitiated",
  "url": "https://mycallback.com"
}
```

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

## Callback Example <a href="#response" id="response"></a>

### `PaymentInitiated` example callback <a href="#response-example" id="response-example"></a>

The following is an example body that will be posted to the endpoint specified in the callback `url`:

```json
{
  "note": "callbacks testing",
  "amount": "0.0000000001",
  "assetSymbol": "ETH",
  "receiver": {
    "kind": "DfnsAssetAccount",
    "id": "aa-undress-india-0a2aa96fce"
  },
  "narrative": "some payment",
  "initiator": {
    "kind": "Employee",
    "employeeId": "oe-nine-artist-9de60fef6963",
    "orgId": "cu-purple-pip-1b417b958500"
  },
  "externalId": "1-2-3-4",
  "orgId": "cu-purple-pip-1b417b958500",
  "receiverAddress": "0xF7667d72812bc601F7f2aAdF354E192Fd069a3f2",
  "dateCreated": "2022-08-29T20:53:05.630Z",
  "assetAccountId": "aa-network-burger-21cb681b2c",
  "id": "pa-pasta-kentucky-18e54f1f52",
  "status": "Initiated"
}
```
