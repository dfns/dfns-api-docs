# Broadcast Transaction from Wallet

`POST /wallets/{walletId}/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request. It can be used to make native payments, call smart contract functions, and even deploy new smart contracts. Note for reading from a "view" function on EVM chains, please use [Call Read Function](../blockchains/call-read-function.md).

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:BroadcastTransaction

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

### EVM Template <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                           | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `kind`                 | Required                     | `Evm`                                                                                                                                                                                                                                                                                                                                 | String                                    |
| `to`                   | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                                                                                                                       | String                                    |
| `value`                | Required if making a payment | Amount of the native currency to transfer denominated in WEI. Please see [here](https://www.gemini.com/cryptopedia/satoshi-value-gwei-to-ether-to-wei-converter-eth-gwei#section-ethereum-denominations-ether-to-wei-gwei-to-ether-more) for a description of Ether units. Also see: https://eth-converter.com/                       | String (of an Integer like "1000000" WEI) |
| `data`                 | Optional                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the [encodeFunctionCall web3.js documentation](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall). | String                                    |
| `nonce`                | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher `gasPrice` to "overwrite" existing transactions in the mempool.                                                                                                     | Integer                                   |
| `gasLimit`             | Optional                     | The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                           | String (of an Integer)                    |
| `gasPrice`             | Optional                     | If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum). This can be used eg. to zero out an account. Can not be used in conjunction with the gas fields above.                                                                                                                                         | String (of an Integer like "1000000" WEI) |
| `maxPriorityFeePerGas` | Optional                     | The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.                                                                                                                                                                                                                  | String (of an Integer like "1000000" WEI) |
| `maxFeePerGas`         | Optional                     | The maximum amount for gas willing to be paid for the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                                   | String (of an Integer like "1000000" WEI) |

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -XPOST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/transfers" \
-H "Content-Type: application/json" \
-d '{
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
}'
```

#### 200 response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "tx-hpq5n-4p9s9-1hbv15iah5bb6cn",
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "network": "ETH_SEPOLIA",
  "requester": {
    "kind": "CustomerEmployee",
    "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
    "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
    "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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
