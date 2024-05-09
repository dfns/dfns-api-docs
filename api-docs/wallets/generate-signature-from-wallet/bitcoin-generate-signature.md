# Bitcoin/Litecoin: Generate Signature

## Request body <a href="#psbt-request-body" id="psbt-request-body"></a>

<table data-full-width="false"><thead><tr><th width="165">Request  fields</th><th width="180">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For Bitcoin, always "Psbt"</td></tr><tr><td><code>psbt</code></td><td>Required - String</td><td>The hex encoded psbt as shown below</td></tr></tbody></table>

### Sample request body <a href="#sample-psbt-request" id="sample-psbt-request"></a>

```json
{
  "kind": "Psbt",
  "psbt": "0x70736274ff0100710200000001ca17431a33a13d3ef8bfb041c8546071f9d3a609abe3c91efbed83265e1426730100000000ffffffff02e803000000000000160014a40a65b46ff36c53f1afb8e35e25a4c0bcfc9979d6d1150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000000001011f54d6150000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000"
}
```

### 200 response example <a href="#psbt-response-example" id="psbt-response-example"></a>

```json
{
  "id": "sig-7dmih-01orr-xxxxxxxxxxxxxxxx",
  "walletId": "wa-36a0p-pdil7-xxxxxxxxxxxxxxxx",
  "network": "BitcoinTestnet3",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Psbt",
    "psbt": "0x70736274ff0100710200000001cd290edbff81f3762b1c9a6f6532f5f2d3d1e48a850d4285b8606bbceb96ee790000000000ffffffff020100000000000000160014a40a65b46ff36c53f1afb8e35e25a4c0bcfc99794d25000000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000000001011fe425000000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000"
  },
  "status": "Signed",
  "signatures": [
    {
      "r": "0xe10a3e24bb0b0a5feae39997d05b5d1ce0e123f78c979914ea3394962f7995f6",
      "s": "0x727190270d14e58acbcfa98a765fd4c50b51afb7d1ef8152cd79d562f28a1bbc",
      "recid": 0,
      "encoded": "0x3045022100e10a3e24bb0b0a5feae39997d05b5d1ce0e123f78c979914ea3394962f7995f60220727190270d14e58acbcfa98a765fd4c50b51afb7d1ef8152cd79d562f28a1bbc"
    }
  ],
  "signedData": "0x70736274ff0100710200000001cd290edbff81f3762b1c9a6f6532f5f2d3d1e48a850d4285b8606bbceb96ee790000000000ffffffff020100000000000000160014a40a65b46ff36c53f1afb8e35e25a4c0bcfc99794d25000000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9000000000001011fe425000000000000160014237ad8ba2ffd992f6ebc7ab388e77f00fc87d1c9220203e6be69fe373e07962698243fb3d41b5b24e16a461866bd1813afcf9b53e1da6e483045022100e10a3e24bb0b0a5feae39997d05b5d1ce0e123f78c979914ea3394962f7995f60220727190270d14e58acbcfa98a765fd4c50b51afb7d1ef8152cd79d562f28a1bbc01000000",
  "dateRequested": "2024-01-10T19:15:21.572Z",
  "dateSigned": "2024-01-10T19:15:21.859Z"
}
```

## Typescript Example with BitcoinJS

First install the BitcoinJS SDK. You can find the full documentation here: [https://github.com/bitcoinjs/bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)

Here a code sample to generate a signature via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { networks, payments, Psbt } from 'bitcoinjs-lib'
import axios from 'axios'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
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
    jsonrpc: '2.0',
    id: 'gettxout',
    method: 'gettxout',
    params: [txid, n, false],
  })
).data.result

const balance = utxo.balance * 100000000
const amount = 1
const fee = 150

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
})

psbt.addOutput({
  address,
  value: balance - amount - fee,
})

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: { kind: 'Psbt', psbt: `0x${psbt.toHex()}` },
})
```
