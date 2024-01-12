# Solana: Broadcast Transaction

## Request <a href="#request-body" id="request-body"></a>

<table data-full-width="true"><thead><tr><th width="204">Request fields</th><th width="192">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For Solana, always "Transaction"</td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The transaction encoded by the Solana SDK as shown below</td></tr></tbody></table>

#### Example

```json
{
  "kind": "Transaction",
  "transaction": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000280c73cfb9caeb41b8508d20057917b568ac1f5a4175b5befa94532b3fd0b92e01020200010c02000000010000000000000000"
}
```

## Response <a href="#response" id="response"></a>

```json
{
    "id": "tx-golst-ftnp9-xxxxxxxxxxxxxxxx",
    "walletId": "wa-3i0nv-fa4e7-xxxxxxxxxxxxxxxx",
    "network": "SolanaDevnet",
    "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-C3H2-H7-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "kind": "Transaction",
        "transaction": "0x01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000280c73cfb9caeb41b8508d20057917b568ac1f5a4175b5befa94532b3fd0b92e01020200010c02000000010000000000000000"
    },
    "status": "Broadcasted",
    "txHash": "2VPvA6ekyrHT9TiH6YtcsjA5peXtSx8Er6q1yAUihBk2yimnjnU5CuBJLHsTXZxZV7JWSSffvaJ9uX8BB4ugconq",
    "dateRequested": "2024-01-10T19:46:30.879Z",
    "dateBroadcasted": "2024-01-10T19:46:31.399Z"
}
```

## Solana Web3.js SDK

In order to broadcast a transaction on Solana, first install the @solana/web3.js SDK.  You can find the full documentation here: [https://docs.solana.com/developing/clients/javascript-api](https://docs.solana.com/developing/clients/javascript-api)

Here a code sample to encode a transaction to pass to Transaction Broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const myAddress = new PublicKey(wallet.address)
const toAddress = new PublicKey("3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ")

const connection = new Connection(clusterApiUrl("devnet"), "confirmed")
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
}).compileToV0Message();
const transaction = new VersionedTransaction(message);

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${Buffer.from(transaction.serialize()).toString('hex')}`,
  },
})
```
