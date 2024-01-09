# EVM: Broadcast Transaction

EVM chains like Ethereum, Polygon, BSC, Arbitrum, etc support the use of templates to broadcast transactions.   Select the following  based on the template `kind`:&#x20;

* `Evm`: Use this template if you don't want to worry about gas parameters.
* `Eip1559`: Use this template to interact with chains that support the new [EIP-1559 ](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md)gas standard (most chains do now).&#x20;

## EMV Template

<table><thead><tr><th width="197">Request body fields</th><th>Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td><code>Evm</code></td><td>String</td></tr><tr><td><code>to</code></td><td>Required</td><td>Blockchain address of target contract or payee.</td><td>String</td></tr><tr><td><code>value</code></td><td>Required if making a payment</td><td>Amount of the native currency to transfer denominated in WEI.</td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>data</code></td><td>Optional</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment.</td><td>String</td></tr><tr><td><code>nonce</code></td><td>Optional</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>maxFeePerGas</code> to "overwrite" existing transactions in the mempool.</td><td>Integer</td></tr></tbody></table>

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
}
```

### 200 response example <a href="#response-example" id="response-example"></a>

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
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "status": "Pending"
}
```

## EIP-1559 Template

Use this template to adjust the `maxFeePerGas` and `maxPriorityFeePerGas` of an [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) type-2 transaction. Keep in mind that not all EVM compatible chains support this standard.&#x20;

<table><thead><tr><th width="197">Request body fields</th><th>Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td><code>Eip1559</code></td><td>String</td></tr><tr><td><code>to</code></td><td>Required</td><td>Blockchain address of target contract or payee.</td><td>String</td></tr><tr><td><code>value</code></td><td>Required if making a payment</td><td>Amount of the native currency to transfer denominated in WEI.</td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>data</code></td><td>Optional</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment.</td><td>String</td></tr><tr><td><code>nonce</code></td><td>Optional</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>maxFeePerGas</code> to "overwrite" existing transactions in the mempool.</td><td>Integer</td></tr><tr><td><code>gasLimit</code></td><td>Optional</td><td>The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.</td><td>String (of an Integer)</td></tr><tr><td><code>maxPriorityFeePerGas</code></td><td>Optional</td><td>The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.</td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>maxFeePerGas</code></td><td>Optional</td><td>The maximum amount for gas willing to be paid for the transaction. If omitted, it will be calculated automatically.</td><td>String (of an Integer like "1000000" WEI)</td></tr></tbody></table>

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
    "kind": "Eip1559",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
    "maxFeePerGas": "1626000000000",
    "maxPriorityFeePerGas": "1332000000000"
}
```

### 200 response example <a href="#response-example" id="response-example"></a>

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
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "status": "Pending"
}
```

## &#x20; <a href="#evm-legacy-request-body" id="evm-legacy-request-body"></a>
