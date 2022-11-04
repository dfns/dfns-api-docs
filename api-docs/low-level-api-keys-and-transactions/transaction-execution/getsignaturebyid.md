# GetSignatureById

`GET /public-keys/{PublicKeyId}/signatures/{SignatureId}`

Retrieves a `Signature` by its corresponding `PublicKey` and its `id`.

### Required Permissions

Signatures:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `PublicKeyId`  | <p>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></p> |
| `SignatureId`  | <p>Unique identifier of the <code>Signature</code> like:<br><br><code>si-sierra-green-f26c441f60</code></p>     |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/public-keys/pk-orange-magnesium-a0606d08b2/signatures/si-sierra-green-f26c441f60" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

For a mathematical explanation of the signature components r and `s`, see [Wikipedia](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm).

```json
{
    "dateCreated": "2022-10-31T17:46:29.312Z",
    "hash": "0xe4b08e70df13952ac3c360b525608eaadf9d58e698caa499d7a02b79b284f18f",
    "id": "si-sierra-green-f26c441f60",
    "initiator": {
        "kind": "Employee",
        "orgId": "cu-purple-pip-1b417b958500",
        "employeeId": "oe-nine-artist-9de60fef6963"
    },
    "orgId": "cu-purple-pip-1b417b958500",
    "publicKeyId": "pk-louisiana-fanta-2bc8881670",
    "r": "0x0fb7f242adb235bf540ee773fb9164685442e42ee52dc368307aa79bf09f5cd5",
    "recid": 0,
    "s": "0xfe9ad8838c770bb2c1e947e9268cb473a4f318375a9397ebc2c224e5c449b504",
    "status": "Executed"
}
```
