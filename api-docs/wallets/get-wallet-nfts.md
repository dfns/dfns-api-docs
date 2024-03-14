# Get Wallet NFTs

`GET /wallets/{walletId}/nfts`

Retrieves a list of NFTs owned by the specified Wallet.

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

```json
{
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
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
