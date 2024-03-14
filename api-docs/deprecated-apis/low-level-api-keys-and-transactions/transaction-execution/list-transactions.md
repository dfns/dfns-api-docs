# List Transactions

&#x20;

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`GET /public-keys/{publicKeyId}/transactions`

Retrieves all transactions for a specific `publicKeyId`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `Transactions:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="266">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>publicKeyId</code></td><td>Unique identifier of the <code>Public Key</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "dateCreated": "2022-10-31T19:10:02.229Z",
    "dateUpdated": "2022-10-31T19:10:02.228Z",
    "id": "tx-sierra-lima-272e2ce093",
    "initiator": {
        "kind": "Employee",
        "employeeId": "oe-nine-artist-9de60fef6963",
        "orgId": "cu-purple-pip-1b417b958500"
    },
    "network": "ETH",
    "orgId": "cu-purple-pip-1b417b958500",
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "snapshot": "{\"transaction\":{\"templateKind\":\"EvmGenericTx\",\"gasLimit\":\"100000000\",\"to\":\"0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7\",\"data\":\"0x095ea7b3000000000000000000000000bebc44782c7db0a1a60cb6fe97d0b483032ff1c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\",\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"ETH\"},\"response\":\"Request failed with status code 400\"}",
    "status": "Executed",
    "txHash": "0x7ded8fa5f4a82ddac94608e109eca9944bf98e30b8e6d7faf04f591e0b5769c6",
    "transaction": {
        "templateKind": "EvmGenericTx",
        "gasLimit": "100000000",
        "to": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
        "data": "0x095ea7b3000000000000000000000000bebc44782c7db0a1a60cb6fe97d0b483032ff1c7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
        "network": "ETH"
    }
}
```
