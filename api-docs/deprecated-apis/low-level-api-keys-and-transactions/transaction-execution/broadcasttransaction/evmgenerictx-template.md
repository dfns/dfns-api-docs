# EVMGenericTx Template

&#x20;

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



Use this template to broadcast to EVM chains like Ethereum, Polygon, BSC, etc. For more on these fields, see the [official Ethereum documentation](https://ethereum.org/en/developers/docs/transactions/#prerequisites).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `Transaction:Create` | Always Required |

## Fields <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="255">Request body fields</th><th width="118">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>to</code></td><td>Required</td><td>Blockchain address of target contract or payee.</td><td>String</td></tr><tr><td><code>data</code></td><td>Required</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall">encodeFunctionCall web3.js documentation</a>.</td><td>String</td></tr><tr><td><code>gasLimit</code></td><td>Optional</td><td>The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically.</td><td>String (of an Integer)</td></tr><tr><td><code>nonce</code></td><td>Optional</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>gasPrice</code> to "overwrite" existing transactions in the mempool.</td><td>Integer</td></tr><tr><td><code>value</code></td><td>Required if making a payment</td><td>Amount of the native currency to transfer denominated in WEI. Please see <a href="https://www.gemini.com/cryptopedia/satoshi-value-gwei-to-ether-to-wei-converter-eth-gwei#section-ethereum-denominations-ether-to-wei-gwei-to-ether-more">here</a> for a description of Ether units. Also see: <a href="https://eth-converter.com/">https://eth-converter.com/</a></td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>maxPriorityFeePerGas</code></td><td>Optional</td><td>The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically.</td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>maxFeePerGas</code></td><td>Optional</td><td>The maximum amount for gas willing to be paid for the transaction. If omitted, it will be calculated automatically.</td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>gasPrice</code></td><td>Optional</td><td>If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum). This can be used eg. to zero out an account. Can not be used in conjunction with the gas fields above.</td><td>String (of an Integer like "1000000" WEI)</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "publicKeyId": "pk-orange-magnesium-a0606d08b2",
  "network": "ETH",
  "templateKind": "EvmGenericTx",
  "data": "0x368b87720000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b48656c6c6f204d616a6964000000000000000000000000000000000000000000",
  "to": "0xeE1C5C88026AA51c653155276dE578d7c02aDB0c"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

Status begins as `Initiated` and changes to `Executed` once broadcast to the mempool. Use [GetTransactionById](../gettransactionbyid.md) to query for updated status and to retrieve a blockchain transaction hash.

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
