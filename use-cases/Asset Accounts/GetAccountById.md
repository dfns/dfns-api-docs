# Get Account By Id

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
