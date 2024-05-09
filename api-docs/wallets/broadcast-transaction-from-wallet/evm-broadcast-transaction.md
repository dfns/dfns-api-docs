# EVM: Broadcast Transaction

EVM chains like Ethereum, Polygon, BSC, Arbitrum, etc support the use of templates to broadcast transactions. Select the following based on the template `kind`:&#x20;

- `Evm`: Use this template if you don't want to worry about gas parameters.
- `Eip1559`: Use this template to interact with chains that support the new [EIP-1559 ](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md)gas standard (most chains do now).&#x20;
- `Transaction`: Use this template to just pass in the fully serialized EVM transaction (formatted and encoded using eg Ethersjs library)

## EVM Template

<table data-full-width="false"><thead><tr><th width="180">Request fields</th><th width="220">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td><code>Evm</code></td></tr><tr><td><code>to</code></td><td>Required - String</td><td>Blockchain address of target contract or payee.</td></tr><tr><td><code>value</code></td><td>Optional (<em>Required only if making a payment</em>) - String (<em>representing a integer eg</em> <code>"1000000"</code>) </td><td>Amount of the native currency to transfer denominated in WEI.</td></tr><tr><td><code>data</code></td><td>Optional - String</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment.</td></tr><tr><td><code>nonce</code></td><td>Optional - Integer</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>maxFeePerGas</code> to "overwrite" existing transactions in the mempool.</td></tr></tbody></table>

### Sample request body <a href="#sample-evm-request" id="sample-evm-request"></a>

```shell
{
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
}
```

### 200 response example <a href="#evm-response-example" id="evm-response-example"></a>

```json
{
  "id": "tx-hpq5n-4p9s9-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
  },
  "status": "Broadcasted",
  "txHash": "0x86b092a7fde26cca7fa49350d6d9244fb1f772d30c15aed48decea11fa68531f",
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "dateBroadcasted": "2024-01-10T21:19:58.225Z"
}
```

## EIP-1559 Template

Use this template to adjust the `maxFeePerGas` and `maxPriorityFeePerGas` of an [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) type-2 transaction. Keep in mind that not all EVM compatible chains support this standard.&#x20;

<table data-full-width="false"><thead><tr><th width="253">Request fields</th><th width="283">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td><code>Eip1559</code></td></tr><tr><td><code>to</code></td><td>Required - String</td><td>Blockchain address of target contract or payee.</td></tr><tr><td><code>value</code></td><td>Optional (<em>Required if making a payment</em>) - String (<em>representing an integer eg</em> <code>"1000000"</code>)</td><td>Amount of the native currency to transfer denominated in WEI.</td></tr><tr><td><code>data</code></td><td>Optional - String</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment.</td></tr><tr><td><code>nonce</code></td><td>Optional - Integer</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>maxFeePerGas</code> to "overwrite" existing transactions in the mempool.</td></tr><tr><td><code>gasLimit</code></td><td>Optional - String <em>(representing an Integer)</em></td><td>The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.</td></tr><tr><td><code>maxPriorityFeePerGas</code></td><td>Optional - String <em>(representing an Integer)</em></td><td>The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.</td></tr><tr><td><code>maxFeePerGas</code></td><td>Optional - String <em>(representing an Integer)</em></td><td>The maximum amount for gas willing to be paid for the transaction. If omitted, it will be calculated automatically.</td></tr></tbody></table>

### Sample request body <a href="#sample-eip1559-request" id="sample-eip1559-request"></a>

```shell
{
    "kind": "Eip1559",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
    "maxFeePerGas": "1626000000000",
    "maxPriorityFeePerGas": "1332000000000"
}
```

### 200 response example <a href="#eip1559-response-example" id="eip1559-response-example"></a>

```json
{
  "id": "tx-hpq5n-4p9s9-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Eip1559",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
    "maxFeePerGas": "1626000000000",
    "maxPriorityFeePerGas": "1332000000000"
  },
  "status": "Broadcasted",
  "txHash": "0x86b092a7fde26cca7fa49350d6d9244fb1f772d30c15aed48decea11fa68531f",
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "dateBroadcasted": "2024-01-10T21:19:58.225Z"
}
```

## Raw Transaction with EthersJS <a href="#transaction-request-body" id="transaction-request-body"></a>

You can also format the transaction using Ethers JS and the Dfns SDK:&#x20;

<table data-full-width="false"><thead><tr><th width="220">Request fields</th><th width="189">Required - Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required - String</td><td>For EVM, always "Transaction"</td></tr><tr><td><code>transaction</code></td><td>Required - String</td><td>The unsigned hex encoded transaction as shown below</td></tr></tbody></table>

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "0x02e783aa36a71503850d40e49def82520894e5a2ebc128e262ab1e3bd02bffbe16911adfbffb0180c0"
}
```

### 200 Response Example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "tx-3p6n9-tdrn2-xxxxxxxxxxxxxxxx",
  "walletId": "wa-19lns-o74qn-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "0x02e783aa36a71503850d40e49def82520894e5a2ebc128e262ab1e3bd02bffbe16911adfbffb0180c0"
  },
  "status": "Broadcasted",
  "txHash": "0x86b092a7fde26cca7fa49350d6d9244fb1f772d30c15aed48decea11fa68531f",
  "dateRequested": "2024-01-10T19:02:11.615Z",
  "dateBroadcasted": "2024-01-10T19:02:12.873Z"
}
```

## Typescript Example with Ethers

First install the Ethers JS. You can find the full documentation here: [https://docs.ethers.org/v6/](https://docs.ethers.org/v6/)

Here a code sample to broadcast a transaction via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
import { parseUnits, Transaction } from 'ethers'

const walletId = 'wa-6lbfv-9esgj-xxxxxxxxxxxxxxxx'

const transaction = Transaction.from({
  to: '0xa238b6008Bc2FBd9E386A5d4784511980cE504Cd',
  value: '1',
  gasLimit: '21000',
  maxPriorityFeePerGas: parseUnits('5', 'gwei'),
  maxFeePerGas: parseUnits('20', 'gwei'),
  nonce: 3,
  type: 2,
  chainId: 11155111,
})

const res = await dfnsClient.wallets.broadcastTransaction({
  walletId,
  body: { kind: 'Transaction', transaction: transaction.unsignedSerialized },
})
```
