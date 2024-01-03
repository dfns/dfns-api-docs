# Initiate Payment

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`POST /assets/asset-accounts/{AssetAccountId}/payments`

Initiates a payment in the provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within the same network and the same kind of asset (native token or ERC20). Payments support these `receiver` configurations:

* `DfnsAssetAccount` - A payment to another Dfns wallet as specified by its id.
* `BlockchainWalletAddress` - A payment to any address supported by the target chain.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `Payments:Create`   | Always Required |
| `PublicKeys:Read`   | Always Required |
| `Signatures:Create` | Always Required |

## Triggers

Policy Engine for [Policies](../../../policy-management/policies/createpolicy.md) with a `PaymentInitiation` `activityKind`.

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>AssetAccountId</code></td><td>Unique identifier of the <code>AssetAccount</code> like:<br><br>aa<code>-orange-magnesium-a0606d08b2</code><br><br>This is the account that is sending the payment and will be charged any associated network fees (ie. gas).</td></tr></tbody></table>

## Request body <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>assetSymbol</code></td><td>Required</td><td>Currency symbol and network. Format is &#x3C;SYMBOL>[.&#x3C;NETWORK>]. See <a href="../../../dfns-api-enumerated-types.md">Enumerated Types</a> for a full list of valid values.</td><td>String</td></tr><tr><td><code>amount</code></td><td>Required</td><td>Amount to transfer specified in the largest denomination - eg. the native token for "ETH" or "SOL"</td><td>String (often specified as a float, eg. "0.0005")</td></tr><tr><td><code>receiver</code></td><td>Required</td><td>An object detailing the kind of the recipient (see below)</td><td>Object</td></tr><tr><td><code>note</code></td><td>Optional</td><td>A short payment description</td><td>String</td></tr><tr><td><code>narrative</code></td><td>Optional</td><td>Broader context on the payment for customer use</td><td>String</td></tr></tbody></table>

### Dfns Asset Account Payment

Use the following fields in the nested `receiver` object to initiate a payment to another Dfns wallet:

<table><thead><tr><th width="238">Request body fields</th><th width="113">Required/Optional</th><th width="240">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "DfnsAssetAccount"</td><td>Enumerated Type</td></tr><tr><td><code>id</code></td><td>Required</td><td><p>Unique identifier of the AssetAccount like:</p><p>aa-orange-magnesium-a0606d08b2</p></td><td>String</td></tr></tbody></table>

#### Sample request

```JSON
{
  "receiver": {
    "kind": "DfnsAssetAccount",
    "id": "aa-orange-magnesium-a0606d08b2"
  },
  "assetSymbol": "BTC",
  "amount": "1",
  "note": "testing",
  "narrative": "some payment",
  "externalId": "1-2-3-4"
}
```

### External Wallet Payment

Use the following fields in the nested `receiver` object to initiate a payment to any address supported by the target chain:

<table><thead><tr><th width="238">Request body fields</th><th width="113">Required/Optional</th><th width="240">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "BlockchainWalletAddress"</td><td>Enumerated Type</td></tr><tr><td><code>address</code></td><td>Required</td><td>External blockchain address</td><td>String</td></tr></tbody></table>

#### Sample request

```JSON
{
  "receiver": {
    "kind": "BlockchainWalletAddress",
    "address": "AXn56FXBfqRvGejFYN57roxeiztTE87HLZwb8wz3pjWf"
  },
  "assetSymbol": "BTC",
  "amount": "1",
  "note": "testing",
  "narrative": "some payment",
  "externalId": "1-2-3-4"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Initiated". Call [GetPaymentById](getpaymentbyid.md) to check status of the payment.

```json
{
   "receiver": {
       "kind": "BlockchainWalletAddress",
       "address": "0x2b25C5DDeeB76fD73a62Cd9c1E2Ad4EbCf2BC076"
   },
   "assetSymbol": "ETH",
   "amount": "0.01",
   "note": "testing",
   "narrative": "some payment",
   "externalId": "1-2-3-4",
   "assetAccountId": "aa-iowa-washington-7a99aa2fd5",
   "initiator": {
       "kind": "Employee",
       "orgId": "cu-purple-pip-1b417b958500",
       "employeeId": "oe-nine-artist-9de60fef6963"
   },
   "status": "Initiated",
   "dateCreated": "2022-07-19T19:41:15.656Z",
   "orgId": "cu-purple-pip-1b417b958500",
   "receiverAddress": "0x8b25C5DDeeB75fD73a62Cd8c1E2Ad4EbCf2BA076",
   "id": "pa-edward-emma-9e5130c59f"
}
```
