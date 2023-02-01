# ListPublicKeys



`GET /public-keys/`

Retrieves all `PublicKeys` in the org.

### Required Permissions

PublicKeys:Read

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/public-keys/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
   "items": [
   {
     "isEddsa": false,
     "id": "pk-shade-wisconsin-c28c38b2e8",
     "publicKey": "03834ac098b2ce68f230940c3d30d85cb0a84623063f0fcba0e64dacf5a825e91c",
  },
  ...
  ]
}
```
