# Tron: Generate Signature

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required - Type   | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required - String | For Tron, always `Transaction`                      | String |
| `transaction`       | Required - Hex    | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "0x0a83010a0228222208b142ad939b228d784090a7eaa9cf315a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15419d31b91d72b58d7c8c02a7124410e168989f372d12154102a69d5d85c05864dc6fd74f57db3fa37aff7b94180170b0d2e6a9cf31"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "sig-19u01-g60tf-xxxxxxxxxxxxxxxx",
  "walletId": "wa-174tk-m918i-xxxxxxxxxxxxxxxx",
  "network": "TronNile",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
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
  "dateSigned": "2024-01-10T21:13:38.348Z"
}
```

## Typescript Example with TronWeb

First install Tronweb. You can find the full documentation here: [https://tronweb.network/docu/docs/intro/](https://tronweb.network/docu/docs/intro/)

Tron requires the transaction to be serialized using the protobuf format before it can be broadcast. As it's not trivial, you can use the functions exposed in Tronweb to generate the transaction in the right format (see below) and then sign via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
const TronWeb = require('tronweb')

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const transaction = await tronWeb.transactionBuilder.sendTrx('TADDx31pdCFfp3XrYxp6fQGbRxriYFLTrx', 1000, wallet.address)

const txPb = TronWeb.utils.transaction.txJsonToPb(transaction)

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${TronWeb.utils.bytes.byteArray2hexStr(txPb.serializeBinary())}`,
  },
})
```
