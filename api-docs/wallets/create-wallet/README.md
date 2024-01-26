# Create Wallet

`POST /wallets`

Creates new `Wallet` associated with the given chain (such as `Ethereum or Polygon`). Returns a new wallet entity.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Wallets:Create` | Always Required |

## Request <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                                                                                               | Type    |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `network`           | Required          |  Network used for the wallet (See [Supported Networks](../#supported-networks) +  [Pseudo Network](../#pseudo-networks) for possible values)              | String  |
| `name`              | Optional          | Name given to the wallet                                                                                                                                  | String  |
| `delayDelegation`   | Optional          | Specify this if you want to create the wallet from a service account and [later delegate it to an end user](../delegate-wallet.md).  Defaults to `false`. | Boolean |

#### Example

```shell
{
  "network": "EthereumSepolia",
  "name": "my-wallet"
}
```

## Response <a href="#response" id="response"></a>

The response body is the created Wallet. The Wallet object has those fields:

* `id` - _string_ - ID of the wallet
* `network` - _string_ - Network used for the wallet (See [Supported Networks](../#supported-networks) for possible values)
* `name` - _(Optional) string_ - Name given to the wallet
* `address` - _(Optional) string_ - Wallet address on its corresponding network. If using a [Pseudo Network](../#pseudo-networks), this field will not be set.
* `status` - _string_ - Status of the wallet, can be one of `Active`, `Archived`.
* `signingKey` - _object_ - Info about the signing key corresponding to that wallet
  * `scheme` - _string_ - Supported schemes are `ECDSA` or `EdDSA`
  * `curve` - _string_ - Key curve. Can be `ed25519` or `secp256k1`
  * `publicKey` - _string_ - Hex-encoded value of public key
* `dateCreated` - _string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was created
* `imported` - _(Optional) boolean_ - is `true` if the wallet is an imported wallet.
* `exported` - _(Optional) boolean_ - is `true` if the wallet was already exported at least once.
* `dateExported` - _(Optional) string_ - [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) date string when wallet was first exported.&#x20;

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "status": "Active",
  "name": "My awesome wallet",
  "address": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
  "dateCreated": "2023-04-14T20:41:28.715Z",
  "signingKey": {
    "curve": "secp256k1",
    "scheme": "ECDSA",
    "publicKey": "e2375c8c9e87bfcd0be8f29d76c818cabacd51584f72cb2222d49a13b036d84d3d"
  }
}
```
