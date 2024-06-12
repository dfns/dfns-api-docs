# Get Wallet History

`GET /wallets/{walletId}/history?paginationToken={token}`

Retrieves a list of historical on chain activities for the specified wallet.

{% hint style="info" %}

- Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
- Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
  {% endhint %}

## Required Permissions

| Name           | Conditions      |
| -------------- | --------------- |
| `Wallets:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

### Query parameters <a href="#request-example.1" id="request-example.1"></a>

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

## Response <a href="#response" id="response"></a>

```json
{
  "items": [
    {
      "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
      "network": "Ethereum",
      "kind": "Erc20Transfer",
      "direction": "Out",
      "blockNumber": 19036906,
      "timestamp": "2024-01-18T23:03:59.000Z",
      "txHash": "0x8e88793607610a83798eb5ec6dde861f3e459c7e4a22e78b0d2e675b86d0d1e7",
      "index": "134",
      "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "from": "0xea09cf8a006493566f8a8fd3d0b32ebff5939d6a",
      "to": "0xc42754e6f79f15082613b2b4ebead83dcf8116b6",
      "value": "1000000",
      "fee": "1542993669053672",
      "metadata": {
        "asset": {
          "symbol": "USDC",
          "decimals": 6,
          "verified": true
        },
        "fee": {
          "symbol": "ETH",
          "decimals": 18,
          "verified": true
        }
      }
    },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
