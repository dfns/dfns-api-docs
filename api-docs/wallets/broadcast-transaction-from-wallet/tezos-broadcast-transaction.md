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

Taquito is a little special in that it requires a `signer` to forge an operation. In fact, we only need the signer to return the wallet address and the (encoded) public key. We'll initialize a Taquito RPC instance using our fake signer and a local forger (see below). After forging the operation, we can distribute it via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts).

<pre class="language-typescript"><code class="lang-typescript">import { RpcClient} from '@taquito/rpc'
import { Signer, TezosToolkit } from '@taquito/taquito'
import { LocalForger } from '@taquito/local-forging'
import { Prefix, b58cencode, prefix } from '@taquito/utils'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

// Tezos requires a signer to forge a transaction. When forging, we only
// need 'publicKeyHash' (address) and 'publicKey' (encoded)
<strong>class TezosToolkitSigner implements Signer {
</strong>  sign(): Promise&#x3C;{ bytes: string; sig: string; prefixSig: string; sbytes: string }> {
    throw new Error('Method not implemented.')
  }
  async publicKey(): Promise&#x3C;string> {
    const prefix = wallet.signingKey.scheme === "EdDSA" ? Prefix.EDPK : Prefix.SPPK
    return b58cencode(wallet.signingKey.publicKey, prefix)
  }
    
  async publicKeyHash(): Promise&#x3C;string> {
    return wallet.address
  }
    
  secretKey(): Promise&#x3C;string | undefined> {
    throw new Error('Method not implemented.')
  }
}

const client = new RpcClient("TEZOS_NODE_URL") 
const Tezos = new TezosToolkit(client)
const forger = new LocalForger()

Tezos.setForgerProvider(forger)
Tezos.setSignerProvider(new TezosToolkitSigner())

const receiver = "tz1...."

// estimate fees
const estimate = await Tezos.estimate.transfer({
  source: wallet.address,
  to: receiver,
  amount: 1,
})

const prepared = await Tezos.prepare.transaction({
  source: wallet.address,
  to: receiver,
  amount: 1,
  fee: estimate.suggestedFeeMutez,
  gasLimit: estimate.gasLimit,
  storageLimit: estimate.storageLimit,
})

const forgeable = await Tezos.prepare.toForge(prepared)
const forgedBytes = await forger.forge(forgeable)

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${forgedBytes}`,
  },
})
</code></pre>

