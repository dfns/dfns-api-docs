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

| Request body fields | Required/Optional | Description                                                                                                                                                                                        | Type   |
| ------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `kind`              | Required          | `Native`                                                                                                                                                                                           | String |
| `to`                | Required          | The destination address.                                                                                                                                                                           | String |
| `amount`            | Required          | The amount of native token to transfer **in minimum denomination** (eg. passing the value in `WEI` unit, not in `ETH` unit, so passing `1000000000000000000` in order to do a `1 ETH` transaction) | String |

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
    "id": "xfr-6ulmv-sa183-xxxxxxxxxxxxxxxx",
    "walletId": "wa-40f4f-51gpm-xxxxxxxxxxxxxxxx",
    "network": "Ethereum",
    "requester": {
        "userId": "us-4vu4v-kud3l-xxxxxxxxxxxxxxxx",
        "appId": "ap-7c2pm-avfsr-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "amount": "1000000",
        "to": "0xc42754e6f79f15082613b2b4ebead83dcf8116b6",
        "kind": "Erc20",
        "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    },
    "metadata": {
        "asset": {
            "symbol": "USDC",
            "decimals": 6,
            "verified": true,
            "quotes": {
                "USD": 1.000804849917271,
                "EUR": 0.9201529894769885
            }
        }
    },
    "status": "Confirmed",
    "fee": "1542993669053672",
    "txHash": "0x8e88793607610a83798eb5ec6dde861f3e459c7e4a22e78b0d2e675b86d0d1e7",
    "dateRequested": "2024-01-18T23:03:53.739Z",
    "dateBroadcasted": "2024-01-18T23:03:55.685Z",
    "dateConfirmed": "2024-01-18T23:03:59.000Z"
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



## Non-EVM Chain Transfers

All chains support the `Native` transfer kind for their native cryptocurrency.  Chain specific standards are outlined below by chain.

### Tron <a href="#erc721-request-body" id="erc721-request-body"></a>

Tron supports `Trc10`, `Trc20`, and `Trc721` transfers using the following JSON body structures:&#x20;

```json
// Trc10
{
    "kind": "Trc10",
    "tokenId": "1005273",
    "to": "TADDx31pdCFfp3XrYxp6fQGbRxriYFLTrx",
    "amount": "1"
}

// Trc20
{
    "kind": "Trc20",
    "contract": "TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj",
    "to": "TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN",
    "amount": "1000"
}

// Trc721
{
    "kind": "Trc721",
    "contract": "TKgnDMWHYmwH24REe9XnrnwcNCvtb53n8Q",
    "to": "TQJNezrbfJ3akrGgR7eM2fWyFpsKeM8wzN",
    "tokenId": "1"
}
```

### Algorand

Algorand supports `Asa` transfers using the following JSON body structure:&#x20;

```json
{
    "kind": "Asa",
    "assetId": "10458941",
    "to": "FRZP423Y7MNMTG4OOLESESTPCFGGHZMY7QN462YEQAJK5H6EOMFHZG73UA",
    "amount": "1"
}
```

