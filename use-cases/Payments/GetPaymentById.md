# Get Payment by ID

```http
GET /assets/asset-accounts/:assetAccountId/payments/:paymentId
```

When the payment is being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the `GetPaymentById` method.


## Get payment by ID

To retrieve an asset payment by its ID, send a `GET` request to the `/assets/asset-accounts` endpoint including the identifiers of both the **payment** and the **sender's account** as path parameters.


```http
GET /assets/asset-accounts/:assetAccountId/payments/:paymentId
```
A successful response returns code 200 and a JSON object with a **transaction hash** confirming that the transaction has been **executed**.


<!--- 

A successful response means that the public and private key shares were created at a specific address. It returns a status of 200 and a JSON object representing the found asset account, including its **ID**, **asset symbol**, **status**, **address**, **public key**, **date created**, and **date updated**.

```json
{ 
    "id": aa-five-blue-caab30165c",
    "assetSymbol": "ETH",
    "status": "Enabled",
    "address": "0x...",
    "publicKey": "xkeypub...",
    "dateCreated": "2022-06-20t09:45:15.017Z",
    "dateUpdated": "2022-06-20t09:45:15.017Z"
}
```



---

```http
POST /assets/asset-accounts/:assetPaymentId/payments
```

To initiate a payment to an asset account, send a `POST` request to the  endpoint. Incldue an asset account identifier as a path parameter, and in the request body send the amount and type of funds as well as the receiver's kind and address:

```http
POST /assets/asset-accounts/:assetPaymentId/payments
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

If successful, the response contains, among other things, a **date stamp** and a **new payment ID**, confirming that a new payment of the correct **amount** and **type** is being **initiated**:

```json
{ 
    "status": "Initiated",
    "assetSymbol": "ETH",
    "id": aa-five-blue-caab30165c"
    "dateCreated": "2022-06-20t09:45:15.017Z"
}
```

When the payment is being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the [`GetPaymentById` method](GetPaymentById.md).

--->