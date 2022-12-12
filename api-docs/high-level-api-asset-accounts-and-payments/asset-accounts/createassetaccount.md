# CreateAssetAccount

`POST /assets/asset-accounts/`

Creates new `AssetAccount` entity associated with a specific `assetSymbol` (such as `ETH`). Returns a new asset account ID.  Note the request is asynchronous - call [GetAssetAccountById](getassetaccountbyid.md) to check status of creation and get the associated blockchain address once complete.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

AssetAccounts:Create, PublicKeys:Create

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                                                                                                   | Type   |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `assetSymbol`       | Required          | Currency symbol and network.  Format is \<SYMBOL>\[.\<NETWORK>].  See [Enumerated Types](../../dfns-api-enumerated-types.md) for a full list of valid values. | String |
| name                | Optional          | Human readable name for the asset account                                                                                                                     | String |
| `publicKey`         | Optional          | You can associate more than one asset account with the same public key (starting with "xkeypub...") by passing it into this optional body parameter.          | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/assets/asset-accounts/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"assetSymbol": "USDC.MATIC"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Creating".  Call [GetAssetAccountById](getassetaccountbyid.md) to check status of creation and get the associated blockchain address once complete.&#x20;

```json
{
  "id": "aa-kentucky-speaker-d80f55f2a4",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Creating",
  "assetSymbol": "ETH",
  "name": "My ETH account",
  "groupSize": 5,
  "groupThreshold": 3,
  "dateCreated": "2022-08-04T14:44:21.278Z",
  "dateUpdate": "2022-08-04T14:44:21.278Z"
}
```

### Notes <a href="#notes" id="notes"></a>

Distributed key generation (DKG) is computationally heavy for [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) keys. When clusters are first deployed, this process can take around 30 seconds.  Signers build a pool of primes over time to mitigate API latency. That said, please do not create keys in bulk using a script without talking to us first. Thanks!
