# ListAssetAccounts

`GET /assets/asset-accounts/`

Retrieves all `AssetAccounts` belonging to the Org.

### Required Permissions

AssetAccounts:Read

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/assets/asset-accounts/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
   "items": [
      {
         "assetSymbol": "ETH",
         "dateCreated": "2022-07-13T17:32:56.106Z",
         "address": "0x1686658c32862B6A29174F5de7a0bB0d66774956",
         "dateUpdate": "2022-07-13T17:32:56.106Z",
         "name": "Test account",
         "id": "aa-iowa-washington-7a99aa2fd5",
         "publicKey": "xkeypub1addwnpepq2pqd7ethr4kn7yuj0z4ul80q0ml5jv6y8lgfzheltllu6y3e93j25we5nk",
         "orgId": "cu-purple-pip-1b417b958500",
         "status": "Enabled"
      }, 
...
   ]
}

```
