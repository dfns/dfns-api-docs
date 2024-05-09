# Solana: Generate Signature

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required - Type   | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required - String | For Solana, always `Transaction`                    | String |
| `transaction`       | Required - Hex    | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000ed589eed2559d935c834cd6d6cbee12970423ad37853618d39e632032aa4c51201020200010c02000000010000000000000000"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "sig-2rv2t-u0cmd-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "SolanaDevnet",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000ed589eed2559d935c834cd6d6cbee12970423ad37853618d39e632032aa4c51201020200010c02000000010000000000000000"
  },
  "status": "Signed",
  "signature": {
    "r": "0x87e2fafa916877495baed6adb66283fcecd6166c73b1bb5812441045fc52b5ac",
    "s": "0x52f5216e39945db8a1fc7a19778813ed30e4cb84787ff9fe7a1e4f1d7976d70f",
    "encoded": "0x87e2fafa916877495baed6adb66283fcecd6166c73b1bb5812441045fc52b5ac52f5216e39945db8a1fc7a19778813ed30e4cb84787ff9fe7a1e4f1d7976d70f"
  },
  "signedData": "0x0187e2fafa916877495baed6adb66283fcecd6166c73b1bb5812441045fc52b5ac52f5216e39945db8a1fc7a19778813ed30e4cb84787ff9fe7a1e4f1d7976d70f8001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000ed589eed2559d935c834cd6d6cbee12970423ad37853618d39e632032aa4c51201020200010c02000000010000000000000000",
  "dateRequested": "2024-01-10T19:45:08.059Z",
  "dateSigned": "2024-01-10T19:45:08.285Z"
}
```

## Typescript Example with Solana web3.js

First install the Solana web3.js SDK. You can find the full documentation here: [https://docs.solana.com/developing/clients/javascript-api](https://docs.solana.com/developing/clients/javascript-api)

Here a code sample to generate a signature via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const myAddress = new PublicKey(wallet.address)
const toAddress = new PublicKey('3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ')

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
const latestBlockhash = await connection.getLatestBlockhash()

const message = new TransactionMessage({
  payerKey: myAddress,
  recentBlockhash: latestBlockhash.blockhash,
  instructions: [
    SystemProgram.transfer({
      fromPubkey: myAddress,
      toPubkey: toAddress,
      lamports: 1n,
    }),
  ],
}).compileToV0Message()
const transaction = new VersionedTransaction(message)

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${Buffer.from(transaction.serialize()).toString('hex')}`,
  },
})
```
