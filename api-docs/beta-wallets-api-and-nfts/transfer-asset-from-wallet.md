# Transfer Asset from Wallet

`POST /wallets/{walletId}/transfers`

Transfer an asset out of the specified wallet to a destination address.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                    | Conditions      |
| ----------------------- | --------------- |
| `Wallets:TransferAsset` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Native Cryptocurrencies <a href="#native-currency-request-body" id="native-currency-request-body"></a>

### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                                                     | Type   |
| ------------------- | ----------------- | --------------------------------------------------------------- | ------ |
| `kind`              | Required          | `Native`                                                        | String |
| `to`                | Required          | The destination address.                                        | String |
| `amount`            | Required          | The amount of native token to transfer in minimum denomination. | String |

### Sample request body <a href="#sample-native-currency-request" id="sample-native-currency-request"></a>

```shell
{
  "kind": "Native",
  "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
  "amount": "1000000000"
}
```

### 200 response example <a href="#native-currency-response-example" id="native-currency-response-example"></a>

```json
{
  "id": "xfr-1vs8g-c1ub1-xxxxxxxxxxxxxxxx",
  "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Native",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "amount": "1000000000"
  },
  "dateRequested": "2023-05-08T19:14:25.568Z",
  "status": "Pending"
}
```

## ERC-20 Transfers <a href="#notes" id="notes"></a>

### Request body <a href="#erc20-request-body" id="erc20-request-body"></a>

| Request body fields | Required/Optional | Description                                               | Type   |
| ------------------- | ----------------- | --------------------------------------------------------- | ------ |
| `kind`              | Required          | `Erc20`                                                   | String |
| `contract`          | Required          | The ERC20 contract address.                               | String |
| `to`                | Required          | The destination address.                                  | String |
| `amount`            | Required          | The amount of tokens to transfer in minimum denomination. | String |

### Sample request body <a href="#sample-erc20-request" id="sample-erc20-request"></a>

```shell
{
  "kind": "Erc20",
  "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
  "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
  "amount": "1000000000"
}
```

### 200 response example <a href="#erc20-response-example" id="erc20-response-example"></a>

```json
{
  "id": "xfr-719uh-d0t8g-xxxxxxxxxxxxxxxx",
  "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Erc20",
    "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "amount": "1000000000"
  },
  "dateRequested": "2023-05-08T19:12:27.943Z",
  "status": "Pending"
}
```

## ERC-721 NFT Transfers

### Request body <a href="#erc721-request-body" id="erc721-request-body"></a>

| Request body fields | Required/Optional | Description                  | Type   |
| ------------------- | ----------------- | ---------------------------- | ------ |
| `kind`              | Required          | `Erc721`                     | String |
| `contract`          | Required          | The ERC721 contract address. | String |
| `to`                | Required          | The destination address.     | String |
| `tokenId`           | Required          | The token to transfer.       | String |

### Sample request body <a href="#sample-erc721-request" id="sample-erc721-request"></a>

```shell
{
  "kind": "Erc721",
  "contract": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
  "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
  "tokenId": "1"
}
```

### 200 response example <a href="#erc721-response-example" id="erc721-response-example"></a>

```json
{
  "id": "xfr-4n0dm-fqju5-xxxxxxxxxxxxxxxx",
  "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Erc721",
    "contract": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "tokenId": "1"
  },
  "dateRequested": "2023-05-08T18:10:43.521Z",
  "status": "Pending"
}
```
