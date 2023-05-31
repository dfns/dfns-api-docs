# Get Wallet NFTs

`GET /wallets/{walletId}/nfts`

Retrieves a list of NFTs owned by the specified Wallet.

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
curl "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/nfts"
```

### Response <a href="#response" id="response"></a>

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "network": "ETH_SEPOLIA",
  "nfts": [
    {
      "contract": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
      "name": "Muppets",
      "symbol": "MUPPETS",
      "tokenIds": ["0", "1"],
      "count": 2
    }
  ]
}
```
