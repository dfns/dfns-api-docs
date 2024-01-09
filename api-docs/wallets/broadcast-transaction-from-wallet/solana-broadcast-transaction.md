# Solana: Broadcast Transaction

## Solana Web3.js SDK

In order to broadcast a transaction on Solana, first install the @solana/web3.js SDK.  You can find the full documentation here: [https://docs.solana.com/developing/clients/javascript-api](https://docs.solana.com/developing/clients/javascript-api)

Use the entities exposed in the SDK to create a transaction message, compile it, and generate a versioned transaction.  Then encode it as shown below to pass to transaction broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

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
