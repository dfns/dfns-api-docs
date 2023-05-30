# Create Wallet

`POST /wallets`

Creates new `Wallet` associated with the given chain (such as `ETH or MATIC`). Returns a new wallet ID.  Note the request is asynchronous - call Get Wallet to check status of creation and get the associated blockchain address once complete.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:Create, PublicKeys:Create

### Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="211">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>network</code></td><td>Required</td><td>Network ENUM for the target chain.  See <a href="../dfns-api-enumerated-types.md">Enumerated Types</a> for a full list of valid values.</td><td>String</td></tr><tr><td><code>name</code></td><td>Optional</td><td>Human readable name for the wallet</td><td>String</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/wallets" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"network": "MATIC"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Creating".  Call [GetAssetAccountById](../high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbyid.md) to check status of creation and get the associated blockchain address once complete.&#x20;

```json
{
  "id": "wa-kentucky-speaker-d80f55f2a4",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Creating",
  "assetSymbol": "ETH",
  "name": "My ETH account",
  "dateCreated": "2022-08-04T14:44:21.278Z",
  "dateUpdate": "2022-08-04T14:44:21.278Z"
}
```

### Notes <a href="#notes" id="notes"></a>

Distributed key generation (DKG) is computationally heavy for [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) keys. When clusters are first deployed, this process can take around 30 seconds.  Signers build a pool of primes over time to mitigate API latency. That said, please do not create keys in bulk using a script without talking to us first. Thanks!
