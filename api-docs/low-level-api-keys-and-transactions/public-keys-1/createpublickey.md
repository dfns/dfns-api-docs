# CreatePublicKey

`POST /public-keys/`

Creates new `PublicKey` using the specified signature scheme.

### Required Permissions <a href="#scopes" id="scopes"></a>

PublicKeys:Create

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                              | Type    |
| ------------------- | ----------------- | ------------------------------------------------------------------------ | ------- |
| `isEddsa`           | Required          | Specify true for an EdDSA signature scheme or false for a  ECDSA scheme. | Boolean |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"isEddsa": false}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "pk-shade-wisconsin-c28c38b2e8",
    "publicKey": "03834ac098b2ce68f230940c3d30d85cb0a84623063f0fcba0e64dacf5a825e91c",
    "groupSize": 3,
    "groupThreshold": 2
}
```
