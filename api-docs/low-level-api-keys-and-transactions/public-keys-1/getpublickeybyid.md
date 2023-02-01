# GetPublicKeyById

`GET /public-keys/{PublicKeyId}`

Retrieves an `PublicKey` by its `id`.

### Required Permissions

PublicKeys:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `PublicKeyId`  | <p>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/public-keys/pk-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "isEddsa": false,
    "id": "pk-shade-wisconsin-c28c38b2e8",
    "publicKey": "03834ac098b2ce68f230940c3d30d85cb0a84623063f0fcba0e64dacf5a825e91c",
}
```
