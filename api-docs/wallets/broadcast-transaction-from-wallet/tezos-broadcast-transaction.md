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
  "transaction": "0x..."
}
```

## Response <a href="#response" id="response"></a>

```json
```

## Tezos Taquito SDK

In order to broadcast a transaction on Tezos, first install the Taquito SDK.  You can find the full documentation here: [https://tezostaquito.io/docs/quick\_start](https://tezostaquito.io/docs/quick\_start)

Create an RPCClient and TezosToolkit then forge a transaction.  Finally encode it as shown below to pass to transaction broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { LocalForger } from '@taquito/local-forging'
import { RpcClient} from '@taquito/rpc'
import { TezosToolkit } from '@taquito/taquito'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'

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
