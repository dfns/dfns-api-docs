# Tron: Generate Signature

## Request <a href="#request-body" id="request-body"></a>

<table data-full-width="false"><thead><tr><th width="204.33333333333331">Request fields</th><th width="191">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td><code>Transaction</code></td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The transaction encoded by the Tronweb SDK as shown below</td></tr></tbody></table>

#### Example

```json
{
  "kind": "Transaction",
  "transaction": "0x0a83010a0228222208b142ad939b228d784090a7eaa9cf315a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15419d31b91d72b58d7c8c02a7124410e168989f372d12154102a69d5d85c05864dc6fd74f57db3fa37aff7b94180170b0d2e6a9cf31"
}
```

## Response <a href="#response" id="response"></a>

```json
{
    "id": "sig-19u01-g60tf-xxxxxxxxxxxxxxxx",
    "walletId": "wa-174tk-m918i-xxxxxxxxxxxxxxxx",
    "network": "TronNile",
    "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-C3H2-H7-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "kind": "Transaction",
        "transaction": "0x0a83010a0228222208b142ad939b228d784090a7eaa9cf315a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15419d31b91d72b58d7c8c02a7124410e168989f372d12154102a69d5d85c05864dc6fd74f57db3fa37aff7b94180170b0d2e6a9cf31"
    },
    "status": "Signed",
    "signature": {
        "r": "0xa7c36732ea21596a533ad44e1d2f5eff72ae3d178225a0cdb9869ff3954a3898",
        "s": "0x37b7f22f119801ce5fe1723f3a397254ba8f968ba5ad63e66404caf750666968",
        "recid": 1,
        "encoded": "0xa7c36732ea21596a533ad44e1d2f5eff72ae3d178225a0cdb9869ff3954a389837b7f22f119801ce5fe1723f3a397254ba8f968ba5ad63e66404caf7506669681c"
    },
    "signedData": "0x0a83010a0227f52208511ce7ed0476508040c8d9e1a9cf315a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15419d31b91d72b58d7c8c02a7124410e168989f372d12154102a69d5d85c05864dc6fd74f57db3fa37aff7b94180170e884dea9cf311241a7c36732ea21596a533ad44e1d2f5eff72ae3d178225a0cdb9869ff3954a389837b7f22f119801ce5fe1723f3a397254ba8f968ba5ad63e66404caf7506669681c",
    "dateRequested": "2024-01-10T21:13:38.186Z",
    "dateSigned": "2024-01-10T21:13:38.348Z",
    "approvalId": "ap-...", // defined only if an approval process was triggered as the result of a policy ("status" will be "Pending" then)
}
```

## Tronweb SDK

First install the Tronweb library.  You can find the full documentation here: [https://tronweb.network/docu/docs/intro/](https://tronweb.network/docu/docs/intro/)

Tron requires the transaction to be serialized using the protobuf format before it can be broadcast. As it's not trivial, you can use the functions exposed in Tronweb to generate the transaction in the right format (see below) and then sign via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
// At the time of writing, types definition are
// not include in Tronweb (currently in beta in v6.0.0-beta.0)
const TronWeb = require('tronweb')

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const transaction = await tronWeb.transactionBuilder.sendTrx(
  'TADDx31pdCFfp3XrYxp6fQGbRxriYFLTrx', // to
  1000, // amount
  wallet.address, // from
)

// Convert to protobuf format
const txPb = TronWeb.utils.transaction.txJsonToPb(transaction)

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${TronWeb.utils.bytes.byteArray2hexStr(txPb.serializeBinary())}`,
  },
})
```
