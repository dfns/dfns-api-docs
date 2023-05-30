# Get Wallet Assets

`GET /wallets/{WalletID}/assets`

Retrieves a list of assets owned by the specified Wallet.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:Read

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>WalletID</code></td><td>Unique identifier of the <code>Wallet</code> like:<br><br><code>wa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/wallets/wa-kentucky-speaker-d80f55f2a4/assets" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
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

