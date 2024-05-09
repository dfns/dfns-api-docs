# Cardano: Broadcast Transaction

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required - Type   | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required - String | For Cardano, always `Transaction`                   | String |
| `transaction`       | Required - Hex    | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```shell
{
  "kind": "Transaction",
  "transaction": "0x84a3008182582082544414292ededfa716ae42af007ecff823c58796cb9ba60330699fb4d55d7901018282581d60112f2721059581f2a8f9986638359b83c567a61d5486ed0e16c818621a000cf4ae82581d60112f2721059581f2a8f9986638359b83c567a61d5486ed0e16c818621b0000000253db20cd021a00028785a0f5f6"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-65s39-hsdh3-xxxxxxxxxxxxxxxx",
  "walletId": "wa-7nej2-e3o6d-xxxxxxxxxxxxxxxx",
  "network": "CardanoPreprod",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x84a3008182582082544414292ededfa716ae42af007ecff823c58796cb9ba60330699fb4d55d7901018282581d60112f2721059581f2a8f9986638359b83c567a61d5486ed0e16c818621a000cf4ae82581d60112f2721059581f2a8f9986638359b83c567a61d5486ed0e16c818621b0000000253db20cd021a00028785a0f5f6"
  },
  "status": "Broadcasted",
  "txHash": "2139a2a4f70aa01a4864308579bbdb769b6669b6b39419618b871d3aed3a82e6",
  "dateRequested": "2024-05-09T16:21:36.949Z",
  "dateBroadcasted": "2024-05-09T16:21:37.809Z"
}
```

## Typescript Example with MeshJS SDK

First install the MeshJS SDK. You can find the full documentation here: [https://docs.meshjs.dev/](https://docs.meshjs.dev/)

You also need a service that tracks the account's UTXO, for example Blockfrost. [The Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts) has an example demonstrating how to write a custom Blockfrost initiator plugin for MeshJS.

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { BlockfrostProvider, Transaction } from '@meshsdk/core'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const provider = new BlockfrostProvider(process.env.BLOCKFROST_PROJECT_ID!)
const initiator = new CustomInitiator(wallet.address, provider)

const transaction = await new Transaction({ initiator })
  .sendLovelace('addr_test1vq5eele9enryyqkg4wrjyp7x4gpshvkr6rylkwtyau56g3qgrcks9', '1000000')
  .build()

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${transaction}`,
  },
})
```
