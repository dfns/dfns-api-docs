# Create Wallet

`POST /wallets`

Creates new `Wallet` associated with the given chain (such as `Ethereum or Polygon`). Returns a new wallet ID. Note the request is asynchronous - call Get Wallet to check status of creation and get the associated blockchain address once complete.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Wallets:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                                                                                                   | Type   |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `network`           | **Required**      | Network name for the target chain. See [supported networks](./#supported-networks) and [pseudo networks](./#pseudo-networks) for the list of accepted values. | String |
| `name`              | Optional          | Human readable name for the wallet                                                                                                                            | String |

## Request example <a href="#request-example.1" id="request-example.1"></a>

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
  "network": "EthereumSepolia",
  "name": "my-wallet"
}
```

## Response <a href="#response" id="response"></a>

The response body is the created Wallet. The Wallet object has those fields:

* `id` - _string_ - ID of the wallet
* `network` - _string_ - Network used for the wallet (See [Supported Networks](./#supported-networks) for possible values)
* `name` - _(Optional) string_ - Name of the wallet
* `address` - _(Optional) string_ - Wallet address on its corresponding network. If using a [Pseudo Network](./#pseudo-networks), this field will not be set.
* `status` - _string_ - Status of the wallet, can be one of `Active`, `Archived`.
* `signingKey` - _object_ - Info about the signing key corresponding to that wallet
  * `scheme` - _string_ - Supported schemes are `ECDSA` or `EdDSA`
  * `curve` - _string_ - Key curve. Can be `ed25519` or `secp256k1`
  * `publicKey` - _string_ - Hex-encoded value of public key
* `dateCreated` - _string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was created
* `imported` - _(Optional) boolean_ - is `true` if the wallet is an imported wallet.
* `exported` - _(Optional) boolean_ - is `true` if the wallet was already exported at least once.
*   `dateExported` - _(Optional) string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was first exported.&#x20;



### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "status": "Active",
  "name": "My awesome wallet",
  "dateCreated": "2023-04-14T20:41:28.715Z",
  "signingKey": {
    "curve": "secp256k1",
    "scheme": "ECDSA",
    "publicKey": "e2375c8c9e87bfcd0be8f29d76c818cabacd51584f72cb2222d49a13b036d84d3d"
  }
}
```

## Notes <a href="#notes" id="notes"></a>

Distributed key generation (DKG) is computationally heavy for [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) keys. When clusters are first deployed, this process can take around 30 seconds. Signers build a pool of primes over time to mitigate API latency. That said, please do not create keys in bulk using a script without talking to us first. Thanks!
