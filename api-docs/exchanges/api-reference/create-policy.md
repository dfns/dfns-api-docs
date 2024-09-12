# Create Exchange

`POST /exchanges`

Creates a new exchange integration.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Exchanges:Create` | Always Required |

## Body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="252">Property</th><th width="165">Type / Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code><mark style="color:red;">*</mark></td><td>String</td><td>A name for the Exchange.</td></tr><tr><td><code>kind</code><mark style="color:red;">*</mark></td><td>String</td><td>The enumerated type for the exchange.  Eg. Kraken</td></tr><tr><td><code>readConfiguration</code><mark style="color:red;">*</mark></td><td>Object</td><td>Object containing the public and private API key pairs. </td></tr><tr><td><code>writeConfiguration</code><mark style="color:red;">*</mark></td><td>Object</td><td>Object containing the public and private API key pairs. </td></tr></tbody></table>

**Example**

```json
{
    "kind": "Binance",
    "name": "Binance 1",
    "readConfiguration": {
        "publicApiKey": "1234",
        "privateApiKey": "5678"
    },
    "writeConfiguration": {
        "publicApiKey": "1234",
        "privateApiKey": "5678"
    }
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "ex-lna4c-h5hr8-xxxxxxxxxxxxxxx",
  "name": "kraken",
  "kind": "Kraken",
  "dateCreated": "2024-09-12T15:14:14.107Z"
}
```
