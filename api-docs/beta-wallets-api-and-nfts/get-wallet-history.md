# Get Wallet History

`GET /wallets/{walletId}/history?paginationToken={token}`

Retrieves a list of historical on chain activities for the specified wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name           | Conditions      |
| -------------- | --------------- |
| `Wallets:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

### Query parameters <a href="#request-example.1" id="request-example.1"></a>

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
      "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
      "network": "EthereumSepolia",
      "kind": "NativeTransfer",
      "direction": "Out",
      "symbol": "SepoliaETH",
      "decimals": 18,
      "blockNumber": 3308284,
      "timestamp": "2023-04-17T15:41:00.000Z",
      "txHash": "0x93a7d6e97ffe87503fa3888e2457fa6668dc7887f23d4a454c89cb98f475463f",
      "to": "0xa238b6008bc2fbd9e386a5d4784511980ce504cd",
      "from": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
      "value": "1000000000000000",
      "fee": "105000000147000"
    },
    {
      "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
      "network": "EthereumSepolia",
      "kind": "Erc20Transfer",
      "direction": "In",
      "contract": "0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5",
      "symbol": "USDC",
      "name": "USDC Token",
      "decimals": 18,
      "blockNumber": 3291042,
      "timestamp": "2023-04-14T22:07:00.000Z",
      "txHash": "0xc1a000d375e571a6b1af865bbdddcac7ae455fad9f36061e5e3b60dafd4e6355",
      "index": "30",
      "from": "0xe2a3422f3168149ad2d11b4de2b97b05f1ebf76e",
      "to": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
      "value": "100000000000000000000"
    },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
