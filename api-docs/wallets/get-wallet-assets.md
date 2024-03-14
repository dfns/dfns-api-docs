# Get Wallet Assets

`GET /wallets/{walletId}/assets`

Retrieves a list of assets owned by the specified Wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name           | Conditions      |
| -------------- | --------------- |
| `Wallets:Read` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

`verified` contracts have been certified authentic by CoinMarketCap.&#x20;

```json
{
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "assets": [
    {
      "symbol": "SepoliaETH",
      "decimals": 18,
      "balance": "1000000000000000000"
    },
    {
      "contract": "0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5",
      "name": "USDC Token",
      "symbol": "USDC",
      "decimals": 18,
      "balance": "100000000000000000000",
      "verified": true
    },
    {
      "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
      "name": "ChainLink Token",
      "symbol": "LINK",
      "decimals": 18,
      "balance": "20000000000000000000",
      "verified": true
    }
  ]
}
```
