Get Account by ID
===

```http
GET /assets/asset-accounts/:assetAccountId
```

When the account is in the process of being created, its `status` is `Creating`. Once created, the account's `status` changes from `Creating` to `Enabled`. To confirm that this has occurred, you can use the `GetAccountById` method.

## Get account by ID

To retrieve an asset account by its ID, send a `GET` request to the `/assets/asset-accounts` endpoint including the account identifier as a path parameter:

```http
GET /assets/asset-accounts/:assetAccountId
```

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

