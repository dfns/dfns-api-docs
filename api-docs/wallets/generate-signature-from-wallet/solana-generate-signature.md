# Solana: Generate Signature

### Request body <a href="#message-signature-request-body" id="message-signature-request-body"></a>

| Request body fields | Required/Optional | Description                                 | Type   |
| ------------------- | ----------------- | ------------------------------------------- | ------ |
| `kind`              | Required          | `Transaction`                               | String |
| `transaction`       | Required          | The original tx hex encoded as shown below. | String |

### Sample request body <a href="#sample-message-request" id="sample-message-request"></a>

```shell
{
  "kind": "Transaction",
  "message": "0x01000507a824baef8cad745bb58148551728d245d6fc21679d1b8f3bbf6abed957f614719dca9b4fcc2b6a68aab9ef37b4db8dc5e99d2d803b577cc61c042453ddd525a6d215d4421860fc0e4a48255b2a6781a494e7ee3f055eeeda2233b590a07b6a2806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001abbca65c30117367204561151b7660a672b5fc9fe3d2780d130ea30be604eea0103060102050604000402000000"
}
```

### 200 response example <a href="#message-response-example" id="message-response-example"></a>

```json
{
  "id": "sig-2rv2t-u0cmd-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "KeyEdDSA",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "message": "0x01000507a824baef8cad745bb58148551728d245d6fc21679d1b8f3bbf6abed957f614719dca9b4fcc2b6a68aab9ef37b4db8dc5e99d2d803b577cc61c042453ddd525a6d215d4421860fc0e4a48255b2a6781a494e7ee3f055eeeda2233b590a07b6a2806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001abbca65c30117367204561151b7660a672b5fc9fe3d2780d130ea30be604eea0103060102050604000402000000"
  },
    "status": "Signed",
    "signature": {
        "r": "0xd4f727b3e86d4cce766013e51add0f3e1e584e27f5a105ad97f9cfc14006b865",
        "s": "0xb2341adb139fd44956edd05cc7fdf6487c0d82059302087c7d5b5a8bfe399700",
        "encoded": "0xd4f727b3e86d4cce766013e51add0f3e1e584e27f5a105ad97f9cfc14006b865b2341adb139fd44956edd05cc7fdf6487c0d82059302087c7d5b5a8bfe399700"
    },
    "signedData": "0x01d4f727b3e86d4cce766013e51add0f3e1e584e27f5a105ad97f9cfc14006b865b2341adb139fd44956edd05cc7fdf6487c0d82059302087c7d5b5a8bfe3997008001000103b25c8c464080ab2835a166d2b3f13195c2ff3c8f281c7ebe492f0d45d830ff4824a8b38a94b73d2756f2be68655a49706be9b1dc900978984d6eeaf65ab62e900000000000000000000000000000000000000000000000000000000000000000831ced80e97c290b019f6c858a3b016cebff5403a0b01f7fd9cc95569f1896ba01020200010c02000000010000000000000000",
    "dateRequested": "2024-01-10T19:45:08.059Z",
    "dateSigned": "2024-01-10T19:45:08.285Z",
    "approvalId": "ap-...", // defined only if an approval process was triggered as the result of a policy ("status" will be "Pending" then)
}
```

## Solana Web3.js SDK

First install the @solana/web3.js SDK.  You can find the full documentation here: [https://docs.solana.com/developing/clients/javascript-api](https://docs.solana.com/developing/clients/javascript-api)

Here a code sample to encode a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const myAddress = new PublicKey(wallet.address)
const toAddress = new PublicKey("3U6stgsD1FmA7o3omUguritCU8iWmUM7Rs6KqAHHxHVZ")

const connection = new Connection(clusterApiUrl("devnet"), "confirmed")
const latestBlockhash = await connection.getLatestBlockhash()

const message = new TransactionMessage({
  payerKey: myAddress,
  recentBlockhash: latestBlockhash.blockhash,
  instructions: [
    SystemProgram.transfer({
      fromPubkey: myAddress,
      toPubkey: toAddress,
      lamports: 1n,
    }),
  ],
}).compileToV0Message();
const transaction = new VersionedTransaction(message);

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${Buffer.from(transaction.serialize()).toString('hex')}`,
  },
})
```
