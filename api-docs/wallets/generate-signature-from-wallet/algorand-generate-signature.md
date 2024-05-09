# Algorand: Generate Signature

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required/Optional | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required          | `Transaction`                                       | String |
| `transaction`       | Required          | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```shell
{
  "kind": "Transaction",
  "transaction": "0x81a374786e89a3616d7401a3666565cd03e8a26676ce0233fc92a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c76ce0234007aa3726376c4202c72fe6b78fb1ac99b8e72c9224a6f114c63e598fc1bcf6b048012ae9fc4730aa3736e64c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a474797065a3706179"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "sig-4gkdv-j61d9-xxxxxxxxxxxxxxxx",
  "walletId": "wa-341e6-12nj6-xxxxxxxxxxxxxxxx",
  "network": "AlgorandTestnet",
  "requester": {
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x81a374786e89a3616d7401a3666565cd03e8a26676ce0233fc92a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c76ce0234007aa3726376c4202c72fe6b78fb1ac99b8e72c9224a6f114c63e598fc1bcf6b048012ae9fc4730aa3736e64c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a474797065a3706179"
  },
  "status": "Signed",
  "signature": {
    "r": "0x134ef556b3409f9888b0c7613ca5eeb5e9dc2df62fbcc48ca2be3c3f2d3ca7f5",
    "s": "0x2477ff80eb235b12e534ab98261cf24dbdf38a6acbe0426551e9caa3c3c07702",
    "encoded": "0x134ef556b3409f9888b0c7613ca5eeb5e9dc2df62fbcc48ca2be3c3f2d3ca7f52477ff80eb235b12e534ab98261cf24dbdf38a6acbe0426551e9caa3c3c07702"
  },
  "signedData": "0x82a3736967c440134ef556b3409f9888b0c7613ca5eeb5e9dc2df62fbcc48ca2be3c3f2d3ca7f52477ff80eb235b12e534ab98261cf24dbdf38a6acbe0426551e9caa3c3c07702a374786e89a3616d7401a3666565cd03e8a26676ce0233fc92a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c76ce0234007aa3726376c4202c72fe6b78fb1ac99b8e72c9224a6f114c63e598fc1bcf6b048012ae9fc4730aa3736e64c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a474797065a3706179",
  "dateRequested": "2024-02-08T16:40:21.866Z",
  "dateSigned": "2024-02-08T16:40:22.387Z"
}
```

## Typescript Example with AlgoSDK

First install the AlgoSDK. You can find the full documentation here: [https://github.com/algorand/js-algorand-sdk](https://github.com/algorand/js-algorand-sdk)

Here a code sample to generate a signature via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Algodv2, encodeObj, makePaymentTxnWithSuggestedParamsFromObject } from 'algosdk'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const algod = new Algodv2(ALGORAND_TOKEN, ALGORAND_NODE_URL)

const suggestedParams = await algod.getTransactionParams().do()
const transaction = makePaymentTxnWithSuggestedParamsFromObject({
  from: wallet.address,
  suggestedParams,
  to: 'CJLKQWNTSQU64F4OBJSQK35THVI4KE4QIT3KEYB4CRBHQAIMO2CD6JWBCY',
  amount: 10000,
})

const bytes = encodeObj({ txn: transaction.get_obj_for_encoding() })

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${Buffer.from(bytes).toString('hex')}`,
  },
})
```
