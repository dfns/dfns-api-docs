# XRPLedger (aka Ripple): Generate Signature

## Request <a href="#request-body" id="request-body"></a>

<table data-full-width="true"><thead><tr><th width="204">Request fields</th><th width="187">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For Ripple, always "Transaction"</td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The transaction encoded by the Xrpl SDK as shown below</td></tr></tbody></table>

#### Example

```json
{
  "kind": "Transaction",
  "transaction": "0x120000220000000024029a62a82e0001e240201b02a6243661400000000000000168400000000000000c8114860184b4f4c6cc17ae9c2a77cfcd328b43ec2aac8314543aba55a3bede29c5d512ff0cb17db626b9ed9a"
}
```

## Response <a href="#response" id="response"></a>

{% code fullWidth="false" %}
```json
{
    "id": "sig-60es5-5sc68-xxxxxxxxxxxxxxxx",
    "walletId": "wa-4ih27-hei2f-xxxxxxxxxxxxxxxx",
    "network": "RippleTestnet",
    "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-C3H2-H7-xxxxxxxxxxxxxxxx"
    },
    "requestBody": {
        "kind": "Transaction",
        "transaction": "0x120000220000000024029a62a82e0001e240201b02a6243661400000000000000168400000000000000c8114860184b4f4c6cc17ae9c2a77cfcd328b43ec2aac8314543aba55a3bede29c5d512ff0cb17db626b9ed9a"
    },
    "status": "Signed",
    "signature": {
        "r": "0x62a635aa543697406c1b15e6ec33b8bba1c62ab741d255ad822fc6f45d6c2881",
        "s": "0x24737ad61088a13134a75556707f7f73fa830991a812810daeacf9dffbe92db0",
        "recid": 1,
        "encoded": "0x3044022062a635aa543697406c1b15e6ec33b8bba1c62ab741d255ad822fc6f45d6c2881022024737ad61088a13134a75556707f7f73fa830991a812810daeacf9dffbe92db0"
    },
    "signedData": "0x120000220000000024029a62a82e0001e240201b02a6242361400000000000000168400000000000000c732102790b1b6ab9bc9d816dda4d2d4528996a2c78ad90e176f87d48c6f5333989dbc374463044022062a635aa543697406c1b15e6ec33b8bba1c62ab741d255ad822fc6f45d6c2881022024737ad61088a13134a75556707f7f73fa830991a812810daeacf9dffbe92db08114860184b4f4c6cc17ae9c2a77cfcd328b43ec2aac8314543aba55a3bede29c5d512ff0cb17db626b9ed9a",
    "dateRequested": "2024-01-10T21:19:08.579Z",
    "dateSigned": "2024-01-10T21:19:08.760Z"
}
```
{% endcode %}

## Xrpl SDK

First install the Ripple Xrpl SDK.  You can find the full documentation here: [https://js.xrpl.org/](https://js.xrpl.org/)

Here a code sample to encode a transaction to pass to Transaction Broadcast via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { Client } from 'xrpl'

const walletId = 'wa-6lbfv-9esgj-88s80c0qsih0a393'
const wallet = await dfnsClient.wallets.getWallet({ walletId });

const client = new Client(RIPPLE_NODE_URL)
await client.connect()

const transaction = await client.autofill({
  TransactionType: 'Payment',
  Account: wallet.address,
  Destination: 'rBYtCQKxGTfFuob3hxSc8pEYddetT9CdDZ',
  Amount: '1',
})

const res = await dfnsClient.wallets.generateSignature({
  walletId,
  body: {
    kind: 'Transaction',
    transaction: `0x${encode(transaction).toLowerCase()}`,
  },
})
```
