# Get Wallet NFTs

`GET /wallets/{walletId}/nfts`

Retrieves a list of NFTs owned by the specified Wallet.

{% hint style="info" %}

- Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
- Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
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

```json
{
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "Ethereum",
  "nfts": [
    {
      "kind": "Erc721",
      "contract": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "symbol": "BAYC",
      "tokenId": "8500",
      "tokenUri": "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/8500"
    },
    {
      "kind": "Erc721",
      "contract": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "symbol": "BAYC",
      "tokenId": "2944",
      "tokenUri": "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/2944"
    }
  ]
}
```
