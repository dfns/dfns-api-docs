# EVM: Broadcast Transaction Legacy Type-0 Template

**See:** [**Broadcast Transaction from Wallet**](../../wallets/broadcast-transaction-from-wallet.md)

Use this template to adjust the `gasPrice` of a legacy type-0 transaction. This will force the transaction to be broadcasted as type-0 on chains that do not support [EIP-1559](evm-broadcast-transaction-eip-1559-template.md).

| Request body fields | Required/Optional            | Description                                                                                                                                                                                                                       | Type                                      |
| ------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `kind`              | Required                     | `Evm`                                                                                                                                                                                                                             | String                                    |
| `to`                | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                   | String                                    |
| `value`             | Required if making a payment | Amount of the native currency to transfer denominated in WEI.                                                                                                                                                                     | String (of an Integer like "1000000" WEI) |
| `data`              | Optional                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment.                                                      | String                                    |
| `nonce`             | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher `gasPrice` to "overwrite" existing transactions in the mempool. | Integer                                   |
| `gasLimit`          | Optional                     | The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.                                                                                                       | String (of an Integer)                    |
| `gasPrice`          | Optional                     | If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum). This can be used eg. to zero out an account. Can not be used in conjunction with the gas fields above.                                     | String (of an Integer like "1000000" WEI) |

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
    "kind": "EvmLegacy",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
    "gasPrice": "3000000000"
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
    "kind": "EvmLegacy",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934",
    "gasPrice": "3000000000"
  },
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "status": "Pending"
}
```

&#x20;
