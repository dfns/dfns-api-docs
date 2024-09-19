# Algorand: Broadcast Transaction

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

<table><thead><tr><th width="178">Property</th><th width="167">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code><mark style="color:red;">*</mark></td><td>String</td><td>For Algorand, always <code>Transaction</code></td></tr><tr><td><code>transaction</code><mark style="color:red;">*</mark></td><td>Hex String</td><td>The unsigned hex encoded transaction as shown below</td></tr><tr><td><code>externalId</code></td><td>(Optional) String</td><td>A unique ID from your system. It can be leveraged to be used as an idempotency key (read more <a href="../../../advanced-topics/api-idempotency.md">here</a>)</td></tr></tbody></table>

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```shell
{
  "kind": "Transaction",
  "transaction": "0x81a374786e89a3616d74cd2710a3666565cd03e8a26676ce02340f13a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c76ce023412fba3726376c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a3736e64c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a474797065a3706179"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-2bbd9-7dvdf-xxxxxxxxxxxxxxxx",
  "walletId": "wa-341e6-12nj6-xxxxxxxxxxxxxxxx",
  "network": "AlgorandTestnet",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x81a374786e89a3616d74cd2710a3666565cd03e8a26676ce02340f13a367656eac746573746e65742d76312e30a26768c4204863b518a4b3c84ec810f22d4f1081cb0f71f059a7ac20dec62f7f70e5093a22a26c76ce023412fba3726376c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a3736e64c4201256a859b39429ee178e0a65056fb33d51c5139044f6a2603c144278010c7684a474797065a3706179"
  },
  "status": "Broadcasted",
  "txHash": "RYMBSTJPYM5KTADZ3GHOSHMTEH5DHEWEFKNG6PWPMT44GHLSUDDA",
  "dateRequested": "2024-02-08T20:19:38.428Z",
  "dateBroadcasted": "2024-02-08T20:19:38.990Z"
}
```

## Typescript Example with AlgoSDK

First install the AlgoSDK. You can find the full documentation here: [https://github.com/algorand/js-algorand-sdk](https://github.com/algorand/js-algorand-sdk)

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Algodv2, encodeObj, makePaymentTxnWithSuggestedParamsFromObject } from 'algosdk'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'
const wallet = await dfnsClient.wallets.getWallet({ walletId })

const algod = new Algodv2(ALGORAND_TOKEN, ALGORAND_NODE_URL)

const suggestedParams = await algod.getTransactionParams().do()
const transaction = makePaymentTxnWithSuggestedParamsFromObject({
  from: wallet.address,
  suggestedParams,
  to: 'CJLKQWNTSQU64F4OBJSQK35THVI4KE4QIT3KEYB4CRBHQAIMO2CD6JWBCY',
  amount: 10000,
})

const bytes = encodeObj({ txn: transaction.get_obj_for_encoding() })

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${Buffer.from(bytes).toString('hex')}`,
  },
})
```
