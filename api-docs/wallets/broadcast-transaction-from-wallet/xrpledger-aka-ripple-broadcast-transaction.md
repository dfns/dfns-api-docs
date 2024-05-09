# XRPLedger (aka Ripple): Broadcast Transaction

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

<table data-full-width="false"><thead><tr><th width="204">Request fields</th><th width="187">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For Ripple, always "Transaction"</td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The unsigned hex encoded transaction as shown below</td></tr></tbody></table>

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "0x120000220000000024029a62a82e0001e240201b02a6243661400000000000000168400000000000000c8114860184b4f4c6cc17ae9c2a77cfcd328b43ec2aac8314543aba55a3bede29c5d512ff0cb17db626b9ed9a"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-60es5-5sc68-xxxxxxxxxxxxxxxx",
  "walletId": "wa-4ih27-hei2f-xxxxxxxxxxxxxxxx",
  "network": "RippleTestnet",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x120000220000000024029a62a82e0001e240201b02a6243661400000000000000168400000000000000c8114860184b4f4c6cc17ae9c2a77cfcd328b43ec2aac8314543aba55a3bede29c5d512ff0cb17db626b9ed9a"
  },
  "status": "Broadcasted",
  "txHash": "7C3668AB82CC55648F784E9C782B6FFA65D0B37C8D2D57B821D505C0DAF27197",
  "dateRequested": "2024-01-10T21:19:57.605Z",
  "dateBroadcasted": "2024-01-10T21:19:58.225Z"
}
```

## Typescript Example with xrpl.js

First install xrpl.js. You can find the full documentation here: [https://js.xrpl.org/](https://js.xrpl.org/)

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Client, encode } from 'xrpl'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const client = new Client(RIPPLE_NODE_URL)
await client.connect()

const transaction = await client.autofill({
  TransactionType: 'Payment',
  Account: wallet.address,
  Destination: 'rBYtCQKxGTfFuob3hxSc8pEYddetT9CdDZ',
  Amount: '1',
})

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${encode(transaction).toLowerCase()}`,
  },
})
```
