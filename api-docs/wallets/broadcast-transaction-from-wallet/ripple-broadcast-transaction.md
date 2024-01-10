# Ripple: Broadcast Transaction

## Request <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                            | Type   |
| ------------------- | ----------------- | ------------------------------------------------------ | ------ |
| kind                | Required          | For Ripple, always "Transaction"                       | String |
| `transaction`       | Required          | The transaction encoded by the Xrpl SDK as shown below | String |

#### Example

```json
{
  "kind": "Transaction",
  "transaction": "0x..."
}
```

## Response <a href="#response" id="response"></a>

```json
```

## Xrpl SDK

In order to broadcast a transaction on Tezos, first install the Ripple Xrpl SDK.  You can find the full documentation here: [https://js.xrpl.org/](https://js.xrpl.org/)

Here a code sample to encode a transaction to pass to Transaction Broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Client } from 'xrpl'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId });

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
