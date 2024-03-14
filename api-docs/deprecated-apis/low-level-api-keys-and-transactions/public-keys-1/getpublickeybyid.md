# Get Public Key By ID

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`GET /public-keys/{PublicKeyId}`

Retrieves an `PublicKey` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `PublicKeys:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="266">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>PublicKeyId</code></td><td>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "isEddsa": false,
    "id": "pk-shade-wisconsin-c28c38b2e8",
    "publicKey": "03834ac098b2ce68f230940c3d30d85cb0a84623063f0fcba0e64dacf5a825e91c",
}
```
