# Get Address For Network

`GET /public-keys/{PublicKeyId}/address?network={NetworkEnum}`

Retrieves a blockchain address for a specific public key and network combination.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PublicKeyAddresses:Read`      | Always Required |
| `PublicKeys:Read`              | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>PublicKeyId</code></td><td>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### Query string parameters <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="265">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>NetworkEnum</code></td><td>Enumerated type representing the Blockchain network from the list found <a href="https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network">here</a>. </td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "ETH",
    "address": "0xC6D783CaFB28bc0125cA6CCFab520710b0856A1b"
}
```
