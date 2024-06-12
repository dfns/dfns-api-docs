# Get Wallet Assets

`GET /wallets/{walletId}/assets`

Retrieves a list of assets owned by the specified Wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
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
  "network": "Ethereum",
  "assets": [
    {
      "symbol": "ETH",
      "decimals": 18,
      "balance": "1000000000000000000",
      "verified": true
    },
    {
      "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "balance": "100000000000000000000",
      "verified": true
    },
    {
      "contract": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "name": "Chainlink Token",
      "symbol": "LINK",
      "decimals": 18,
      "balance": "20000000000000000000",
      "verified": true
    }
  ]
}
```
