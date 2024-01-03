# Create Public Key



{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`POST /public-keys/`

Creates new `PublicKey` using the specified signature scheme.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `PublicKeys:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>isEddsa</code></td><td>Optional</td><td>Specify true for an EdDSA signature scheme or false for a ECDSA scheme. Defaults to ECDSA if omitted.</td><td>Boolean</td></tr></tbody></table>

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "isEddsa": false
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "pk-shade-wisconsin-c28c38b2e8",
    "publicKey": "03834ac098b2ce68f230940c3d30d85cb0a84623063f0fcba0e64dacf5a825e91c",
}
```
