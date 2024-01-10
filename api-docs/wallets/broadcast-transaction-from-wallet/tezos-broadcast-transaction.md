# Tezos: Broadcast Transaction

## Request <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                               | Type   |
| ------------------- | ----------------- | --------------------------------------------------------- | ------ |
| kind                | Required          | For Tezos, always "Transaction"                           | String |
| `transaction`       | Required          | The transaction encoded by the Taquito SDK as shown below | String |

#### Example

```json
{
  "kind": "Transaction",
  "transaction": "0x04c4b1966777a5d83f3f61e17bf64aa6090ddd3413ede4e24316d3334a7836486c0060f4b0700cb1b73bff168a6221c6a033de12953ebc029d82d50a8d02000100008017ed86b1bbb1c6a9399fc47b83fb8a919e013400"
}
```

## Response <a href="#response" id="response"></a>

```json
{
    "id": "tx-5fnhg-8u56n-xxxxxxxxxxxxxxxx",
    "walletId": "wa-5kqa8-4leor-xxxxxxxxxxxxxxxx",
    "network": "TezosGhostnet",
    "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-C3H2-H7-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "kind": "Transaction",
        "transaction": "0x04c4b1966777a5d83f3f61e17bf64aa6090ddd3413ede4e24316d3334a7836486c0060f4b0700cb1b73bff168a6221c6a033de12953ebc029d82d50a8d02000100008017ed86b1bbb1c6a9399fc47b83fb8a919e013400"
    },
    "status": "Broadcasted",
    "txHash": "ooESkzFG4oKQueVWX9PX1tSrBES8hWJ7N9NRtz2gK6AwVZpZqGX",
    "dateRequested": "2024-01-10T20:06:52.915Z",
    "dateBroadcasted": "2024-01-10T20:06:53.103Z"
}
```

## Tezos Taquito SDK

In order to broadcast a transaction on Tezos, first install the Taquito SDK.  You can find the full documentation here: [https://tezostaquito.io/docs/quick\_start](https://tezostaquito.io/docs/quick\_start)

Create an RPCClient and TezosToolkit then forge a transaction.  Finally encode it as shown below to pass to transaction broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { LocalForger } from '@taquito/local-forging'
import { RpcClient} from '@taquito/rpc'
import { TezosToolkit } from '@taquito/taquito'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'

const client = new RpcClient(TEZOS_NODE_URL)
const Tezos = new TezosToolkit(client)

const prepared = await Tezos.prepare.transaction({
  amount: 1,
  to: 'tz1ifJaJ46sqXxfFsQ5MWuVB96q3K1sFmoJA'
})
const forgeParams = await Tezos.prepare.toForge(prepared);

const forger = new LocalForger();
const forgedTransaction = await forger.forge(forgeParams);

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${forgedTransaction}`,
  },
})
```
