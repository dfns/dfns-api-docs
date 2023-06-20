# Get Payment By ID

`GET /assets/asset-accounts/{AssetAccountId}/payments/{PaymentID}`

Retrieves a `Payment` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Payments:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>AssetAccountId</code></td><td>Unique identifier of the <code>AssetAccount</code> like:<br><br><code>aa-orange-magnesium-a0606d08b2</code></td></tr><tr><td><code>PaymentId</code></td><td>Unique identifier of the <code>Payment</code> like:<br><br><code>pa-edward-emma-9e5130c59f</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a status indicating whether the Payment has been Initiated or Executed. Once executed, it will also return the transaction hash:

```json
{
   "amount": "0.01",
   "assetAccountId": "aa-iowa-washington-7a99aa2fd5",
   "assetSymbol": "ETH",
   "dateCreated": "2022-07-19T19:41:15.656Z",
   "externalId": "1-2-3-4",
   "id": "pa-edward-emma-9e5130c59f",
   "initiator": {
       "kind": "Employee",
       "orgId": "cu-purple-pip-1b417b958500",
       "employeeId": "oe-nine-artist-9de60fef6963"
   },
   "narrative": "some payment",
   "note": "testing",
   "direction": "Outgoing",
   "orgId": "cu-purple-pip-1b417b958500",
   "receiver": {
       "kind": "BlockchainWalletAddress",
       "address": "0x8b25C5DDeeB75fD73a62Cd8c1E2Ad4EbCf2BA076"
   },
   "receiverAddress": "0x8b25C5DDeeB75fD73a62Cd8c1E2Ad4EbCf2BA076",
   "status": "Executed",
   "txHash": "0x7ded8fa5f4a82ddac94608e109eca9944bf98e30b8e6d7faf04f591e0b5769c6"
}
```
