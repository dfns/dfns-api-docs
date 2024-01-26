# Broadcast Transaction

&#x20;

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`POST /public-keys/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request. It can be used to make native payments, call smart contract functions, and even deploy new smart contracts. Note for reading from a "view" function on EVM chains, please use [Call Read Function](../../../blockchains/call-read-function.md).

Currently, only EVM compatible chains are supported. We plan to add additional chain support in the future. Please don't hesitate to contact us if you need support for a non-EVM chain.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `Transaction:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all `templateKinds:`

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>publicKeyId</code></td><td>Required</td><td>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td><td>String</td></tr><tr><td><code>network</code></td><td>Required</td><td>Enumerated type representing the Blockchain network from the list found <a href="https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network">here</a>.</td><td>Enumerated Type</td></tr><tr><td><code>templateKind</code></td><td>Required</td><td>Enumerated type representing the Blockchain transaction template that dictates the remaining acceptable fields. Currently, the only supported value is "<code>EvmGenericTx</code>".</td><td>Enumerated Type</td></tr></tbody></table>

For details on specific templateKinds, please see the chain specific sub pages underneath this article in the left hand navigation.

## Request example <a href="#request-example.1" id="request-example.1"></a>

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
