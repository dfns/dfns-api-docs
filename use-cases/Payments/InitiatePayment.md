# Initiate Payment

To initiate a payment to an asset account, send a `POST` request to the `payments` endpoint. Include an asset account identifier as a path parameter, and in the request body send the amount and type of funds as well as the receiver kind and address:

```http
POST /assets/asset-accounts/:assetAccountId/payments
```

```json
{
    "receiver": 
    {
        "kind": "BlockchainWalletAddress",
        "address": "0x...."
    }
    "assetSymbol":  "ETH",
    "amount": "0.0001"
}
```

If successful, the response contains, among other things, a **new payment ID**, confirming that a new payment of the correct **amount** and **type** has been **initiated**:

```json
{ 
    "status": "Initiated",
    "assetSymbol": "ETH",
    "id": aa-five-blue-caab30165c"
    "dateCreated": "2022-06-20t09:45:15.017Z"
}
```

When the payment is being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the [`GetPaymentById` method](GetPaymentById.md).
