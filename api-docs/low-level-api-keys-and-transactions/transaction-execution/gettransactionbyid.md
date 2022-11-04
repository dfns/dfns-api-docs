# GetTransactionById

`GET /public-keys/transactions/{TransactionId}`

Retrieves a `Transaction` by its `id`.

### Required Permissions

Transactions:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter  | Description                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `TransactionId` | <p>Unique identifier of the <code>Transaction</code> like:<br><br><code>tx-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/public-keys/transactions/tx-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

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
    "status": "BroadcastRejected",
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
