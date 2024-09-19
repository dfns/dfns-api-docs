# Stellar: Generate Signature

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

<table><thead><tr><th width="173">Property</th><th width="187">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code><mark style="color:red;">*</mark></td><td>String</td><td>For Stellar, always <code>Transaction</code></td></tr><tr><td><code>transaction</code><mark style="color:red;">*</mark></td><td>Hex String</td><td>The unsigned hex encoded transaction as shown below</td></tr><tr><td><code>externalId</code></td><td>(Optional) String</td><td>A unique ID from your system. It can be leveraged to be used as an idempotency key (read more <a href="../../../advanced-topics/api-idempotency.md">here</a>)</td></tr></tbody></table>

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "0x0000000500000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de33700000000000001900000000200000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de337000000640013442f00000039000000010000000000000000000000006630fac3000000010000001054657374205472616e73616374696f6e00000001000000000000000100000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de3370000000000000000000000640000000000000001698de33700000040d3c6d585afb419d91e35576327b084515a4e38cf80b1614923b60c09161db46d7624cdc5fcbde7077db82121f421f1d1ab5365c2d949680fe0decbd2c5b7a9080000000000000000"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "sig-54nid-a4qqp-xxxxxxxxxxxxxxxx",
  "walletId": "wa-6dh0q-kq130-xxxxxxxxxxxxxxxx",
  "network": "StellarTestnet",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x0000000500000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de33700000000000001900000000200000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de337000000640013442f00000039000000010000000000000000000000006630fac3000000010000001054657374205472616e73616374696f6e00000001000000000000000100000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de3370000000000000000000000640000000000000001698de33700000040d3c6d585afb419d91e35576327b084515a4e38cf80b1614923b60c09161db46d7624cdc5fcbde7077db82121f421f1d1ab5365c2d949680fe0decbd2c5b7a9080000000000000000"
  },
  "status": "Signed",
  "signature": {
    "r": "0x42d0aeedc08cf943a8d860eb5e5c93b07a18e438e07992f3113697faae876701",
    "s": "0x885fa61a33137c7d5a95a22de2761efa6095ee29cb1fae6f933bcd80f2be1805",
    "encoded": "0x42d0aeedc08cf943a8d860eb5e5c93b07a18e438e07992f3113697faae876701885fa61a33137c7d5a95a22de2761efa6095ee29cb1fae6f933bcd80f2be1805"
  },
  "signedData": "0x0000000500000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de33700000000000001900000000200000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de337000000640013442f00000039000000010000000000000000000000006630fac3000000010000001054657374205472616e73616374696f6e00000001000000000000000100000000d6319d6ad33ba335eb96bf1355a5d930d95f2894067023e15d6046eb698de3370000000000000000000000640000000000000001698de33700000040d3c6d585afb419d91e35576327b084515a4e38cf80b1614923b60c09161db46d7624cdc5fcbde7077db82121f421f1d1ab5365c2d949680fe0decbd2c5b7a9080000000000000001698de3370000004042d0aeedc08cf943a8d860eb5e5c93b07a18e438e07992f3113697faae876701885fa61a33137c7d5a95a22de2761efa6095ee29cb1fae6f933bcd80f2be1805",
  "dateRequested": "2024-04-30T14:02:56.936Z",
  "dateSigned": "2024-04-30T14:02:57.209Z"
}
```

## Typescript Example with Stellar SDK

First install the Stellar SDK. You can find the full documentation here: [https://stellar.github.io/js-stellar-sdk/](https://stellar.github.io/js-stellar-sdk/)

Here a code sample to generate a signature via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

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

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${transaction.toEnvelope().toXDR('hex')}`,
  },
})
```
