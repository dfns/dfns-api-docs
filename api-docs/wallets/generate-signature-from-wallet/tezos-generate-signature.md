# Tezos: Generate Signature

## Request <a href="#request-body" id="request-body"></a>

<table data-full-width="false"><thead><tr><th width="195.33333333333331">Request fields</th><th width="177">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td><code>Transaction</code></td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The transaction encoded by the Taquito SDK as shown below</td></tr></tbody></table>

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
    "id": "sig-5fnhg-8u56n-xxxxxxxxxxxxxxxx",
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
    "status": "Signed",
    "signature": {
        "r": "0x487430064a2449da0fde2e89009f4a0d8270f252bfffbe5ed3ae7239953330bc",
        "s": "0x1d98659c776dcfc1e0c12b93a309f23932de021572c41dfdd0b44e10b273830f",
        "encoded": "0x487430064a2449da0fde2e89009f4a0d8270f252bfffbe5ed3ae7239953330bc1d98659c776dcfc1e0c12b93a309f23932de021572c41dfdd0b44e10b273830f"
    },
    "signedData": "0x82e386190d4d05ffe57db31467a83ccd6308f4eee59dff9319f2c60cf8a1f3db6c0060f4b0700cb1b73bff168a6221c6a033de12953ebc029d82d50a8d02000100008017ed86b1bbb1c6a9399fc47b83fb8a919e013400487430064a2449da0fde2e89009f4a0d8270f252bfffbe5ed3ae7239953330bc1d98659c776dcfc1e0c12b93a309f23932de021572c41dfdd0b44e10b273830f",
    "dateRequested": "2024-01-10T20:06:08.607Z",
    "dateSigned": "2024-01-10T20:06:08.804Z"
}
```

## Tezos Taquito SDK

First install the Taquito SDK.  You can find the full documentation here: [https://tezostaquito.io/docs/quick\_start](https://tezostaquito.io/docs/quick\_start)

Taquito is a little special in that it requires a `signer` to forge an operation. In fact, we only need the signer to return the wallet address and the (encoded) public key. We'll initialize a Taquito RPC instance using our fake signer and a local forger (see below). After forging the operation, we can sign via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts).

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

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${forgedBytes}`,
  },
})
</code></pre>

