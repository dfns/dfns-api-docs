# EVMGenericTx Template

Use this template to broadcast to EVM chains like Ethereum, Polygon, BSC, etc.  For more on these fields, see the [official Ethereum documentation](https://ethereum.org/en/developers/docs/transactions/#prerequisites).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `to`                   | Required                     | Blockchain address of target contract or payee.                                                                                                                                                                                                                                                                                                  | String                                    |
| `data`                 | Required                     | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the [encodeFunctionCall web3.js documentation](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall).            | String                                    |
| `gasLimit`             | Optional                     | The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.                                                                                                                                                                                                                      | String (of an Integer)                    |
| `nonce`                | Optional                     | The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher `gasPrice` to "overwrite" existing transactions in the mempool.                                                                                                                | Integer                                   |
| `value`                | Required if making a payment | Amount of the native currency to transfer denominated in WEI.  Please see [here](https://www.gemini.com/cryptopedia/satoshi-value-gwei-to-ether-to-wei-converter-eth-gwei#section-ethereum-denominations-ether-to-wei-gwei-to-ether-more) for a description of Ether units.  Also see: [https://eth-converter.com/](https://eth-converter.com/)  | String (of an Integer like "1000000" WEI) |
| `maxPriorityFeePerGas` | Optional                     | The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.                                                                                                                                                                                                                             | String (of an Integer like "1000000" WEI) |
| `maxFeePerGas`         | Optional                     | The maximum amount for gas willing to be paid for the transaction.  If omitted, it will be calculated automatically.                                                                                                                                                                                                                             | String (of an Integer like "1000000" WEI) |
| `gasPrice`             | Optional                     | If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum).  This can be used eg. to zero out an account.   Can not be used in conjunction with the gas fields above.                                                                                                                                                 | String (of an Integer like "1000000" WEI) |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "publicKeyId": "pk-orange-magnesium-a0606d08b2",
    "network": "ETH",
    "templateKind": "EvmGenericTx",
    "data": "0x368b87720000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b48656c6c6f204d616a6964000000000000000000000000000000000000000000",
    "to": "0xeE1C5C88026AA51c653155276dE578d7c02aDB0c"
}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Status begins as `Initiated` and changes to `Executed` once broadcast to the mempool.  Use [GetTransactionById](../gettransactionbyid.md) to query for updated status and to retrieve a blockchain transaction hash.

```json
{
    "transaction": {
        "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
        "network": "ETH",
        "templateKind": "EvmGenericTx",
        "data": "0x095ea7b3000000000000000000000000bebc44782c7db0a1a60cb6fe97d0b483032ff1c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "to": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
        "gasLimit": "100000000"
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"ETH\",\"templateKind\":\"EvmGenericTx\",\"data\":\"0x095ea7b3000000000000000000000000bebc44782c7db0a1a60cb6fe97d0b483032ff1c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\",\"to\":\"0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7\",\"gasLimit\":\"100000000\"}",
    "dateUpdated": "2022-10-31T19:10:02.228Z",
    "initiator": {
        "kind": "Employee",
        "employeeId": "oe-nine-artist-9de60fef6963",
        "orgId": "cu-purple-pip-1b417b958500"
    },
    "orgId": "cu-purple-pip-1b417b958500",
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "ETH",
    "status": "Initiated",
    "id": "tx-sierra-lima-272e2ce093",
    "dateCreated": "2022-10-31T19:10:02.229Z"
}
```
