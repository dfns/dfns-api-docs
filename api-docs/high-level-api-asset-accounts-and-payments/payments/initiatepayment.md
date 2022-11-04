# InitiatePayment

`POST /assets/asset-accounts/{AssetAccountId}/payments`

Initiates a payment in the provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within the same network and the same kind of asset (native token or ERC20).  Payments support these `receiver` configurations:

* `DfnsAssetAccount` - A payment to another Dfns wallet as specified by its id.&#x20;
* `BlockchainWalletAddress` - A payment to any address supported by the target chain.

### Required Permissions <a href="#scopes" id="scopes"></a>

Payments:Create

### Triggers <a href="#request-body" id="request-body"></a>

Policy Engine for [Policies](../../policy-management/policies/createpolicy.md) with a `PaymentInitiation` `activityKind`.&#x20;

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter   | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `AssetAccountId` | <p>Unique identifier of the <code>AssetAccount</code> like:<br><br>aa<code>-orange-magnesium-a0606d08b2</code></p> |

### Request body <a href="#request-example.1" id="request-example.1"></a>

| Request body fields | Required/Optional | Description                                                                                                                                                   | Type    |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `assetSymbol`       | Required          | Currency symbol and network.  Format is \<SYMBOL>\[.\<NETWORK>].  See [Enumerated Types](../../dfns-api-enumerated-types.md) for a full list of valid values. | String  |
| `amount`            | Required          | Amount to transfer specified in the largest denomination - eg. the native token for "ETH" or "SOL"                                                            | Integer |
| `receiver`          | Required          | An object detailing the kind of the recipient (see below)                                                                                                     | Object  |
| note                | Optional          | A short payment description                                                                                                                                   | String  |
| narrative           | Optional          | Broader context on the payment for customer use                                                                                                               | String  |

#### Dfns Asset Account Payment

Use the following fields in the nested `receiver` object to initiate a payment to another Dfns wallet:

| Request body fields | Required/Optional | Description                                                                             | Type            |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------- | --------------- |
| `kind`              | Required          | Specify: "DfnsAssetAccount"                                                             | Enumerated Type |
| `id`                | Required          | <p>Unique identifier of the AssetAccount like:</p><p>aa-orange-magnesium-a0606d08b2</p> | String          |

#### External Wallet Payment

Use the following fields in the nested `receiver` object to initiate a payment to any address supported by the target chain:

| Request body fields | Required/Optional | Description                        | Type            |
| ------------------- | ----------------- | ---------------------------------- | --------------- |
| `kind`              | Required          | Specify: "BlockchainWalletAddress" | Enumerated Type |
| `address`           | Required          | External blockchain address        | String          |



### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/assets/asset-accounts/aa-orange-magnesium-a0606d08b2/payments" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{
        "receiver": {
            "kind": "BlockchainWalletAddress",
            "address": "AXn56FXBfqRvGejFYN57roxeiztTE87HLZwb8wz3pjWf"
        },
        "assetSymbol": "BTC",
        "amount": "1",
        "note": "testing",
        "narrative": "some payment",
        "externalId": "1-2-3-4"
    }'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Initiated".  Call [GetPaymentById](getpaymentbyid.md) to check status of the payment.&#x20;

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

