# Transfer Asset from Wallet

`POST /wallets/{WalletID}/transfers`

Transfer an asset out of the specified wallet to a destination address.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:TransferAsset

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>WalletID</code></td><td>Unique identifier of the <code>Wallet</code> like:<br><br><code>wa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### Native Cryptocurrencies <a href="#native-currency-request-body" id="native-currency-request-body"></a>

#### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                                                     | Type                       |
| ------------------- | ----------------- | --------------------------------------------------------------- | -------------------------- |
| `kind`              | Required          | `Native`                                                        | TransferKind (String)      |
| `to`                | Required          | The destination address.                                        | BlockchainAddress (String) |
| `amount`            | Required          | The amount of native token to transfer in minimum denomination. | Amount (String)            |

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -XPOST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/transfers" -d
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
'{
    "kind": "Native",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "amount": "1000000000"
}'
```

#### 200 response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "tf-1vs8g-c1ub1-8p8bq7vo5afrkeaq",
    "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
    "network": "ETH_SEPOLIA",
    "requester": {
        "kind": "CustomerEmployee",
        "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
        "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
        "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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

### ERC-20 Transfers <a href="#notes" id="notes"></a>

#### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                                               | Type                       |
| ------------------- | ----------------- | --------------------------------------------------------- | -------------------------- |
| `kind`              | Required          | `Erc20`                                                   | TransferKind (String)      |
| `contract`          | Required          | The ERC20 contract address.                               | BlockchainAddress (String) |
| `to`                | Required          | The destination address.                                  | BlockchainAddress (String) |
| `amount`            | Required          | The amount of tokens to transfer in minimum denomination. | Amount (String)            |

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -XPOST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/transfers" -d
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
'{
    "kind": "Erc20",
    "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "amount": "1000000000"
}'
```

#### 200 response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "tf-719uh-d0t8g-8r1o8d2mjnrj88j0",
    "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
    "network": "ETH_SEPOLIA",
    "requester": {
        "kind": "CustomerEmployee",
        "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
        "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
        "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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

### ERC-721 NFT Transfers

#### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                  | Type                       |
| ------------------- | ----------------- | ---------------------------- | -------------------------- |
| `kind`              | Required          | `Erc721`                     | TransferKind (String)      |
| `contract`          | Required          | The ERC721 contract address. | BlockchainAddress (String) |
| `to`                | Required          | The destination address.     | BlockchainAddress (String) |
| `tokenId`           | Required          | The token to transfer.       | String                     |

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -XPOST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/transfers" -d
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
'{
    "kind": "Erc721",
    "contract": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "tokenId": "1"
}'
```

#### 200 response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "tf-4n0dm-fqju5-8eu9pmv98jpma821",
    "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
    "network": "ETH_SEPOLIA",
    "requester": {
        "kind": "CustomerEmployee",
        "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
        "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
        "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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

