# Get Wallet by ID

`GET /wallets/{walletId}`

Retrieves a Wallet by its ID.

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

The response body is the Wallet. The Wallet object has those fields:

* `id` - _string_ - ID of the wallet
* `network` - _string_ - Network used for the wallet (See [Supported Networks](./#supported-networks) for possible values)
* `name` - _(Optional) string_ - Name given to the wallet
* `address` - _(Optional) string_ - Wallet address on its corresponding network. If using a [Pseudo Network](./#pseudo-networks), this field will not be set.
* `status` - _string_ - Status of the wallet, can be one of `Active`, `Archived`.
* `signingKey` - _object_ - Info about the signing key corresponding to that wallet
  * `scheme` - _string_ - Supported schemes are `ECDSA` or `EdDSA`
  * `curve` - _string_ - Key curve. Can be `ed25519` or `secp256k1`
  * `publicKey` - _string_ - Hex-encoded value of public key
* `dateCreated` - _string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was created
* `imported` - _(Optional) boolean_ - is `true` if the wallet is an imported wallet.
* `exported` - _(Optional) boolean_ - is `true` if the wallet was already exported at least once.
* `dateExported` - _(Optional) string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was first exported.&#x20;

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "pk-september-sad-3...18",
    "network": "EthereumGoerli",
    "status": "Active",
    "signingKey": {
        "scheme": "ECDSA",
        "curve": "secp256k1",
        "publicKey": "03e849e03fa8b962...cc6e3"
     },
     "address": "0xf42d9f717e0223a70ae195d1d31b798dc8a8b1d2",
     "dateCreated": "2021-01-01T00:00:00.000Z",
     "custodial": true,
     "tags": []
}
```
