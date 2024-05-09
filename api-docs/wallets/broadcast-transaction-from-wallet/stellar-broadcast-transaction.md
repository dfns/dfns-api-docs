# Stellar: Broadcast Transaction

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required/Optional | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required          | `Transaction`                                       | String |
| `transaction`       | Required          | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```shell
{
  "kind": "Transaction",
  "transaction": "0x0000000200000000df9fecfd6871f56a3ba3d875d295444be08d6b5f38d0ef56901b85e386a84ff1000000640013d1d800000016000000010000000000000000000000006633f4e3000000010000000631323334353600000000000100000000000000010000000033659e6d03936b7746c8a8904bac95d5f582c2a0bb32b8a5a8e1f10e6d2b869d0000000000000000000000010000000000000000"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-4439u-fm76a-xxxxxxxxxxxxxxxx",
  "walletId": "wa-46sdf-a9stj-xxxxxxxxxxxxxxxx",
  "network": "StellarTestnet",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x0000000200000000df9fecfd6871f56a3ba3d875d295444be08d6b5f38d0ef56901b85e386a84ff1000000640013d1d800000016000000010000000000000000000000006633f4e3000000010000000631323334353600000000000100000000000000010000000033659e6d03936b7746c8a8904bac95d5f582c2a0bb32b8a5a8e1f10e6d2b869d0000000000000000000000010000000000000000"
  },
  "status": "Broadcasted",
  "txHash": "f25d140537c696b4672ed9a134e8889c8d381b52d238919b8108ba214bff86ee",
  "dateRequested": "2024-05-02T20:14:41.260Z",
  "dateBroadcasted": "2024-05-02T20:14:41.980Z"
}
```

## Typescript Example with Stellar SDK

First install the Stellar SDK. You can find the full documentation here: [https://stellar.github.io/js-stellar-sdk/](https://stellar.github.io/js-stellar-sdk/)

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Asset, BASE_FEE, Horizon, Networks, Operation, TransactionBuilder } from '@stellar/stellar-sdk'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const provider = new Horizon.Server(process.env.HORIZON_API_URL!)

const account = await provider.loadAccount(senderWallet.address)
const transaction = new TransactionBuilder(account, {
  fee: BASE_FEE,
  networkPassphrase: Networks.TESTNET,
})
  .addOperation(
    Operation.payment({
      destination: 'GAZWLHTNAOJWW52GZCUJAS5MSXK7LAWCUC5TFOFFVDQ7CDTNFODJ37GB',
      asset: Asset.native(),
      amount: '1',
    })
  )
  .setTimeout(180)
  .build()

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${transaction.toEnvelope().toXDR('hex')}`,
  },
})
```
