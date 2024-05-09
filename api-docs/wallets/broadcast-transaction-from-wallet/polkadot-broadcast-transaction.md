# Polkadot: Broadcast Transaction

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

| Request body fields | Required/Optional | Description                                         | Type   |
| ------------------- | ----------------- | --------------------------------------------------- | ------ |
| `kind`              | Required          | `Transaction`                                       | String |
| `transaction`       | Required          | The unsigned hex encoded transaction as shown below | String |

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```shell
{
  "kind": "Transaction",
  "transaction": "0x15020c0080610f0018000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ec62bf1fb07fc43dafff5df75c691f4b74eb2b8647dbe5c5dc1b55e8912ce0ef6001bc9ffb0b7654778233f2708632ed39324a85919b5bf29386902f7d366111dd761b430010403003822eb5e88835101dd01b67f085a7544a44a6af91ea5516d4533c3a2447516dc419c00000000000000000000000000000000000000002048436865636b4e6f6e5a65726f53656e64657240436865636b5370656356657273696f6e38436865636b547856657273696f6e30436865636b47656e6573697338436865636b4d6f7274616c69747928436865636b4e6f6e63652c436865636b576569676874604368617267655472616e73616374696f6e5061796d656e7404"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-2bbd9-7dvdf-xxxxxxxxxxxxxxxx",
  "walletId": "wa-341e6-12nj6-xxxxxxxxxxxxxxxx",
  "network": "Westend",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x15020c0080610f0018000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ec62bf1fb07fc43dafff5df75c691f4b74eb2b8647dbe5c5dc1b55e8912ce0ef6001bc9ffb0b7654778233f2708632ed39324a85919b5bf29386902f7d366111dd761b430010403003822eb5e88835101dd01b67f085a7544a44a6af91ea5516d4533c3a2447516dc419c00000000000000000000000000000000000000002048436865636b4e6f6e5a65726f53656e64657240436865636b5370656356657273696f6e38436865636b547856657273696f6e30436865636b47656e6573697338436865636b4d6f7274616c69747928436865636b4e6f6e63652c436865636b576569676874604368617267655472616e73616374696f6e5061796d656e7404"
  },
  "status": "Broadcasted",
  "txHash": "0xeef80db10b0341d8c4917a951e8156bce62f08f00ad8ef73dad9b640a161510f",
  "dateRequested": "2024-02-08T20:19:38.428Z",
  "dateBroadcasted": "2024-02-08T20:19:38.990Z"
}
```

## Typescript Example with polkadot{.js}

First install the polkadot{.js} SDK. You can find the full documentation here: [https://polkadot.js.org/docs/](https://polkadot.js.org/docs/)

Then install the [txwrapper-core](https://github.com/paritytech/txwrapper-core) that has the tools needed to build a transaction.

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { HttpProvider } from '@polkadot/api'
import { methods, getRegistry } from '@substrate/txwrapper-polkadot'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const httpProvider = new HttpProvider(POLKADOT_NODE_URL)

const {
  block: {
    header: { number: blockNumber },
  },
} = (await httpProvider.send('chain_getBlock', [])) as any
const blockHash = (await httpProvider.send('chain_getBlockHash', [])) as string
const genesisHash = (await httpProvider.send('chain_getBlockHash', [0])) as string
const metadataRpc = (await httpProvider.send('state_getMetadata', [])) as `0x${string}`
const nonce = (await httpProvider.send('system_accountNextIndex', [senderWallet.address])) as number
const { specVersion, transactionVersion, specName } = (await httpProvider.send('state_getRuntimeVersion', [])) as any

const registry = getRegistry({
  chainName: specName,
  specName,
  specVersion,
  metadataRpc,
})

const unsigned = methods.balances.transferKeepAlive(
  {
    value: '10000',
    dest: { id: '5DLJur1FsXezqiRvsq7nTJGDGszDW4xtNeENAYBMXPwPY9bZ' },
  },
  {
    address: wallet.address,
    blockHash,
    blockNumber: parseInt(blockNumber, 16),
    eraPeriod: 64,
    genesisHash,
    metadataRpc,
    nonce,
    specVersion,
    tip: 0,
    transactionVersion,
  },
  {
    metadataRpc,
    registry,
  }
)

const signerPayload = registry.createType('SignerPayload', unsigned, {
  version: unsigned.version,
})

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: { kind: 'Transaction', transaction: signerPayload.toHex() },
})
```
