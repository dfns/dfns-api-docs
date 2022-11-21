# GetAssetAccountById

`GET /assets/asset-accounts/{AssetAccountId}`

Retrieves an `AssetAccount` by its `id`.

### Required Permissions

AssetAccounts:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter   | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `AssetAccountId` | <p>Unique identifier of the <code>AssetAccount</code> like:<br><br><code>aa-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/assets/asset-accounts/aa-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a status indicating whether the Asset Account has been enabled:

```json
{
   "assetSymbol": "ETH",
   "dateCreated": "2022-07-13T17:32:56.106Z",
   "address": "0x1686658c32862B6A29174F5de7a0bB0d66774956",
   "dateUpdate": "2022-07-13T17:32:56.106Z",
   "name": "Test account",
   "groupSize": 5,
   "groupThreshold": 3,
   "id": "aa-iowa-washington-7a99aa2fd5",
   "publicKey": "xkeypub1addwnpepq2pqd7ethr4kn7yuj0z4ul80q0ml5jv6y8lgfzheltllu6y3e93j25we5nk",
   "orgId": "cu-purple-pip-1b417b958500",
   "status": "Enabled"
}

```



