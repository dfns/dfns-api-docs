# Get Balance

To retrieve the current balance of an asset account by its ID, send a `GET` request to the `/assets/asset-accounts` endpoint including the account identifier as a path parameter:

```http
GET /assets/asset-accounts/:assetAccountId/balance
```

A successful response returns a status of 200 and a JSON object representing the found asset account, including its **ID**, **asset symbol**, and **balance**.

```json
{ 
    "id": aa-five-blue-caab30165c",
    "assetSymbol": "ETH",
    "balance": "99878999999118000"
}
```

\> **Note**: For ETH, balance is in WEI units. 1 ETH = 10^18 WEI
