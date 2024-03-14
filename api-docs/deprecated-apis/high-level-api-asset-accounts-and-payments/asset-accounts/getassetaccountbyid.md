# Get Asset Account By ID

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`GET /assets/asset-accounts/{AssetAccountId}`

Retrieves an `AssetAccount` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `AssetAccounts:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>AssetAccountId</code></td><td>Unique identifier of the <code>AssetAccount</code> like:<br><br><code>aa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a status indicating whether the Asset Account has been enabled:

```json
{
   "assetSymbol": "ETH",
   "dateCreated": "2022-07-13T17:32:56.106Z",
   "address": "0x1686658c32862B6A29174F5de7a0bB0d66774956",
   "dateUpdate": "2022-07-13T17:32:56.106Z",
   "name": "Test account",
   "id": "aa-iowa-washington-7a99aa2fd5",
   "publicKey": "pk-alask-fille-xxxxxxxxxxxxxxxx",
   "orgId": "cu-purple-pip-1b417b958500",
   "status": "Enabled"
}

```
