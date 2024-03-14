# Get Signature By ID

&#x20;

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`GET /public-keys/{PublicKeyId}/signatures/{SignatureId}`

Retrieves a `Signature` by its corresponding `PublicKey` and its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `Signatures:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="266">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>PublicKeyId</code></td><td>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td></tr><tr><td><code>SignatureId</code></td><td>Unique identifier of the <code>Signature</code> like:<br><br><code>si-sierra-green-f26c441f60</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

For a mathematical explanation of the signature components r and `s`, see [Wikipedia](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm). The `v` component of the signature is returned in the `recid`.

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
