# Polkadot: Generate Signature

## Request body <a href="#message-request-body" id="message-request-body"></a>

| Request body fields | Required/Optional | Description                                            | Type   |
| ------------------- | ----------------- | ------------------------------------------------------ | ------ |
| `kind`              | Required          | `Transaction`                                          | String |
| `transaction`       | Required          | The unsigned hex encoded signer payload as shown below | String |

### Sample request body <a href="#sample-message-request" id="sample-message-request"></a>

```shell
{
  "kind": "Message",
  "message": "0x0403007f87d29a4746b8e59e347c0598ad811a10c3cd8735d49cf96b75973864c8c98b0475000400386d0f0019000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423eb3b9c09f232a12c50f40e023a01f0b86d679b84748cc289534d96861ef611c67"
}
```

### 200 response example <a href="#message-response-example" id="message-response-example"></a>

```json
{
  "id": "sig-7lths-cbrl3-xxxxxxxxxxxxxxxx",
  "walletId": "wa-3oo6h-s4n5l-xxxxxxxxxxxxxxxx",
  "network": "Westend",
  "requester": {
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Message",
    "message": "0x0403007f87d29a4746b8e59e347c0598ad811a10c3cd8735d49cf96b75973864c8c98b0475000400386d0f0019000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423eb3b9c09f232a12c50f40e023a01f0b86d679b84748cc289534d96861ef611c67"
  },
  "status": "Signed",
  "signature": {
    "r": "0xb3e424deda8c544cdeb5e70e06b0cc44f7a4fe75378a8939fcd0bddec11d6e85",
    "s": "0xbd2d4cf5baf6bfc55f164581e2f5ef15ca3d7965ccca6b33f1190e86692cfc04",
    "encoded": "0x00b3e424deda8c544cdeb5e70e06b0cc44f7a4fe75378a8939fcd0bddec11d6e85bd2d4cf5baf6bfc55f164581e2f5ef15ca3d7965ccca6b33f1190e86692cfc04"
  },
  "dateRequested": "2024-05-09T19:03:27.385Z",
  "dateSigned": "2024-05-09T19:03:28.188Z"
}
```

## Typescript Example with polkadot{.js}

First install the polkadot{.js} SDK. You can find the full documentation here: [https://polkadot.js.org/docs/](https://polkadot.js.org/docs/)

Here a code sample to generate a signature via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { ApiPromise, HttpProvider } from '@polkadot/api'
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const httpProvider = new HttpProvider(process.env.POLKADOT_NODE_URL!)
const api = await ApiPromise.create({
  provider: httpProvider,
  signer: senderWallet,
  noInitWarn: true,
})

const transaction = api.tx.balances.transferKeepAlive('5EwvHZHrKd9WYc3LByzMZW5cmxJt9VMsfYiKg5jCJb8UBfbC', 10000)
const signerPayload: any = transaction.registry.createTypeUnsafe('SignerPayload', [
  transaction,
  { version: EXTRINSIC_VERSION },
])

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Message',
    message: signerPayload.toRaw().data,
  },
})
```
