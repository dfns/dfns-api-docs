# Broadcast Transaction from Wallet

`POST /wallets/{walletId}/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request. It can be used to make native payments, call smart contract functions, and even deploy new smart contracts. Note for reading from a "view" function on EVM chains, please use [Call Read Function](../blockchains/call-read-function.md).

{% hint style="info" %}

- User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
- Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
- Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
  {% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `Wallets:BroadcastTransaction` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## EVM Template <a href="#evm-request-body" id="evm-request-body"></a>

| Request body fields | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                           | Type                                      |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `kind`              | Required                     | `Evm`                                                                                                                                                                                                                                                                                                                                 | String                                    |
| `to`                | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                                                                                                                       | String                                    |
| `value`             | Required if making a payment | Amount of the native currency to transfer denominated in WEI. Please see [here](https://www.gemini.com/cryptopedia/satoshi-value-gwei-to-ether-to-wei-converter-eth-gwei#section-ethereum-denominations-ether-to-wei-gwei-to-ether-more) for a description of Ether units. Also see: https://eth-converter.com/                       | String (of an Integer like "1000000" WEI) |
| `data`              | Optional                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the [encodeFunctionData ethers.js documentation](https://docs.ethers.org/v5/api/utils/abi/interface/#Interface--encoding). | String                                    |
| `nonce`             | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically.                                                                                                  | Integer                                   |

### Sample request body <a href="#sample-request" id="sample-request"></a>

```shell
{
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
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
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
  },
  "dateRequested": "2023-05-08T19:27:04.680Z",
  "status": "Pending"
}
```

## EIP 1559 Template <a href="#eip1559-request-body" id="eip1559-request-body"></a>

Use this template to adjust the `maxFeePerGas` and `maxPriorityFeePerGas` of an [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) type-2 transaction. Keep in mind that not all EVM compatible chains support this standard. For example, this is not a valid option for Binance Smart Chain.

| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                           | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `kind`                 | Required                     | `Eip1559`                                                                                                                                                                                                                                                                                                                             | String                                    |
| `to`                   | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                                                                                                                       | String                                    |
| `value`                | Required if making a payment | Amount of the native currency to transfer denominated in WEI. | String (of an Integer like "1000000" WEI) |
| `data`                 | Optional                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. | String                                    |
| `nonce`                | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher `maxFeePerGas` to "overwrite" existing transactions in the mempool.                                                                                                     | Integer                                   |
| `gasLimit`             | Optional                     | The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                           | String (of an Integer)                    |
| `maxPriorityFeePerGas` | Optional                     | The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.                                                                                                                                                                                                                  | String (of an Integer like "1000000" WEI) |
| `maxFeePerGas`         | Optional                     | The maximum amount for gas willing to be paid for the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                                   | String (of an Integer like "1000000" WEI) |

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

## EVM Legacy Template <a href="#evm-legacy-request-body" id="evm-legacy-request-body"></a>

Use this template to adjust the `gasPrice` of a legacy type-0 transaction. This will force the transaction to be broadcasted as type-0 on chains that support the newer types.

| Request body fields | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                           | Type                                      |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `kind`              | Required                     | `Evm`                                                                                                                                                                                                                                                                                                                                 | String                                    |
| `to`                | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                                                                                                                       | String                                    |
| `value`             | Required if making a payment | Amount of the native currency to transfer denominated in WEI. | String (of an Integer like "1000000" WEI) |
| `data`              | Optional                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. | String                                    |
| `nonce`             | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher `gasPrice` to "overwrite" existing transactions in the mempool.                                                                                                     | Integer                                   |
| `gasLimit`          | Optional                     | The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                           | String (of an Integer)                    |
| `gasPrice`          | Optional                     | If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum). This can be used eg. to zero out an account. Can not be used in conjunction with the gas fields above.                                                                                                                                         | String (of an Integer like "1000000" WEI) |

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
