# Get Payment By Id

To retrieve an asset payment by its ID, send a `GET` request to the `/assets/asset-accounts` endpoint including the identifiers of both the **payment** and the **sender's Asset Account** as path parameters.

```http
GET /assets/asset-accounts/:assetAccountId/payments/:paymentId
```

A successful response returns code 200 and a JSON object with a **transaction hash** confirming that the transaction has been **executed**.

```
{
   "amount": "0.01",
   "assetAccountId": "aa-iowa-washington-7a99aa2fd5",
   "assetSymbol": "ETH",
   "dateCreated": "2022-07-19T19:41:15.656Z",
   "id": "pa-edward-emma-9e5130c59f",
   "initiator": {
       "kind": "Employee",
       "orgId": "cu-tent-pole-1b417b758500",
       "employeeId": "oe-fine-cabbage-9de635ef6963"
   },
   "receiver": {
       "kind": "BlockchainWalletAddress",
       "address": "0x8b25C5D..."
   },
   "status": "Executed",
   "txHash": "0x7ded8fa5f4a82ddac94608e109eca9944bf98531b8e6d7faf04f591e0b5769c6"
}

```
