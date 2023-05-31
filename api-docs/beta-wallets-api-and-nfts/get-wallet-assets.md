# Get Wallet Assets

`GET /wallets/{walletId}/assets`

Retrieves a list of assets owned by the specified Wallet.

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:Read

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/assets"
```

### Response <a href="#response" id="response"></a>

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "network": "ETH_SEPOLIA",
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
      "balance": "100000000000000000000"
    },
    {
      "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
      "name": "ChainLink Token",
      "symbol": "LINK",
      "decimals": 18,
      "balance": "20000000000000000000"
    }
  ]
}
```
