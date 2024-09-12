# List Exchange Account Assets

`GET /exchanges/{exchangeID}/accounts/{accountID}/assets`

Retrieves a list of assets for the specified exchange account

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Exchanges:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `exchangeID`   | Unique identifier of the `Exchange`. ex. ex`-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |
| accountID      | Unique ENUM identified for the account like "spot"                         |

## Response <a href="#native-currency-request-body" id="native-currency-request-body"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
      "symbol": "TRX",
      "balance": "6.02050200",
      "networks": [
        {
          "network": "Tron",
          "decimals": 6,
          "kind": "Native"
        }
      ]
    },
    {
      "symbol": "USDC",
      "balance": "6.47050000",
      "networks": [
        {
          "network": "Ethereum",
          "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "decimals": 6,
          "kind": "Erc20"
        },
        {
          "network": "Optimism",
          "contract": "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
          "decimals": 6,
          "kind": "Erc20"
        },
        {
          "network": "ArbitrumOne",
          "contract": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          "decimals": 6,
          "kind": "Erc20"
        },
        {
          "network": "Polygon",
          "contract": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
          "decimals": 6,
          "kind": "Erc20"
        },
        {
          "network": "Solana",
          "mint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "decimals": 6,
          "kind": "Spl"
        }
      ]
    }
  ]
}
```
