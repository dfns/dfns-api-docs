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

| Request body fields | Required/Optional | Description                                                                                                                                               | Type   |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `network`           | Required          | Network name for the target chain. Accepted values are `Bsc`, `BscTestnet`, `Ethereum`, `EthereumGoerli`, `EthereumSepolia`, `Polygon` or `PolygonMumbai` | String |
| `name`              | Optional          | Human readable name for the wallet                                                                                                                        | String |

## Request example <a href="#request-example.1" id="request-example.1"></a>

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
  "network": "EthereumSepolia",
  "name": "my-wallet"
}
```

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

In most cases, the initial status should be set to "Creating". Call Get Wallet to check status of creation and get the associated blockchain address once complete.

```json
{
  "id": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "status": "Creating",
  "network": "EthereumSepolia",
  "name": "my-wallet",
  "tags": [],
  "dateCreated": "2023-04-14T20:41:28.715Z"
}
```

## Notes <a href="#notes" id="notes"></a>

Distributed key generation (DKG) is computationally heavy for [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) keys. When clusters are first deployed, this process can take around 30 seconds. Signers build a pool of primes over time to mitigate API latency. That said, please do not create keys in bulk using a script without talking to us first. Thanks!
