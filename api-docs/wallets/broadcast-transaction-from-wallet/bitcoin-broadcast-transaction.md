# Bitcoin: Broadcast Transaction

## Request <a href="#request-body" id="request-body"></a>

<table data-full-width="false"><thead><tr><th width="165">Request  fields</th><th width="180">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For Bitcoin, always "Psbt"</td></tr><tr><td><code>psbt</code></td><td>Required - String</td><td>The transaction encoded by the BitcoinJS SDK as shown below</td></tr></tbody></table>

#### Example

```json
{
  "kind": "Psbt",
  "psbt": "0x70736274ff0100710200000001ca17431a33a13d3ef8bfb041c8546071f9d3a609abe3c91efbed83265e1426730100000000ffffffff02e803000000000000160014a40a65b46ff36c53f1afb8e35e25a4c0bcfc9979d6d1150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000000001011f54d6150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000"
}
```

## Response <a href="#response" id="response"></a>

```json
{
    "id": "tx-2jfp6-db4jc-xxxxxxxxxxxxxxxx",
    "walletId": "wa-36a0p-pdil7-xxxxxxxxxxxxxxxx",
    "network": "BitcoinTestnet3",
    "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-C3H2-H7-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "kind": "Psbt",
        "psbt": "0x70736274ff0100710200000001ca17431a33a13d3ef8bfb041c8546071f9d3a609abe3c91efbed83265e1426730100000000ffffffff02e803000000000000160014a40a65b46ff36c53f1afb8e35e25a4c0bcfc9979d6d1150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000000001011f54d6150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000"
    },
    "status": "Broadcasted",
    "txHash": "97ad64f69168eb4ffd2b2f6756f1651eff43bcca04695b3cea834eebff5b7524",
    "dateRequested": "2024-01-10T19:40:07.022Z",
    "dateBroadcasted": "2024-01-10T19:40:07.277Z"
}
```

## BitcoinJS SDK

In order to broadcast a transaction on Bitcoin, first install the BitcoinJS SDK.  You can find the full documentation here: [https://github.com/bitcoinjs/bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)

Here a code sample to encode a transaction to pass to Transaction Broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { networks, payments, Psbt } from 'bitcoinjs-lib'
import axios from 'axios'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })
const publicKey = Buffer.from(wallet.signingKey.publicKey, 'hex')

const network = networks.testnet
const { address } = payments.p2wpkh({
  pubkey: publicKey,
  network,
})

const txid = '87872516c6e93f136fc6c493c7172596b11c695e27889de7532abffcac2a4b5e'
const n = 1
const utxo = (
  await axios.post(BITCOIN_NODE_URL, {
    jsonrpc: "2.0",
    id: "gettxout",
    method: "gettxout",
    params: [txid, n, false],
  })
).data.result

const balance = utxo.balance * 100000000
const amount = 1;
const fee = 150;

const psbt = new Psbt({ network })
psbt.addInput({
  hash: txid,
  index: n,
  witnessUtxo: {
    script: Buffer.from(utxo.scriptPubKey.hex, 'hex'),
    value: balance,
  },
})

psbt.addOutput({
  address: 'tb1q5s9xtdr07dk98ud0hr34ufdycz70exte2kehm2',
  value: amount,
});

psbt.addOutput({
  address,
  value: balance - amount - fee,
})

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: { kind: 'Psbt', psbt: `0x${psbt.toHex()}` },
})
```
