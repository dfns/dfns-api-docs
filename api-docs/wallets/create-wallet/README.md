# Create Wallet

`POST /wallets`

Creates new `Wallet` associated with the given chain (such as `Ethereum or Polygon`). Returns a new wallet entity.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                                               | Conditions                                                    |
| -------------------------------------------------- | ------------------------------------------------------------- |
| `Wallets:Create`<mark style="color:red;">\*</mark> | Always Required                                               |
| `Wallets:Tags:Add`                                 | only required if `tags` are specified during wallet creation. |

## Request <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="203">Property</th><th width="184">Type - Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>network</code><mark style="color:red;">*</mark></td><td>String</td><td> Network used for the wallet (See <a href="../#supported-networks">Supported Networks</a> +  <a href="../#pseudo-networks">Pseudo Network</a> for possible values)</td></tr><tr><td><code>name</code></td><td>String - Optional</td><td>Name given to the wallet</td></tr><tr><td><code>tags</code></td><td>String List - Optional</td><td>List of tags to be created for this wallet. If specified, requires the <code>Wallets:Tags:Add</code> permission, like the <a href="../update-wallet-tags.md">Tag Wallet</a> endpoint.</td></tr><tr><td><code>delayDelegation</code></td><td>Boolean  - Optional</td><td>Specify this if you want to create the wallet from a service account and <a href="../delegate-wallet.md">later delegate it to an end user</a>.  Defaults to <code>false</code>.</td></tr><tr><td><code>delegateTo</code></td><td>String - Optional</td><td>ID of the end-user you wish to delegate this wallet to. This End User will then own this wallet, and the wallet will only be able to be used with an End-User's signature.</td></tr></tbody></table>

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
* `tags` - _(Optional) string list_ - List of tags on that wallet
* `custodial` - Boolean - Specifies whether the wallet is onwed by and EndUser (non-custodial), or by your organisation (custodial)

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
