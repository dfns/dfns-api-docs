# Create Asset Account

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`POST /assets/asset-accounts/`

Creates new `AssetAccount` entity associated with a specific `assetSymbol` (such as `ETH`). Returns a new asset account ID. Note the request is asynchronous - call [GetAssetAccountById](getassetaccountbyid.md) to check status of creation and get the associated blockchain address once complete.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more
{% endhint %}

## Required Permissions

| Name                   | Conditions      |
| ---------------------- | --------------- |
| `AssetAccounts:Create` | Always Required |
| `PublicKeys:Create`    | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="211">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>assetSymbol</code></td><td>Required</td><td>Currency symbol and network. Format is &#x3C;SYMBOL>[.&#x3C;NETWORK>]. See <a href="../../../dfns-api-enumerated-types.md">Enumerated Types</a> for a full list of valid values.</td><td>String</td></tr><tr><td><code>name</code></td><td>Optional</td><td>Human readable name for the asset account</td><td>String</td></tr><tr><td><code>publicKey</code></td><td>Optional</td><td>You can associate more than one asset account with the same public key by passing the public key ID (starting with "pk-...") into this optional body parameter.</td><td>String</td></tr></tbody></table>

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "assetSymbol": "USDC.MATIC"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Creating". Call [GetAssetAccountById](getassetaccountbyid.md) to check status of creation and get the associated blockchain address once complete.

```json
{
  "id": "aa-kentucky-speaker-d80f55f2a4",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Creating",
  "assetSymbol": "ETH",
  "name": "My ETH account",
  "dateCreated": "2022-08-04T14:44:21.278Z",
  "dateUpdate": "2022-08-04T14:44:21.278Z"
}
```

## Notes <a href="#notes" id="notes"></a>

Distributed key generation (DKG) is computationally heavy for [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) keys. When clusters are first deployed, this process can take around 30 seconds. Signers build a pool of primes over time to mitigate API latency. That said, please do not create keys in bulk using a script without talking to us first. Thanks!
