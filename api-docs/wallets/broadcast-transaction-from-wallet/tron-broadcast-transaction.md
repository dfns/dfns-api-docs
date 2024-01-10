# Tron: Broadcast Transaction

## Tronweb SDK

In order to broadcast a transaction on Tron, first install the Tronweb library.  You can find the full documentation here: [https://tronweb.network/docu/docs/intro/](https://tronweb.network/docu/docs/intro/)

Tron requires the transaction to be serialized using the protobuf format before it can be broadcast. As it's not trivial, you can use the functions exposed in Tronweb to generate the transaction in the right format (see below) and then broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

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

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${TronWeb.utils.bytes.byteArray2hexStr(txPb.serializeBinary())}`,
  },
})
```
